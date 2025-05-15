<script lang="ts">
	import Article from '$lib/Article.svelte';
	import { type ArticleType } from '$lib/types';

	let {
		data
	}: {
		data: {
			article: ArticleType;
		};
	} = $props();
	let article = $state(data.article);
</script>

<Article {article} ></Article>
