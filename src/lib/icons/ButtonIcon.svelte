<script lang="ts">
	import IconButton from '@smui/icon-button';
	import SvgIcon from './SvgIcon.svelte';
	import type { Icons } from './assets';

	export let icon: Icons;
	export let onClick: () => void;
	export let ariaText: string;
	export let style = '';
</script>

<IconButton on:click={onClick} aria-label={ariaText} {style}>
	<SvgIcon {icon} />
</IconButton>
