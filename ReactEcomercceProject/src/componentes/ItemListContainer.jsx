import '../css/ItemList.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const { category } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const productosCollection = collection(db, 'productos');
        const ref = category
            ? query(productosCollection, where('categoria', '==', category))
            : productosCollection;

        getDocs(ref)
            .then((snapshot) => {
                const productos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setData(productos);
            })
            .catch((err) => {
                console.error('Error fetching products:', err);
                setError('Error al cargar los productos');
            })
            .finally(() => {
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

    if (error) {
        return (
            <div className="item-list-container">
                <div className="container mt-4">
                    <div className="alert alert-danger" role="alert">
                        <h4>Error</h4>
                        <p>{error}</p>
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
                {data.length === 0 && !loading ? (
                    <div className="alert alert-info" role="alert">
                        <h4>No hay productos disponibles</h4>
                        <p>{category ? `No se encontraron productos en la categoría "${category}"` : 'No hay productos en el catálogo'}</p>
                    </div>
                ) : (
                    <ItemList data={data} />
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;