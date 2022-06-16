<script lang="ts">
	import { authStore } from '$lib/auth/authStore';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	authStore.set({
		token: '',
		isLoggedIn: false,
	});

	goto(`${base}/`);
</script>
