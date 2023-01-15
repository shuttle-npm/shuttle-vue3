import { _ as _sfc_main$3 } from "./chunks/Alert.8f88d4e2.js";
import { _ as _sfc_main$1 } from "./chunks/Checkbox.d2234ddc.js";
import { _ as _sfc_main$2 } from "./chunks/Input.1ffbbb7d.js";
import { _ as _sfc_main$4 } from "./chunks/ValidationMessage.7d03ed6b.js";
import { c as createBlock, a as createVNode, o as openBlock, e as ref, b as createElementBlock, g as createBaseVNode, t as toDisplayString, u as unref, h as createTextVNode, w as withCtx, i as createStaticVNode } from "./app.c06a58f8.js";
import "./chunks/useCoreClass.4c1eebb8.js";
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
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Please type something here</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">readonly</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">readonly</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Please type something here (4 rows)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">readonly</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">readonly</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rows</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="label" tabindex="-1">Label <a class="header-anchor" href="#label" aria-hidden="true">#</a></h3>', 2);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Block layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Inline layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Block layout (4 rows)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rows</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">  /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Inline layout (4 rows)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rows</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-hidden="true">#</a></h3>', 2);
const _hoisted_7 = { class: "mb-4" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Block layout</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-start</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ShieldExclamationIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">icon-start-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-start-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconStartClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getEndIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">icon-end-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-end-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconEndClick</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getInputType</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Inline layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inline</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-start</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ShieldExclamationIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">icon-start-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-start-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconStartClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getEndIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#C792EA;">icon-end-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-end-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconEndClick</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getInputType</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Block layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-start</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ShieldExclamationIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon-start-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-start-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconStartClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getEndIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon-end-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-end-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconEndClick</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getInputType</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rows</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">4</span></span>\n<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Inline layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-start</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ShieldExclamationIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon-start-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-start-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconStartClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">icon-end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getEndIcon</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon-end-clickable</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">icon-end-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">iconEndClick</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">getInputType</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rows</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">4</span></span>\n<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-hidden="true">#</a></h3><ul><li><code>message</code></li></ul>', 3);
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Block layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Alert</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a danger alert.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">outline</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Inline layout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ValidationMessage</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a validation message.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Block layout (4 rows)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rows</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Alert</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a danger alert.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">outline</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Inline layout (4 rows)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rows</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">layout</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ValidationMessage</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is a validation message.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>icon-end</code></td><td><code>null</code></td><td><code>undefined</code></td><td>An icon to display at the end of the input.</td></tr><tr><td><code>icon-end-clickable</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>If <code>true</code> the <code>icon-end</code> is clickable.</td></tr><tr><td><code>icon-start</code></td><td><code>null</code></td><td><code>undefined</code></td><td>An icon to display at the start of the input.</td></tr><tr><td><code>icon-start-clickable</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>If <code>true</code> the <code>icon-start</code> is clickable.</td></tr><tr><td><code>label</code></td><td><code>String</code></td><td>&quot;&quot;</td><td>The label to display for the input.</td></tr><tr><td><code>layout</code></td><td><code>String</code></td><td><code>block</code></td><td>The layout of the input when a label is included:<br>- <code>block</code><br>- <code>inline</code></td></tr><tr><td><code>placeholder</code></td><td><code>String</code></td><td>&quot;&quot;</td><td>The placeholder to display for the input.</td></tr><tr><td><code>readonly</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>When <code>true</code> the input value cannot be changed.</td></tr><tr><td><code>rows</code></td><td><code>Number</code></td><td><code>1</code></td><td>When <code>rows</code> is more than 1 the <code>input</code> is replaced by a <code>textarea</code>.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr><tr><td><code>type</code></td><td><code>String</code></td><td><code>text</code></td><td>The type of the input value (same as native typres).</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><code>sv-input</code><ul><li><code>sv-input--block</code></li><li><code>sv-input--inline</code></li><li><code>sv-input--readonly</code></li></ul></li><li><code>sv-input__label</code><ul><li><code>sv-input__label--block</code></li><li><code>sv-input__label--inline</code></li><li><code>sv-input__label--readonly</code></li></ul></li><li><code>sv-input__input</code><ul><li><code>sv-input__input--block</code></li><li><code>sv-input__input--inline</code></li><li><code>sv-input__input--readonly</code></li><li><code>sv-input__input--icon-end</code></li><li><code>sv-input__input--icon-start</code></li></ul></li><li><code>sv-input__input-continer</code><ul><li><code>sv-input__input-continer--block</code></li><li><code>sv-input__input-continer--inline</code></li><li><code>sv-input__input-continer--readonly</code></li><li><code>sv-input__input-continer--icon-end</code></li><li><code>sv-input__input-continer--icon-start</code></li></ul></li><li><code>sv-input__icon-start</code><ul><li><code>sv-input__icon-start--clickable</code></li></ul></li><li><code>sv-input__icon-end</code><ul><li><code>sv-input__icon-end--clickable</code></li></ul></li><li><code>sv-input__message</code><ul><li><code>sv-input__message--block</code></li><li><code>sv-input__message--inline</code></li></ul></li></ul>', 5);
const __pageData = '{"title":"Input","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Label","slug":"label"},{"level":3,"title":"Icon","slug":"icon"},{"level":3,"title":"Slot","slug":"slot"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/input.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const value = ref("");
    const iconEndClickCount = ref(0);
    const iconStartClickCount = ref(0);
    const readonly = ref(false);
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
    const message = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, "Value: " + toDisplayString(value.value), 1),
        createVNode(unref(_sfc_main$1), {
          modelValue: readonly.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => readonly.value = $event),
          label: "Readonly?",
          class: "mb-2"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          placeholder: "Please type something here",
          readonly: readonly.value
        }, null, 8, ["modelValue", "readonly"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          placeholder: "Please type something here (4 rows)",
          readonly: readonly.value,
          rows: "4",
          class: "mt-2"
        }, null, 8, ["modelValue", "readonly"]),
        _hoisted_3,
        createVNode(unref(_sfc_main$2), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value.value = $event),
          label: "Block layout"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value.value = $event),
          label: "Inline layout",
          layout: "inline",
          class: "mt-2"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => value.value = $event),
          label: "Block layout (4 rows)",
          rows: "4",
          class: "mt-2"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => value.value = $event),
          label: "Inline layout (4 rows)",
          layout: "inline",
          rows: "4",
          class: "mt-2"
        }, null, 8, ["modelValue"]),
        _hoisted_5,
        createBaseVNode("div", _hoisted_7, [
          createTextVNode(" Icon start click count: " + toDisplayString(iconStartClickCount.value) + " ", 1),
          _hoisted_8,
          createTextVNode(" Icon end click count: " + toDisplayString(iconEndClickCount.value), 1)
        ]),
        createVNode(unref(_sfc_main$2), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => value.value = $event),
          label: "Block layout",
          "icon-start": unref(render),
          "icon-start-clickable": "",
          onIconStartClick: iconStartClick,
          "icon-end": getEndIcon(),
          "icon-end-clickable": "",
          onIconEndClick: iconEndClick,
          type: getInputType()
        }, null, 8, ["modelValue", "icon-start", "icon-end", "type"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => value.value = $event),
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
        createVNode(unref(_sfc_main$2), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => value.value = $event),
          label: "Block layout",
          class: "mt-2",
          "icon-start": unref(render),
          "icon-start-clickable": "",
          onIconStartClick: iconStartClick,
          "icon-end": getEndIcon(),
          "icon-end-clickable": "",
          onIconEndClick: iconEndClick,
          type: getInputType(),
          rows: "4"
        }, null, 8, ["modelValue", "icon-start", "icon-end", "type"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => value.value = $event),
          label: "Inline layout",
          layout: "inline",
          class: "mt-2",
          "icon-start": unref(render),
          "icon-start-clickable": "",
          onIconStartClick: iconStartClick,
          "icon-end": getEndIcon(),
          "icon-end-clickable": "",
          onIconEndClick: iconEndClick,
          type: getInputType(),
          rows: "4"
        }, null, 8, ["modelValue", "icon-start", "icon-end", "type"]),
        _hoisted_9,
        createVNode(unref(_sfc_main$2), {
          modelValue: message.value,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => message.value = $event),
          label: "Block layout"
        }, {
          message: withCtx(() => [
            createVNode(unref(_sfc_main$3), {
              message: "This is a danger alert.",
              size: "sm",
              outline: "",
              class: "mt-2",
              variant: "danger"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: message.value,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => message.value = $event),
          label: "Inline layout",
          layout: "inline",
          class: "mt-2"
        }, {
          message: withCtx(() => [
            createVNode(unref(_sfc_main$4), { message: "This is a validation message." })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: message.value,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => message.value = $event),
          label: "Block layout (4 rows)",
          rows: "4",
          class: "mt-2"
        }, {
          message: withCtx(() => [
            createVNode(unref(_sfc_main$3), {
              message: "This is a danger alert.",
              size: "sm",
              outline: "",
              class: "mt-2",
              variant: "danger"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: message.value,
          "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => message.value = $event),
          label: "Inline layout (4 rows)",
          rows: "4",
          layout: "inline",
          class: "mt-2"
        }, {
          message: withCtx(() => [
            createVNode(unref(_sfc_main$4), { message: "This is a validation message." })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _hoisted_12
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
