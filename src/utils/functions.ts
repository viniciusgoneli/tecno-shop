export function formatCartItemsCount(count: number) {
	return count > 99 ? "+99" : count.toString();
}

export function formatPrice(price: number) {
	const formattedPrice = price.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
		maximumFractionDigits: 2,
	});

	return formattedPrice;
}
