<script lang="ts">
	import App from '$lib/App.svelte';
	import Welcome from '$lib/Welcome.svelte';
	import { authStore } from '$lib/auth/authStore';
	import { checkToken } from '$lib/auth/checkToken';
	import { onMount } from 'svelte';
	import ApiError from '$lib/api/error/ApiError.svelte';
	import { browser } from '$app/environment';

	let isLoading = true;
	$: isLoggedIn = $authStore.isLoggedIn;
	const isNewUser = browser && localStorage.getItem('queues') === '{}';
	$: showLogin = !isLoggedIn && isNewUser;

	onMount(async () => {
		await checkToken();
		isLoading = false;
	});
</script>

<h1 class={`mdc-typography--headline${showLogin ? '2' : '4'}`}>
	<span>QueueTube</span>
</h1>

{#if isLoading}
	<p>Loading...</p>
{:else if showLogin}
	<Welcome />
{:else}
	<App />
{/if}
<ApiError />

<style>
	h1 {
		margin-bottom: 0;
	}
</style>
