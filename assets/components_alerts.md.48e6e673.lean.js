import { _ as _sfc_main$2 } from "./chunks/Alert.54744275.js";
import { u as useCoreClass } from "./chunks/useCoreClass.322213e7.js";
import { c as createBlock, a as createVNode, o as openBlock, b as createElementBlock, F as Fragment, r as renderList, n as normalizeClass, d as createCommentVNode, m as mergeProps, e as ref, u as unref, f as createBaseVNode, g as createTextVNode, h as createStaticVNode } from "./app.997cf0dd.js";
import { _ as _sfc_main$3 } from "./chunks/Button.8cfae4e1.js";
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
      d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    })
  ]);
}
const _sfc_main$1 = {
  props: {
    alerts: {
      type: Array
    },
    svClass: {
      type: Object
    }
  },
  emits: ["remove"],
  setup(__props, { emit }) {
    const props = __props;
    const getClasses = () => {
      return [
        useCoreClass("sv-alerts", {
          svClass: props.svClass,
          include: true
        })
      ];
    };
    return (_ctx, _cache) => {
      return __props.alerts ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(getClasses())
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.alerts, (alert) => {
          return openBlock(), createBlock(_sfc_main$2, mergeProps(alert, {
            onRemove: ($event) => emit("remove", alert),
            "sv-class": props.svClass
          }), null, 16, ["onRemove", "sv-class"]);
        }), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "alerts",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Alerts "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#alerts",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "examples-dismissable",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Examples (dismissable) "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#examples-dismissable",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode("", 9);
const __pageData = '{"title":"Alerts","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples (dismissable)","slug":"examples-dismissable"},{"level":2,"title":"Custom Icon","slug":"custom-icon"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"},{"level":2,"title":"Container","slug":"container"}],"relativePath":"components/alerts.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const alertsReference = [
      {
        name: "Primary",
        message: "A simple primary alert.",
        variant: "primary",
        dismissable: true
      },
      {
        name: "Secondary",
        message: "A simple secondary alert.",
        variant: "secondary",
        dismissable: true
      },
      {
        name: "Success",
        message: "A simple success alert.",
        variant: "success",
        dismissable: true
      },
      {
        name: "Danger",
        message: "A simple danger alert.",
        variant: "danger",
        dismissable: true
      },
      {
        name: "Warning",
        message: "A simple warning alert.",
        variant: "warning",
        dismissable: true
      },
      {
        name: "Information",
        message: "A simple information alert.",
        variant: "info",
        dismissable: true
      }
    ];
    const alerts = ref([...alertsReference]);
    const remove = (alert) => {
      const index = alerts.value.findIndex((item) => item.name === alert.name);
      if (index < 0) {
        return;
      }
      alerts.value.splice(index, 1);
    };
    const reset = () => {
      alerts.value = [...alertsReference];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(_sfc_main$3, {
          onClick: reset,
          content: "Reset",
          class: "mb-2",
          disabled: alerts.value.length >= alertsReference.length
        }, null, 8, ["disabled"]),
        createVNode(_sfc_main$1, {
          alerts: alerts.value,
          onRemove: remove,
          "sv-class": { "sv-alert": "mb-2" }
        }, null, 8, ["alerts"]),
        _hoisted_3,
        createVNode(unref(_sfc_main$2), {
          icon: unref(render),
          type: "primary",
          message: "A simple primary alert with a custom icon.",
          dismissable: false
        }, null, 8, ["icon"]),
        _hoisted_5
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
