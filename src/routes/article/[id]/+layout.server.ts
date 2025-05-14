// fetching the article in layout means it's accessible from sub-routes as well
export const load = async ({ fetch, params }) => {
	const { id } = params;
	if (!id) {
		throw new Error('ID is required');
	}

	const article = await fetch('/api/article/' + id).then((res: Response) => res.json());

	return {
		article
	};
};
