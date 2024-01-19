/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			height: {
				screen: "100dvh",
			},
		},
		fontFamily: {
			sans: "Roboto",
			tech: "Share Tech",
		},
	},
	plugins: [],
};