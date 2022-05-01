import { f as computed } from "../app.db6a9323.js";
function useAlert(props) {
  return computed(() => {
    var _a;
    if (!props.alert || !props.alert.message) {
      return;
    }
    var result = props.alert;
    result.variant = (_a = result.variant) != null ? _a : "info";
    return result;
  });
}
export { useAlert as u };
