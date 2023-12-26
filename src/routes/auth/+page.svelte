<script lang="ts">
	import { authStore } from '$lib/auth/authStore';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';

	interface GoogleAuthResponse {
		access_token: string;
		authuser: string;
		expires_in: string;
		prompt: string;
		scope: string;
		state: string;
		token_type: string;
	}

	let token = null;
	let googleAuthResponse = null;

	if (browser) {
		googleAuthResponse = location.hash
			.split('#')[1]
			.split('&')
			.reduce((acc, current) => {
				const [key, value] = current.split('=');
				return {
					...acc,
					[key]: value,
				};
			}, {} as GoogleAuthResponse);
	}

	token = googleAuthResponse?.access_token;

	if (token) {
		authStore.set({
			token,
			isLoggedIn: true,
		});
		goto(`${base}/`);
	}
</script>

<p>Logging in...</p>
