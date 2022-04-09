const safelist = [];

const bemSafelist = (prefix) => {
    safelist.push(prefix + '--primary');
    safelist.push(prefix + '--secondary');
    safelist.push(prefix + '--success');
    safelist.push(prefix + '--danger');
    safelist.push(prefix + '--warning');
    safelist.push(prefix + '--info');
    safelist.push(prefix + '--link');
    safelist.push(prefix + '--disabled');
}

bemSafelist('sv-alert');
bemSafelist('sv-alerts');
bemSafelist('sv-button');

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
