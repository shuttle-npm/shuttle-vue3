function useCoreClass(svBem, options) {
  var _a, _b;
  const result = {};
  const o = options != null ? options : {};
  const svClass = o.svClass;
  const disabled = (_a = o.disabled) != null ? _a : false;
  const variant = !!o.variant ? o.variant.toLowerCase() : void 0;
  const include = (_b = o.include) != null ? _b : false;
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
      svClass[svBem].forEach((item) => {
        result[item] = true;
      });
    } else if (typeof svClass[svBem] === "string" || svClass[svBem] instanceof String) {
      result[svClass[svBem]] = true;
    } else {
      console.warn(`sv-class entry is not an array or string: '${svBem}' - `, svClass[svBem]);
    }
  }
  return result;
}
export { useCoreClass as u };
