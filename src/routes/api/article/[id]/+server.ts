import { json } from '@sveltejs/kit';
import { articles } from '../../../../data/articles';

const maxSimulatedDelay = 5000;
const minSimulatedDelay = 500;

export const GET = async ({ params }: { params: { id: number } }) => {
	const id = params.id;

	if (!(id in articles)) {
		return new Response('Not Found', { status: 404 });
	}

	const delay = Math.random() * (maxSimulatedDelay - minSimulatedDelay) + minSimulatedDelay;

	return new Promise((resolve) => {
		// Simulate a delay
		setTimeout(() => {
			resolve(json(articles[id]));
		}, delay);
	});
};
