export interface Product {
	name: string;
	description: string;
	images: ProductImage[];
	categories: ProductCategory[];
	price: number;
	promotionalPrice: number;
	stock: number;
	tags: string;
	seoTitle: string;
	seoDescription: string;
	createdAt: string;
	updatedAt: string;
}

export interface ProductImage {
	productId: string;
	src: string;
	position: number;
	createdAt: string;
	updatedAt: string;
}

export interface ProductCategory {
	name: string;
	description: string;
	createdAt: string;
	updatedAt: string;
}
