export const productos = [

    {
        name: 'Tu persona vitamina',
        descripcion: 'Este libro es de autoayuda que profundiza en los aspectos más complejos del amor.',
        categoria: 'Novedades',
        stock: 5,
        precio: 2500,
        img: '/imagenes/vitamina.jpg'
    }
]

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un error')
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}

export const getProductsByCategory = (category) => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un error')
            } else {
                const filteredProducts = productos.filter(prod => prod.categoria === category)
                resolve(filteredProducts)
            }
        }, 2000)
    })
}

export const getProductById = (id) => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un error')
            } else {
                const product = productos.find(prod => prod.id === id)
                resolve(product)
            }
        }, 2000)
    })
}