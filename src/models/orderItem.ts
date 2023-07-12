import { ImageSrcProps } from "./imageProps";
import { Product } from "./product";

export class OrderItem {
	productId!: string;
	productName!: string;
	productImg!: ImageSrcProps;
	quantity!: number;
	unitPrice!: number;

	static createUsingProductAndQuantity(product: Product, quantity: number) {
		const { name, price } = product;

		return {
			productId: product.id,
			productName: name,
			unitPrice: price,
			quantity: quantity,
			productImg: {
				src: product?.images[0]?.src,
				alt: product?.images[0]?.alt,
			},
		} as OrderItem;
	}
}
