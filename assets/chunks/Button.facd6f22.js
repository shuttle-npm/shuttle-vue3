import { o as openBlock, b as createElementBlock, c as createBlock, n as normalizeClass, j as resolveDynamicComponent, h as createTextVNode, t as toDisplayString, k as renderSlot, w as withKeys } from "../app.75bde27b.js";
import { u as useCoreClass } from "./useCoreClass.4c1eebb8.js";
const _sfc_main = {
  props: {
    content: {
      type: String
    },
    variant: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    icon: {
      type: null
    },
    outline: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    svClass: {
      type: Object
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const click = (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (props.disabled) {
        return;
      }
      emit("click");
    };
    const getIcon = () => {
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
    const getBaseOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-button", getOptions()),
        useCoreClass("sv-button--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-button--xs", getBaseOptions(props.size == "xs")),
        useCoreClass("sv-button--sm", getBaseOptions(props.size == "sm")),
        useCoreClass("sv-button--lg", getBaseOptions(props.size == "lg"))
      ];
    };
    const getIconClasses = () => {
      return [
        useCoreClass("sv-button__icon", getOptions()),
        useCoreClass("sv-button__icon--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-button__icon--xs", getBaseOptions(props.size == "xs")),
        useCoreClass("sv-button__icon--sm", getBaseOptions(props.size == "sm")),
        useCoreClass("sv-button__icon--lg", getBaseOptions(props.size == "lg"))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses()),
        onClick: _cache[0] || (_cache[0] = ($event) => click($event)),
        onKeydown: [
          _cache[1] || (_cache[1] = withKeys(($event) => click($event), ["space"])),
          _cache[2] || (_cache[2] = withKeys(($event) => click($event), ["enter"]))
        ],
        tabindex: "0"
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(getIcon()), {
          class: normalizeClass(getIconClasses())
        }, null, 8, ["class"])),
        createTextVNode(" " + toDisplayString(props.content) + " ", 1),
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
};
export { _sfc_main as _ };
