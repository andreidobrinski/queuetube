<script lang="ts">
	import { selectedQueue } from '$lib/selectedQueue';
	import { authStore } from '$lib/auth/authStore';
	import { queueStore } from '$lib/queueStore';

	let channels = $queueStore[$selectedQueue].channels || {};
</script>

{#each Object.values(channels) as channel}
	<div style="display: flex;">
		<p>{channel.name}</p>
	</div>
{/each}
