export interface Product {
	id: string;
	name: string;
	description: string;
	techInfo: string;
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
	alt: string;
	position: number;
	createdAt: string;
	updatedAt: string;
}

export interface ProductCategory {
	id: string;
	name: string;
	handleName: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	imageUrl: string;
	subcategories: string[];
	parent: string;
}
