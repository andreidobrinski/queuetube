import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const isDevEnv = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		prerender: {
			default: true
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: isDevEnv ? '' : '/queuetube',
		},
	}
};

export default config;
