<script lang="ts">
	import App from '$lib/App.svelte';
	import { authStore } from '$lib/auth/authStore';
	import GoogleAuthLink from '$lib/auth/GoogleAuthLink.svelte';
	import { checkToken } from '$lib/auth/checkToken';
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import { base } from '$app/paths';
	import ApiError from '$lib/api/error/ApiError.svelte';

	let isLoading = true;
	$: isLoggedIn = $authStore.isLoggedIn;
	const isNewUser = localStorage.getItem('queues') === '{}';
	const showLogin = !isLoggedIn && isNewUser;

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
	<GoogleAuthLink />
	<Button href={`${base}/about`} style="width: 100%; margin-top: 1.67em;">About</Button>
{:else}
	<App />
{/if}
<ApiError />

<style>
	h1 {
		margin-bottom: 0;
	}
</style>
