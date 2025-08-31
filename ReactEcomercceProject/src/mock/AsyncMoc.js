const productos = [
    {
        id: '01',
        name: 'El principito',
        descripcion: 'Este libro es una novela',
        categoria: 'Libro Usado',
        stock: 5,
        precio: 2500,
        img: 'https://picsum.photos/200'
    },
    {
        id: '02',
        name: 'La felicidad',
        descripcion: 'Este libro es de autoayuda',
        categoria: 'Libro Nuevo',
        stock: 5,
        precio: 2500,
        img: 'https://picsum.photos/200'
    },
    {
        id: '03',
        name: 'El lado B del amor',
        descripcion: 'Este libro es de autoayuda',
        categoria: 'Libro Nuevo',
        stock: 5,
        precio: 2500,
        img: 'https://picsum.photos/200'
    },
    {
        id: '04',
        name: 'El lado C del amor',
        descripcion: 'Este libro es de autoayuda',
        categoria: 'Novedades',
        stock: 5,
        precio: 2500,
        img: 'https://picsum.photos/200'
    }
]

//promesa 1 que devuelve todos los producos
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