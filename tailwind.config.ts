
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors
				dark: {
					DEFAULT: '#121212',
					100: '#1E1E1E',
					200: '#2D2D2D',
					300: '#3D3D3D'
				},
				neon: {
					yellow: '#FAFF00',
					blue: '#00F0FF',
					purple: '#FF00F5'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.8', filter: 'blur(10px)' },
					'50%': { opacity: '0.2', filter: 'blur(8px)' }
				},
				'grid-line-move': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100px)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'waveform': {
					'0%, 100%': { height: '20%' },
					'25%': { height: '80%' },
					'50%': { height: '40%' },
					'75%': { height: '90%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 10s ease infinite',
				'text-shimmer': 'text-shimmer 4s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'grid-line-move': 'grid-line-move 10s linear infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'scale-in': 'scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'waveform-1': 'waveform 1.2s ease-in-out infinite',
				'waveform-2': 'waveform 1.4s ease-in-out infinite 0.1s',
				'waveform-3': 'waveform 1.6s ease-in-out infinite 0.2s',
				'waveform-4': 'waveform 1.8s ease-in-out infinite 0.3s',
				'waveform-5': 'waveform 2s ease-in-out infinite 0.4s'
			},
			backdropBlur: {
				'xs': '2px'
			},
			backgroundImage: {
				'grid-pattern': 'linear-gradient(rgba(250, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(250, 255, 0, 0.1) 1px, transparent 1px)'
			},
			backgroundSize: {
				'grid-size': '40px 40px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
