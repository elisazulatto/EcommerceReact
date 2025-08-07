import { useState } from "react";
import '../css/CartWidget.css';

const CartWidget = () => {

    const [cart, setCart] = useState(0);

    const sumar = () => {
        setCart(cart + 1);
    }

    const restar = () => {
        setCart(cart - 1);
    }

    return (
        <div className="botonesDeCompra">
            <button onClick={sumar}>+</button><p> {cart} </p><button onClick={restar}>-</button>
        </div>
    )
}

export default CartWidget;