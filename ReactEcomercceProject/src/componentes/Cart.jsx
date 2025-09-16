import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
    const { cart, getTotalPrice, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container mt-4">
                <div className="text-center">
                    <h2>Tu carrito está vacío</h2>
                    <p>¡Agrega algunos productos para comenzar!</p>
                    <Link to="/" className="btn btn-primary">
                        Ver productos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <h2>Carrito de compras</h2>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Resumen del pedido</h5>
                            <p className="card-text">
                                Total: <strong>${getTotalPrice()}</strong>
                            </p>
                            <div className="d-grid gap-2">
                                <Link to="/checkout" className="btn btn-primary">
                                    Proceder al checkout
                                </Link>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={clearCart}
                                >
                                    Vaciar carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
