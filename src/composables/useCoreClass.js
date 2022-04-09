export function useCoreClass(svBem, options) {
    const result = {};
    const o = options ?? {};
    const svClass = o.svClass;
    const disabled = o.disabled ?? false;
    const variant = !!o.variant ? o.variant.toLowerCase() : undefined;
    const include = o.include ?? false;

    result[svBem] = include;
    result[svBem + "--disabled"] = disabled;

    if (!!variant && !disabled) {
        result[svBem + "--primary"] = variant === "primary";
        result[svBem + "--secondary"] = variant === "secondary";
        result[svBem + "--success"] = variant === "success";
        result[svBem + "--danger"] = variant === "danger";
        result[svBem + "--warning"] = variant === "warning";
        result[svBem + "--info"] = variant === "info";
        result[svBem + "--link"] = variant === "link";
    }

    if (!!svClass && !!svClass[svBem] && include) {
        if (Array.isArray(svClass[svBem])) {
            svClass[svBem].forEach(item => {
                result[item] = true;
            });
        } else if (typeof svClass[svBem] === 'string' || svClass[svBem] instanceof String) {
            result[svClass[svBem]] = true;
        } else {
            console.warn(`sv-class entry is not an array or string: '${svBem}' - `, svClass[svBem])
        }
    }

    return result;
}