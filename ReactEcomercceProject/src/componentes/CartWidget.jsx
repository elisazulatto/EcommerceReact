import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../css/CartWidget.css';

const CartWidget = () => {
    const { totalItems } = useCart();

    return (
        <Link to="/cart" className="cart-widget">
            <div className="cart-icon">
                🛒
                {totalItems > 0 && (
                    <span className="cart-badge">{totalItems}</span>
                )}
            </div>
        </Link>
    );
};

export default CartWidget;