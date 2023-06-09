import useCart from "../../hooks/useCart";


const MyCart = () => {

    const [cart] = useCart();

    return (
        <div>
            <h2>my cart</h2>
        </div>
    );
};

export default MyCart;