import { l as computed } from "../app.aa6e2e2c.js";
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
