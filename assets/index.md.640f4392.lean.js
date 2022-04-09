import { _ as _export_sfc, o as openBlock, b as createElementBlock, f as createBaseVNode, a as createVNode, F as Fragment, H as pushScopeId, I as popScopeId, h as createStaticVNode } from "./app.a503ecea.js";
const _sfc_main$2 = {};
const _hoisted_1$1 = {
  class: "logo",
  width: "512",
  height: "512",
  version: "1.1",
  viewBox: "0 0 128 128",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "m64.139 127.96s-12.139-23.959-12.136-31.963c0.0027-6.5728 5.0091-11.76 11.578-11.989s12.458 5.4443 12.458 11.992c0 7.9766-11.9 31.959-11.9 31.959zm-0.50447-127.76c-5.7902 6.2179-11.795 12.395-16.099 19.783-2.5604 4.3363-4.1582 9.2421-4.5101 14.274-0.55097 7.0293 0.72766 14.022 1.9411 20.916-4.8588 4.3344-9.9262 8.787-12.855 14.723-2.2723 4.4695-2.7019 9.6139-2.3081 14.544 0.60018 7.6433 2.6188 15.073 4.4273 22.497 3.6324-6.2122 6.6771-12.771 10.685-18.761 1.7698-2.6855 3.964-5.1433 6.7463-6.8072 3.7165-2.3199 8.028-3.6246 12.338-4.0278 5.6194 0.5367 11.332 2.5795 15.548 6.4898 3.202 3.191 5.3949 7.2064 7.6184 11.099 2.2107 3.9976 4.3198 8.0503 6.603 12.007 1.9266-7.9475 4.134-15.916 4.5215-24.125 0.21251-4.5798-0.4492-9.2939-2.6353-13.376-2.966-5.7157-7.8886-10.038-12.623-14.263 1.369-7.7989 2.8483-15.793 1.6077-23.713-0.89778-6.1259-3.9184-11.698-7.5517-16.622-3.9431-5.3615-8.5513-10.178-13.089-15.028zm0.4668 24.498c3.1449-1.77e-4 5.8916 2.5563 6.5508 5.6152 0.8638 3.4327-0.88547 7.4537-4.2441 8.791-2.6461 1.136-5.9064 0.15395-7.6172-2.127-2.5378-3.1172-2.1006-8.1998 1.0423-10.749 1.1817-0.99564 2.7206-1.5571 4.2682-1.5305z",
  fill: "#b23333"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var IconShuttle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-1547d4a0"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "hero" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "tagline" }, "Shuttle Vue", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "description" }, "Vue 3 UI components built using Tailwind CSS and Headless UI.", -1));
const _hoisted_4 = /* @__PURE__ */ createStaticVNode("", 1);
const _sfc_main$1 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("section", _hoisted_1, [
          createVNode(IconShuttle, { class: "logo" }),
          _hoisted_2,
          _hoisted_3
        ]),
        _hoisted_4
      ], 64);
    };
  }
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1547d4a0"]]);
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