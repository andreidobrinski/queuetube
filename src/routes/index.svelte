<script lang="ts">
	import App from '$lib/App.svelte';
	import { authStore } from '$lib/auth/authStore';
	import GoogleAuthLink from '$lib/auth/GoogleAuthLink.svelte';
	import { checkToken } from '$lib/auth/checkToken';
	import { onMount } from 'svelte';

	let isLoading = true;

	onMount(async () => {
		await checkToken();
		isLoading = false;
	});
</script>

<h1 style="margin-bottom: 0;">QueueTube</h1>

<!-- <App /> -->

{#if isLoading}
	<p>Loading...</p>
{:else if !$authStore.isLoggedIn}
	<GoogleAuthLink />
{:else}
	<App />
{/if}
