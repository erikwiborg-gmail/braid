<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>
<div class="w-1/2 mx-auto my-30 flex flex-col gap-10">
	<div class="flex flex-row w-full justify-between">
		<a href="/article/1">Første Artikkel</a>
		<a href="/article/2">Andre Artikkel</a>
	</div>
{@render children()}
</div>
