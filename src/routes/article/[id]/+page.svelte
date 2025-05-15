<script lang="ts">
	import Article from '$lib/Article.svelte';
	import { page } from '$app/state';

	const fetchArticle = async () => {
		return fetch(`/api/article/${page.params.id}`).then(res => res.json());
	}

</script>
{#await fetchArticle()}
	Loading ...
{:then article}
	<Article {article} ></Article>
{/await}

