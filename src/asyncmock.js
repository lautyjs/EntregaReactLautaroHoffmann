const productos = [
    {
    id: "1",
    nombre: "LATEX ALBA 20LT",
    precio: 120000,
    img:"https://http2.mlstatic.com/pintura-albalatex-latex-ultralavable-premium-mate-20lts-m-m-D_NQ_NP_600195-MLA31150590483_062019-F.jpg",
    idCat: "3",
    },
    {
    id: "2",
    nombre: "AMOLADORA SKIL",
    precio: 43000,
    img:"https://www.electromisiones.com.ar/4032-large_default/amoladora_skil_9002_angular_4_12_700w.jpg",
    idCat: "4",
    },
    {
    id: "3",
    nombre: "SINTETICO 1LT",
    precio: 34900,
    img:"https://www.compraensanjuan.com/fotos_articulos/2135633_1.jpg?v=1681504080",
    cantidad: 1,
    idCat: "3",
    },
    {
    id: "4",
    nombre: "HACHITA 600gr",
    precio: 34900,
    img:"https://th.bing.com/th/id/R.c15d3793bd2f707c69f68e4070dcc98a?rik=gMNMd5Fdgx3eQQ&pid=ImgRaw&r=0",
    idCat: "2",
    },
    {
    id: "5",
    nombre: "DESTORNILLADOR CROSS",
    precio: 8100,
    img:"https://images-na.ssl-images-amazon.com/images/I/51-ut6XRxHL._AC_SX679_.jpg",
    idCat: "2",
    },
    {
        id: "6",
        nombre: "TALADRO SKIL 570W",
        precio: 39000,
        img:"https://porter.com.py/image/cache/catalog/Skil/F01265/SK.F0126555JA_a-1000x1000h.jpg",
        idCat: "4",
        },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}