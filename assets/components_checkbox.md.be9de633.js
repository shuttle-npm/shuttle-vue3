import { u as useCoreClass } from "./chunks/useCoreClass.322213e7.js";
import { o as openBlock, c as createBlock, a as createVNode, b as createElementBlock, f as createBaseVNode, n as normalizeClass, i as resolveDynamicComponent, t as toDisplayString, d as createCommentVNode, e as ref, u as unref, g as createTextVNode, h as createStaticVNode } from "./app.7104fec2.js";
import { r as render$1, a as render$2 } from "./chunks/ThumbUpIcon.502944df.js";
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
      d: "M5 13l4 4L19 7"
    })
  ]);
}
const _sfc_main$1 = {
  props: {
    label: {
      type: String
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    checkedIcon: {
      type: null
    },
    uncheckedIcon: {
      type: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    svClass: {
      type: Object
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const click = () => {
      if (props.disabled) {
        return;
      }
      emit("update:modelValue", !props.modelValue);
    };
    const getIcon = () => {
      return props.modelValue ? !!props.checkedIcon ? props.checkedIcon : render : !!props.uncheckedIcon ? props.uncheckedIcon : null;
    };
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-checkbox", getOptions(true)),
        useCoreClass("sv-checkbox--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox--unchecked", getOptions(!props.modelValue)),
        useCoreClass("sv-checkbox--disabled", getOptions(props.disabled))
      ];
    };
    const getBoxClasses = () => {
      return [
        useCoreClass("sv-checkbox__box", getOptions(true)),
        useCoreClass("sv-checkbox__box--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox__box--unchecked", getOptions(!props.modelValue)),
        useCoreClass("sv-checkbox__box--disabled", getOptions(props.disabled))
      ];
    };
    const getIconClasses = () => {
      return [
        useCoreClass("sv-checkbox__icon", getOptions(true)),
        useCoreClass("sv-checkbox__icon--disabled", getOptions(props.disabled)),
        useCoreClass("sv-checkbox__icon--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox__icon--unchecked", getOptions(!props.modelValue))
      ];
    };
    const getLabelClasses = () => {
      return [
        useCoreClass("sv-checkbox__label", getOptions(true)),
        useCoreClass("sv-checkbox__label--disabled", getOptions(props.disabled)),
        useCoreClass("sv-checkbox__label--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox__label--unchecked", getOptions(!props.modelValue))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses()),
        onClick: click
      }, [
        createBaseVNode("div", {
          class: normalizeClass(getBoxClasses())
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(getIcon == null ? void 0 : getIcon()), {
            class: normalizeClass(getIconClasses())
          }, null, 8, ["class"]))
        ], 2),
        !!props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: normalizeClass(getLabelClasses())
        }, toDisplayString(props.label), 3)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "checkbox",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Checkbox "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#checkbox",
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
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Use express delivery?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-hidden="true">#</a></h3>', 2);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Use express delivery?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">checkedIcon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ThumbUpIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">uncheckedIcon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ThumbDownIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h3>', 2);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Is this disabled?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>String</code></td><td>&quot;&quot;</td><td>The label to display for the input.</td></tr><tr><td><code>layout</code></td><td><code>String</code></td><td><code>block</code></td><td>The layout of the input when a label is included:<br>- <code>block</code><br>- <code>inline</code></td></tr><tr><td><code>checkedIcon</code></td><td><code>null</code></td><td><code>undefined</code></td><td>An icon that should be used when the checkbox is in the <code>checked</code> / <code>true</code> state.</td></tr><tr><td><code>uncheckedIcon</code></td><td><code>null</code></td><td><code>undefined</code></td><td>An icon that should be used when the checkbox is in the <code>unchecked</code> / <code>false</code> state.</td></tr><tr><td><code>placeholder</code></td><td><code>String</code></td><td>&quot;&quot;</td><td>The placeholder to display for the input.</td></tr><tr><td><code>disabled</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Indicates whether the checkbox is in a disabled state.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><p><code>sv-checkbox</code></p><ul><li><code>sv-checkbox--checked</code></li><li><code>sv-checkbox--unchecked</code></li><li><code>sv-checkbox--disabled</code></li></ul></li><li><p><code>sv-checkbox__box</code></p><ul><li><code>sv-checkbox__box--checked</code></li><li><code>sv-checkbox__box--unchecked</code></li><li><code>sv-checkbox__box--disabled</code></li></ul></li><li><p><code>sv-checkbox__icon</code></p><ul><li><code>sv-checkbox__icon--checked</code></li><li><code>sv-checkbox__icon--unchecked</code></li><li><code>sv-checkbox__icon--disabled</code></li></ul></li><li><p><code>sv-checkbox__label</code></p><ul><li><code>sv-checkbox__label--checked</code></li><li><code>sv-checkbox__label--unchecked</code></li><li><code>sv-checkbox__label--disabled</code></li></ul></li></ul>', 5);
const __pageData = '{"title":"Checkbox","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Label","slug":"label"},{"level":3,"title":"Icon","slug":"icon"},{"level":3,"title":"Disabled","slug":"disabled"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/checkbox.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const value = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, "Value: " + toDisplayString(value.value), 1),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event)
        }, null, 8, ["modelValue"]),
        _hoisted_3,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          label: "Use express delivery?"
        }, null, 8, ["modelValue"]),
        _hoisted_4,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          label: "Use express delivery?",
          checkedIcon: unref(render$1),
          uncheckedIcon: unref(render$2)
        }, null, 8, ["modelValue", "checkedIcon", "uncheckedIcon"]),
        _hoisted_6,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value.value = $event),
          label: "Is this disabled?",
          disabled: true
        }, null, 8, ["modelValue"]),
        _hoisted_8
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
