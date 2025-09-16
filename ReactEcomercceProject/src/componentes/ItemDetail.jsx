import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../mock/AsyncMoc';
import ItemCount from './ItemCount';

const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
            .then((res) => {
                setProduct(res);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = (quantity) => {
        console.log(`Agregando ${quantity} unidades de ${product.name} al carrito`);
        alert(`Se agregaron ${quantity} unidades de ${product.name} al carrito`);
    };

    if (loading) {
        return (
            <div className="container mt-4">
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    Producto no encontrado
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={product.img}
                        className="img-fluid rounded"
                        alt={product.name}
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p className="text-muted">Categoría: {product.categoria}</p>
                    <p className="lead">${product.precio}</p>
                    <p>{product.descripcion}</p>
                    <p><strong>Stock disponible:</strong> {product.stock} unidades</p>

                    <div className="mt-4">
                        <ItemCount
                            stock={product.stock}
                            onAdd={handleAddToCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
