import { o as openBlock, b as createElementBlock, k as renderSlot, n as normalizeClass, e as ref, a as createVNode, u as unref, c as createBlock, d as createCommentVNode, w as withCtx, I as withModifiers, g as createBaseVNode, h as createTextVNode, i as createStaticVNode } from "./app.b78d4ac8.js";
import { _ as _sfc_main$3 } from "./chunks/Alert.1e6ceba5.js";
import { _ as _sfc_main$5 } from "./chunks/Button.7d01a20a.js";
import { _ as _sfc_main$2 } from "./chunks/ButtonGroup.5be06809.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { _ as _sfc_main$4 } from "./chunks/Input.032adb68.js";
import { r as render } from "./chunks/ThumbDownIcon.1c8b3e74.js";
const _sfc_main$1 = {
  props: {
    size: {
      type: String,
      default: ""
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
        useCoreClass("sv-form--sm", getOptions(props.size == "sm")),
        useCoreClass("sv-form--md", getOptions(props.size == "md")),
        useCoreClass("sv-form--lg", getOptions(props.size == "lg"))
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
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Submit");
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>size</code></td><td><code>String</code></td><td><code>&quot;&quot;</code></td><td>The size of the form:<br>- <code>sm</code><br>- <code>md</code><br>- <code>lg</code><br>- an empty value would be the full width.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>submit</code></td><td>Called when the form is submitted (enter is pressed within the form).</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><code>sv-form</code><ul><li><code>sv-form--sm</code></li><li><code>sv-form--md</code></li><li><code>sv-form--lg</code></li></ul></li></ul>', 6);
const __pageData = '{"title":"Form","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/form.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const size = ref("");
    const buttons = ref([
      {
        text: "empty",
        value: ""
      },
      {
        text: "sm",
        value: "sm"
      },
      {
        text: "md",
        value: "md"
      },
      {
        text: "lg",
        value: "lg"
      }
    ]);
    const message = ref("");
    const count = ref(0);
    const submitted = () => {
      count.value++;
      message.value = `Form submission count: ${count.value}`;
    };
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
        !!message.value ? (openBlock(), createBlock(unref(_sfc_main$3), {
          key: 0,
          variant: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"])) : createCommentVNode("", true),
        createVNode(unref(_sfc_main$1), {
          class: "border border-solid border-gray-600 p-2 rounded",
          size: size.value,
          onSubmit: _cache[2] || (_cache[2] = withModifiers(($event) => submitted(), ["prevent"]))
        }, {
          default: withCtx(() => [
            _hoisted_3,
            createBaseVNode("div", null, [
              createVNode(unref(_sfc_main$4), {
                label: "Input label",
                class: "pb-2",
                "icon-start": unref(render),
                modelValue: message.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => message.value = $event)
              }, null, 8, ["icon-start", "modelValue"])
            ]),
            createVNode(unref(_sfc_main$5), {
              class: "pt-2",
              type: "submit"
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["size"]),
        _hoisted_5
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
