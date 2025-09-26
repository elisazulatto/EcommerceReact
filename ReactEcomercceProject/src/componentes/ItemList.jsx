import Item from './Item'

const ItemList = ({ data }) => {
    return (
        <div className="container">
            <div className="row">
                {data.map((prod) => <Item key={prod.id} prod={prod} />)}
            </div>
        </div>
    )
}



export default ItemList