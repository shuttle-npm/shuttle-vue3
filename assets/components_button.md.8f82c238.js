import { _ as _sfc_main$2 } from "./chunks/Alert.c6e8ba04.js";
import { _ as _sfc_main$4 } from "./chunks/Button.02a79404.js";
import { _ as _sfc_main$1 } from "./chunks/ButtonGroup.88c9fd55.js";
import { _ as _sfc_main$3 } from "./chunks/Checkbox.f5a3fc3b.js";
import { r as render } from "./chunks/PlayIcon.eb003f99.js";
import { e as ref, b as createElementBlock, a as createVNode, u as unref, g as createBaseVNode, l as withCtx, h as createTextVNode, i as createStaticVNode, o as openBlock } from "./app.db6a9323.js";
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
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> outline </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> size </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getIcon </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">outline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">outline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Primary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">outline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">outline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Secondary</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">outline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">outline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Success</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">outline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">outline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Danger</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">outline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">outline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Warning</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">outline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">outline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Info</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Link</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PlayIcon</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@heroicons/vue/outline</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">PlayIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Custom Icon</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Disabled</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>icon</code></td><td><code>Component</code></td><td><code>undefined</code></td><td>Displays the given icon in front of the content.</td></tr><tr><td><code>type</code></td><td><code>String</code></td><td><code>primary</code></td><td>The type of button:<br>- <code>primary</code><br>- <code>secondary</code><br>- <code>success</code><br>- <code>danger</code><br>- <code>warning</code><br>- <code>info</code><br>- <code>link</code></td></tr><tr><td><code>size</code></td><td><code>String</code></td><td><code>&quot;&quot;</code></td><td>The size of the form:<br>- <code>xs</code><br>- <code>sm</code><br>- <code>lg</code><br>- an empty value would be the default size.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>click</code></td><td>Called when the button is clicked.</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><code>sv-button</code><ul><li><code>sv-button--{variant}</code></li><li><code>sv-button--outline-{variant}</code></li><li><code>sv-button--{size}</code></li><li><code>sv-button--disabled</code></li></ul></li><li><code>sv-button__icon</code><ul><li><code>sv-button__icon--{variant}</code></li><li><code>sv-button__icon--disabled</code></li></ul></li></ul>', 8);
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
