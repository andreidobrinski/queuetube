<script lang="ts">
	import { authStore } from '$lib/auth/authStore';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';

	authStore.set({
		token: '',
		isLoggedIn: false,
	});

	if (browser) {
		goto(`${base}/`);
	}
</script>
