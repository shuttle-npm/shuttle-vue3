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
bemSafelist('sv-alert__icon');
bemSafelist('sv-alert__icon-close');
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
                "primary--hover": generateColorClass("sv-text-primary--hover"),
                secondary: generateColorClass("sv-text-secondary"),
                "secondary--hover": generateColorClass("sv-text-secondary--hover"),
                success: generateColorClass("sv-text-success"),
                "success--hover": generateColorClass("sv-text-success--hover"),
                danger: generateColorClass("sv-text-danger"),
                "danger--hover": generateColorClass("sv-text-danger--hover"),
                warning: generateColorClass("sv-text-warning"),
                "warning--hover": generateColorClass("sv-text-warning--hover"),
                info: generateColorClass("sv-text-info"),
                "info--hover": generateColorClass("sv-text-info--hover"),
                link: generateColorClass("sv-text-link"),
                "link--hover": generateColorClass("sv-text-link--hover"),
                disabled: generateColorClass("sv-text-disabled"),
                label: generateColorClass("sv-text-label"),
                input: generateColorClass("sv-text-input"),
                "input-selected": generateColorClass("sv-text-input-selected"),
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
                input: generateColorClass("sv-bg-input"),
                "input-active": generateColorClass("sv-bg-input-active"),
                "input-indicator": generateColorClass("sv-bg-input-indicator"),
                "input-indicator-active": generateColorClass("sv-bg-input-indicator-active"),
            },
            borderColor: {
                primary: generateColorClass("sv-border-primary"),
                secondary: generateColorClass("sv-border-secondary"),
                success: generateColorClass("sv-border-success"),
                danger: generateColorClass("sv-border-danger"),
                warning: generateColorClass("sv-border-warning"),
                info: generateColorClass("sv-border-info"),
                disabled: generateColorClass("sv-border-disabled"),
                input: generateColorClass("sv-border-input"),
                "input--hover": generateColorClass("sv-border-input--hover"),
                "input-active": generateColorClass("sv-border-input-active"),
                "input-indicator": generateColorClass("sv-border-input-indicator"),
                "input-indicator-active": generateColorClass("sv-border-input-indicator-active"),
            },
            placeholderColor: {
                input: generateColorClass("sv-placeholder-input"),
            }
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    safelist: safelist
}
