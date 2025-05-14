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
	let { article } = data;
</script>

<Article {article} ></Article>
