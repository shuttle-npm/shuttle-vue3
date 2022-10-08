var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { o as openBlock, c as createBlock, a as createVNode, b as createElementBlock, w as withCtx, F as Fragment, r as renderList, T as TransitionGroup, n as normalizeClass, d as createCommentVNode, m as mergeProps, e as ref, f as computed, u as unref, g as createBaseVNode, h as createTextVNode, i as createStaticVNode } from "./app.c06a58f8.js";
import { _ as _sfc_main$2 } from "./chunks/Alert.8f88d4e2.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { _ as _sfc_main$5 } from "./chunks/Button.7f5d353a.js";
import { _ as _sfc_main$3 } from "./chunks/ButtonGroup.ebee39ac.js";
import { _ as _sfc_main$4 } from "./chunks/Checkbox.d2234ddc.js";
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
        createVNode(TransitionGroup, {
          appear: "",
          tag: "div",
          "enter-active-class": "sv-alert-enter-active",
          "enter-from-class": "sv-alert-enter-from",
          "enter-to-class": "sv-alert-enter-to",
          "leave-active-class": "sv-alert-leave-active",
          "leave-from-class": "sv-alert-leave-from",
          "leave-to-class": "sv-alert-leave-to"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.alerts, (alert) => {
              var _a;
              return openBlock(), createBlock(_sfc_main$2, mergeProps(alert, {
                onRemove: ($event) => emit("remove", alert.name),
                key: (_a = alert.key) != null ? _a : alert.name,
                "sv-class": props.svClass
              }), null, 16, ["onRemove", "sv-class"]);
            }), 128))
          ]),
          _: 1
        })
      ], 2)) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "alert",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Alert "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#alert",
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
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Reset");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>String</code></td><td>&#39;&#39;</td><td>A name to uniquely identify the alert.</td></tr><tr><td><code>type</code></td><td><code>String</code></td><td><code>primary</code></td><td>The type of alert:<br>- <code>primary</code><br>- <code>secondary</code><br>- <code>success</code><br>- <code>danger</code><br>- <code>warning</code><br>- <code>info</code></td></tr><tr><td><code>message</code></td><td><code>String</code></td><td>(required)</td><td>The message to display for the alert.</td></tr><tr><td><code>dismissable</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Whether a close icon will be displayed with will emit the <code>remove</code> event when clicked.</td></tr><tr><td><code>expirySeconds</code></td><td><code>Number</code></td><td><code>undefined</code></td><td>When set to a value greater than <code>1</code> it will show a countdown <code>svg</code> in the dismissable container and emit the <code>remove</code> event once the timer reaches <code>0</code>.</td></tr><tr><td><code>icon</code></td><td><code>Component</code></td><td><code>undefined</code></td><td>Displays the given icon in front of the message.</td></tr><tr><td><code>size</code></td><td><code>String</code></td><td><code>&quot;&quot;</code></td><td>The size of the alert:<br>- <code>sm</code><br>- <code>lg</code><br>- an empty value would be the default size.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>remove</code></td><td>Calls when the dismissable element is clicked, passing the relevant <code>alert</code> as an argument: <code>emit(&#39;remove&#39;, alert)</code></td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><code>sv-alert</code><ul><li><code>sv-alert--{variant}</code></li><li><code>sv-alert--{size}</code></li><li><code>sv-alert--outline</code></li></ul></li><li><code>sv-alert__icon</code><ul><li><code>sv-alert__icon--{variant}</code></li><li><code>sv-alert__icon--{size}</code></li><li><code>sv-alert__icon--outline</code></li></ul></li><li><code>sv-alert__icon-close</code><ul><li><code>sv-alert__icon-close--{variant}</code></li><li><code>sv-alert__icon-close--{size}</code></li><li><code>sv-alert__icon-close--outline</code></li></ul></li><li><code>sv-alert__message</code><ul><li><code>sv-alert__message--{variant}</code></li><li><code>sv-alert__message--{size}</code></li><li><code>sv-alert__message--outline</code></li></ul></li></ul><h2 id="container" tabindex="-1">Container <a class="header-anchor" href="#container" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Alerts</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">alerts</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">alerts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">remove</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">remove</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Where <code>alerts</code> contains an array of objects that have the same properties as an <code>Alert</code>. Will redner with class <code>sv-alerts</code> and supports the <code>:sv-class</code> <a href="/shuttle-vue3/components/core-class.html">core class object</a> property.</p>', 9);
const __pageData = '{"title":"Alert","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples (dismissable)","slug":"examples-dismissable"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"},{"level":2,"title":"Container","slug":"container"}],"relativePath":"components/alert.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const outline = ref(false);
    const icon = ref(false);
    const size = ref("");
    const expirySeconds = ref(0);
    const buttonsSize = ref([
      {
        text: "none",
        value: ""
      },
      {
        text: "small",
        value: "sm"
      },
      {
        text: "large",
        value: "lg"
      }
    ]);
    const buttonsExpirySeconds = ref([
      {
        text: "none",
        value: 0
      },
      {
        text: "5",
        value: 5
      },
      {
        text: "10",
        value: 10
      },
      {
        text: "20",
        value: 20
      }
    ]);
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
        message: "A simple info alert.",
        variant: "info",
        dismissable: true
      }
    ];
    const alerts = ref([]);
    const remove = (name) => {
      const index = alerts.value.findIndex((item) => item.name === name);
      if (index < 0) {
        return;
      }
      alerts.value.splice(index, 1);
    };
    const getIcon = () => {
      return icon.value ? render : void 0;
    };
    const computedAlerts = computed(() => {
      return alerts.value.map((item) => __spreadProps(__spreadValues({}, item), { outline: outline.value, size: size.value, icon: getIcon(), expirySeconds: expirySeconds.value }));
    });
    const reset = () => {
      alerts.value = [...alertsReference];
    };
    reset();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$3), {
          label: "Size",
          modelValue: size.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event),
          buttons: buttonsSize.value,
          class: "mb-4",
          layout: "inline"
        }, null, 8, ["modelValue", "buttons"]),
        createVNode(unref(_sfc_main$3), {
          label: "Expiry seconds",
          modelValue: expirySeconds.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => expirySeconds.value = $event),
          buttons: buttonsExpirySeconds.value,
          class: "mb-4",
          layout: "inline"
        }, null, 8, ["modelValue", "buttons"]),
        createVNode(unref(_sfc_main$4), {
          modelValue: outline.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => outline.value = $event),
          label: "Outline?",
          class: "mb-4"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$4), {
          modelValue: icon.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => icon.value = $event),
          label: "Icon?",
          class: "mb-4"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$5), {
          onClick: reset,
          class: "mb-2",
          disabled: alerts.value.length >= alertsReference.length
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["disabled"]),
        createVNode(unref(_sfc_main$1), {
          alerts: unref(computedAlerts),
          onRemove: remove,
          "sv-class": { "sv-alert": "mb-2" }
        }, null, 8, ["alerts"]),
        _hoisted_4
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
