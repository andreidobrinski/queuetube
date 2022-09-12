<script lang="ts">
	import Button from '@smui/button';
	import { getAuthUrl } from '$lib/api';

	const authUrl = getAuthUrl();
</script>

<Button href={authUrl} style="width: 100%; margin-top: 1.67em;">Log In</Button>
