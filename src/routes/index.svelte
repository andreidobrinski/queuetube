<script lang="ts">
	import App from '$lib/App.svelte';
	import { authStore } from '$lib/auth/authStore';
	import GoogleAuthLink from '$lib/auth/GoogleAuthLink.svelte';
	import { checkToken } from '$lib/auth/checkToken';
	import { onMount } from 'svelte';

	let isLoading = true;
	$: isLoggedIn = $authStore.isLoggedIn;

	onMount(async () => {
		await checkToken();
		isLoading = false;
	});
</script>

<h1 class={`mdc-typography--headline${isLoggedIn ? '4' : '2'}`}>
	<span>QueueTube</span>
</h1>

{#if isLoading}
	<p>Loading...</p>
{:else if !isLoggedIn}
	<GoogleAuthLink />
{:else}
	<App />
{/if}

<style>
	h1 {
		margin-bottom: 0;
	}
</style>
