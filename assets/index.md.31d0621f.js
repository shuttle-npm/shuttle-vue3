import { _ as _export_sfc, o as openBlock, b as createElementBlock, f as createBaseVNode, a as createVNode, u as unref, V as VTIconShuttle, F as Fragment, H as pushScopeId, I as popScopeId, h as createStaticVNode } from "./app.997cf0dd.js";
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-58e6d3b2"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "hero" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "tagline" }, "Shuttle Vue", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "description" }, "Vue 3 UI components built using Tailwind CSS and Headless UI.", -1));
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<section id="highlights" class="vt-box-container" data-v-58e6d3b2><div class="vt-box" data-v-58e6d3b2><h2 data-v-58e6d3b2>Components</h2><div data-v-58e6d3b2>The most common use-cases are covered.</div></div><div class="vt-box" data-v-58e6d3b2><h2 data-v-58e6d3b2>Why?</h2><div data-v-58e6d3b2>These components are for developing Shuttle based web applications. You are welcome to use them and assist in extending the framework.</div></div><div class="vt-box" data-v-58e6d3b2><h2 data-v-58e6d3b2>Open Source</h2><div data-v-58e6d3b2> These packages are free open source software licensed under the <a href="https://opensource.org/licenses/BSD-3-Clause" data-v-58e6d3b2>3-Clause BSD License</a>. Pull requests are welcome. </div></div></section>', 1);
const _sfc_main$1 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("section", _hoisted_1, [
          createVNode(unref(VTIconShuttle), { class: "logo" }),
          _hoisted_2,
          _hoisted_3
        ]),
        _hoisted_4
      ], 64);
    };
  }
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-58e6d3b2"]]);
const __pageData = '{"title":"Home","description":"","frontmatter":{"page":true,"title":"Home"},"headers":[],"relativePath":"index.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Home)
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
