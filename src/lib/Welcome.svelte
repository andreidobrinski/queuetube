<script lang="ts">
	import { getAuthUrl } from '$lib/api';
	import { base } from '$app/paths';
	import GoogleAuthLink from '$lib/auth/GoogleAuthLink.svelte';

	const authUrl = getAuthUrl();
	const aboutUrl = `${base}/about`;
</script>

<main>
	<p>Welcome!</p>
	<p>
		QueueTube is an app to create YouTube playlists by grouping uploads from related channels into a
		queue.
	</p>
	<p>To learn more about QueueTube, visit the <a href={aboutUrl}>/about page</a>.</p>
	<p>Login with your Google account to get started.</p>
	<GoogleAuthLink />
</main>

<style>
	main {
		padding: 0.5rem;
	}
</style>
