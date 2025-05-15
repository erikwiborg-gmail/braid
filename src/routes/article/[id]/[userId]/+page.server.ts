export const load = async ({ fetch, params }) => {
	const { id, userId } = params;
	if (!userId) {
		throw new Error('ID is required');
	}

	const [article, personalised] = await Promise.all([
		fetch('/api/article/' + id).then((res: Response) => res.json()),
		fetch('/api/personalised/' + userId).then((res: Response) => res.json())
	]);

	return {
		article,
		personalised
	};
};
