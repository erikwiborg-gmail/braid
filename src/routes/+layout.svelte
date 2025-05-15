<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="w-2/3 mx-auto flex flex-col gap-10 my-40">
	<div class="mx-auto">
		{@render children()}
	</div>
</div>
