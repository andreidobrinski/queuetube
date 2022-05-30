<script lang="ts">
	import Queue from '$lib/queue/Queue.svelte';
	import { selectedQueue } from '$lib/selectedQueue';
	import QueueList from '$lib/queueList/QueueList.svelte';
</script>

{#if $selectedQueue}
	<Queue />
{:else}
	<QueueList />
{/if}
