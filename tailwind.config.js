const safelist = [
    'sv-border',
    'sv-rounded',
    'sv-padding',
    'sv-focus',
    'sv-disabled'
];

const variantSafelist = (prefix) => {
    safelist.push(prefix + '--primary');
    safelist.push(prefix + '--secondary');
    safelist.push(prefix + '--success');
    safelist.push(prefix + '--success-state');
    safelist.push(prefix + '--danger');
    safelist.push(prefix + '--danger-state');
    safelist.push(prefix + '--warning');
    safelist.push(prefix + '--warning-state');
    safelist.push(prefix + '--info');
    safelist.push(prefix + '--info-state');
    safelist.push(prefix + '--link');
    safelist.push(prefix + '--disabled');
}

const trasitionSafelist = (name) => {
    safelist.push(name + '-enter-active');
    safelist.push(name + '-enter-from');
    safelist.push(name + '-enter-to');
    safelist.push(name + '-leave-active');
    safelist.push(name + '-leave-from');
    safelist.push(name + '-leave-to');
}

variantSafelist('sv-alert');
variantSafelist('sv-alert__icon');
variantSafelist('sv-alert__icon-close');
variantSafelist('sv-alerts');
variantSafelist('sv-button');
variantSafelist('sv-title');

trasitionSafelist('sv-navigation');
trasitionSafelist('sv-dialog');
trasitionSafelist('sv-dialog__overlay');
trasitionSafelist('sv-dialog__container');

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
            transitionProperty: {
                "width": "width"
            },
            textColor: {
                "primary": generateColorClass("sv-text-primary"),
                "primary--hover": generateColorClass("sv-text-primary--hover"),
                "secondary": generateColorClass("sv-text-secondary"),
                "secondary--hover": generateColorClass("sv-text-secondary--hover"),
                "success": generateColorClass("sv-text-success"),
                "success--hover": generateColorClass("sv-text-success--hover"),
                "danger": generateColorClass("sv-text-danger"),
                "danger--hover": generateColorClass("sv-text-danger--hover"),
                "warning": generateColorClass("sv-text-warning"),
                "warning--hover": generateColorClass("sv-text-warning--hover"),
                "info": generateColorClass("sv-text-info"),
                "info--hover": generateColorClass("sv-text-info--hover"),
                "link": generateColorClass("sv-text-link"),
                "link--hover": generateColorClass("sv-text-link--hover"),
                "disabled": generateColorClass("sv-text-disabled"),
                "label": generateColorClass("sv-text-label"),
                "input": generateColorClass("sv-text-input"),
                "input-selected": generateColorClass("sv-text-input-selected"),
                "input-ACTIVE": generateColorClass("sv-text-input-ACTIVE"),
                "navigation": generateColorClass("sv-text-navigation"),
                "navbar-menu-toggle": generateColorClass("sv-text-navbar-menu-toggle"),
                "navbar-menu-toggle--hover": generateColorClass("sv-text-navbar-menu-toggle--hover"),
                "table-th": generateColorClass("sv-text-table-th"),
            },
            backgroundColor: {
                "primary": generateColorClass("sv-bg-primary"),
                "primary--hover": generateColorClass("sv-bg-primary--hover"),
                "primary--active": generateColorClass("sv-bg-primary--active"),
                "secondary": generateColorClass("sv-bg-secondary"),
                "secondary--hover": generateColorClass("sv-bg-secondary--hover"),
                "secondary--active": generateColorClass("sv-bg-secondary--active"),
                "success": generateColorClass("sv-bg-success"),
                "success--hover": generateColorClass("sv-bg-success--hover"),
                "success--active": generateColorClass("sv-bg-success--active"),
                "danger": generateColorClass("sv-bg-danger"),
                "danger--hover": generateColorClass("sv-bg-danger--hover"),
                "danger--active": generateColorClass("sv-bg-danger--active"),
                "warning": generateColorClass("sv-bg-warning"),
                "warning--hover": generateColorClass("sv-bg-warning--hover"),
                "warning--active": generateColorClass("sv-bg-warning--active"),
                "info": generateColorClass("sv-bg-info"),
                "info--hover": generateColorClass("sv-bg-info--hover"),
                "info--active": generateColorClass("sv-bg-info--active"),
                "disabled": generateColorClass("sv-bg-disabled"),
                "input": generateColorClass("sv-bg-input"),
                "input-selected": generateColorClass("sv-bg-input-selected"),
                "input--active": generateColorClass("sv-bg-input--active"),
                "input-indicator": generateColorClass("sv-bg-input-indicator"),
                "input-indicator-selected": generateColorClass("sv-bg-input-indicator-selected"),
                "input-indicator--active": generateColorClass("sv-bg-input-indicator--active"),
                "input-indicator-disabled": generateColorClass("sv-bg-input-indicator-disabled"),
                "navigation-dropdown": generateColorClass("sv-bg-navigation-dropdown"),
                "navigation--hover": generateColorClass("sv-bg-navigation--hover"),
                "navbar-menu-toggle": generateColorClass("sv-bg-navbar-menu-toggle"),
                "navbar-menu-toggle--hover": generateColorClass("sv-bg-navbar-menu-toggle--hover"),
                "dialog": generateColorClass("sv-bg-dialog"),
                "table": generateColorClass("sv-bg-table"),
                "table-thead-tr": generateColorClass("sv-bg-table-thead-tr"),
                "table-tbody-tr--odd": generateColorClass("sv-bg-table-tbody-tr--odd"),
                "table-tbody-tr--hover": generateColorClass("sv-bg-table-tbody-tr--hover"),
            },
            borderColor: {
                "primary": generateColorClass("sv-border-primary"),
                "secondary": generateColorClass("sv-border-secondary"),
                "success": generateColorClass("sv-border-success"),
                "danger": generateColorClass("sv-border-danger"),
                "warning": generateColorClass("sv-border-warning"),
                "info": generateColorClass("sv-border-info"),
                "disabled": generateColorClass("sv-border-disabled"),
                "input": generateColorClass("sv-border-input"),
                "input--hover": generateColorClass("sv-border-input--hover"),
                "input-selected": generateColorClass("sv-border-input-selected"),
                "input--active": generateColorClass("sv-border-input--active"),
                "input-indicator": generateColorClass("sv-border-input-indicator"),
                "input-indicator-selected": generateColorClass("sv-border-input-indicator-selected"),
                "input-indicator--active": generateColorClass("sv-border-input-indicator--active"),
                "navigation-dropdown": generateColorClass("sv-border-navigation-dropdown"),
                "navigation-divider": generateColorClass("sv-border-navigation-divider"),
                "default--focus": generateColorClass("sv-border-default--focus"),
                "dialog": generateColorClass("sv-border-dialog"),
                "table": generateColorClass("sv-border-table"),
            },
            placeholderColor: {
                "input": generateColorClass("sv-placeholder-input"),
            },
            ringColor: {
                "default--focus": generateColorClass("sv-ring-default--focus"),
            }
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    safelist: safelist
}
