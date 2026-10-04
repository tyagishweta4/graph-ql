export const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.17,
        reviews: []
    },
    {
        id: 'bluejeans',
        description: 'Blue jeans',
        price: 55.55,
        reviews: []
    }
]

export const getAllProducts = () => {
    console.log('calling orders.............')
    return products;
}

export const getproductByPrice = (min, max) => {
    return products.filter((product) => product.price >= min && product.price <= max)
}

export const getProductbyId = (id) => {
    console.log(products.filter((product) => product.id === id))
    return products.find((product) => product.id === id)
}

export const addNewProduct = (id, description, price) => {
    const newProduct = { id, description, price, reviews: [] }
    products.push(newProduct)
    return newProduct;
}

export const addNewProductReview = (id, rating, comment) => {
    console.log('here::::::::::::')
    const matchedProduct = getProductbyId(id)
    if (matchedProduct) {
        const newProductReview = {
            rating,
            comment
        };
        matchedProduct.reviews.push(newProductReview)
        return newProductReview
    }
}