import "./chunks/Alert.vue_vue_type_style_index_0_scoped_true_lang.c52e1b18.js";
import { _ as _sfc_main$1 } from "./chunks/Toggle.fa29b5e4.js";
import { r as render } from "./chunks/ThumbUpIcon.74fef59b.js";
import { r as render$1 } from "./chunks/ThumbDownIcon.1c8b3e74.js";
import { e as ref, f as computed, b as createElementBlock, g as createBaseVNode, t as toDisplayString, a as createVNode, u as unref, h as createTextVNode, i as createStaticVNode, o as openBlock } from "./app.b78d4ac8.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "toggle",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Toggle "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#toggle",
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
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Toggle</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Use express delivery?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="position" tabindex="-1">Position <a class="header-anchor" href="#position" aria-hidden="true">#</a></h3>', 2);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "icon",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Icon "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#icon",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ThumbDownIcon</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ThumbUpIcon</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@heroicons/vue/outline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Toggle</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Use express delivery?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">onIcon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ThumbUpIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">offIcon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ThumbDownIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h3>', 2);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Toggle</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Is this disabled?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>String</code></td><td>&quot;&quot;</td><td>The label to display for the input.</td></tr><tr><td><code>layout</code></td><td><code>String</code></td><td><code>block</code></td><td>The layout of the input when a label is included:<br>- <code>block</code><br>- <code>inline</code></td></tr><tr><td><code>onIcon</code></td><td><code>null</code></td><td><code>undefined</code></td><td>An icon that should be used when the toggle switch is in the <code>on</code> / <code>true</code> state.</td></tr><tr><td><code>offIcon</code></td><td><code>null</code></td><td><code>undefined</code></td><td>An icon that should be used when the toggle switch is in the <code>off</code> / <code>false</code> state.</td></tr><tr><td><code>position</code></td><td><code>String</code></td><td><code>end</code></td><td>The position of the toggle switch: <br>- <code>start</code><br>- <code>end</code></td></tr><tr><td><code>placeholder</code></td><td><code>String</code></td><td>&quot;&quot;</td><td>The placeholder to display for the input.</td></tr><tr><td><code>disabled</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Indicates whether the toggle is in a disabled state.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td>Called when the checkbox is clicked. This occurs after the <code>update:modelValue</code> event has been emitted.</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><code>sv-toggle</code><ul><li><code>sv-toggle--on</code></li><li><code>sv-toggle--off</code></li><li><code>sv-toggle__slider--disabled</code></li></ul></li><li><code>sv-toggle__slider</code><ul><li><code>sv-toggle__slider--on</code></li><li><code>sv-toggle__slider--off</code></li><li><code>sv-toggle__slider--disabled</code></li></ul></li><li><code>sv-toggle__box</code><ul><li><code>sv-toggle__box--on</code></li><li><code>sv-toggle__box--off</code></li><li><code>sv-toggle__box--disabled</code></li></ul></li><li><code>sv-toggle__icon</code><ul><li><code>sv-toggle__box--on</code></li><li><code>sv-toggle__box--off</code></li><li><code>sv-toggle__box--disabled</code></li></ul></li><li><code>sv-toggle__label</code><ul><li><code>sv-toggle__label--on</code></li><li><code>sv-toggle__label--off</code></li><li><code>sv-toggle__label--disabled</code></li></ul></li></ul>', 7);
const __pageData = '{"title":"Toggle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Label","slug":"label"},{"level":3,"title":"Position","slug":"position"},{"level":3,"title":"Icon","slug":"icon"},{"level":3,"title":"Disabled","slug":"disabled"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/toggle.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const value = ref(false);
    const positionStart = ref(false);
    const getPosition = computed(() => {
      return positionStart.value ? "start" : "end";
    });
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
          modelValue: positionStart.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => positionStart.value = $event),
          label: "Use toggle position 'start'?",
          class: "mb-4"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value.value = $event),
          label: "Use express delivery?",
          position: unref(getPosition)
        }, null, 8, ["modelValue", "position"]),
        _hoisted_6,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value.value = $event),
          label: "Use express delivery?",
          onIcon: unref(render),
          offIcon: unref(render$1)
        }, null, 8, ["modelValue", "onIcon", "offIcon"]),
        _hoisted_7,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => value.value = $event),
          label: "Is this disabled?",
          disabled: ""
        }, null, 8, ["modelValue"]),
        _hoisted_9
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
