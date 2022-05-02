import { u as useCoreClass } from "./useCoreClass.4c1eebb8.js";
import { o as openBlock, b as createElementBlock, g as createBaseVNode, n as normalizeClass, c as createBlock, j as resolveDynamicComponent, t as toDisplayString, d as createCommentVNode } from "../app.75bde27b.js";
const _sfc_main = {
  props: {
    label: {
      type: String
    },
    position: {
      type: String,
      default: "end"
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    onIcon: {
      type: null
    },
    offIcon: {
      type: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    svClass: {
      type: Object
    }
  },
  emits: ["update:modelValue", "click"],
  setup(__props, { emit }) {
    const props = __props;
    const click = () => {
      if (props.disabled) {
        return;
      }
      emit("update:modelValue", !props.modelValue);
      emit("click");
    };
    const getIcon = () => {
      return props.modelValue ? !!props.onIcon ? props.onIcon : null : !!props.offIcon ? props.offIcon : null;
    };
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-toggle", getOptions(true)),
        useCoreClass("sv-toggle--disabled", getOptions(props.disabled)),
        useCoreClass("sv-toggle--on", getOptions(props.modelValue)),
        useCoreClass("sv-toggle--off", getOptions(!props.modelValue)),
        useCoreClass("sv-toggle--start", getOptions(props.position === "start")),
        useCoreClass("sv-toggle--end", getOptions(props.position === "end"))
      ];
    };
    const getSliderClasses = () => {
      return [
        useCoreClass("sv-toggle__slider", getOptions(true)),
        useCoreClass("sv-toggle__slider--disabled", getOptions(props.disabled)),
        useCoreClass("sv-toggle__slider--on", getOptions(props.modelValue)),
        useCoreClass("sv-toggle__slider--off", getOptions(!props.modelValue))
      ];
    };
    const getBoxClasses = () => {
      return [
        useCoreClass("sv-toggle__box", getOptions(true)),
        useCoreClass("sv-toggle__box--disabled", getOptions(props.disabled)),
        useCoreClass("sv-toggle__box--on", getOptions(props.modelValue)),
        useCoreClass("sv-toggle__box--off", getOptions(!props.modelValue)),
        useCoreClass("sv-toggle__box--start", getOptions(props.position === "start")),
        useCoreClass("sv-toggle__box--end", getOptions(props.position === "end"))
      ];
    };
    const getIconClasses = () => {
      return [
        useCoreClass("sv-toggle__icon", getOptions(true)),
        useCoreClass("sv-toggle__icon--disabled", getOptions(props.disabled)),
        useCoreClass("sv-toggle__icon--on", getOptions(props.modelValue)),
        useCoreClass("sv-toggle__icon--off", getOptions(!props.modelValue))
      ];
    };
    const getLabelClasses = () => {
      return [
        useCoreClass("sv-toggle__label", getOptions(true)),
        useCoreClass("sv-toggle__label--disabled", getOptions(props.disabled)),
        useCoreClass("sv-toggle__label--on", getOptions(props.modelValue)),
        useCoreClass("sv-toggle__label--off", getOptions(!props.modelValue)),
        useCoreClass("sv-toggle__label--start", getOptions(props.position === "start")),
        useCoreClass("sv-toggle__label--end", getOptions(props.position === "end"))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses()),
        onClick: click
      }, [
        createBaseVNode("div", {
          class: normalizeClass(getBoxClasses())
        }, [
          createBaseVNode("div", {
            class: normalizeClass(getSliderClasses())
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(getIcon == null ? void 0 : getIcon()), {
              class: normalizeClass(getIconClasses())
            }, null, 8, ["class"]))
          ], 2)
        ], 2),
        !!props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: normalizeClass(getLabelClasses())
        }, toDisplayString(props.label), 3)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
export { _sfc_main as _ };
