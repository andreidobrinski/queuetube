<script lang="ts">
	import Button from '@smui/button';

	const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
	const params = [
		'?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly',
		'&include_granted_scopes=true',
		'&state=state_parameter_passthrough_value',
		'&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth',
		'&response_type=token',
		'&client_id=783182120876-raekv3ibdrpr2p6b1h278e9tuh1684lq.apps.googleusercontent.com',
	].join('');

	const authUrl = `${baseUrl}${params}`;
</script>

<Button href={authUrl}>Log In</Button>
