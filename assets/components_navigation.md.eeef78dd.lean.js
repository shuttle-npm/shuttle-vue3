import { _ as _sfc_main$1 } from "./chunks/Alert.650692f4.js";
import { _ as _sfc_main$3 } from "./chunks/Navigation.22eff5f0.js";
import { _ as _sfc_main$2 } from "./chunks/Toggle.f3ca38b9.js";
import { e as ref, b as createElementBlock, a as createVNode, u as unref, f as createBaseVNode, h as createStaticVNode, o as openBlock } from "./app.82593da7.js";
import "./chunks/useCoreClass.4c1eebb8.js";
import "./chunks/headlessui.esm.75837a0d.js";
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 4);
const _hoisted_5 = { class: "sv-border border-gray-400" };
const _hoisted_6 = /* @__PURE__ */ createStaticVNode("", 11);
const __pageData = '{"title":"Navigation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"Items","slug":"items"},{"level":3,"title":"Items","slug":"items-1"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/navigation.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const items = ref([
      {
        text: "Home",
        to: "/home"
      },
      {
        text: "Link",
        to: "/some-link"
      },
      {
        text: "Dropdown",
        items: [
          {
            text: "Action",
            to: "/action"
          },
          {
            text: "Another action",
            to: "/another-action"
          },
          {
            type: "divider"
          },
          {
            text: "Also disabled",
            disabled: true
          },
          {
            type: "divider"
          },
          {
            text: "Something else",
            to: "/something-else"
          }
        ]
      },
      {
        text: "Disabled",
        disabled: true
      }
    ]);
    const message = ref("You can click a navigation item to change this message.");
    const minimal = ref(false);
    const click = (item) => {
      message.value = `You clicked the "${item.text}" item that routes to "${item.to}".`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(unref(_sfc_main$1), {
          type: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: minimal.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => minimal.value = $event),
          label: "Minimal?",
          "sv-class": { "sv-toggle": "mb-2" }
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(unref(_sfc_main$3), {
            items: items.value,
            "sv-class": { "sv-navigation__link": "vt-doc-ignore" },
            onClick: click,
            minimal: minimal.value
          }, null, 8, ["items", "minimal"])
        ]),
        _hoisted_6
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
