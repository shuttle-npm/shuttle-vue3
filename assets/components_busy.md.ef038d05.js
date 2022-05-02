import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { o as openBlock, b as createElementBlock, c as createBlock, n as normalizeClass, j as resolveDynamicComponent, g as createBaseVNode, _ as _export_sfc, i as createStaticVNode, e as ref, t as toDisplayString, a as createVNode, u as unref, d as createCommentVNode, h as createTextVNode } from "./app.e1321d96.js";
import { _ as _sfc_main$3 } from "./chunks/Checkbox.e1f16576.js";
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_1$2,
  _hoisted_2$2
];
const _sfc_main$2 = {
  props: {
    icon: {
      type: null
    },
    svClass: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const getIcon = () => {
      return props.icon ? props.icon : void 0;
    };
    const getOptions = () => {
      return {
        svClass: props.svClass,
        include: true
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-busy", getOptions())
      ];
    };
    const getIconClasses = () => {
      return [
        useCoreClass("sv-busy__icon", getOptions())
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses())
      }, [
        !!getIcon() ? (openBlock(), createBlock(resolveDynamicComponent(getIcon()), {
          key: 0,
          class: normalizeClass(getIconClasses())
        }, null, 8, ["class"])) : (openBlock(), createElementBlock("svg", {
          key: 1,
          role: "status",
          class: normalizeClass(getIconClasses()),
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _hoisted_3$2, 2))
      ], 2);
    };
  }
};
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  width: "57",
  height: "57",
  viewBox: "0 0 57 57",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<g transform="translate(1 1)" stroke-width="2"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>', 1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [
    createBaseVNode("g", {
      fill: "none",
      "fill-rule": "evenodd",
      class: normalizeClass(_ctx.class)
    }, _hoisted_3$1, 2)
  ]);
}
var IconSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "strip",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Strip "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#strip",
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
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Busy</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Busy</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">!!</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">IconSpinner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>icon</code></td><td><code>Component</code></td><td><code>undefined</code></td><td>Displays the given icon.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><code>sv-busy</code></li><li><code>sv-busy__icon</code></li></ul>', 5);
const __pageData = '{"title":"Strip","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/busy.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const custom = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, toDisplayString(_ctx.icon), 1),
        createVNode(unref(_sfc_main$3), {
          modelValue: custom.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => custom.value = $event),
          label: "Custom icon?",
          class: "mb-2"
        }, null, 8, ["modelValue"]),
        !custom.value ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 0 })) : createCommentVNode("", true),
        !!custom.value ? (openBlock(), createBlock(unref(_sfc_main$2), {
          key: 1,
          icon: IconSpinner
        })) : createCommentVNode("", true),
        _hoisted_3
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
