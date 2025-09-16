import '../css/ItemList.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../mock/AsyncMoc';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const { category } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const fetchProducts = category
            ? getProductsByCategory(category)
            : getProducts();

        fetchProducts
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [category]);

    if (loading) {
        return (
            <div className="item-list-container">
                <div className="container mt-4">
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="item-list-container">
            <div className="container mt-4">
                <h1>{greeting}</h1>
                {category && (
                    <p className="text-muted">Mostrando productos de la categoría: {category}</p>
                )}
                <ItemList data={data} />
            </div>
        </div>
    );
};

export default ItemListContainer;