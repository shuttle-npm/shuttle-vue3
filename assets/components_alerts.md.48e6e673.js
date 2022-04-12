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
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h2 id="custom-icon" tabindex="-1">Custom Icon <a class="header-anchor" href="#custom-icon" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Alert</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">BeakerIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A simple primary alert with a custom icon.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">dismissable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div>', 2);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>String</code></td><td>(empty)</td><td>A name to uniquely identify the alert.</td></tr><tr><td><code>type</code></td><td><code>String</code></td><td><code>primary</code></td><td>The type of alert:<br>- <code>primary</code><br>- <code>secondary</code><br>- <code>success</code><br>- <code>danger</code><br>- <code>warning</code><br>- <code>info</code></td></tr><tr><td><code>message</code></td><td><code>String</code></td><td>(required)</td><td>The message to display for the alert.</td></tr><tr><td><code>dismissable</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Whether a close icon will be displayed with will emit the <code>remove</code> event when clicked.</td></tr><tr><td><code>icon</code></td><td><code>Component</code></td><td><code>undefined</code></td><td>Displays the given icon in front of the message.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>remove</code></td><td>Called when the dismissable element is clicked.</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><code>sv-alert</code><ul><li><code>--{variant}</code></li></ul></li><li><code>sv-alert__icon</code><ul><li><code>--{variant}</code></li></ul></li><li><code>sv-alert__icon-close</code><ul><li><code>--{variant}</code></li></ul></li><li><code>sv-alert__message</code><ul><li><code>--{variant}</code></li></ul></li></ul><h2 id="container" tabindex="-1">Container <a class="header-anchor" href="#container" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Alerts</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">alerts</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">alerts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">remove</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">remove</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Where <code>alerts</code> contains an array of objects that have the same properties as an <code>Alert</code>. Will redner with class <code>sv-alerts</code> and supports the <code>:sv-class</code> <a href="/shuttle-vue3/components/core-class.html">core class object</a> property.</p>', 9);
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