<script lang="ts">
	import Queue from './Queue.svelte';
	import { selectedQueue } from './queue/selectedQueue';
	import QueueList from './QueueList.svelte';
</script>

{#if $selectedQueue}
	<Queue />
{:else}
	<QueueList />
{/if}
