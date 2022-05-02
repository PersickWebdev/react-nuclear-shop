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
    productIngredients: string[],
    recommended?: boolean
}

export interface IOrderFormData {
    firstName: string;
    phone: string;
    email: string;
    address: string;
    comment: string;
}

export interface IOrderFormErrors {
    firstName: string;
    phone: string;
    email: string;
    address: string;
    comment: string;
}