import { c as createBlock, a as createVNode, o as openBlock, b as createElementBlock, r as resolveDynamicComponent, d as createBaseVNode, t as toDisplayString, u as unref, e as createCommentVNode, n as normalizeClass, F as Fragment, f as renderList, m as mergeProps, g as createTextVNode, h as renderSlot, i as ref, j as createStaticVNode } from "./app.52a74e23.js";
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
      d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
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
      d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function useClass(prefix, props) {
  var _a;
  const disabled = (_a = props.disabled) != null ? _a : false;
  const result = {};
  if (!!prefix) {
    const prefixType = (props.type || "primary").toLowerCase();
    result[prefix] = true;
    if (!disabled) {
      result[prefix + "-primary"] = prefixType === "primary";
      result[prefix + "-secondary"] = prefixType === "secondary";
      result[prefix + "-success"] = prefixType === "success";
      result[prefix + "-danger"] = prefixType === "danger";
      result[prefix + "-warning"] = prefixType === "warning";
      result[prefix + "-info"] = prefixType === "info";
      result[prefix + "-link"] = prefixType === "link";
    }
  }
  result["disabled"] = disabled;
  return result;
}
const _hoisted_1$2 = { class: "message" };
const _sfc_main$3 = {
  props: {
    name: String,
    type: String,
    message: String,
    dismissable: Boolean,
    icon: null
  },
  emits: ["remove"],
  setup(__props, { emit }) {
    const props = __props;
    const icon = () => {
      return props.icon ? props.icon : void 0;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(useClass)("sv-alert", props))
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(icon()), { class: "icon" })),
        createBaseVNode("div", _hoisted_1$2, toDisplayString(__props.message), 1),
        __props.dismissable ? (openBlock(), createBlock(unref(render), {
          key: 0,
          class: "icon icon-close",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("remove", _ctx.alert))
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "sv-alerts"
};
const _sfc_main$2 = {
  props: {
    alerts: Array,
    alertClass: [String, Object]
  },
  emits: ["remove"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return __props.alerts ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.alerts, (alert) => {
          return openBlock(), createBlock(_sfc_main$3, mergeProps(alert, {
            onRemove: ($event) => emit("remove", alert),
            class: props.alertClass
          }), null, 16, ["onRemove", "class"]);
        }), 256))
      ])) : createCommentVNode("", true);
    };
  }
};
const _sfc_main$1 = {
  props: {
    content: String,
    disabled: Boolean
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const click = () => {
      if (props.disabled) {
        return;
      }
      emit("click");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(useClass)("sv-btn", props)),
        onClick: click
      }, [
        createTextVNode(toDisplayString(props.content) + " ", 1),
        renderSlot(_ctx.$slots, "default")
      ], 2);
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
  id: "standard-dismissable",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Standard (dismissable) "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#standard-dismissable",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h2 id="custom-icon" tabindex="-1">Custom Icon <a class="header-anchor" href="#custom-icon" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;Alert :icon=&quot;BeakerIcon&quot; type=&quot;primary&quot; message=&quot;A simple primary alert with a custom icon.&quot; :dismissable=&quot;false&quot; /&gt;</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>String</code></td><td>(empty)</td><td>A name to uniquely identify the alert.</td></tr><tr><td><code>type</code></td><td><code>String</code></td><td><code>primary</code></td><td>The type of alert:<br>- <code>primary</code><br>- <code>secondary</code><br>- <code>success</code><br>- <code>danger</code><br>- <code>warning</code><br>- <code>info</code></td></tr><tr><td><code>message</code></td><td><code>String</code></td><td>(required)</td><td>The message to display for the alert.</td></tr><tr><td><code>dismissable</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Whether a close icon will be displayed with will emit the <code>remove</code> event when clicked.</td></tr><tr><td><code>icon</code></td><td><code>Component</code></td><td><code>undefined</code></td><td>Displays the given icon in front of the message.</td></tr></tbody></table>', 2);
const __pageData = '{"title":"Alerts","description":"","frontmatter":{},"headers":[{"level":2,"title":"Standard (dismissable)","slug":"standard-dismissable"},{"level":2,"title":"Custom Icon","slug":"custom-icon"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"components/alerts.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const alertsReference = [
      {
        name: "Primary",
        message: "A simple primary alert.",
        type: "primary",
        dismissable: true
      },
      {
        name: "Secondary",
        message: "A simple secondary alert.",
        type: "secondary",
        dismissable: true
      },
      {
        name: "Success",
        message: "A simple success alert.",
        type: "success",
        dismissable: true
      },
      {
        name: "Danger",
        message: "A simple danger alert.",
        type: "danger",
        dismissable: true
      },
      {
        name: "Warning",
        message: "A simple warning alert.",
        type: "warning",
        dismissable: true
      },
      {
        name: "Information",
        message: "A simple information alert.",
        type: "info",
        dismissable: true
      }
    ];
    var alerts = ref([...alertsReference]);
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
        createVNode(_sfc_main$1, {
          onClick: reset,
          content: "Reset",
          class: "mb-2",
          disabled: unref(alerts).length >= alertsReference.length
        }, null, 8, ["disabled"]),
        createVNode(_sfc_main$2, {
          alerts: unref(alerts),
          onRemove: remove,
          "alert-class": "mb-2"
        }, null, 8, ["alerts"]),
        _hoisted_3,
        createVNode(unref(_sfc_main$3), {
          icon: unref(render$1),
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
