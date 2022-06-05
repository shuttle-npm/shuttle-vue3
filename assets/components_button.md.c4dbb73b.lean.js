import { _ as _sfc_main$2 } from "./chunks/Alert.1e6ceba5.js";
import { _ as _sfc_main$4 } from "./chunks/Button.7d01a20a.js";
import { _ as _sfc_main$1 } from "./chunks/ButtonGroup.5be06809.js";
import { _ as _sfc_main$3 } from "./chunks/Checkbox.cbc3ce68.js";
import { r as render } from "./chunks/PlayIcon.3c4c388c.js";
import { e as ref, b as createElementBlock, a as createVNode, u as unref, g as createBaseVNode, w as withCtx, h as createTextVNode, i as createStaticVNode, o as openBlock } from "./app.b78d4ac8.js";
import "./chunks/useCoreClass.4c1eebb8.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "button",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Button "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#button",
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
const _hoisted_3 = { class: "flex flex-row flex-wrap" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Primary");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Secondary");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Success");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Danger");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Warning");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Info");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Link");
const _hoisted_11 = /* @__PURE__ */ createStaticVNode("", 8);
const __pageData = '{"title":"Button","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/button.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const message = ref("You can click a button to change this message.");
    const outline = ref(false);
    const icon = ref(false);
    const size = ref("");
    const buttons = ref([
      {
        text: "empty",
        value: ""
      },
      {
        text: "xs",
        value: "xs"
      },
      {
        text: "sm",
        value: "sm"
      },
      {
        text: "lg",
        value: "lg"
      }
    ]);
    const getIcon = () => {
      return icon.value ? render : void 0;
    };
    const click = (type) => {
      message.value = `You clicked the "${type}" button.`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$1), {
          modelValue: size.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event),
          buttons: buttons.value,
          class: "mb-4"
        }, null, 8, ["modelValue", "buttons"]),
        createVNode(unref(_sfc_main$2), {
          variant: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"]),
        createVNode(unref(_sfc_main$3), {
          modelValue: outline.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => outline.value = $event),
          label: "Outline?",
          class: "mb-2"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$3), {
          modelValue: icon.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => icon.value = $event),
          label: "Icon?",
          class: "mb-4"
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(unref(_sfc_main$4), {
            variant: "primary",
            onClick: _cache[3] || (_cache[3] = ($event) => click("primary")),
            outline: outline.value,
            size: size.value,
            icon: getIcon()
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }, 8, ["outline", "size", "icon"]),
          createVNode(unref(_sfc_main$4), {
            variant: "secondary",
            class: "ml-2",
            onClick: _cache[4] || (_cache[4] = ($event) => click("secondary")),
            outline: outline.value,
            size: size.value,
            icon: getIcon()
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }, 8, ["outline", "size", "icon"]),
          createVNode(unref(_sfc_main$4), {
            variant: "success",
            class: "ml-2",
            onClick: _cache[5] || (_cache[5] = ($event) => click("success")),
            outline: outline.value,
            size: size.value,
            icon: getIcon()
          }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }, 8, ["outline", "size", "icon"]),
          createVNode(unref(_sfc_main$4), {
            variant: "danger",
            class: "ml-2",
            onClick: _cache[6] || (_cache[6] = ($event) => click("danger")),
            outline: outline.value,
            size: size.value,
            icon: getIcon()
          }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }, 8, ["outline", "size", "icon"]),
          createVNode(unref(_sfc_main$4), {
            variant: "warning",
            class: "ml-2",
            onClick: _cache[7] || (_cache[7] = ($event) => click("warning")),
            outline: outline.value,
            size: size.value,
            icon: getIcon()
          }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }, 8, ["outline", "size", "icon"]),
          createVNode(unref(_sfc_main$4), {
            variant: "info",
            class: "ml-2",
            onClick: _cache[8] || (_cache[8] = ($event) => click("info")),
            outline: outline.value,
            size: size.value,
            icon: getIcon()
          }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }, 8, ["outline", "size", "icon"]),
          createVNode(unref(_sfc_main$4), {
            variant: "link",
            class: "ml-2",
            onClick: _cache[9] || (_cache[9] = ($event) => click("link")),
            size: size.value,
            icon: getIcon()
          }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }, 8, ["size", "icon"])
        ]),
        _hoisted_11
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
