<script lang="ts">
	import type { ArticleType, PersonalisedContent } from '$lib/types';
	import Article from '$lib/Article.svelte';
	import { countWordsInParagraphs, insertPersonalisedContent } from '$lib/article-utils';

	let {
		data
	}: {
		data: {
			article: ArticleType;
			personalised: PersonalisedContent []
		};
	} = $props();
	let { article, personalised } = data;

	const paragraphs = insertPersonalisedContent(countWordsInParagraphs(article), personalised);

</script>
<Article {article}>
	{#each paragraphs as { content, wordCount, personalisedContent } (content)}
		<p class="relative">{@html content}
			<span class="text-xs text-gray-200 absolute top-1.5 right-[-100px]"> {wordCount}</span>
		</p>
		{#if personalisedContent}
			<aside class="bg-gray-100 p-2 rounded border border-gray-200">
				<span class="text-xs text-gray-600">Personalisert Innhold</span>
				<p>{personalisedContent}</p>
			</aside>
		{/if}
	{/each}
</Article>