import { u as useCoreClass } from "./useCoreClass.322213e7.js";
import { o as openBlock, b as createElementBlock, c as createBlock, n as normalizeClass, i as resolveDynamicComponent, g as createTextVNode, t as toDisplayString, j as renderSlot } from "../app.a503ecea.js";
const _sfc_main = {
  props: {
    content: { type: String },
    variant: { type: String },
    disabled: { type: Boolean },
    icon: { type: null },
    svClass: {
      type: Object
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const click = () => {
      if (props.disabled) {
        return;
      }
      emit("click");
    };
    const icon = () => {
      return props.icon ? props.icon : void 0;
    };
    const getOptions = () => {
      var _a;
      return {
        svClass: props.svClass,
        include: true,
        variant: (_a = props.variant) != null ? _a : "primary",
        disabled: props.disabled
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-button", getOptions())
      ];
    };
    const getIconClasses = () => {
      return [
        useCoreClass("sv-button__icon", getOptions())
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses()),
        onClick: click,
        tabindex: "0"
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(icon()), {
          class: normalizeClass(getIconClasses())
        }, null, 8, ["class"])),
        createTextVNode(" " + toDisplayString(props.content) + " ", 1),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
export { _sfc_main as _ };
