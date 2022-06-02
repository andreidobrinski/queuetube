<script lang="ts">
	import { authStore } from '$lib/auth/authStore';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	interface GoogleAuthResponse {
		access_token: string;
		authuser: string;
		expires_in: string;
		prompt: string;
		scope: string;
		state: string;
		token_type: string;
	}

	const { access_token: token } = location.hash
		.split('#')[1]
		.split('&')
		.reduce((acc, current) => {
			const [key, value] = current.split('=');
			return {
				...acc,
				[key]: value,
			};
		}, {} as GoogleAuthResponse);

	if (token) {
		authStore.set({
			token,
			isLoggedIn: true,
		});
		goto(`${base}/`);
	}
</script>
