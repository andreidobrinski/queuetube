<script lang="ts">
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { queueStore, deleteChannelFromQueue } from '$lib/queueStore';
	import { selectedQueue } from '$lib/selectedQueue';
	import ChannelImage from '$lib/queue/ChannelImage.svelte';
	import QueueAdditionalSettings from './QueueAdditionalSettings.svelte';
	import Subscriptions from './Subscriptions.svelte';
	import ButtonIcon from '$lib/icons/ButtonIcon.svelte';

	const crossfadeTransition = crossfade({});
	const [_, receive] = crossfadeTransition;

	$: channels = $queueStore[$selectedQueue]?.channels ?? {};

	$: channelNumber = Object.keys(channels).length;

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

{#each Object.values(channels) as channel (channel.id)}
	<div style="display: flex; align-items: center;" animate:flip in:receive={{ key: channel.id }}>
		<ChannelImage
			src={channel.thumbnails?.default.url || channel.thumbnails?.medium.url || ''}
			name={channel.name}
		/>
		<p>{channel.name}</p>
		<ButtonIcon
			onClick={() => deleteChannelFromQueue({ channelId: channel.id, queueId: $selectedQueue })}
			icon="Delete"
			ariaText={`delete channel ${channel.name} from queue ${$selectedQueue}`}
		/>
	</div>
{/each}
<Subscriptions {crossfadeTransition} />
