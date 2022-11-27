<script lang="ts">
	import { base } from '$app/paths';
</script>

<h1 class="mdc-typography--headline2">About QueueTube</h1>

<h2>What is it?</h2>
<p>
	It's an app to create YouTube playlists by grouping uploads from related channels into a queue. As
	videos are released, they are automatically added to the queues you've created.
</p>

<h2>Why would I use it?</h2>
<p>
	It beats having to scroll your YouTube feed and manually add videos to different playlists. It's
	also more organized than a single "Watch Later" playlist for all your videos.
</p>
<p>
	For example, you may be subscribed to YouTube channels related to video games, gardening, and
	makeup. You can create 3 different queues and when a new gardening video is released, it will be
	added to your Gardening queue. You can then play your gardening queue to get caught up on any new
	videos!
</p>

<h2>How does it work?</h2>
<ol>
	<li>Sign in with your Google account</li>
	<li>Create a queue and give it a name</li>
	<li>
		Go to the Settings to select channels that fit the queue's theme. You can always add new
		channels or edit this later.
	</li>
	<li>Sit back and let QueueTube add new videos from those channels to your queue</li>
	<li>
		Press "Play All" to get a YouTube playlist link containing every video in your queue. This will
		open up in the YouTube app so you can watch from your device or cast to a TV.
	</li>
	<li>Press the checkmark button next to a video to remove it from the queue</li>
	<li>Repeat for as many queues as you like!</li>
</ol>
<p>
	I recommend using the app on your phone and adding the icon to your home screen on either your <a
		href="https://www.macrumors.com/how-to/add-a-web-link-to-home-screen-iphone-ipad/">iOS</a
	>
	or
	<a href="https://www.androidauthority.com/add-website-android-iphone-home-screen-3181682/"
		>Android</a
	> device.
</p>

<h2>What about my data? How is it stored and used?</h2>
<p>
	QueueTube uses your Google Auth token to communicate with the YouTube API on your behalf to get
	data such as your subscriptions and a given channel's videos. Anonymized Google Analytics is used
	to get a sense of the number of users.
</p>
<p>
	All data related to your queues/videos/channels is stored in <a
		href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
		target="_blank"
		rel="noopener noreferrer">local storage</a
	> and never leaves your device. No data is sent back to QueueTube. In fact, QueueTube is a client-side
	only app and doesn't have it's own servers. QueueTube does have an export feature where you can pull
	down all of your data as plain text.
</p>
<p>
	This also means that <strong>clearing your browser's cache will remove all QueueTube data.</strong
	>
</p>
<p>
	See for yourself! The QueueTube codebase is open source and can be found on <a
		href="https://github.com/andreidobrinski/queuetube"
		target="_blank"
		rel="noopener noreferrer">GitHub</a
	>.
</p>

<h2>Who are you and why did you make this?</h2>
<p>
	Glad you asked! I'm <a
		href="https://andreidobrinski.com"
		target="_blank"
		rel="noopener noreferrer">Andrei</a
	>, a frontend developer that loves the modern web.
</p>
<p>
	I made QueueTube as a thank-you for my fiancée. She managed a playlist for us manually in YouTube
	and this serves to make her life a bit easier. You're welcome to use it too!
</p>

<h2>Where can I go with my feedback?</h2>
<p>
	Feel free to hit me up on Twitter, I'm <a
		href="https://twitter.com/andreidobrinski"
		target="_blank"
		rel="noopener noreferrer">@andreidobrinski</a
	>. You can also file an issue on the
	<a href="https://github.com/andreidobrinski/queuetube">GitHub repo.</a>
</p>

<a href={`${base}/`}>Back to app</a>
