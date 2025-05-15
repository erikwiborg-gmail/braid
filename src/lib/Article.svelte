<script lang="ts">
	import { type ArticleType } from '$lib/types';
	import type { Snippet } from 'svelte';

	let {
		article,
		children
	} : {
		article: ArticleType;
		children?: Snippet;
	} = $props();

</script>
<article class="prose lg:prose-xl">
	<h1>{article.title}</h1>

	<img src="{article.topImage}" class="w-full" alt="Top image of article"/>
	<p class="font-bold w-full">{article.leadText}</p>

	{#if children}
		<!-- Render whatever is inside the article tag, or the body text if nothing is passed -->
		{@render children()}
	{:else}
		{@html article.bodyText}
	{/if}
</article>
