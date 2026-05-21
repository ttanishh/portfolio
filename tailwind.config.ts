
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'var(--line)',
				input: 'var(--line)',
				ring: 'var(--accent)',
				background: 'var(--bg)',
				foreground: 'var(--fg)',
				primary: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--fg)'
				},
				secondary: {
					DEFAULT: 'var(--bg-soft)',
					foreground: 'var(--muted-strong)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-strong)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--fg)'
				},
				apple: {
					blue: '#0071e3',
					gray: '#86868b',
					black: '#000000',
					white: '#ffffff',
				}
			},
			borderRadius: {
				'apple': '12px',
				'apple-lg': '24px',
				'apple-xl': '48px',
			},
			fontFamily: {
				sans: ["SF Pro Display", "SF Pro Text", "Inter", "system-ui", "sans-serif"],
				mono: ["SF Mono", "Fira Code", "monospace"],
			},
			keyframes: {
				'reveal-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			},
			animation: {
				'reveal-up': 'reveal-up 0.8s var(--ease-expo) forwards',
				'fade-in': 'fade-in 1s var(--ease-expo) forwards',
				'scale-in': 'scale-in 0.8s var(--ease-expo) forwards',
				'float': 'float 6s ease-in-out infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
