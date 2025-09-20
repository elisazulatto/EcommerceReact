import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { createOrder } from '../services/firebaseService';

const CheckoutForm = () => {
    const { cart, getTotalPrice, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const order = {
                buyer: formData,
                items: cart,
                total: getTotalPrice()
            };

            const orderId = await createOrder(order);
            setOrderId(orderId);
            clearCart();
        } catch (error) {
            console.error('Error al crear la orden:', error);
            alert('Error al procesar la orden. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div className="container mt-4">
                <div className="text-center">
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">¡Orden confirmada!</h4>
                        <p>Tu orden ha sido procesada exitosamente.</p>
                        <hr />
                        <p className="mb-0">
                            <strong>ID de la orden:</strong> {orderId}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="container mt-4">
                <div className="text-center">
                    <h2>No hay productos en el carrito</h2>
                    <Link to="/" className="btn btn-primary">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h2>Finalizar compra</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre completo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                pattern="[0-9+\-\s\(\)]+"
                                title="Solo se permiten números, +, -, espacios y paréntesis"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Dirección</label>
                            <textarea
                                className="form-control"
                                id="address"
                                name="address"
                                rows="3"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            {loading ? 'Procesando...' : 'Confirmar orden'}
                        </button>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Resumen del pedido</h5>
                            {cart.map(item => (
                                <div key={item.id} className="d-flex justify-content-between">
                                    <span>{item.name} x{item.quantity}</span>
                                    <span>${item.precio * item.quantity}</span>
                                </div>
                            ))}
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Total:</strong>
                                <strong>${getTotalPrice()}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
