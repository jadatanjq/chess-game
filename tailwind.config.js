/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				moonlitAsteroid: {
					first: "#0F2027",
					second: "#203A43",
					third: "#2C5364",
				},
				titanium: {
					first: "#283048",
					second: "#859398",
				},
				royal: {
					first: "#141E30",
					second: "#243B55",
				},
			},
		},
	},
	plugins: [],
};
