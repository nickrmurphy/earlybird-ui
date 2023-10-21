import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    theme: {
        fontFamily: {
            serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
            mono: ['Noto Mono', ...defaultTheme.fontFamily.mono],
            display: ['Noto Serif Display', ...defaultTheme.fontFamily.sans],
        },
        extend: {},
    },
    plugins: [],
}
