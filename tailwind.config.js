const safelist = [
    'sv-border',
    'sv-rounded',
    'sv-padding',
    'sv-focus',
    'sv-disabled'
];

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

const generateColorClass = (variable) => {
    return ({ opacityValue }) =>
        opacityValue
            ? `rgba(var(--${variable}), ${opacityValue})`
            : `rgb(var(--${variable}))`
}

module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            textColor: {
                primary: generateColorClass("sv-text-primary"),
                secondary: generateColorClass("sv-text-secondary"),
                success: generateColorClass("sv-text-success"),
                danger: generateColorClass("sv-text-danger"),
                warning: generateColorClass("sv-text-warning"),
                info: generateColorClass("sv-text-info"),
                link: generateColorClass("sv-text-link"),
                disabled: generateColorClass("sv-text-disabled")
            },
            backgroundColor: {
                primary: generateColorClass("sv-bg-primary"),
                "primary--hover": generateColorClass("sv-bg-primary--hover"),
                "primary--active": generateColorClass("sv-bg-primary--active"),
                secondary: generateColorClass("sv-bg-secondary"),
                "secondary--hover": generateColorClass("sv-bg-secondary--hover"),
                "secondary--active": generateColorClass("sv-bg-secondary--active"),
                success: generateColorClass("sv-bg-success"),
                "success--hover": generateColorClass("sv-bg-success--hover"),
                "success--active": generateColorClass("sv-bg-success--active"),
                danger: generateColorClass("sv-bg-danger"),
                "danger--hover": generateColorClass("sv-bg-danger--hover"),
                "danger--active": generateColorClass("sv-bg-danger--active"),
                warning: generateColorClass("sv-bg-warning"),
                "warning--hover": generateColorClass("sv-bg-warning--hover"),
                "warning--active": generateColorClass("sv-bg-warning--active"),
                info: generateColorClass("sv-bg-info"),
                "info--hover": generateColorClass("sv-bg-info--hover"),
                "info--active": generateColorClass("sv-bg-info--active"),
                disabled: generateColorClass("sv-bg-disabled"),
            },
            borderColor: {
                primary: generateColorClass("sv-border-primary"),
                secondary: generateColorClass("sv-border-secondary"),
                success: generateColorClass("sv-border-success"),
                danger: generateColorClass("sv-border-danger"),
                warning: generateColorClass("sv-border-warning"),
                info: generateColorClass("sv-border-info"),
                disabled: generateColorClass("sv-border-disabled"),
            }
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    safelist: safelist
}
