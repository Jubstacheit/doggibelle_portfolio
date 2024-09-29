/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';

export default {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{js,jsx,tsx,ts}',
		'./components/**/*.{js,jsx,tsx,ts}',
		'./app/**/*.{js,jsx,tsx,ts}',
		'./src/**/*.{js,jsx,tsx,ts}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	prefix: "",
	theme: {
    	extend: {
    		colors: {
    			main: '#a388ee',
    			mainAccent: '#9e66ff',
    			overlay: 'rgba(0,0,0,0.8)',
    			bg: '#e3dff2',
    			text: '#000',
    			border: '#000',
    			darkBg: '#1D1F27',
    			darkText: '#eeefe9',
    			darkBorder: '#000',
    			secondaryBlack: '#1b1b1b'
    		},
    		borderRadius: {
    			base: '16px',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		boxShadow: {
    			light: '4px 3px 0px 0px #000',
    			dark: '4px 3px 0px 0px #000'
    		},
    		translate: {
    			boxShadowX: '4px',
    			boxShadowY: '3px',
    			reverseBoxShadowX: '-4px',
    			reverseBoxShadowY: '-3px'
    		},
    		fontWeight: {
    			base: '500',
    			heading: '900'
    		},
    		fontFamily: {
    			base: ['var(--font-teko)'],
    			sans: ['var(--font-inter)'],
    			heading: ['var(--font-jetbrainsMono)']
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate"), nextui()],
}