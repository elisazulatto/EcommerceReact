const productos = [
    {
        id: '01',
        name: 'El principito',
        descripcion: 'Este libro es una novela clásica que narra las aventuras de un pequeño príncipe que viaja por diferentes planetas.',
        categoria: 'Libro Usado',
        stock: 5,
        precio: 2500,
        img: 'https://picsum.photos/200'
    },
    {
        id: '02',
        name: 'La felicidad',
        descripcion: 'Este libro es de autoayuda que te enseña los secretos para encontrar la felicidad en la vida cotidiana.',
        categoria: 'Libro Nuevo',
        stock: 5,
        precio: 2500,
        img: 'https://picsum.photos/200'
    },
    {
        id: '03',
        name: 'El lado B del amor',
        descripcion: 'Este libro es de autoayuda que explora las diferentes facetas del amor y las relaciones.',
        categoria: 'Libro Nuevo',
        stock: 5,
        precio: 2500,
        img: 'https://picsum.photos/200'
    },
    {
        id: '04',
        name: 'El lado C del amor',
        descripcion: 'Este libro es de autoayuda que profundiza en los aspectos más complejos del amor.',
        categoria: 'Novedades',
        stock: 5,
        precio: 2500,
        img: 'https://picsum.photos/200'
    }
]

//promesa 1 que devuelve todos los productos
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

//promesa 2 que devuelve productos filtrados por categoría
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

//promesa 3 que devuelve un producto por ID
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