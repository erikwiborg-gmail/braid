import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './article/[id]/+page.svelte';
import { ArticleType } from '$lib/types';

describe('/+page.svelte', () => {
	const article: ArticleType = {
		title: 'Test Title',
		leadText: 'Test Lead Text',
		topImage: 'https://example.com/image.jpg',
		bodyText: 'Test Body Text'
	};

	test('should render h1', () => {
		render(Page, { props: { data: { article } } });
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});
});
