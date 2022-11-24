<script lang="ts">
	import { fade } from 'svelte/transition';
	import Queue from '$lib/queue/Queue.svelte';
	import { selectedQueue } from '$lib/selectedQueue';
	import QueueList from '$lib/queueList/QueueList.svelte';
</script>

{#if $selectedQueue}
	<main in:fade>
		<Queue />
	</main>
{:else}
	<main in:fade>
		<QueueList />
	</main>
{/if}
