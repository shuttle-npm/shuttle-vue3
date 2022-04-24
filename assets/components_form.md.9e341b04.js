import { _ as _sfc_main$3 } from "./chunks/Button.106d7cb6.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { o as openBlock, b as createElementBlock, j as renderSlot, n as normalizeClass, a as createVNode, k as withCtx, u as unref, f as createBaseVNode, g as createTextVNode, h as createStaticVNode } from "./app.6385b3a4.js";
import { _ as _sfc_main$2 } from "./chunks/Input.8e0d72d4.js";
import "./chunks/useAlert.376fce85.js";
import "./chunks/Alert.e855adf8.js";
const _sfc_main$1 = {
  props: {
    size: {
      type: String,
      default: true
    },
    svClass: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
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
        useCoreClass("sv-form--large", getOptions(props.size == "large"))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        class: normalizeClass(getClasses())
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
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
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>String</code></td><td><code>primary</code></td><td>The type of button:<br>- <code>primary</code><br>- <code>secondary</code><br>- <code>success</code><br>- <code>danger</code><br>- <code>warning</code><br>- <code>info</code><br>- <code>link</code></td></tr><tr><td><code>icon</code></td><td><code>Component</code></td><td><code>undefined</code></td><td>Displays the given icon in front of the content.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td>Called when the button is clicked.</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><p><code>sv-button</code></p><ul><li><code>--{variant}</code></li><li><code>--disabled</code></li></ul></li><li><p><code>sv-button__icon</code></p><ul><li><code>--{variant}</code></li><li><code>--disabled</code></li></ul></li></ul>', 6);
const __pageData = '{"title":"Form","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/form.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$1), { class: "border border-solid border-gray-600 p-2 rounded" }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$2), { label: "What is your favourite movie?" }),
            createVNode(unref(_sfc_main$3), { class: "pt-2" }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_4
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
