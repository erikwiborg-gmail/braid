<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>
<div class="w-2/3 mx-auto flex flex-col gap-10">
	<div class="flex flex-row w-full pt-40 pb-10 px-5 justify-between bg-gray-100">
		<a href="/article/1">Første Artikkel</a>
		<a href="/article/2">Andre Artikkel</a>
	</div>
	<div class="mx-auto">
		{@render children()}
	</div>
</div>
