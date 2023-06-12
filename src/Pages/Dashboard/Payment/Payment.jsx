import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const [payment, setPayment] = useState([])
    const {id} = useParams()
    useEffect(()=>{
       fetch(`https://final-assignment-server-jakaria987.vercel.app/myenrollclasses/${id}`)
       .then(res => res.json())
       .then(data => {
        console.log(data);
        setPayment(data)
       })
    }, [])
    return (
        <div className="w-full">
            <SectionTitle
             heading='PAYMENT'
             subHeading='Student panel'
            ></SectionTitle>
            <h1 className="text-center text-cyan-800">You have to pay: {payment.price}$</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={payment.price} payment={payment} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;