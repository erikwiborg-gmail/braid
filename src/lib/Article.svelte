<script lang="ts">
	import { type ArticleType } from '$lib/types';
	import { Snippet } from 'svelte';

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

	<img src="{article.topImage}" class="w-1/2" alt="top image"/>
	<p class="font-bold w-1/2">{article.leadText}</p>

	{#if children}
		{@render children()}
	{:else}
		{@html article.bodyText}
	{/if}
</article>
