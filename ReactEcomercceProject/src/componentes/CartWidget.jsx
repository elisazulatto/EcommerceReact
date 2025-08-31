import '../css/CartWidget.css';

const CartWidget = () => {
    const cartItemsCount = 0;

    return (
        <div className="cart-widget">
            <span className="cart-icon">🛒</span>
            {cartItemsCount > 0 && (
                <span className="cart-count">{cartItemsCount}</span>
            )}
        </div>
    )
}

export default CartWidget;