export interface IProductCatalogItem {
    name: string;
    category: string;
    price: string;
    description: string;
}

export interface IProduct {
    id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    image?: string;
}
