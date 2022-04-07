export function useCoreClass(svBem, svClass, include) {
    const result = {};

    result[svBem] = include;

    if (!!svClass[svBem] && include) {
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