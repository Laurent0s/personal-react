const detectDarkMode = () => {
    if(
        window.matchMedia  &&
        window.matchMedia('(prefers-color-scheme)').matches
    ) {
        return 'dark'
    }
    return 'light'
};

export default detectDarkMode;