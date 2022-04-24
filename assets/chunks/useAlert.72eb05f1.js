import { p as computed } from "../app.82593da7.js";
function useAlert(props) {
  return computed(() => {
    var _a;
    if (!props.alert || !props.alert.message) {
      return;
    }
    var result = props.alert;
    result.variant = (_a = result.variant) != null ? _a : "info-state";
    return result;
  });
}
export { useAlert as u };
