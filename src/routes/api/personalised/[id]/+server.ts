import { json } from '@sveltejs/kit';
import { PersonalisedContent } from '$lib/types';

const contentCount = 5; // would probably make sense to have this as a query parameter

export const GET = async ({ params }: { params: { id: number } }) => {
	const userId = params.id;

	const content: PersonalisedContent[] = [];

	for (let i = 0; i < contentCount; i++) {
		content.push({
			title: `element-${i}~${userId}`
		});
	}

	return json(content);
};
