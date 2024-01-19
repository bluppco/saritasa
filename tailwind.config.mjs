/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {

			screens: {

				"mac": "1440px"

			},
			fontFamily: {

				"avenir": ["Avenir","sans-serif"]

			},
			colors: {

				"saritasa_primary": "#f15934",
				"saritasa_black": "#1a3340",
				"saritasa_teal_blue": "#0d5c7d",
				"saritasa_blue": "#1c7396",
				"saritasa_dark_blue": "#033763",
				"saritasa_dark_gray": "#2e2e2e"

			}

		},
	},
	plugins: [],
}
