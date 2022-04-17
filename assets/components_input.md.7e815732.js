import { u as useCoreClass } from "./chunks/useCoreClass.322213e7.js";
import { c as createBlock, a as createVNode, o as openBlock, b as createElementBlock, n as normalizeClass, t as toDisplayString, d as createCommentVNode, f as createBaseVNode, i as resolveDynamicComponent, e as ref, u as unref, g as createTextVNode, h as createStaticVNode } from "./app.7104fec2.js";
function render$2(_ctx, _cache) {
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
      d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
    })
  ]);
}
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
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    }),
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
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
      d: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
    })
  ]);
}
const _hoisted_1$1 = ["type", "value", "placeholder"];
const _sfc_main$1 = {
  props: {
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
            placeholder: (_b = props.placeholder) != null ? _b : ""
          }, null, 42, _hoisted_1$1),
          !!props.iconEnd ? (openBlock(), createBlock(resolveDynamicComponent(getIconEnd == null ? void 0 : getIconEnd()), {
            key: 1,
            class: normalizeClass(getIconEndClasses()),
            onClick: iconEndClick
          }, null, 8, ["class"])) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "input",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Input "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#input",
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
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "label",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Label "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#label",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Block layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Inline layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-hidden="true">#</a></h3>', 2);
const _hoisted_6 = { class: "mb-4" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Block layout</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-start</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ShieldExclamationIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">icon-start-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-start-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconStartClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getEndIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">icon-end-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-end-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconEndClick</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getInputType</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Inline layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inline</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-start</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ShieldExclamationIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">icon-start-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-start-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconStartClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getEndIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">icon-end-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-end-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconEndClick</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getInputType</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>icon-end</code></td><td><code>null</code></td><td><code>undefined</code></td><td>An icon to display at the end of the input.</td></tr><tr><td><code>icon-end-clickable</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>If <code>true</code> the <code>icon-end</code> is clickable.</td></tr><tr><td><code>icon-start</code></td><td><code>null</code></td><td><code>undefined</code></td><td>An icon to display at the start of the input.</td></tr><tr><td><code>icon-start-clickable</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>If <code>true</code> the <code>icon-start</code> is clickable.</td></tr><tr><td><code>label</code></td><td><code>String</code></td><td>&quot;&quot;</td><td>The label to display for the input.</td></tr><tr><td><code>layout</code></td><td><code>String</code></td><td><code>block</code></td><td>The layout of the input when a label is included:<br>- <code>block</code><br>- <code>inline</code></td></tr><tr><td><code>placeholder</code></td><td><code>String</code></td><td>&quot;&quot;</td><td>The placeholder to display for the input.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr><tr><td><code>type</code></td><td><code>String</code></td><td><code>text</code></td><td>The type of the input value (same as native typres).</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><p><code>sv-input</code></p><ul><li><code>--block</code></li><li><code>--inline</code></li></ul></li><li><p><code>sv-input__label</code></p><ul><li><code>--block</code></li><li><code>--inline</code></li></ul></li></ul>', 5);
const __pageData = '{"title":"Input","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Label","slug":"label"},{"level":3,"title":"Icon","slug":"icon"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/input.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const value = ref("");
    const iconEndClickCount = ref(0);
    const iconStartClickCount = ref(0);
    const iconStartClick = () => {
      iconStartClickCount.value += 1;
    };
    const iconEndClick = () => {
      iconEndClickCount.value += 1;
    };
    const getEndIcon = () => {
      return iconEndClickCount.value % 2 == 0 ? render$1 : render$2;
    };
    const getInputType = () => {
      return iconEndClickCount.value % 2 == 0 ? "text" : "password";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, "Value: " + toDisplayString(value.value), 1),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          placeholder: "Please type something here"
        }, null, 8, ["modelValue"]),
        _hoisted_3,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          label: "Block layout"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          label: "Inline layout",
          layout: "inline",
          class: "mt-2"
        }, null, 8, ["modelValue"]),
        _hoisted_4,
        createBaseVNode("div", _hoisted_6, [
          createTextVNode(" Icon start click count: " + toDisplayString(iconStartClickCount.value) + " ", 1),
          _hoisted_7,
          createTextVNode(" Icon end click count: " + toDisplayString(iconEndClickCount.value), 1)
        ]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value.value = $event),
          label: "Block layout",
          "icon-start": unref(render),
          "icon-start-clickable": "",
          onIconStartClick: iconStartClick,
          "icon-end": getEndIcon(),
          "icon-end-clickable": "",
          onIconEndClick: iconEndClick,
          type: getInputType()
        }, null, 8, ["modelValue", "icon-start", "icon-end", "type"]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value.value = $event),
          label: "Inline layout",
          layout: "inline",
          class: "mt-2",
          "icon-start": unref(render),
          "icon-start-clickable": "",
          onIconStartClick: iconStartClick,
          "icon-end": getEndIcon(),
          "icon-end-clickable": "",
          onIconEndClick: iconEndClick,
          type: getInputType()
        }, null, 8, ["modelValue", "icon-start", "icon-end", "type"]),
        _hoisted_8
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };