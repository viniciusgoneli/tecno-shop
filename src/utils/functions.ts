export const convertJsonToArray = (json: object) => {
	if (!json) return [];

	return Object.entries(json).map(([key, value]) => {
		return { id: key, ...value };
	});
};

export function formatCartItemsCount(count: number) {
	return count > 99 ? "+99" : count.toString();
}
