/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#F6F2F8",
					100: "#EAE1EF",
					200: "#D7C6E1",
					300: "#C1A8D1",
					400: "#AF8DC3",
					500: "#996FB3",
					600: "#8354A0",
					700: "#6D4686",
					800: "#553768",
					900: "#3E284C",
					950: "#1E1325"
				}
			},
			fontSize: {
				xxs: '.625rem',
				'7xl': '5rem',
				'8xl': '6rem',
			},
			fontFamily: {
				serif: '"Parclo Serif", serif',
				sans: '"Really Sans Small", sans-serif',
				caps: '"Really Sans Large", sans-serif',
			},
			letterSpacing: {
				xl: '0.2em',
			},
		},
	},
	plugins: [],
}
