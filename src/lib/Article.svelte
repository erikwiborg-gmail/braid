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
<article class="prose">
	<h1>{article.title}</h1>

	<img src="{article.topImage}" class="w-1/2" alt="Top image of article"/>
	<p class="font-bold w-1/2">{article.leadText}</p>

	{#if children}
		<!-- Render whatever is inside the article tag, or the body text if nothing is passed -->
		{@render children()}
	{:else}
		{@html article.bodyText}
	{/if}
</article>
