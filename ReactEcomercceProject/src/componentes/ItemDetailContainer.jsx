import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const ref = doc(db, 'productos', id);

        getDoc(ref)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                } else {
                    setError('Producto no encontrado');
                }
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
                setError('Error al cargar el producto');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="item-detail-container">
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
            <div className="item-detail-container">
                <div className="container mt-4">
                    <div className="alert alert-danger" role="alert">
                        <h4>Error</h4>
                        <p>{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
