export const convertJsonToArray = (json: object) => {
	return Object.entries(json).map(([key, value]) => {
		return { id: key, ...value };
	});
};
