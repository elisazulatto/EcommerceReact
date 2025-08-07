import '../css/ItemList.css';

const ItemListContainer = () => {
    return (
        <div className="item-list-container">
            <h1>Nombre del libro</h1>
            <img src="/logo.jpg" alt="logo" />
            <p>$$</p>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemListContainer;