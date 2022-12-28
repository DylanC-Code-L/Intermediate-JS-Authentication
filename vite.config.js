import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: process.env.SERVER_PORT
	},
	test: {
		testTimeout: 3_000,
		hookTimeout: 3_000,
	}
};

export default config;
