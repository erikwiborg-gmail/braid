export const load = async ({ fetch, params }) => {
	const { userId } = params;
	if (!userId) {
		throw new Error('ID is required');
	}

	const personalised = await fetch('/api/personalised/' + userId).then((res: Response) =>
		res.json()
	);

	return {
		personalised
	};
};
