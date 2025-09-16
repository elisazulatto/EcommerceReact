import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(quantity);
    };

    return (
        <div className="item-count">
            <div className="quantity-controls mb-3">
                <button
                    className="btn btn-outline-secondary"
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <span className="mx-3">{quantity}</span>
                <button
                    className="btn btn-outline-secondary"
                    onClick={handleIncrement}
                    disabled={quantity >= stock}
                >
                    +
                </button>
            </div>

            <button
                className="btn btn-primary btn-lg w-100"
                onClick={handleAddToCart}
                disabled={stock === 0}
            >
                {stock === 0 ? 'Sin stock' : `Agregar ${quantity} al carrito`}
            </button>
        </div>
    );
};

export default ItemCount;
