/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		},
		extend: {
			colors: {
				'navy': '#101729',
			},
		},
	},
	plugins: [],
}
