<script lang="ts">
	import { Icon } from '@smui/icon-button';
	import { Svg } from '@smui/common/elements';
	import { icons } from './assets';
	import type { Icons } from './assets';

	export let icon: Icons;
</script>

<Icon component={Svg} style="height: 24px;">
	<svelte:component this={icons[icon]} />
</Icon>
