import '../css/ItemList.css';
import CartWidget from './CartWidget';

const ItemListContainer = () => {
    return (
        <div className="item-list-container">
            <h1>Nombre del libro</h1>
            <img src="/logo.jpg" alt="logo" />
            <p>$$</p>
            <CartWidget />
        </div>
    )
}

export default ItemListContainer;