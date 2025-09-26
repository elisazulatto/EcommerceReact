import '../css/ItemList.css';
import { Link } from 'react-router-dom';

function Item({ prod }) {
    const imageSrc = prod?.img && prod.img.startsWith('/') ? prod.img : `/${prod?.img || ''}`;
    return (
        <div className="col-md-4 col-lg-3 mb-3">
            <div className="card h-100">
                <img src={imageSrc} className="card-img-top" alt={prod.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text flex-grow-1">
                        {prod.descripcion}
                    </p>
                    <p className="card-text">
                        <strong>Precio: ${prod.precio}</strong>
                    </p>
                    <Link to={`/item/${prod.id}`} className="btn btn-primary">
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;