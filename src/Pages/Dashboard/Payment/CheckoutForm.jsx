import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";

const CheckoutForm = ({ price, payment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [isCardComplete, setCardComplete] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleCardChange = (event) => {
    setCardComplete(event.complete);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    setProcessing(true);

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      setError("");
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      setPaymentComplete(true);
      const Payment = {
        image: payment.image,
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        cartItems: payment._id,
        classItems: payment.userId,
        status: "pending",
        itemNames: payment.name,
      };

      axiosSecure.post("/payments", Payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // display confirm
        }
      });
    }
  };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          onChange={handleCardChange}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing || !isCardComplete || paymentComplete}
        >
          Pay
        </button>
      </form>

      {error && <p className="text-red-600 ml-8">{error}</p>}

      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transaction id: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;