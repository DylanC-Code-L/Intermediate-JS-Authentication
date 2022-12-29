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
		testTimeout: 60_000,
		hookTimeout: 60_000,
	}
};

export default config;
