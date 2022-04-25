import { _ as _sfc_main$1 } from "./chunks/Alert.e855adf8.js";
import { _ as _sfc_main$2 } from "./chunks/ButtonGroup.24b569cb.js";
import { o as openBlock, c as createBlock, a as createVNode, e as ref, b as createElementBlock, f as createBaseVNode, t as toDisplayString, u as unref, g as createTextVNode, h as createStaticVNode } from "./app.6385b3a4.js";
import "./chunks/useCoreClass.4c1eebb8.js";
function render$1(_ctx, _cache) {
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
      d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
    })
  ]);
}
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
      d: "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "button-group",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Button Group "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#button-group",
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
const _hoisted_3 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "with-icon",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("With Icon "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#with-icon",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode("", 6);
const __pageData = '{"title":"Button Group","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Label","slug":"label"},{"level":3,"title":"With Icon","slug":"with-icon"},{"level":3,"title":"Disabled","slug":"disabled"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/button-group.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const value = ref();
    const message = ref("You can click a button to change this message.");
    const click = (button) => {
      message.value = `You clicked the "${button.text}" button with value "${button.value}".`;
    };
    const buttons = ref([
      {
        text: "Left",
        value: "left-value"
      },
      {
        text: "Middle",
        value: "middle-value"
      },
      {
        text: "Right",
        value: "right-value"
      }
    ]);
    const buttonsWithIcon = ref([
      {
        text: "Left",
        value: "left-value",
        icon: render$1
      },
      {
        text: "Middle",
        value: "middle-value"
      },
      {
        text: "Right",
        value: "right-value",
        icon: render
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, "Value: " + toDisplayString(value.value), 1),
        createVNode(unref(_sfc_main$1), {
          variant: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"]),
        createVNode(unref(_sfc_main$2), {
          buttons: buttons.value,
          onClick: click,
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event)
        }, null, 8, ["buttons", "modelValue"]),
        _hoisted_3,
        createVNode(unref(_sfc_main$2), {
          label: "Block layout",
          buttons: buttons.value,
          onClick: click,
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event)
        }, null, 8, ["buttons", "modelValue"]),
        createVNode(unref(_sfc_main$2), {
          label: "Inline layout",
          layout: "inline",
          buttons: buttons.value,
          onClick: click,
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          class: "mt-2"
        }, null, 8, ["buttons", "modelValue"]),
        _hoisted_5,
        createVNode(unref(_sfc_main$2), {
          buttons: buttonsWithIcon.value,
          onClick: click,
          modelValue: value.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value.value = $event)
        }, null, 8, ["buttons", "modelValue"]),
        _hoisted_6,
        createVNode(unref(_sfc_main$2), {
          buttons: buttonsWithIcon.value,
          onClick: click,
          modelValue: value.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value.value = $event),
          disabled: true
        }, null, 8, ["buttons", "modelValue"]),
        _hoisted_8
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
