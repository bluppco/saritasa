/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			screens: {

				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'mac': '1440px',
				'2xl': '1536px'

			},

			fontFamily: {


			},

			colors: {

				"saritasa_black": "#1a3340",
				"saritasa_primary": "#f15924",
				"saritasa_teal_blue": "#0d5c7d",

			}

		},
	},
	plugins: [],
}
