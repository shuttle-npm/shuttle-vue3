import { u as useCoreClass } from "./useCoreClass.4c1eebb8.js";
import { o as openBlock, c as createBlock, a as createVNode, b as createElementBlock, g as createBaseVNode, n as normalizeClass, j as resolveDynamicComponent, t as toDisplayString, d as createCommentVNode } from "../app.75bde27b.js";
function render(_ctx, _cache) {
  return openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 13l4 4L19 7"
    })
  ]);
}
const _sfc_main = {
  props: {
    label: {
      type: String
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    checkedIcon: {
      type: null
    },
    uncheckedIcon: {
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
      return props.modelValue ? !!props.checkedIcon ? props.checkedIcon : render : !!props.uncheckedIcon ? props.uncheckedIcon : null;
    };
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-checkbox", getOptions(true)),
        useCoreClass("sv-checkbox--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox--unchecked", getOptions(!props.modelValue)),
        useCoreClass("sv-checkbox--disabled", getOptions(props.disabled))
      ];
    };
    const getBoxClasses = () => {
      return [
        useCoreClass("sv-checkbox__box", getOptions(true)),
        useCoreClass("sv-checkbox__box--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox__box--unchecked", getOptions(!props.modelValue)),
        useCoreClass("sv-checkbox__box--disabled", getOptions(props.disabled))
      ];
    };
    const getIconClasses = () => {
      return [
        useCoreClass("sv-checkbox__icon", getOptions(true)),
        useCoreClass("sv-checkbox__icon--disabled", getOptions(props.disabled)),
        useCoreClass("sv-checkbox__icon--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox__icon--unchecked", getOptions(!props.modelValue))
      ];
    };
    const getLabelClasses = () => {
      return [
        useCoreClass("sv-checkbox__label", getOptions(true)),
        useCoreClass("sv-checkbox__label--disabled", getOptions(props.disabled)),
        useCoreClass("sv-checkbox__label--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox__label--unchecked", getOptions(!props.modelValue))
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
          (openBlock(), createBlock(resolveDynamicComponent(getIcon == null ? void 0 : getIcon()), {
            class: normalizeClass(getIconClasses())
          }, null, 8, ["class"]))
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
