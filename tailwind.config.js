/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            screen: {
                iphone: '430px',
                ipad: '834px',
                macbook: '1440px',
                wqhd: '2560px',
            },
            fontFamily: {
                urbanist: ['urbanist', 'ui-sans'],
                'urbanist-italic': ['urbanist-italic', 'ui-sans'],
            },
            colors: {
                black: '#000',
                white: '#FFF',
                lime: {
                    70: '#CBEA7B',
                    75: '#D3EE91',
                    80: '#DCF1A7',
                    85: '#E5F5BD',
                    90: '#EEF8D3',
                    95: '#F6FBE9',
                    97: '#FAFDF2',
                    99: '#FDFEFB',
                },
                jungle: {
                    15: '#1A3129',
                    20: '#234338',
                    25: '#2C5446',
                    30: '#326454',
                    40: '#468671',
                    60: '#79B9A4',
                    80: '#BCDCD1',
                    90: '#DDEDE8',
                },
                ash: {
                    10: '#191919',
                    15: '#262626',
                    20: '#333333',
                    30: '#4C4C4D',
                    35: '#59595A',
                    40: '#656567',
                    60: '#98989A',
                    90: '#E6E6E6',
                    95: '#F2F2F2',
                    97: '#F7F7F7',
                    99: '#FCFCFC',
                },
            },
        },
    },
    plugins: [],
}
