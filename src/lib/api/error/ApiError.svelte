<script lang="ts">
	import type { SnackbarComponentDev } from '@smui/snackbar';
	import Snackbar, { Label } from '@smui/snackbar';
	import { apiErrorStore } from './apiErrorStore';

	let snackbarWithoutClose: SnackbarComponentDev;

	function showApiError() {
		if (snackbarWithoutClose && $apiErrorStore) {
			snackbarWithoutClose.open();
		}
	}

	$: $apiErrorStore, showApiError();
</script>

<Snackbar bind:this={snackbarWithoutClose}>
	<Label>Something went wrong <br /> Please refresh and try again</Label>
</Snackbar>
