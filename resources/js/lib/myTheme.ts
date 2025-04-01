import { createTheme } from '@mantine/core';

const myMantineTheme = createTheme({
    primaryShade: 7,
    primaryColor: 'secondary',
    defaultRadius: 'md',
    autoContrast: true,
    luminanceThreshold: 0.5,
    fontFamily: 'Inter',
    components: {
        TextInput: {
            classNames: {
                root: 'text-left',
            },
        },
        Button: {
            classNames: {
                root: 'px-10 h-[40px] rounded-full',
            },
            defaultProps: {
                variant: 'filled',
                // color: 'secondary.7',
            },
        },
    },
    colors: {
        primary: ['#ebebff', '#d0d0fa', '#9d9cf8', '#6966f7', '#3f38f6', '#291df7', '#2011f8', '#1707dd', '#0f04c6', '#0000ad'],
        secondary: ['#ebf5fe', '#d6e6f8', '#a7ccf4', '#76b0f0', '#5199ee', '#3d8aed', '#3283ee', '#2770d4', '#1d64be', '#0656a7'],
        accent: ['#ffeaed', '#fcd5d9', '#f1aab1', '#e87c87', '#e05563', '#db3c4c', '#da2e40', '#c22032', '#ae192b', '#990c23'],
    },
});

export default myMantineTheme;
