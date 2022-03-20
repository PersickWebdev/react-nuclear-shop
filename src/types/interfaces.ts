export interface ICategory {
    categoryId: number,
    categoryName: string,
    categoryProducts: IProduct[]
}

export interface IProduct {
    parentId: number,
    productId: number,
    productCategory: string,
    productName: string,
    productWeight: number,
    productPrice: number,
    productImage: string,
    productIngredients: string[]
}