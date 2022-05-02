import { o as openBlock, b as createElementBlock, n as normalizeClass, t as toDisplayString, d as createCommentVNode, g as createBaseVNode, F as Fragment, r as renderList, w as withKeys, c as createBlock, j as resolveDynamicComponent } from "../app.75bde27b.js";
import { u as useCoreClass } from "./useCoreClass.4c1eebb8.js";
const _hoisted_1 = ["onClick", "onKeydown"];
const _sfc_main = {
  props: {
    buttons: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    layout: {
      type: String,
      default: "block"
    },
    modelValue: {
      type: String,
      default: ""
    },
    svClass: {
      type: Object
    }
  },
  emits: ["update:modelValue", "click"],
  setup(__props, { emit }) {
    const props = __props;
    const click = (event, button) => {
      event.stopPropagation();
      event.preventDefault();
      if (props.disabled) {
        return;
      }
      emit("update:modelValue", button.value);
      emit("click", button);
    };
    const getIcon = (button) => {
      return button.icon ? button.icon : void 0;
    };
    const getLayout = () => {
      var _a;
      return ((_a = props.layout) != null ? _a : "block").toLowerCase();
    };
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-button-group", getOptions(true)),
        useCoreClass("sv-button-group--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-button-group--block", getOptions(getLayout() === "block"))
      ];
    };
    const getLabelClasses = () => {
      return [
        useCoreClass("sv-button-group__label", getOptions(true)),
        useCoreClass("sv-button-group__label--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-button-group__label--block", getOptions(getLayout() === "block"))
      ];
    };
    const getBoxClasses = () => {
      return [
        useCoreClass("sv-button-group__box", getOptions(true)),
        useCoreClass("sv-button-group__box--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-button-group__box--block", getOptions(getLayout() === "block"))
      ];
    };
    const getButtonClasses = (button) => {
      return [
        useCoreClass("sv-button-group__button", getOptions(true)),
        useCoreClass("sv-button-group__button--selected", getOptions(props.modelValue === button.value)),
        useCoreClass("sv-button-group__button--disabled", getOptions(props.disabled))
      ];
    };
    const getIconClasses = (button) => {
      return [
        useCoreClass("sv-button-group__button-icon", getOptions(true))
      ];
    };
    const getTextClasses = (button) => {
      return [
        useCoreClass("sv-button-group__button-text", getOptions(true))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses())
      }, [
        !!props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: normalizeClass(getLabelClasses())
        }, toDisplayString(props.label), 3)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(getBoxClasses())
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.buttons, (button) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(getButtonClasses(button)),
              onClick: ($event) => click($event, button),
              onKeydown: [
                withKeys(($event) => click($event, button), ["space"]),
                withKeys(($event) => click($event, button), ["enter"])
              ],
              tabindex: "0"
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(getIcon(button)), {
                class: normalizeClass(getIconClasses())
              }, null, 8, ["class"])),
              createBaseVNode("span", {
                class: normalizeClass(getTextClasses())
              }, toDisplayString(button.text), 3)
            ], 42, _hoisted_1);
          }), 256))
        ], 2)
      ], 2);
    };
  }
};
export { _sfc_main as _ };
