import { _ as _sfc_main$4 } from "./chunks/Button.5598b7d0.js";
import { _ as _sfc_main$2 } from "./chunks/ButtonGroup.b53b94ea.js";
import { o as openBlock, b as createElementBlock, j as renderSlot, n as normalizeClass, H as withModifiers, e as ref, a as createVNode, u as unref, k as withCtx, f as createBaseVNode, g as createTextVNode, h as createStaticVNode } from "./app.de3fe290.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { _ as _sfc_main$3 } from "./chunks/Input.bc0d53ea.js";
import "./chunks/useAlert.8478351b.js";
import "./chunks/Alert.1b1f4621.js";
const _hoisted_1$1 = ["onSubmit"];
const _sfc_main$1 = {
  props: {
    size: {
      type: String,
      default: "full"
    },
    svClass: {
      type: Object
    }
  },
  emits: ["submit"],
  setup(__props, { emit }) {
    const props = __props;
    const submit = () => {
      emit("submit");
    };
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-form", getOptions(true)),
        useCoreClass("sv-form--small", getOptions(props.size == "small")),
        useCoreClass("sv-form--medium", getOptions(props.size == "medium")),
        useCoreClass("sv-form--large", getOptions(props.size == "large")),
        useCoreClass("sv-form--full", getOptions(props.size == "full"))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: normalizeClass(getClasses()),
        onSubmit: withModifiers(submit, ["prevent"])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 42, _hoisted_1$1);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "form",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Form "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#form",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "examples",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Examples "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#examples",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Submit");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode("", 6);
const __pageData = '{"title":"Form","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/form.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const size = ref("full");
    const buttons = ref([
      {
        text: "small",
        value: "small"
      },
      {
        text: "medium",
        value: "medium"
      },
      {
        text: "large",
        value: "large"
      },
      {
        text: "full",
        value: "full"
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$2), {
          modelValue: size.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event),
          buttons: buttons.value,
          class: "mb-4"
        }, null, 8, ["modelValue", "buttons"]),
        createVNode(unref(_sfc_main$1), {
          class: "border border-solid border-gray-600 p-2 rounded",
          size: size.value
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$3), {
              label: "Input label",
              class: "pb-2"
            }),
            createVNode(unref(_sfc_main$4), { class: "pt-2" }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["size"]),
        _hoisted_4
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
