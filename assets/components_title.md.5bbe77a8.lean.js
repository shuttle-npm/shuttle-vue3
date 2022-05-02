import { _ as _sfc_main$2 } from "./chunks/Alert.5a7897e8.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { o as openBlock, b as createElementBlock, c as createBlock, n as normalizeClass, j as resolveDynamicComponent, h as createTextVNode, t as toDisplayString, k as renderSlot, e as ref, a as createVNode, u as unref, l as withCtx, g as createBaseVNode, i as createStaticVNode } from "./app.75bde27b.js";
import { r as render } from "./chunks/PlayIcon.ddfb4fcf.js";
const _sfc_main$1 = {
  props: {
    clickable: {
      type: Boolean,
      default: false
    },
    content: {
      type: String
    },
    variant: {
      type: String
    },
    icon: {
      type: null
    },
    svClass: {
      type: Object
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const click = () => {
      if (!props.clickable) {
        return;
      }
      emit("click");
    };
    const getIcon = () => {
      return props.icon ? props.icon : void 0;
    };
    const getOptions = () => {
      var _a;
      return {
        svClass: props.svClass,
        include: true,
        variant: (_a = props.variant) != null ? _a : "primary"
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-title", getOptions()),
        useCoreClass("sv-title--clickable", { svClass: props.svClass, include: props.clickable })
      ];
    };
    const getIconClasses = () => {
      return [
        useCoreClass("sv-title__icon", getOptions())
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses()),
        onClick: click
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(getIcon()), {
          class: normalizeClass(getIconClasses())
        }, null, 8, ["class"])),
        createTextVNode(" " + toDisplayString(props.content) + " ", 1),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "title",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Title "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#title",
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
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Primary");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Secondary");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Success");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Danger");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Warning");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Info");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Custom Icon");
const _hoisted_12 = /* @__PURE__ */ createStaticVNode("", 7);
const __pageData = '{"title":"Title","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/title.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const message = ref("You can click a title to change this message.");
    const click = (type) => {
      message.value = `You clicked the "${type}" title.`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$2), {
          variant: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"]),
        createVNode(unref(_sfc_main$1), {
          variant: "primary",
          onClick: _cache[0] || (_cache[0] = ($event) => click("primary")),
          clickable: ""
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }),
        createVNode(unref(_sfc_main$1), {
          variant: "secondary",
          onClick: _cache[1] || (_cache[1] = ($event) => click("secondary")),
          clickable: ""
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }),
        createVNode(unref(_sfc_main$1), {
          variant: "success",
          onClick: _cache[2] || (_cache[2] = ($event) => click("success")),
          clickable: ""
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }),
        createVNode(unref(_sfc_main$1), {
          variant: "danger",
          onClick: _cache[3] || (_cache[3] = ($event) => click("danger")),
          clickable: ""
        }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }),
        createVNode(unref(_sfc_main$1), {
          variant: "warning",
          onClick: _cache[4] || (_cache[4] = ($event) => click("warning")),
          clickable: ""
        }, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        }),
        createVNode(unref(_sfc_main$1), {
          variant: "info",
          onClick: _cache[5] || (_cache[5] = ($event) => click("info")),
          clickable: ""
        }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        }),
        _hoisted_9,
        createVNode(unref(_sfc_main$1), { icon: unref(render) }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        }, 8, ["icon"]),
        _hoisted_12
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
