import { _ as _export_sfc, b as createElementBlock, o as openBlock, h as createStaticVNode } from "./app.de3fe290.js";
const __pageData = '{"title":"Core Class Object","description":"","frontmatter":{},"headers":[],"relativePath":"components/core-class.md"}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="core-class-object" tabindex="-1">Core Class Object <a class="header-anchor" href="#core-class-object" aria-hidden="true">#</a></h1><p>The core class object is passed along to components using the <code>:sv-class</code> property and has to be an object that contains properties that match a BEM (Block, Element, Modifier) with a value of either a <code>String</code> or an <code>Array</code> of strings:</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sv-button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some-custom-class</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sv-button--primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">class-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">class-b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>This would result in the value for each property being applied when the relevant BEM is rendered.</p><p>In this way a single object may be passed along with various BEM matches, not only for the current element but also in the case where multiple Shuttle Vue components are part of a single container component.</p>', 5);
const _hoisted_6 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_6);
}
var coreClass = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, coreClass as default };