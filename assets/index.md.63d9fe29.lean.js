import { _ as _export_sfc, o as openBlock, b as createElementBlock, g as createBaseVNode, a as createVNode, u as unref, V as VTIconShuttle, J as VTIconDiscord, F as Fragment, i as createStaticVNode, h as createTextVNode } from "./app.e404c012.js";
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { id: "hero" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 4);
const _hoisted_6 = {
  href: "https://discord.gg/8CvzH2DZ2A",
  target: "_blank"
};
const _hoisted_7 = { class: "discord-link" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Join our Discord channel ");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode("", 1);
const _sfc_main$1 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("section", _hoisted_1, [
          createVNode(unref(VTIconShuttle), { class: "logo" }),
          _hoisted_2,
          createBaseVNode("div", null, [
            createBaseVNode("a", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createVNode(unref(VTIconDiscord), { class: "discord-logo" }),
                _hoisted_8
              ])
            ])
          ])
        ]),
        _hoisted_9
      ], 64);
    };
  }
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1d3eb200"]]);
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
