<script lang="ts">
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import IconButton from '@smui/icon-button';
	import { queueStore } from '$lib/queueStore';
	import { selectedQueue } from '$lib/selectedQueue';
	import ChannelImage from '$lib/queue/ChannelImage.svelte';
	import QueueAdditionalSettings from './QueueAdditionalSettings.svelte';
	import Subscriptions from './Subscriptions.svelte';

	const crossfadeTransition = crossfade({});
	const [_, receive] = crossfadeTransition;

	function deleteChannel(channelId: string) {
		queueStore.update((queues) => {
			const currentQueue = queues[$selectedQueue];
			const { [channelId]: deletedChannel, ...remainderChannels } = currentQueue.channels;
			return {
				...queues,
				[$selectedQueue]: {
					...currentQueue,
					channels: remainderChannels,
				},
			};
		});
	}

	$: channelNumber = Object.keys($queueStore[$selectedQueue].channels).length;

	$: channelText = () => {
		switch (channelNumber) {
			case 0:
				return 'No Channels in Queue';
			case 1:
				return '1 Channel in Queue';
			default:
				return `${channelNumber} Channels in Queue`;
		}
	};
</script>

<div style="display: flex; justify-content: space-between;">
	<p>{channelText()}</p>
	<QueueAdditionalSettings />
</div>

{#each Object.values($queueStore[$selectedQueue].channels) as channel (channel.id)}
	<div style="display: flex; align-items: center;" animate:flip in:receive={{ key: channel.id }}>
		<ChannelImage
			src={channel.thumbnails?.default.url || channel.thumbnails?.medium.url || ''}
			name={channel.name}
		/>
		<p>{channel.name}</p>
		<IconButton
			aria-label={`delete channel ${channel.name} from queue ${$selectedQueue}`}
			class="material-icons"
			on:click={() => deleteChannel(channel.id)}
		>
			delete
		</IconButton>
	</div>
{/each}
<Subscriptions {crossfadeTransition} />
