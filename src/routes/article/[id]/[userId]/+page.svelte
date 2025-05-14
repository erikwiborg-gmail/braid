<script lang="ts">
	import type { ArticleType, PersonalisedContent } from '$lib/types';
	import Article from '$lib/Article.svelte';

	let {
		data
	}: {
		data: {
			article: ArticleType;
			personalised: PersonalisedContent []
		};
	} = $props();
	let { article, personalised } = data;

	type AnnotatedParagraph = {
		content: string;
		wordCount: number;
		personalisedContent: string | undefined;
	};

	// this beautiful regex is all copilot and i will take no responsibility for it
	let paragraphs: AnnotatedParagraph[] = Array.from(article.bodyText.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g), match => match[1])
		.map(paragraph => {
			let wordCount = paragraph.match(/ /g)?.length || 0;
			return { content: paragraph, wordCount };
		})

	let aggregatedWordCount = 0;
	let personalisedContentIndex = 0;

	paragraphs.forEach(paragraph => {
		aggregatedWordCount += paragraph.wordCount;
		const shouldDisplayPersonalisedContent = aggregatedWordCount >= 100;
		if (shouldDisplayPersonalisedContent) {
			paragraph.personalisedContent = personalised[personalisedContentIndex++];

			aggregatedWordCount = 0;
		}
	})

</script>
<Article {article}>
	{#each paragraphs as paragraph (paragraph.content)}
		<p class="relative">{@html paragraph.content}
			<span class="text-xs text-gray-200 absolute top-1.5 right-[-100px]"> {paragraph.wordCount}</span>
		</p>
		{#if paragraph.personalisedContent}
			<aside class="bg-gray-100 p-2 rounded border border-gray-200">
				<span class="text-xs text-gray-600">Personalisert Innhold</span>
				<p>{paragraph.personalisedContent}</p>
			</aside>
		{/if}
	{/each}
</Article>