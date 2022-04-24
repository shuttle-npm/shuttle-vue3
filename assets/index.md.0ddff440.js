import { _ as _export_sfc, o as openBlock, b as createElementBlock, f as createBaseVNode, a as createVNode, u as unref, V as VTIconShuttle, F as Fragment, h as createStaticVNode } from "./app.82593da7.js";
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { id: "hero" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h1 class="tagline" data-v-36e2056d>Shuttle Vue</h1><p class="description" data-v-36e2056d>Vue 3 UI components built using Tailwind CSS and Headless UI.</p><pre class="install" data-v-36e2056d>npm install shuttle-vue3</pre><div class="actions" data-v-36e2056d><a class="components" href="/shuttle-vue3/components/overview.html" data-v-36e2056d> Components <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" data-v-36e2056d><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" data-v-36e2056d></path></svg></a></div>', 4);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<section id="highlights" class="vt-box-container" data-v-36e2056d><div class="vt-box" data-v-36e2056d><h2 data-v-36e2056d>Components</h2><div data-v-36e2056d>The most common use-cases are covered.</div></div><div class="vt-box" data-v-36e2056d><h2 data-v-36e2056d>Why?</h2><div data-v-36e2056d>These components are for developing Shuttle based web applications. You are welcome to use them and assist in extending the framework.</div></div><div class="vt-box" data-v-36e2056d><h2 data-v-36e2056d>Open Source</h2><div data-v-36e2056d> These packages are free open source software licensed under the <a href="https://opensource.org/licenses/BSD-3-Clause" data-v-36e2056d>3-Clause BSD License</a>. Pull requests are welcome. </div></div></section>', 1);
const _sfc_main$1 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("section", _hoisted_1, [
          createVNode(unref(VTIconShuttle), { class: "logo" }),
          _hoisted_2
        ]),
        _hoisted_6
      ], 64);
    };
  }
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-36e2056d"]]);
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
