const safelist = [];

const prefixedSafelist = (prefix) => {
    safelist.push(prefix + '--primary');
    safelist.push(prefix + '--secondary');
    safelist.push(prefix + '--success');
    safelist.push(prefix + '--danger');
    safelist.push(prefix + '--warning');
    safelist.push(prefix + '--info');
    safelist.push(prefix + '--link');
    safelist.push(prefix + '--disabled');
}

prefixedSafelist('sv-alert');
prefixedSafelist('sv-button');

module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    safelist: safelist
}
