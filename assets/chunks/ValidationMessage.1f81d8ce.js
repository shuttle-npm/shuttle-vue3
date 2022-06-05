import { u as useCoreClass } from "./useCoreClass.4c1eebb8.js";
import { o as openBlock, b as createElementBlock, t as toDisplayString, n as normalizeClass, d as createCommentVNode } from "../app.b78d4ac8.js";
const _sfc_main = {
  props: {
    message: {
      type: String
    },
    svClass: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-validation-message", getOptions(true))
      ];
    };
    return (_ctx, _cache) => {
      return !!props.message ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(getClasses())
      }, toDisplayString(props.message), 3)) : createCommentVNode("", true);
    };
  }
};
export { _sfc_main as _ };
