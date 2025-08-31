import '../css/ItemList.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncMoc';
import ItemList from './ItemList';


const ItemListContainer = ({ greeting }) => {
    //declaramos la respuessta como un estado
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
            .then((res) => setData(res))  //aca se actualiza el estado
            .catch((error) => console.error(error))
    }, [])

    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer;