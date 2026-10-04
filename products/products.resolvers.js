import { getAllProducts, getproductByPrice, getProductbyId, addNewProduct, addNewProductReview } from "./products.model.js"

export default {
    Query: {
        products: () => {
            return getAllProducts()
        },
        productByPrice: (_, args) => {
            return getproductByPrice(args.min, args.max);
        },
        productById: (_, args) => {
            console.log(args.id)
            return getProductbyId(args.id)
        },
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return addNewProduct(args.id, args.description, args.price)
        },
        addNewProductReview: (_, args) => {
            return addNewProductReview(args.id, args.rating, args.comment)
        },
    }
}