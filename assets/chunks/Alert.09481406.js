import { u as useCoreClass } from "./useCoreClass.322213e7.js";
import { o as openBlock, c as createBlock, a as createVNode, b as createElementBlock, n as normalizeClass, i as resolveDynamicComponent, f as createBaseVNode, t as toDisplayString, u as unref, d as createCommentVNode } from "../app.a503ecea.js";
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
      d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
const _sfc_main = {
  props: {
    name: { type: String },
    variant: { type: String },
    message: { type: String },
    dismissable: { type: Boolean },
    icon: { type: null },
    svClass: {
      type: Object
    }
  },
  emits: ["remove"],
  setup(__props, { emit }) {
    const props = __props;
    const icon = () => {
      return props.icon ? props.icon : void 0;
    };
    const getOptions = () => {
      var _a;
      return {
        svClass: props.svClass,
        include: true,
        variant: (_a = props.variant) != null ? _a : "primary"
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-alert", getOptions())
      ];
    };
    const getIconClasses = () => {
      return [
        useCoreClass("sv-alert__icon", getOptions())
      ];
    };
    const getCloseIconClasses = () => {
      return [
        useCoreClass("sv-alert__icon-close", getOptions())
      ];
    };
    const getMessageClasses = () => {
      return [
        useCoreClass("sv-alert__message", getOptions())
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses())
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(icon()), {
          class: normalizeClass(getIconClasses())
        }, null, 8, ["class"])),
        createBaseVNode("div", {
          class: normalizeClass(getMessageClasses())
        }, toDisplayString(__props.message), 3),
        __props.dismissable ? (openBlock(), createBlock(unref(render), {
          key: 0,
          class: normalizeClass(getCloseIconClasses()),
          onClick: _cache[0] || (_cache[0] = ($event) => emit("remove", _ctx.alert))
        }, null, 8, ["class"])) : createCommentVNode("", true)
      ], 2);
    };
  }
};
export { _sfc_main as _ };
