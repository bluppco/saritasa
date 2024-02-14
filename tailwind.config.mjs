/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
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
				"saritasa_dark_gray": "#2e2e2e",
				"saritasa_orange": "#e43e00",
				"saritasa_light_orange": "#f68d1e"

			}
		},
	},
	plugins: [require("tailwindcss-animate")],
}