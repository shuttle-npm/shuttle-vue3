import { u as useAlert } from "./useAlert.ca6e71dc.js";
import { u as useCoreClass } from "./useCoreClass.4c1eebb8.js";
import { _ as _sfc_main$1 } from "./Alert.18fe8eec.js";
import { o as openBlock, b as createElementBlock, n as normalizeClass, t as toDisplayString, d as createCommentVNode, f as createBaseVNode, c as createBlock, i as resolveDynamicComponent, u as unref } from "../app.f6d61257.js";
const _hoisted_1 = ["type", "value", "placeholder", "autocomplete"];
const _sfc_main = {
  props: {
    alert: {
      type: Object
    },
    autocomplete: {
      type: String
    },
    iconEnd: {
      type: null
    },
    iconEndClickable: {
      type: Boolean,
      default: false
    },
    iconStart: {
      type: null
    },
    iconStartClickable: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    layout: {
      type: String,
      default: "block"
    },
    modelValue: {
      type: [String, Number, Date],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    svClass: {
      type: Object
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: ["update:modelValue", "iconStartClick", "iconEndClick"],
  setup(__props, { emit }) {
    const props = __props;
    const getIconStart = () => {
      return props.iconStart ? props.iconStart : null;
    };
    const getIconEnd = () => {
      return props.iconEnd ? props.iconEnd : null;
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
        useCoreClass("sv-input", getOptions(true)),
        useCoreClass("sv-input--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input--block", getOptions(getLayout() === "block"))
      ];
    };
    const getLabelClasses = () => {
      return [
        useCoreClass("sv-input__label", getOptions(true)),
        useCoreClass("sv-input__label--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input__label--block", getOptions(getLayout() === "block"))
      ];
    };
    const getInputClasses = () => {
      return [
        useCoreClass("sv-input__input", getOptions(true)),
        useCoreClass("sv-input__input--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input__input--block", getOptions(getLayout() === "block")),
        useCoreClass("sv-input__input--icon-end", getOptions(!!props.iconEnd)),
        useCoreClass("sv-input__input--icon-start", getOptions(!!props.iconStart))
      ];
    };
    const getInputContainerClasses = () => {
      return [
        useCoreClass("sv-input__input-container", getOptions(true)),
        useCoreClass("sv-input__input-container--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input__input-container--block", getOptions(getLayout() === "block")),
        useCoreClass("sv-input__input-container--icon-end", getOptions(!!props.iconEnd)),
        useCoreClass("sv-input__input-container--icon-start", getOptions(!!props.iconStart))
      ];
    };
    const getIconStartClasses = () => {
      return [
        useCoreClass("sv-input__icon-start", getOptions(!!props.iconStart)),
        useCoreClass("sv-input__icon-start--clickable", getOptions(!!props.iconStart && props.iconStartClickable))
      ];
    };
    const getIconEndClasses = () => {
      return [
        useCoreClass("sv-input__icon-end", getOptions(!!props.iconEnd)),
        useCoreClass("sv-input__icon-end--clickable", getOptions(!!props.iconEnd && props.iconEndClickable))
      ];
    };
    const getAlertClasses = () => {
      return [
        useCoreClass("sv-input__alert", getOptions(true)),
        useCoreClass("sv-input__alert--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input__alert--block", getOptions(getLayout() === "block"))
      ];
    };
    const iconStartClick = () => {
      if (!props.iconStartClickable) {
        return;
      }
      emit("iconStartClick");
    };
    const iconEndClick = () => {
      if (!props.iconEndClickable) {
        return;
      }
      emit("iconEndClick");
    };
    const alert = useAlert(props);
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses())
      }, [
        !!props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: normalizeClass(getLabelClasses())
        }, toDisplayString(props.label), 3)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(getInputContainerClasses())
        }, [
          !!props.iconStart ? (openBlock(), createBlock(resolveDynamicComponent(getIconStart == null ? void 0 : getIconStart()), {
            key: 0,
            class: normalizeClass(getIconStartClasses()),
            onClick: iconStartClick
          }, null, 8, ["class"])) : createCommentVNode("", true),
          createBaseVNode("input", {
            class: normalizeClass(getInputClasses()),
            type: (_a = props.type) != null ? _a : "text",
            value: props.modelValue,
            onInput: _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event.target.value)),
            placeholder: (_b = props.placeholder) != null ? _b : "",
            autocomplete: __props.autocomplete
          }, null, 42, _hoisted_1),
          !!props.iconEnd ? (openBlock(), createBlock(resolveDynamicComponent(getIconEnd == null ? void 0 : getIconEnd()), {
            key: 1,
            class: normalizeClass(getIconEndClasses()),
            onClick: iconEndClick
          }, null, 8, ["class"])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(getAlertClasses())
        }, [
          !!unref(alert) ? (openBlock(), createBlock(_sfc_main$1, {
            key: 0,
            message: unref(alert).message,
            variant: unref(alert).variant,
            icon: unref(alert).icon,
            dismissable: unref(alert).dismissable,
            onClick: unref(alert).click
          }, null, 8, ["message", "variant", "icon", "dismissable", "onClick"])) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
};
export { _sfc_main as _ };
