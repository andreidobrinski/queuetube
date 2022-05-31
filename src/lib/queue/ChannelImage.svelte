<script lang="ts">
	export let name: string;
	export let src: string;
</script>

<img
	{src}
	alt={`image for channel ${name}`}
	style="height: 40px; border-radius: 50%; margin-right: 8px;"
	referrerpolicy="no-referrer"
/>
