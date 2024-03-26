/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			height: {
				screen: "100vh",
			},
		},
		fontFamily: {
			sans: "Roboto",
			tech: "Share Tech",
		},
	},
	plugins: [],
};
