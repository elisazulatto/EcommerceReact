function Item({ prod }) {
    return (
        <div className="col-md-4 col-lg-3 mb-3">
            <div className="card">
                <img src={prod.img} className="card-img-top" alt={prod.name} />
                <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">
                        {prod.descripcion}
                    </p>
                    <p className="card-text">
                        Precio: ${prod.precio}
                    </p>
                    <button className="btn btn-primary">Ver más</button>
                </div>
            </div>
        </div>
    );
}

export default Item;