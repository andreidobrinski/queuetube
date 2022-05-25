<script lang="ts">
	import { authStore } from '$lib/auth/authStore';
	import GoogleAuthLink from '$lib/auth/GoogleAuthLink.svelte';
	import QueueList from '$lib/QueueList.svelte';
</script>

<h1>QueueTube</h1>

{#if !$authStore.isLoggedIn}
	<GoogleAuthLink />
{:else}
	<QueueList />
{/if}
