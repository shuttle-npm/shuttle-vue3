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
    result[svBem + "--success-state"] = variant === "success-state";
    result[svBem + "--danger"] = variant === "danger";
    result[svBem + "--danger-state"] = variant === "danger-state";
    result[svBem + "--warning"] = variant === "warning";
    result[svBem + "--warning-state"] = variant === "warning-state";
    result[svBem + "--info"] = variant === "info";
    result[svBem + "--info-state"] = variant === "info-state";
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
var Alert_vue_vue_type_style_index_0_scoped_true_lang = "";
export { useCoreClass as u };
