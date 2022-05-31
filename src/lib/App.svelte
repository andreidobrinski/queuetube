<script lang="ts">
	import { fade } from 'svelte/transition';
	import Queue from '$lib/queue/Queue.svelte';
	import { selectedQueue } from '$lib/selectedQueue';
	console.log('selectedQueue', $selectedQueue);
	import QueueList from '$lib/queueList/QueueList.svelte';
</script>

{#if $selectedQueue}
	<div in:fade>
		<Queue />
	</div>
{:else}
	<div in:fade>
		<QueueList />
	</div>
{/if}
