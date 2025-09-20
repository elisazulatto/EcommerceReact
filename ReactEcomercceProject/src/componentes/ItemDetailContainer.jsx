import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/firebaseService';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);

                if (!id) {
                    throw new Error('ID de producto no proporcionado');
                }

                const productData = await getProductById(id);

                if (!productData) {
                    setError('Producto no encontrado');
                } else {
                    setProduct(productData);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return <ItemDetail product={product} loading={loading} error={error} />;
};

export default ItemDetailContainer;
