import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity <= item.stock) {
            updateQuantity(item.id, newQuantity);
        }
    };

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2">
                    <img
                        src={item.img}
                        className="img-fluid rounded-start"
                        alt={item.name}
                        style={{ height: '100px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">${item.precio} c/u</p>
                        <div className="quantity-controls">
                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => handleQuantityChange(item.quantity - 1)}
                                disabled={item.quantity <= 1}
                            >
                                -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => handleQuantityChange(item.quantity + 1)}
                                disabled={item.quantity >= item.stock}
                            >
                                +
                            </button>
                        </div>
                        <small className="text-muted">Stock disponible: {item.stock}</small>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body text-end">
                        <h6>${item.precio * item.quantity}</h6>
                        <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
