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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { k as defineComponent, e as ref, l as computed, p as watch, q as provide, s as onMounted, v as watchEffect, x as inject, y as toRaw, z as onUnmounted, A as h$1, B as Teleport, C as reactive, u as unref, D as onUpdated, E as cloneVNode, G as nextTick } from "../app.a503ecea.js";
function T(t, n, ...u) {
  if (t in n) {
    let o = n[t];
    return typeof o == "function" ? o(...u) : o;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, T), e;
}
function x(_a2) {
  var _b = _a2, { visible: t = true, features: n = 0 } = _b, u = __objRest(_b, ["visible", "features"]);
  var e;
  if (t || n & 2 && u.props.static)
    return Se(u);
  if (n & 1) {
    let o = ((e = u.props.unmount) != null ? e : true) ? 0 : 1;
    return T(o, { [0]() {
      return null;
    }, [1]() {
      return Se(__spreadProps(__spreadValues({}, u), { props: __spreadProps(__spreadValues({}, u.props), { hidden: true, style: { display: "none" } }) }));
    } });
  }
  return Se(u);
}
function Se({ props: t, attrs: n, slots: u, slot: e, name: o }) {
  var a;
  let _a2 = L(t, ["unmount", "static"]), { as: r } = _a2, s = __objRest(_a2, ["as"]), d = (a = u.default) == null ? void 0 : a.call(u, e);
  if (r === "template") {
    if (Object.keys(s).length > 0 || Object.keys(n).length > 0) {
      let [i, ...l] = d != null ? d : [];
      if (!co(i) || l.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(n)).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
      return cloneVNode(i, s);
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return h$1(r, s, d);
}
function L(t, n = []) {
  let u = Object.assign({}, t);
  for (let e of n)
    e in u && delete u[e];
  return u;
}
function co(t) {
  return t == null ? false : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
var mo = 0;
function vo() {
  return ++mo;
}
function h() {
  return vo();
}
function bo(t) {
  throw new Error("Unexpected object: " + t);
}
function J(t, n) {
  let u = n.resolveItems();
  if (u.length <= 0)
    return null;
  let e = n.resolveActiveIndex(), o = e != null ? e : -1, r = (() => {
    switch (t.focus) {
      case 0:
        return u.findIndex((s) => !n.resolveDisabled(s));
      case 1: {
        let s = u.slice().reverse().findIndex((d, a, i) => o !== -1 && i.length - a - 1 >= o ? false : !n.resolveDisabled(d));
        return s === -1 ? s : u.length - 1 - s;
      }
      case 2:
        return u.findIndex((s, d) => d <= o ? false : !n.resolveDisabled(s));
      case 3: {
        let s = u.slice().reverse().findIndex((d) => !n.resolveDisabled(d));
        return s === -1 ? s : u.length - 1 - s;
      }
      case 4:
        return u.findIndex((s) => n.resolveId(s) === t.id);
      case 5:
        return null;
      default:
        bo(t);
    }
  })();
  return r === -1 ? e : r;
}
function v(t) {
  return t == null || t.value == null ? null : "$el" in t.value ? t.value.$el : t.value;
}
function C(t, n, u) {
  typeof window != "undefined" && watchEffect((e) => {
    window.addEventListener(t, n, u), e(() => {
      window.removeEventListener(t, n, u);
    });
  });
}
var at = Symbol("Context");
function it() {
  return I() !== null;
}
function I() {
  return inject(at, null);
}
function M(t) {
  provide(at, t);
}
function ut(t, n) {
  if (t)
    return t;
  let u = n != null ? n : "button";
  if (typeof u == "string" && u.toLowerCase() === "button")
    return "button";
}
function P(t, n) {
  let u = ref(ut(t.value.type, t.value.as));
  return onMounted(() => {
    u.value = ut(t.value.type, t.value.as);
  }), watchEffect(() => {
    var e;
    u.value || !v(n) || v(n) instanceof HTMLButtonElement && !((e = v(n)) == null ? void 0 : e.hasAttribute("type")) && (u.value = "button");
  }), u;
}
function Y({ container: t, accept: n, walk: u, enabled: e }) {
  watchEffect(() => {
    let o = t.value;
    if (!o || e !== void 0 && !e.value)
      return;
    let r = Object.assign((d) => n(d), { acceptNode: n }), s = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, r, false);
    for (; s.nextNode(); )
      u(s.currentNode);
  });
}
var ct = Symbol("ComboboxContext");
function ee(t) {
  let n = inject(ct, null);
  if (n === null) {
    let u = new Error(`<${t} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u, ee), u;
  }
  return n;
}
defineComponent({ name: "Combobox", emits: { "update:modelValue": (t) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean] } }, setup(t, { slots: n, attrs: u, emit: e }) {
  let o = ref(1), r = ref(null), s = ref(null), d = ref(null), a = ref(null), i = ref({ static: false, hold: false }), l = ref([]), c = ref(null), p = computed(() => t.modelValue), f = { comboboxState: o, value: p, inputRef: s, labelRef: r, buttonRef: d, optionsRef: a, disabled: computed(() => t.disabled), options: l, activeOptionIndex: c, inputPropsRef: ref({ displayValue: void 0 }), optionsPropsRef: i, closeCombobox() {
    t.disabled || o.value !== 1 && (o.value = 1, c.value = null);
  }, openCombobox() {
    t.disabled || o.value !== 0 && (o.value = 0);
  }, goToOption(m, g) {
    if (t.disabled || a.value && !i.value.static && o.value === 1)
      return;
    let S = J(m === 4 ? { focus: 4, id: g } : { focus: m }, { resolveItems: () => l.value, resolveActiveIndex: () => c.value, resolveId: (y) => y.id, resolveDisabled: (y) => y.dataRef.disabled });
    c.value !== S && (c.value = S);
  }, syncInputValue() {
    let m = f.value.value;
    if (!v(f.inputRef) || m === void 0)
      return;
    let g = f.inputPropsRef.value.displayValue;
    typeof g == "function" ? f.inputRef.value.value = g(m) : typeof m == "string" && (f.inputRef.value.value = m);
  }, selectOption(m) {
    let g = l.value.find((y) => y.id === m);
    if (!g)
      return;
    let { dataRef: S } = g;
    e("update:modelValue", S.value), f.syncInputValue();
  }, selectActiveOption() {
    if (c.value === null)
      return;
    let { dataRef: m } = l.value[c.value];
    e("update:modelValue", m.value), f.syncInputValue();
  }, registerOption(m, g) {
    var R, E;
    let S = c.value !== null ? l.value[c.value] : null, y = Array.from((E = (R = a.value) == null ? void 0 : R.querySelectorAll('[id^="headlessui-combobox-option-"]')) != null ? E : []).reduce((D, w, F) => Object.assign(D, { [w.id]: F }), {});
    l.value = [...l.value, { id: m, dataRef: g }].sort((D, w) => y[D.id] - y[w.id]), c.value = (() => S === null ? null : l.value.indexOf(S))();
  }, unregisterOption(m) {
    let g = l.value.slice(), S = c.value !== null ? g[c.value] : null, y = g.findIndex((R) => R.id === m);
    y !== -1 && g.splice(y, 1), l.value = g, c.value = (() => y === c.value || S === null ? null : g.indexOf(S))();
  } };
  C("mousedown", (m) => {
    var S, y, R;
    let g = m.target;
    o.value === 0 && (((S = v(s)) == null ? void 0 : S.contains(g)) || ((y = v(d)) == null ? void 0 : y.contains(g)) || ((R = v(a)) == null ? void 0 : R.contains(g)) || f.closeCombobox());
  }), watch([f.value, f.inputRef], () => f.syncInputValue(), { immediate: true }), provide(ct, f), M(computed(() => T(o.value, { [0]: 0, [1]: 1 })));
  let b = computed(() => c.value === null ? null : l.value[c.value].dataRef.value);
  return () => {
    let m = { open: o.value === 0, disabled: t.disabled, activeIndex: c.value, activeOption: b.value };
    return x({ props: L(t, ["modelValue", "onUpdate:modelValue", "disabled"]), slot: m, slots: n, attrs: u, name: "Combobox" });
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" } }, setup(t, { attrs: n, slots: u }) {
  let e = ee("ComboboxLabel"), o = `headlessui-combobox-label-${h()}`;
  function r() {
    var s;
    (s = v(e.inputRef)) == null || s.focus({ preventScroll: true });
  }
  return () => {
    let s = { open: e.comboboxState.value === 0, disabled: e.disabled.value }, d = { id: o, ref: e.labelRef, onClick: r };
    return x({ props: __spreadValues(__spreadValues({}, t), d), slot: s, attrs: n, slots: u, name: "ComboboxLabel" });
  };
} });
defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" } }, setup(t, { attrs: n, slots: u }) {
  let e = ee("ComboboxButton"), o = `headlessui-combobox-button-${h()}`;
  function r(a) {
    e.disabled.value || (e.comboboxState.value === 0 ? e.closeCombobox() : (a.preventDefault(), e.openCombobox()), nextTick(() => {
      var i;
      return (i = v(e.inputRef)) == null ? void 0 : i.focus({ preventScroll: true });
    }));
  }
  function s(a) {
    switch (a.key) {
      case "ArrowDown":
        a.preventDefault(), a.stopPropagation(), e.comboboxState.value === 1 && (e.openCombobox(), nextTick(() => {
          e.value.value || e.goToOption(0);
        })), nextTick(() => {
          var i;
          return (i = e.inputRef.value) == null ? void 0 : i.focus({ preventScroll: true });
        });
        return;
      case "ArrowUp":
        a.preventDefault(), a.stopPropagation(), e.comboboxState.value === 1 && (e.openCombobox(), nextTick(() => {
          e.value.value || e.goToOption(3);
        })), nextTick(() => {
          var i;
          return (i = e.inputRef.value) == null ? void 0 : i.focus({ preventScroll: true });
        });
        return;
      case "Escape":
        a.preventDefault(), e.optionsRef.value && !e.optionsPropsRef.value.static && a.stopPropagation(), e.closeCombobox(), nextTick(() => {
          var i;
          return (i = e.inputRef.value) == null ? void 0 : i.focus({ preventScroll: true });
        });
        return;
    }
  }
  let d = P(computed(() => ({ as: t.as, type: n.type })), e.buttonRef);
  return () => {
    var l, c;
    let a = { open: e.comboboxState.value === 0, disabled: e.disabled.value }, i = { ref: e.buttonRef, id: o, type: d.value, tabindex: "-1", "aria-haspopup": true, "aria-controls": (l = v(e.optionsRef)) == null ? void 0 : l.id, "aria-expanded": e.disabled.value ? void 0 : e.comboboxState.value === 0, "aria-labelledby": e.labelRef.value ? [(c = v(e.labelRef)) == null ? void 0 : c.id, o].join(" ") : void 0, disabled: e.disabled.value === true ? true : void 0, onKeydown: s, onClick: r };
    return x({ props: __spreadValues(__spreadValues({}, t), i), slot: a, attrs: n, slots: u, name: "ComboboxButton" });
  };
} });
defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function } }, emits: { change: (t) => true }, setup(t, { emit: n, attrs: u, slots: e }) {
  let o = ee("ComboboxInput"), r = `headlessui-combobox-input-${h()}`;
  o.inputPropsRef = computed(() => t);
  function s(a) {
    switch (a.key) {
      case "Enter":
        a.preventDefault(), a.stopPropagation(), o.selectActiveOption(), o.closeCombobox();
        break;
      case "ArrowDown":
        return a.preventDefault(), a.stopPropagation(), T(o.comboboxState.value, { [0]: () => o.goToOption(2), [1]: () => {
          o.openCombobox(), nextTick(() => {
            o.value.value || o.goToOption(0);
          });
        } });
      case "ArrowUp":
        return a.preventDefault(), a.stopPropagation(), T(o.comboboxState.value, { [0]: () => o.goToOption(1), [1]: () => {
          o.openCombobox(), nextTick(() => {
            o.value.value || o.goToOption(3);
          });
        } });
      case "Home":
      case "PageUp":
        return a.preventDefault(), a.stopPropagation(), o.goToOption(0);
      case "End":
      case "PageDown":
        return a.preventDefault(), a.stopPropagation(), o.goToOption(3);
      case "Escape":
        a.preventDefault(), o.optionsRef.value && !o.optionsPropsRef.value.static && a.stopPropagation(), o.closeCombobox();
        break;
      case "Tab":
        o.selectActiveOption(), o.closeCombobox();
        break;
    }
  }
  function d(a) {
    o.openCombobox(), n("change", a);
  }
  return () => {
    var c, p, f, b, m;
    let a = { open: o.comboboxState.value === 0 }, i = { "aria-controls": (c = o.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": o.disabled ? void 0 : o.comboboxState.value === 0, "aria-activedescendant": o.activeOptionIndex.value === null || (p = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : p.id, "aria-labelledby": (m = (f = v(o.labelRef)) == null ? void 0 : f.id) != null ? m : (b = v(o.buttonRef)) == null ? void 0 : b.id, id: r, onKeydown: s, onChange: d, onInput: d, role: "combobox", type: "text", tabIndex: 0, ref: o.inputRef }, l = L(t, ["displayValue"]);
    return x({ props: __spreadValues(__spreadValues({}, l), i), slot: a, attrs: u, slots: e, features: 1 | 2, name: "ComboboxInput" });
  };
} });
defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(t, { attrs: n, slots: u }) {
  let e = ee("ComboboxOptions"), o = `headlessui-combobox-options-${h()}`;
  watchEffect(() => {
    e.optionsPropsRef.value.static = t.static;
  }), watchEffect(() => {
    e.optionsPropsRef.value.hold = t.hold;
  });
  let r = I(), s = computed(() => r !== null ? r.value === 0 : e.comboboxState.value === 0);
  return Y({ container: computed(() => v(e.optionsRef)), enabled: computed(() => e.comboboxState.value === 0), accept(d) {
    return d.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } }), () => {
    var l, c, p, f;
    let d = { open: e.comboboxState.value === 0 }, a = { "aria-activedescendant": e.activeOptionIndex.value === null || (l = e.options.value[e.activeOptionIndex.value]) == null ? void 0 : l.id, "aria-labelledby": (f = (c = v(e.labelRef)) == null ? void 0 : c.id) != null ? f : (p = v(e.buttonRef)) == null ? void 0 : p.id, id: o, ref: e.optionsRef, role: "listbox" }, i = L(t, ["hold"]);
    return x({ props: __spreadValues(__spreadValues({}, i), a), slot: d, attrs: n, slots: u, features: 1 | 2, visible: s.value, name: "ComboboxOptions" });
  };
} });
defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(t, { slots: n, attrs: u }) {
  let e = ee("ComboboxOption"), o = `headlessui-combobox-option-${h()}`, r = computed(() => e.activeOptionIndex.value !== null ? e.options.value[e.activeOptionIndex.value].id === o : false), s = computed(() => toRaw(e.value.value) === toRaw(t.value)), d = computed(() => ({ disabled: t.disabled, value: t.value }));
  onMounted(() => e.registerOption(o, d)), onUnmounted(() => e.unregisterOption(o)), onMounted(() => {
    watch([e.comboboxState, s], () => {
      e.comboboxState.value === 0 && (!s.value || e.goToOption(4, o));
    }, { immediate: true });
  }), watchEffect(() => {
    e.comboboxState.value === 0 && (!r.value || nextTick(() => {
      var p, f;
      return (f = (p = document.getElementById(o)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : f.call(p, { block: "nearest" });
    }));
  });
  function a(p) {
    if (t.disabled)
      return p.preventDefault();
    e.selectOption(o), e.closeCombobox(), nextTick(() => {
      var f;
      return (f = v(e.inputRef)) == null ? void 0 : f.focus({ preventScroll: true });
    });
  }
  function i() {
    if (t.disabled)
      return e.goToOption(5);
    e.goToOption(4, o);
  }
  function l() {
    t.disabled || r.value || e.goToOption(4, o);
  }
  function c() {
    t.disabled || !r.value || e.optionsPropsRef.value.hold || e.goToOption(5);
  }
  return () => {
    let { disabled: p } = t, f = { active: r.value, selected: s.value, disabled: p }, b = { id: o, role: "option", tabIndex: p === true ? void 0 : -1, "aria-disabled": p === true ? true : void 0, "aria-selected": s.value === true ? s.value : void 0, disabled: void 0, onClick: a, onFocus: i, onPointermove: l, onMousemove: l, onPointerleave: c, onMouseleave: c };
    return x({ props: __spreadValues(__spreadValues({}, t), b), slot: f, attrs: u, slots: n, name: "ComboboxOption" });
  };
} });
var Ke = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
function ae(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(Ke));
}
function mt(t, n = 0) {
  return t === document.body ? false : T(n, { [0]() {
    return t.matches(Ke);
  }, [1]() {
    let u = t;
    for (; u !== null; ) {
      if (u.matches(Ke))
        return true;
      u = u.parentElement;
    }
    return false;
  } });
}
function te(t) {
  t == null || t.focus({ preventScroll: true });
}
function O(t, n) {
  let u = Array.isArray(t) ? t.slice().sort((l, c) => {
    let p = l.compareDocumentPosition(c);
    return p & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : p & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }) : ae(t), e = document.activeElement, o = (() => {
    if (n & (1 | 4))
      return 1;
    if (n & (2 | 8))
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), r = (() => {
    if (n & 1)
      return 0;
    if (n & 2)
      return Math.max(0, u.indexOf(e)) - 1;
    if (n & 4)
      return Math.max(0, u.indexOf(e)) + 1;
    if (n & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = n & 32 ? { preventScroll: true } : {}, d = 0, a = u.length, i;
  do {
    if (d >= a || d + a <= 0)
      return 0;
    let l = r + d;
    if (n & 16)
      l = (l + a) % a;
    else {
      if (l < 0)
        return 3;
      if (l >= a)
        return 1;
    }
    i = u[l], i == null || i.focus(s), d += o;
  } while (i !== document.activeElement);
  return i.hasAttribute("tabindex") || i.setAttribute("tabindex", "0"), 2;
}
function ie(t, n) {
  for (let u of t)
    if (u.contains(n))
      return true;
  return false;
}
function Re(t, n = ref(true), u = ref({})) {
  let e = ref(typeof window != "undefined" ? document.activeElement : null), o = ref(null);
  function r() {
    if (!n.value || t.value.size !== 1)
      return;
    let { initialFocus: d } = u.value, a = document.activeElement;
    if (d) {
      if (d === a)
        return;
    } else if (ie(t.value, a))
      return;
    if (e.value = a, d)
      te(d);
    else {
      let i = false;
      for (let l of t.value)
        if (O(l, 1) === 2) {
          i = true;
          break;
        }
      i || console.warn("There are no focusable elements inside the <FocusTrap />");
    }
    o.value = document.activeElement;
  }
  function s() {
    te(e.value), e.value = null, o.value = null;
  }
  watchEffect(r), onUpdated(() => {
    n.value ? r() : s();
  }), onUnmounted(s), C("keydown", (d) => {
    if (!!n.value && d.key === "Tab" && !!document.activeElement && t.value.size === 1) {
      d.preventDefault();
      for (let a of t.value)
        if (O(a, (d.shiftKey ? 2 : 4) | 16) === 2) {
          o.value = document.activeElement;
          break;
        }
    }
  }), C("focus", (d) => {
    if (!n.value || t.value.size !== 1)
      return;
    let a = o.value;
    if (!a)
      return;
    let i = d.target;
    i && i instanceof HTMLElement ? ie(t.value, i) ? (o.value = i, te(i)) : (d.preventDefault(), d.stopPropagation(), te(a)) : te(o.value);
  }, true);
}
var bt = "body > *", oe = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Map();
function gt(t) {
  t.setAttribute("aria-hidden", "true"), t.inert = true;
}
function xt(t) {
  let n = K.get(t);
  !n || (n["aria-hidden"] === null ? t.removeAttribute("aria-hidden") : t.setAttribute("aria-hidden", n["aria-hidden"]), t.inert = n.inert);
}
function yt(t, n = ref(true)) {
  watchEffect((u) => {
    if (!n.value || !t.value)
      return;
    let e = t.value;
    oe.add(e);
    for (let o of K.keys())
      o.contains(e) && (xt(o), K.delete(o));
    document.querySelectorAll(bt).forEach((o) => {
      if (o instanceof HTMLElement) {
        for (let r of oe)
          if (o.contains(r))
            return;
        oe.size === 1 && (K.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), gt(o));
      }
    }), u(() => {
      if (oe.delete(e), oe.size > 0)
        document.querySelectorAll(bt).forEach((o) => {
          if (o instanceof HTMLElement && !K.has(o)) {
            for (let r of oe)
              if (o.contains(r))
                return;
            K.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), gt(o);
          }
        });
      else
        for (let o of K.keys())
          xt(o), K.delete(o);
    });
  });
}
var St = Symbol("StackContext");
function ht() {
  return inject(St, () => {
  });
}
function Rt(t) {
  let n = ht();
  watchEffect((u) => {
    let e = t == null ? void 0 : t.value;
    !e || (n(0, e), u(() => n(1, e)));
  });
}
function Te(t) {
  let n = ht();
  function u(...e) {
    t == null || t(...e), n(...e);
  }
  provide(St, u);
}
var Tt = Symbol("ForcePortalRootContext");
function Ot() {
  return inject(Tt, false);
}
var Ne = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(t, { slots: n, attrs: u }) {
  return provide(Tt, t.force), () => {
    let _a2 = t, { force: e } = _a2, o = __objRest(_a2, ["force"]);
    return x({ props: o, slot: {}, slots: n, attrs: u, name: "ForcePortalRoot" });
  };
} });
function It() {
  let t = document.getElementById("headlessui-portal-root");
  if (t)
    return t;
  let n = document.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(n);
}
var Pt = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: n, attrs: u }) {
  let e = Ot(), o = inject(Dt, null), r = ref(e === true || o === null ? It() : o.resolveTarget());
  watchEffect(() => {
    e || o !== null && (r.value = o.resolveTarget());
  });
  let s = ref(null);
  return Rt(s), onUnmounted(() => {
    var a;
    let d = document.getElementById("headlessui-portal-root");
    !d || r.value === d && r.value.children.length <= 0 && ((a = r.value.parentElement) == null || a.removeChild(r.value));
  }), Te(), () => {
    if (r.value === null)
      return null;
    let d = { ref: s };
    return h$1(Teleport, { to: r.value }, x({ props: __spreadValues(__spreadValues({}, t), d), slot: {}, attrs: u, slots: n, name: "Portal" }));
  };
} }), Dt = Symbol("PortalGroupContext"), wt = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t, { attrs: n, slots: u }) {
  let e = reactive({ resolveTarget() {
    return t.target;
  } });
  return provide(Dt, e), () => {
    let _a2 = t, { target: o } = _a2, r = __objRest(_a2, ["target"]);
    return x({ props: r, slot: {}, attrs: n, slots: u, name: "PortalGroup" });
  };
} });
var Lt = Symbol("DescriptionContext");
function Xo() {
  let t = inject(Lt, null);
  if (t === null)
    throw new Error("Missing parent");
  return t;
}
function G({ slot: t = ref({}), name: n = "Description", props: u = {} } = {}) {
  let e = ref([]);
  function o(r) {
    return e.value.push(r), () => {
      let s = e.value.indexOf(r);
      s !== -1 && e.value.splice(s, 1);
    };
  }
  return provide(Lt, { register: o, slot: t, name: n, props: u }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(t, { attrs: n, slots: u }) {
  let e = Xo(), o = `headlessui-description-${h()}`;
  return onMounted(() => onUnmounted(e.register(o))), () => {
    let { name: r = "Description", slot: s = ref({}), props: d = {} } = e, a = t, i = __spreadProps(__spreadValues({}, Object.entries(d).reduce((l, [c, p]) => Object.assign(l, { [c]: unref(p) }), {})), { id: o });
    return x({ props: __spreadValues(__spreadValues({}, a), i), slot: s.value, attrs: n, slots: u, name: r });
  };
} });
var kt = Symbol("DialogContext");
function $e(t) {
  let n = inject(kt, null);
  if (n === null) {
    let u = new Error(`<${t} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u, $e), u;
  }
  return n;
}
var Ee = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: Ee }, initialFocus: { type: Object, default: null } }, emits: { close: (t) => true }, setup(t, { emit: n, attrs: u, slots: e }) {
  let o = ref(/* @__PURE__ */ new Set()), r = I(), s = computed(() => t.open === Ee && r !== null ? T(r.value, { [0]: true, [1]: false }) : t.open);
  if (!(t.open !== Ee || r !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof s.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value === Ee ? void 0 : t.open}`);
  let a = computed(() => t.open ? 0 : 1), i = computed(() => r !== null ? r.value === 0 : a.value === 0), l = ref(null), c = ref(a.value === 0);
  onUpdated(() => {
    c.value = a.value === 0;
  });
  let p = `headlessui-dialog-${h()}`, f = computed(() => ({ initialFocus: t.initialFocus }));
  Re(o, c, f), yt(l, c), Te((y, R) => T(y, { [0]() {
    o.value.add(R);
  }, [1]() {
    o.value.delete(R);
  } }));
  let b = G({ name: "DialogDescription", slot: computed(() => ({ open: s.value })) }), m = ref(null), g = { titleId: m, dialogState: a, setTitleId(y) {
    m.value !== y && (m.value = y);
  }, close() {
    n("close", false);
  } };
  provide(kt, g), C("mousedown", (y) => {
    let R = y.target;
    a.value === 0 && o.value.size === 1 && (ie(o.value, R) || (g.close(), nextTick(() => R == null ? void 0 : R.focus())));
  }), C("keydown", (y) => {
    y.key === "Escape" && a.value === 0 && (o.value.size > 1 || (y.preventDefault(), y.stopPropagation(), g.close()));
  }), watchEffect((y) => {
    if (a.value !== 0)
      return;
    let R = document.documentElement.style.overflow, E = document.documentElement.style.paddingRight, D = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = `${D}px`, y(() => {
      document.documentElement.style.overflow = R, document.documentElement.style.paddingRight = E;
    });
  }), watchEffect((y) => {
    if (a.value !== 0)
      return;
    let R = v(l);
    if (!R)
      return;
    let E = new IntersectionObserver((D) => {
      for (let w of D)
        w.boundingClientRect.x === 0 && w.boundingClientRect.y === 0 && w.boundingClientRect.width === 0 && w.boundingClientRect.height === 0 && g.close();
    });
    E.observe(R), y(() => E.disconnect());
  });
  function S(y) {
    y.stopPropagation();
  }
  return () => {
    let y = __spreadProps(__spreadValues({}, u), { ref: l, id: p, role: "dialog", "aria-modal": a.value === 0 ? true : void 0, "aria-labelledby": m.value, "aria-describedby": b.value, onClick: S }), _a2 = t, { open: R, initialFocus: E } = _a2, D = __objRest(_a2, ["open", "initialFocus"]), w = { open: a.value === 0 };
    return h$1(Ne, { force: true }, () => h$1(Pt, () => h$1(wt, { target: l.value }, () => h$1(Ne, { force: false }, () => x({ props: __spreadValues(__spreadValues({}, D), y), slot: w, attrs: u, slots: e, visible: i.value, features: 1 | 2, name: "Dialog" })))));
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: n, slots: u }) {
  let e = $e("DialogOverlay"), o = `headlessui-dialog-overlay-${h()}`;
  function r(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), e.close());
  }
  return () => x({ props: __spreadValues(__spreadValues({}, t), { id: o, "aria-hidden": true, onClick: r }), slot: { open: e.dialogState.value === 0 }, attrs: n, slots: u, name: "DialogOverlay" });
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(t, { attrs: n, slots: u }) {
  let e = $e("DialogTitle"), o = `headlessui-dialog-title-${h()}`;
  return onMounted(() => {
    e.setTitleId(o), onUnmounted(() => e.setTitleId(null));
  }), () => x({ props: __spreadValues(__spreadValues({}, t), { id: o }), slot: { open: e.dialogState.value === 0 }, attrs: n, slots: u, name: "DialogTitle" });
} });
var At = Symbol("DisclosureContext");
function qe(t) {
  let n = inject(At, null);
  if (n === null) {
    let u = new Error(`<${t} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u, qe), u;
  }
  return n;
}
var Ht = Symbol("DisclosurePanelContext");
function an() {
  return inject(Ht, null);
}
defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t, { slots: n, attrs: u }) {
  let e = `headlessui-disclosure-button-${h()}`, o = `headlessui-disclosure-panel-${h()}`, r = ref(t.defaultOpen ? 0 : 1), s = ref(null), d = ref(null), a = { buttonId: e, panelId: o, disclosureState: r, panel: s, button: d, toggleDisclosure() {
    r.value = T(r.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    r.value !== 1 && (r.value = 1);
  }, close(i) {
    a.closeDisclosure();
    let l = (() => i ? i instanceof HTMLElement ? i : i.value instanceof HTMLElement ? v(i) : v(a.button) : v(a.button))();
    l == null || l.focus();
  } };
  return provide(At, a), M(computed(() => T(r.value, { [0]: 0, [1]: 1 }))), () => {
    let _a2 = t, { defaultOpen: i } = _a2, l = __objRest(_a2, ["defaultOpen"]), c = { open: r.value === 0, close: a.close };
    return x({ props: l, slot: c, slots: n, attrs: u, name: "Disclosure" });
  };
} });
defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false } }, setup(t, { attrs: n, slots: u }) {
  let e = qe("DisclosureButton"), o = an(), r = o === null ? false : o === e.panelId, s = ref(null);
  r || watchEffect(() => {
    e.button.value = s.value;
  });
  let d = P(computed(() => ({ as: t.as, type: n.type })), s);
  function a() {
    var c;
    t.disabled || (r ? (e.toggleDisclosure(), (c = v(e.button)) == null || c.focus()) : e.toggleDisclosure());
  }
  function i(c) {
    var p;
    if (!t.disabled)
      if (r)
        switch (c.key) {
          case " ":
          case "Enter":
            c.preventDefault(), c.stopPropagation(), e.toggleDisclosure(), (p = v(e.button)) == null || p.focus();
            break;
        }
      else
        switch (c.key) {
          case " ":
          case "Enter":
            c.preventDefault(), c.stopPropagation(), e.toggleDisclosure();
            break;
        }
  }
  function l(c) {
    switch (c.key) {
      case " ":
        c.preventDefault();
        break;
    }
  }
  return () => {
    let c = { open: e.disclosureState.value === 0 }, p = r ? { ref: s, type: d.value, onClick: a, onKeydown: i } : { id: e.buttonId, ref: s, type: d.value, "aria-expanded": t.disabled ? void 0 : e.disclosureState.value === 0, "aria-controls": v(e.panel) ? e.panelId : void 0, disabled: t.disabled ? true : void 0, onClick: a, onKeydown: i, onKeyup: l };
    return x({ props: __spreadValues(__spreadValues({}, t), p), slot: c, attrs: n, slots: u, name: "DisclosureButton" });
  };
} });
defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(t, { attrs: n, slots: u }) {
  let e = qe("DisclosurePanel");
  provide(Ht, e.panelId);
  let o = I(), r = computed(() => o !== null ? o.value === 0 : e.disclosureState.value === 0);
  return () => {
    let s = { open: e.disclosureState.value === 0, close: e.close }, d = { id: e.panelId, ref: e.panel };
    return x({ props: __spreadValues(__spreadValues({}, t), d), slot: s, attrs: n, slots: u, features: 1 | 2, visible: r.value, name: "DisclosurePanel" });
  };
} });
defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null } }, setup(t, { attrs: n, slots: u }) {
  let e = ref(/* @__PURE__ */ new Set()), o = ref(null), r = ref(true), s = computed(() => ({ initialFocus: t.initialFocus }));
  return onMounted(() => {
    !o.value || (e.value.add(o.value), Re(e, r, s));
  }), onUnmounted(() => {
    r.value = false;
  }), () => {
    let d = {}, a = { ref: o }, _a2 = t, { initialFocus: i } = _a2, l = __objRest(_a2, ["initialFocus"]);
    return x({ props: __spreadValues(__spreadValues({}, l), a), slot: d, attrs: n, slots: u, name: "FocusTrap" });
  };
} });
function gn(t) {
  requestAnimationFrame(() => requestAnimationFrame(t));
}
var Kt = Symbol("ListboxContext");
function pe(t) {
  let n = inject(Kt, null);
  if (n === null) {
    let u = new Error(`<${t} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u, pe), u;
  }
  return n;
}
var Ia = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean] } }, setup(t, { slots: n, attrs: u, emit: e }) {
  let o = ref(1), r = ref(null), s = ref(null), d = ref(null), a = ref([]), i = ref(""), l = ref(null), c = computed(() => t.modelValue), p = { listboxState: o, value: c, orientation: computed(() => t.horizontal ? "horizontal" : "vertical"), labelRef: r, buttonRef: s, optionsRef: d, disabled: computed(() => t.disabled), options: a, searchQuery: i, activeOptionIndex: l, closeListbox() {
    t.disabled || o.value !== 1 && (o.value = 1, l.value = null);
  }, openListbox() {
    t.disabled || o.value !== 0 && (o.value = 0);
  }, goToOption(f, b) {
    if (t.disabled || o.value === 1)
      return;
    let m = J(f === 4 ? { focus: 4, id: b } : { focus: f }, { resolveItems: () => a.value, resolveActiveIndex: () => l.value, resolveId: (g) => g.id, resolveDisabled: (g) => g.dataRef.disabled });
    i.value === "" && l.value === m || (i.value = "", l.value = m);
  }, search(f) {
    if (t.disabled || o.value === 1)
      return;
    let m = i.value !== "" ? 0 : 1;
    i.value += f.toLowerCase();
    let S = (l.value !== null ? a.value.slice(l.value + m).concat(a.value.slice(0, l.value + m)) : a.value).find((R) => R.dataRef.textValue.startsWith(i.value) && !R.dataRef.disabled), y = S ? a.value.indexOf(S) : -1;
    y === -1 || y === l.value || (l.value = y);
  }, clearSearch() {
    t.disabled || o.value !== 1 && i.value !== "" && (i.value = "");
  }, registerOption(f, b) {
    var g, S;
    let m = Array.from((S = (g = d.value) == null ? void 0 : g.querySelectorAll('[id^="headlessui-listbox-option-"]')) != null ? S : []).reduce((y, R, E) => Object.assign(y, { [R.id]: E }), {});
    a.value = [...a.value, { id: f, dataRef: b }].sort((y, R) => m[y.id] - m[R.id]);
  }, unregisterOption(f) {
    let b = a.value.slice(), m = l.value !== null ? b[l.value] : null, g = b.findIndex((S) => S.id === f);
    g !== -1 && b.splice(g, 1), a.value = b, l.value = (() => g === l.value || m === null ? null : b.indexOf(m))();
  }, select(f) {
    t.disabled || e("update:modelValue", f);
  } };
  return C("mousedown", (f) => {
    var g, S, y;
    let b = f.target, m = document.activeElement;
    o.value === 0 && (((g = v(s)) == null ? void 0 : g.contains(b)) || (((S = v(d)) == null ? void 0 : S.contains(b)) || p.closeListbox(), !(m !== document.body && (m == null ? void 0 : m.contains(b))) && (f.defaultPrevented || (y = v(s)) == null || y.focus({ preventScroll: true }))));
  }), provide(Kt, p), M(computed(() => T(o.value, { [0]: 0, [1]: 1 }))), () => {
    let f = { open: o.value === 0, disabled: t.disabled };
    return x({ props: L(t, ["modelValue", "onUpdate:modelValue", "disabled", "horizontal"]), slot: f, slots: n, attrs: u, name: "Listbox" });
  };
} }), Pa = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" } }, setup(t, { attrs: n, slots: u }) {
  let e = pe("ListboxLabel"), o = `headlessui-listbox-label-${h()}`;
  function r() {
    var s;
    (s = v(e.buttonRef)) == null || s.focus({ preventScroll: true });
  }
  return () => {
    let s = { open: e.listboxState.value === 0, disabled: e.disabled.value }, d = { id: o, ref: e.labelRef, onClick: r };
    return x({ props: __spreadValues(__spreadValues({}, t), d), slot: s, attrs: n, slots: u, name: "ListboxLabel" });
  };
} }), Da = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" } }, setup(t, { attrs: n, slots: u }) {
  let e = pe("ListboxButton"), o = `headlessui-listbox-button-${h()}`;
  function r(i) {
    switch (i.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        i.preventDefault(), e.openListbox(), nextTick(() => {
          var l;
          (l = v(e.optionsRef)) == null || l.focus({ preventScroll: true }), e.value.value || e.goToOption(0);
        });
        break;
      case "ArrowUp":
        i.preventDefault(), e.openListbox(), nextTick(() => {
          var l;
          (l = v(e.optionsRef)) == null || l.focus({ preventScroll: true }), e.value.value || e.goToOption(3);
        });
        break;
    }
  }
  function s(i) {
    switch (i.key) {
      case " ":
        i.preventDefault();
        break;
    }
  }
  function d(i) {
    e.disabled.value || (e.listboxState.value === 0 ? (e.closeListbox(), nextTick(() => {
      var l;
      return (l = v(e.buttonRef)) == null ? void 0 : l.focus({ preventScroll: true });
    })) : (i.preventDefault(), e.openListbox(), gn(() => {
      var l;
      return (l = v(e.optionsRef)) == null ? void 0 : l.focus({ preventScroll: true });
    })));
  }
  let a = P(computed(() => ({ as: t.as, type: n.type })), e.buttonRef);
  return () => {
    var c, p;
    let i = { open: e.listboxState.value === 0, disabled: e.disabled.value }, l = { ref: e.buttonRef, id: o, type: a.value, "aria-haspopup": true, "aria-controls": (c = v(e.optionsRef)) == null ? void 0 : c.id, "aria-expanded": e.disabled.value ? void 0 : e.listboxState.value === 0, "aria-labelledby": e.labelRef.value ? [(p = v(e.labelRef)) == null ? void 0 : p.id, o].join(" ") : void 0, disabled: e.disabled.value === true ? true : void 0, onKeydown: r, onKeyup: s, onClick: d };
    return x({ props: __spreadValues(__spreadValues({}, t), l), slot: i, attrs: n, slots: u, name: "ListboxButton" });
  };
} }), wa = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(t, { attrs: n, slots: u }) {
  let e = pe("ListboxOptions"), o = `headlessui-listbox-options-${h()}`, r = ref(null);
  function s(i) {
    switch (r.value && clearTimeout(r.value), i.key) {
      case " ":
        if (e.searchQuery.value !== "")
          return i.preventDefault(), i.stopPropagation(), e.search(i.key);
      case "Enter":
        if (i.preventDefault(), i.stopPropagation(), e.activeOptionIndex.value !== null) {
          let { dataRef: l } = e.options.value[e.activeOptionIndex.value];
          e.select(l.value);
        }
        e.closeListbox(), nextTick(() => {
          var l;
          return (l = v(e.buttonRef)) == null ? void 0 : l.focus({ preventScroll: true });
        });
        break;
      case T(e.orientation.value, { vertical: "ArrowDown", horizontal: "ArrowRight" }):
        return i.preventDefault(), i.stopPropagation(), e.goToOption(2);
      case T(e.orientation.value, { vertical: "ArrowUp", horizontal: "ArrowLeft" }):
        return i.preventDefault(), i.stopPropagation(), e.goToOption(1);
      case "Home":
      case "PageUp":
        return i.preventDefault(), i.stopPropagation(), e.goToOption(0);
      case "End":
      case "PageDown":
        return i.preventDefault(), i.stopPropagation(), e.goToOption(3);
      case "Escape":
        i.preventDefault(), i.stopPropagation(), e.closeListbox(), nextTick(() => {
          var l;
          return (l = v(e.buttonRef)) == null ? void 0 : l.focus({ preventScroll: true });
        });
        break;
      case "Tab":
        i.preventDefault(), i.stopPropagation();
        break;
      default:
        i.key.length === 1 && (e.search(i.key), r.value = setTimeout(() => e.clearSearch(), 350));
        break;
    }
  }
  let d = I(), a = computed(() => d !== null ? d.value === 0 : e.listboxState.value === 0);
  return () => {
    var p, f, b, m;
    let i = { open: e.listboxState.value === 0 }, l = { "aria-activedescendant": e.activeOptionIndex.value === null || (p = e.options.value[e.activeOptionIndex.value]) == null ? void 0 : p.id, "aria-labelledby": (m = (f = v(e.labelRef)) == null ? void 0 : f.id) != null ? m : (b = v(e.buttonRef)) == null ? void 0 : b.id, "aria-orientation": e.orientation.value, id: o, onKeydown: s, role: "listbox", tabIndex: 0, ref: e.optionsRef };
    return x({ props: __spreadValues(__spreadValues({}, t), l), slot: i, attrs: n, slots: u, features: 1 | 2, visible: a.value, name: "ListboxOptions" });
  };
} }), La = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(t, { slots: n, attrs: u }) {
  let e = pe("ListboxOption"), o = `headlessui-listbox-option-${h()}`, r = computed(() => e.activeOptionIndex.value !== null ? e.options.value[e.activeOptionIndex.value].id === o : false), s = computed(() => toRaw(e.value.value) === toRaw(t.value)), d = ref({ disabled: t.disabled, value: t.value, textValue: "" });
  onMounted(() => {
    var f, b;
    let p = (b = (f = document.getElementById(o)) == null ? void 0 : f.textContent) == null ? void 0 : b.toLowerCase().trim();
    p !== void 0 && (d.value.textValue = p);
  }), onMounted(() => e.registerOption(o, d)), onUnmounted(() => e.unregisterOption(o)), onMounted(() => {
    watch([e.listboxState, s], () => {
      var p, f;
      e.listboxState.value === 0 && (!s.value || (e.goToOption(4, o), (f = (p = document.getElementById(o)) == null ? void 0 : p.focus) == null || f.call(p)));
    }, { immediate: true });
  }), watchEffect(() => {
    e.listboxState.value === 0 && (!r.value || nextTick(() => {
      var p, f;
      return (f = (p = document.getElementById(o)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : f.call(p, { block: "nearest" });
    }));
  });
  function a(p) {
    if (t.disabled)
      return p.preventDefault();
    e.select(t.value), e.closeListbox(), nextTick(() => {
      var f;
      return (f = v(e.buttonRef)) == null ? void 0 : f.focus({ preventScroll: true });
    });
  }
  function i() {
    if (t.disabled)
      return e.goToOption(5);
    e.goToOption(4, o);
  }
  function l() {
    t.disabled || r.value || e.goToOption(4, o);
  }
  function c() {
    t.disabled || !r.value || e.goToOption(5);
  }
  return () => {
    let { disabled: p } = t, f = { active: r.value, selected: s.value, disabled: p }, b = { id: o, role: "option", tabIndex: p === true ? void 0 : -1, "aria-disabled": p === true ? true : void 0, "aria-selected": s.value === true ? s.value : void 0, disabled: void 0, onClick: a, onFocus: i, onPointermove: l, onMousemove: l, onPointerleave: c, onMouseleave: c };
    return x({ props: __spreadValues(__spreadValues({}, t), b), slot: f, attrs: u, slots: n, name: "ListboxOption" });
  };
} });
function Rn(t) {
  requestAnimationFrame(() => requestAnimationFrame(t));
}
var Nt = Symbol("MenuContext");
function De(t) {
  let n = inject(Nt, null);
  if (n === null) {
    let u = new Error(`<${t} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u, De), u;
  }
  return n;
}
var Ga = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(t, { slots: n, attrs: u }) {
  let e = ref(1), o = ref(null), r = ref(null), s = ref([]), d = ref(""), a = ref(null), i = { menuState: e, buttonRef: o, itemsRef: r, items: s, searchQuery: d, activeItemIndex: a, closeMenu: () => {
    e.value = 1, a.value = null;
  }, openMenu: () => e.value = 0, goToItem(l, c) {
    let p = J(l === 4 ? { focus: 4, id: c } : { focus: l }, { resolveItems: () => s.value, resolveActiveIndex: () => a.value, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.disabled });
    d.value === "" && a.value === p || (d.value = "", a.value = p);
  }, search(l) {
    let p = d.value !== "" ? 0 : 1;
    d.value += l.toLowerCase();
    let b = (a.value !== null ? s.value.slice(a.value + p).concat(s.value.slice(0, a.value + p)) : s.value).find((g) => g.dataRef.textValue.startsWith(d.value) && !g.dataRef.disabled), m = b ? s.value.indexOf(b) : -1;
    m === -1 || m === a.value || (a.value = m);
  }, clearSearch() {
    d.value = "";
  }, registerItem(l, c) {
    var f, b;
    let p = Array.from((b = (f = r.value) == null ? void 0 : f.querySelectorAll('[id^="headlessui-menu-item-"]')) != null ? b : []).reduce((m, g, S) => Object.assign(m, { [g.id]: S }), {});
    s.value = [...s.value, { id: l, dataRef: c }].sort((m, g) => p[m.id] - p[g.id]);
  }, unregisterItem(l) {
    let c = s.value.slice(), p = a.value !== null ? c[a.value] : null, f = c.findIndex((b) => b.id === l);
    f !== -1 && c.splice(f, 1), s.value = c, a.value = (() => f === a.value || p === null ? null : c.indexOf(p))();
  } };
  return C("mousedown", (l) => {
    var f, b, m;
    let c = l.target, p = document.activeElement;
    e.value === 0 && (((f = v(o)) == null ? void 0 : f.contains(c)) || (((b = v(r)) == null ? void 0 : b.contains(c)) || i.closeMenu(), !(p !== document.body && (p == null ? void 0 : p.contains(c))) && (l.defaultPrevented || (m = v(o)) == null || m.focus({ preventScroll: true }))));
  }), provide(Nt, i), M(computed(() => T(e.value, { [0]: 0, [1]: 1 }))), () => {
    let l = { open: e.value === 0 };
    return x({ props: t, slot: l, slots: n, attrs: u, name: "Menu" });
  };
} }), _a = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" } }, setup(t, { attrs: n, slots: u }) {
  let e = De("MenuButton"), o = `headlessui-menu-button-${h()}`;
  function r(i) {
    switch (i.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        i.preventDefault(), i.stopPropagation(), e.openMenu(), nextTick(() => {
          var l;
          (l = v(e.itemsRef)) == null || l.focus({ preventScroll: true }), e.goToItem(0);
        });
        break;
      case "ArrowUp":
        i.preventDefault(), i.stopPropagation(), e.openMenu(), nextTick(() => {
          var l;
          (l = v(e.itemsRef)) == null || l.focus({ preventScroll: true }), e.goToItem(3);
        });
        break;
    }
  }
  function s(i) {
    switch (i.key) {
      case " ":
        i.preventDefault();
        break;
    }
  }
  function d(i) {
    t.disabled || (e.menuState.value === 0 ? (e.closeMenu(), nextTick(() => {
      var l;
      return (l = v(e.buttonRef)) == null ? void 0 : l.focus({ preventScroll: true });
    })) : (i.preventDefault(), i.stopPropagation(), e.openMenu(), Rn(() => {
      var l;
      return (l = v(e.itemsRef)) == null ? void 0 : l.focus({ preventScroll: true });
    })));
  }
  let a = P(computed(() => ({ as: t.as, type: n.type })), e.buttonRef);
  return () => {
    var c;
    let i = { open: e.menuState.value === 0 }, l = { ref: e.buttonRef, id: o, type: a.value, "aria-haspopup": true, "aria-controls": (c = v(e.itemsRef)) == null ? void 0 : c.id, "aria-expanded": t.disabled ? void 0 : e.menuState.value === 0, onKeydown: r, onKeyup: s, onClick: d };
    return x({ props: __spreadValues(__spreadValues({}, t), l), slot: i, attrs: n, slots: u, name: "MenuButton" });
  };
} }), qa = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(t, { attrs: n, slots: u }) {
  let e = De("MenuItems"), o = `headlessui-menu-items-${h()}`, r = ref(null);
  Y({ container: computed(() => v(e.itemsRef)), enabled: computed(() => e.menuState.value === 0), accept(l) {
    return l.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : l.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(l) {
    l.setAttribute("role", "none");
  } });
  function s(l) {
    var c;
    switch (r.value && clearTimeout(r.value), l.key) {
      case " ":
        if (e.searchQuery.value !== "")
          return l.preventDefault(), l.stopPropagation(), e.search(l.key);
      case "Enter":
        if (l.preventDefault(), l.stopPropagation(), e.activeItemIndex.value !== null) {
          let { id: p } = e.items.value[e.activeItemIndex.value];
          (c = document.getElementById(p)) == null || c.click();
        }
        e.closeMenu(), nextTick(() => {
          var p;
          return (p = v(e.buttonRef)) == null ? void 0 : p.focus({ preventScroll: true });
        });
        break;
      case "ArrowDown":
        return l.preventDefault(), l.stopPropagation(), e.goToItem(2);
      case "ArrowUp":
        return l.preventDefault(), l.stopPropagation(), e.goToItem(1);
      case "Home":
      case "PageUp":
        return l.preventDefault(), l.stopPropagation(), e.goToItem(0);
      case "End":
      case "PageDown":
        return l.preventDefault(), l.stopPropagation(), e.goToItem(3);
      case "Escape":
        l.preventDefault(), l.stopPropagation(), e.closeMenu(), nextTick(() => {
          var p;
          return (p = v(e.buttonRef)) == null ? void 0 : p.focus({ preventScroll: true });
        });
        break;
      case "Tab":
        l.preventDefault(), l.stopPropagation();
        break;
      default:
        l.key.length === 1 && (e.search(l.key), r.value = setTimeout(() => e.clearSearch(), 350));
        break;
    }
  }
  function d(l) {
    switch (l.key) {
      case " ":
        l.preventDefault();
        break;
    }
  }
  let a = I(), i = computed(() => a !== null ? a.value === 0 : e.menuState.value === 0);
  return () => {
    var f, b;
    let l = { open: e.menuState.value === 0 }, c = { "aria-activedescendant": e.activeItemIndex.value === null || (f = e.items.value[e.activeItemIndex.value]) == null ? void 0 : f.id, "aria-labelledby": (b = v(e.buttonRef)) == null ? void 0 : b.id, id: o, onKeydown: s, onKeyup: d, role: "menu", tabIndex: 0, ref: e.itemsRef };
    return x({ props: __spreadValues(__spreadValues({}, t), c), slot: l, attrs: n, slots: u, features: 1 | 2, visible: i.value, name: "MenuItems" });
  };
} }), za = defineComponent({ name: "MenuItem", props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false } }, setup(t, { slots: n, attrs: u }) {
  let e = De("MenuItem"), o = `headlessui-menu-item-${h()}`, r = computed(() => e.activeItemIndex.value !== null ? e.items.value[e.activeItemIndex.value].id === o : false), s = ref({ disabled: t.disabled, textValue: "" });
  onMounted(() => {
    var p, f;
    let c = (f = (p = document.getElementById(o)) == null ? void 0 : p.textContent) == null ? void 0 : f.toLowerCase().trim();
    c !== void 0 && (s.value.textValue = c);
  }), onMounted(() => e.registerItem(o, s)), onUnmounted(() => e.unregisterItem(o)), watchEffect(() => {
    e.menuState.value === 0 && (!r.value || nextTick(() => {
      var c, p;
      return (p = (c = document.getElementById(o)) == null ? void 0 : c.scrollIntoView) == null ? void 0 : p.call(c, { block: "nearest" });
    }));
  });
  function d(c) {
    if (t.disabled)
      return c.preventDefault();
    e.closeMenu(), nextTick(() => {
      var p;
      return (p = v(e.buttonRef)) == null ? void 0 : p.focus({ preventScroll: true });
    });
  }
  function a() {
    if (t.disabled)
      return e.goToItem(5);
    e.goToItem(4, o);
  }
  function i() {
    t.disabled || r.value || e.goToItem(4, o);
  }
  function l() {
    t.disabled || !r.value || e.goToItem(5);
  }
  return () => {
    let { disabled: c } = t, p = { active: r.value, disabled: c };
    return x({ props: __spreadValues(__spreadValues({}, t), { id: o, role: "menuitem", tabIndex: c === true ? void 0 : -1, "aria-disabled": c === true ? true : void 0, onClick: d, onFocus: a, onPointermove: i, onMousemove: i, onPointerleave: l, onMouseleave: l }), slot: p, attrs: u, slots: n, name: "MenuItem" });
  };
} });
var Wt = Symbol("PopoverContext");
function Le(t) {
  let n = inject(Wt, null);
  if (n === null) {
    let u = new Error(`<${t} /> is missing a parent <${Cn.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u, Le), u;
  }
  return n;
}
var Ut = Symbol("PopoverGroupContext");
function $t() {
  return inject(Ut, null);
}
var Gt = Symbol("PopoverPanelContext");
function On() {
  return inject(Gt, null);
}
var Cn = defineComponent({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: n, attrs: u }) {
  let e = `headlessui-popover-button-${h()}`, o = `headlessui-popover-panel-${h()}`, r = ref(1), s = ref(null), d = ref(null), a = { popoverState: r, buttonId: e, panelId: o, panel: d, button: s, togglePopover() {
    r.value = T(r.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    r.value !== 1 && (r.value = 1);
  }, close(f) {
    a.closePopover();
    let b = (() => f ? f instanceof HTMLElement ? f : f.value instanceof HTMLElement ? v(f) : v(a.button) : v(a.button))();
    b == null || b.focus();
  } };
  provide(Wt, a), M(computed(() => T(r.value, { [0]: 0, [1]: 1 })));
  let i = { buttonId: e, panelId: o, close() {
    a.closePopover();
  } }, l = $t(), c = l == null ? void 0 : l.registerPopover;
  function p() {
    var f, b, m;
    return (m = l == null ? void 0 : l.isFocusWithinPopoverGroup()) != null ? m : ((f = v(s)) == null ? void 0 : f.contains(document.activeElement)) || ((b = v(d)) == null ? void 0 : b.contains(document.activeElement));
  }
  return watchEffect(() => c == null ? void 0 : c(i)), C("focus", () => {
    r.value === 0 && (p() || !s || !d || a.closePopover());
  }, true), C("mousedown", (f) => {
    var m, g, S;
    let b = f.target;
    r.value === 0 && (((m = v(s)) == null ? void 0 : m.contains(b)) || ((g = v(d)) == null ? void 0 : g.contains(b)) || (a.closePopover(), mt(b, 1) || (f.preventDefault(), (S = v(s)) == null || S.focus())));
  }), () => {
    let f = { open: r.value === 0, close: a.close };
    return x({ props: t, slot: f, slots: n, attrs: u, name: "Popover" });
  };
} });
defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false } }, setup(t, { attrs: n, slots: u }) {
  let e = Le("PopoverButton"), o = $t(), r = o == null ? void 0 : o.closeOthers, s = On(), d = s === null ? false : s === e.panelId, a = ref(null), i = ref(typeof window == "undefined" ? null : document.activeElement);
  C("focus", () => {
    i.value = a.value, a.value = document.activeElement;
  }, true);
  let l = ref(null);
  d || watchEffect(() => {
    e.button.value = l.value;
  });
  let c = P(computed(() => ({ as: t.as, type: n.type })), l);
  function p(m) {
    var g, S, y, R;
    if (d) {
      if (e.popoverState.value === 1)
        return;
      switch (m.key) {
        case " ":
        case "Enter":
          m.preventDefault(), m.stopPropagation(), e.closePopover(), (g = v(e.button)) == null || g.focus();
          break;
      }
    } else
      switch (m.key) {
        case " ":
        case "Enter":
          m.preventDefault(), m.stopPropagation(), e.popoverState.value === 1 && (r == null || r(e.buttonId)), e.togglePopover();
          break;
        case "Escape":
          if (e.popoverState.value !== 0)
            return r == null ? void 0 : r(e.buttonId);
          if (!v(e.button) || !((S = v(e.button)) == null ? void 0 : S.contains(document.activeElement)))
            return;
          m.preventDefault(), m.stopPropagation(), e.closePopover();
          break;
        case "Tab":
          if (e.popoverState.value !== 0 || !e.panel || !e.button)
            return;
          if (m.shiftKey) {
            if (!i.value || ((y = v(e.button)) == null ? void 0 : y.contains(i.value)) || ((R = v(e.panel)) == null ? void 0 : R.contains(i.value)))
              return;
            let E = ae(), D = E.indexOf(i.value);
            if (E.indexOf(v(e.button)) > D)
              return;
            m.preventDefault(), m.stopPropagation(), O(v(e.panel), 8);
          } else
            m.preventDefault(), m.stopPropagation(), O(v(e.panel), 1);
          break;
      }
  }
  function f(m) {
    var g, S;
    if (!d && (m.key === " " && m.preventDefault(), e.popoverState.value === 0 && !!e.panel && !!e.button))
      switch (m.key) {
        case "Tab":
          if (!i.value || ((g = v(e.button)) == null ? void 0 : g.contains(i.value)) || ((S = v(e.panel)) == null ? void 0 : S.contains(i.value)))
            return;
          let y = ae(), R = y.indexOf(i.value);
          if (y.indexOf(v(e.button)) > R)
            return;
          m.preventDefault(), m.stopPropagation(), O(v(e.panel), 8);
          break;
      }
  }
  function b() {
    var m, g;
    t.disabled || (d ? (e.closePopover(), (m = v(e.button)) == null || m.focus()) : (e.popoverState.value === 1 && (r == null || r(e.buttonId)), (g = v(e.button)) == null || g.focus(), e.togglePopover()));
  }
  return () => {
    let m = { open: e.popoverState.value === 0 }, g = d ? { ref: l, type: c.value, onKeydown: p, onClick: b } : { ref: l, id: e.buttonId, type: c.value, "aria-expanded": t.disabled ? void 0 : e.popoverState.value === 0, "aria-controls": v(e.panel) ? e.panelId : void 0, disabled: t.disabled ? true : void 0, onKeydown: p, onKeyup: f, onClick: b };
    return x({ props: __spreadValues(__spreadValues({}, t), g), slot: m, attrs: n, slots: u, name: "PopoverButton" });
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(t, { attrs: n, slots: u }) {
  let e = Le("PopoverOverlay"), o = `headlessui-popover-overlay-${h()}`, r = I(), s = computed(() => r !== null ? r.value === 0 : e.popoverState.value === 0);
  function d() {
    e.closePopover();
  }
  return () => {
    let a = { open: e.popoverState.value === 0 };
    return x({ props: __spreadValues(__spreadValues({}, t), { id: o, "aria-hidden": true, onClick: d }), slot: a, attrs: n, slots: u, features: 1 | 2, visible: s.value, name: "PopoverOverlay" });
  };
} });
defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false } }, setup(t, { attrs: n, slots: u }) {
  let { focus: e } = t, o = Le("PopoverPanel");
  provide(Gt, o.panelId), onUnmounted(() => {
    o.panel.value = null;
  }), watchEffect(() => {
    var i;
    if (!e || o.popoverState.value !== 0 || !o.panel)
      return;
    let a = document.activeElement;
    ((i = v(o.panel)) == null ? void 0 : i.contains(a)) || O(v(o.panel), 1);
  }), C("keydown", (a) => {
    var l, c;
    if (o.popoverState.value !== 0 || !v(o.panel) || a.key !== "Tab" || !document.activeElement || !((l = v(o.panel)) == null ? void 0 : l.contains(document.activeElement)))
      return;
    a.preventDefault();
    let i = O(v(o.panel), a.shiftKey ? 2 : 4);
    if (i === 3)
      return (c = v(o.button)) == null ? void 0 : c.focus();
    if (i === 1) {
      if (!v(o.button))
        return;
      let p = ae(), f = p.indexOf(v(o.button)), b = p.splice(f + 1).filter((m) => {
        var g;
        return !((g = v(o.panel)) == null ? void 0 : g.contains(m));
      });
      O(b, 1) === 0 && O(document.body, 1);
    }
  }), C("focus", () => {
    var a;
    !e || o.popoverState.value === 0 && (!v(o.panel) || ((a = v(o.panel)) == null ? void 0 : a.contains(document.activeElement)) || o.closePopover());
  }, true);
  let r = I(), s = computed(() => r !== null ? r.value === 0 : o.popoverState.value === 0);
  function d(a) {
    var i, l;
    switch (a.key) {
      case "Escape":
        if (o.popoverState.value !== 0 || !v(o.panel) || !((i = v(o.panel)) == null ? void 0 : i.contains(document.activeElement)))
          return;
        a.preventDefault(), a.stopPropagation(), o.closePopover(), (l = v(o.button)) == null || l.focus();
        break;
    }
  }
  return () => {
    let a = { open: o.popoverState.value === 0, close: o.close }, i = { ref: o.panel, id: o.panelId, onKeydown: d };
    return x({ props: __spreadValues(__spreadValues({}, t), i), slot: a, attrs: n, slots: u, features: 1 | 2, visible: s.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: n, slots: u }) {
  let e = ref(null), o = ref([]);
  function r(i) {
    let l = o.value.indexOf(i);
    l !== -1 && o.value.splice(l, 1);
  }
  function s(i) {
    return o.value.push(i), () => {
      r(i);
    };
  }
  function d() {
    var l;
    let i = document.activeElement;
    return ((l = v(e)) == null ? void 0 : l.contains(i)) ? true : o.value.some((c) => {
      var p, f;
      return ((p = document.getElementById(c.buttonId)) == null ? void 0 : p.contains(i)) || ((f = document.getElementById(c.panelId)) == null ? void 0 : f.contains(i));
    });
  }
  function a(i) {
    for (let l of o.value)
      l.buttonId !== i && l.close();
  }
  return provide(Ut, { registerPopover: s, unregisterPopover: r, isFocusWithinPopoverGroup: d, closeOthers: a }), () => x({ props: __spreadValues(__spreadValues({}, t), { ref: e }), slot: {}, attrs: n, slots: u, name: "PopoverGroup" });
} });
var _t = Symbol("LabelContext");
function qt() {
  let t = inject(_t, null);
  if (t === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, qt), n;
  }
  return t;
}
function fe({ slot: t = {}, name: n = "Label", props: u = {} } = {}) {
  let e = ref([]);
  function o(r) {
    return e.value.push(r), () => {
      let s = e.value.indexOf(r);
      s !== -1 && e.value.splice(s, 1);
    };
  }
  return provide(_t, { register: o, slot: t, name: n, props: u }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false } }, setup(t, { slots: n, attrs: u }) {
  let e = qt(), o = `headlessui-label-${h()}`;
  return onMounted(() => onUnmounted(e.register(o))), () => {
    let { name: r = "Label", slot: s = {}, props: d = {} } = e, _a2 = t, { passive: a } = _a2, i = __objRest(_a2, ["passive"]), l = __spreadProps(__spreadValues({}, Object.entries(d).reduce((p, [f, b]) => Object.assign(p, { [f]: unref(b) }), {})), { id: o }), c = __spreadValues(__spreadValues({}, i), l);
    return a && delete c.onClick, x({ props: c, slot: s, attrs: u, slots: n, name: r });
  };
} });
var Qt = Symbol("RadioGroupContext");
function Jt(t) {
  let n = inject(Qt, null);
  if (n === null) {
    let u = new Error(`<${t} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u, Jt), u;
  }
  return n;
}
defineComponent({ name: "RadioGroup", emits: { "update:modelValue": (t) => true }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean] } }, setup(t, { emit: n, attrs: u, slots: e }) {
  let o = ref(null), r = ref([]), s = fe({ name: "RadioGroupLabel" }), d = G({ name: "RadioGroupDescription" }), a = computed(() => t.modelValue), i = { options: r, value: a, disabled: computed(() => t.disabled), firstOption: computed(() => r.value.find((p) => !p.propsRef.disabled)), containsCheckedOption: computed(() => r.value.some((p) => toRaw(p.propsRef.value) === toRaw(t.modelValue))), change(p) {
    var b;
    if (t.disabled || a.value === p)
      return false;
    let f = (b = r.value.find((m) => toRaw(m.propsRef.value) === toRaw(p))) == null ? void 0 : b.propsRef;
    return (f == null ? void 0 : f.disabled) ? false : (n("update:modelValue", p), true);
  }, registerOption(p) {
    var b;
    let f = Array.from((b = o.value) == null ? void 0 : b.querySelectorAll('[id^="headlessui-radiogroup-option-"]')).reduce((m, g, S) => Object.assign(m, { [g.id]: S }), {});
    r.value.push(p), r.value.sort((m, g) => f[m.id] - f[g.id]);
  }, unregisterOption(p) {
    let f = r.value.findIndex((b) => b.id === p);
    f !== -1 && r.value.splice(f, 1);
  } };
  provide(Qt, i), Y({ container: computed(() => v(o)), accept(p) {
    return p.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : p.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(p) {
    p.setAttribute("role", "none");
  } });
  function l(p) {
    if (!o.value || !o.value.contains(p.target))
      return;
    let f = r.value.filter((b) => b.propsRef.disabled === false).map((b) => b.element);
    switch (p.key) {
      case "ArrowLeft":
      case "ArrowUp":
        if (p.preventDefault(), p.stopPropagation(), O(f, 2 | 16) === 2) {
          let m = r.value.find((g) => g.element === document.activeElement);
          m && i.change(m.propsRef.value);
        }
        break;
      case "ArrowRight":
      case "ArrowDown":
        if (p.preventDefault(), p.stopPropagation(), O(f, 4 | 16) === 2) {
          let m = r.value.find((g) => g.element === document.activeElement);
          m && i.change(m.propsRef.value);
        }
        break;
      case " ":
        {
          p.preventDefault(), p.stopPropagation();
          let b = r.value.find((m) => m.element === document.activeElement);
          b && i.change(b.propsRef.value);
        }
        break;
    }
  }
  let c = `headlessui-radiogroup-${h()}`;
  return () => {
    let _a2 = t, { modelValue: p, disabled: f } = _a2, b = __objRest(_a2, ["modelValue", "disabled"]), m = { ref: o, id: c, role: "radiogroup", "aria-labelledby": s.value, "aria-describedby": d.value, onKeydown: l };
    return x({ props: __spreadValues(__spreadValues({}, b), m), slot: {}, attrs: u, slots: e, name: "RadioGroup" });
  };
} });
defineComponent({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(t, { attrs: n, slots: u }) {
  let e = Jt("RadioGroupOption"), o = `headlessui-radiogroup-option-${h()}`, r = fe({ name: "RadioGroupLabel" }), s = G({ name: "RadioGroupDescription" }), d = ref(null), a = computed(() => ({ value: t.value, disabled: t.disabled })), i = ref(1);
  onMounted(() => e.registerOption({ id: o, element: d, propsRef: a })), onUnmounted(() => e.unregisterOption(o));
  let l = computed(() => {
    var S;
    return ((S = e.firstOption.value) == null ? void 0 : S.id) === o;
  }), c = computed(() => e.disabled.value || t.disabled), p = computed(() => toRaw(e.value.value) === toRaw(t.value)), f = computed(() => c.value ? -1 : p.value || !e.containsCheckedOption.value && l.value ? 0 : -1);
  function b() {
    var S;
    !e.change(t.value) || (i.value |= 2, (S = d.value) == null || S.focus());
  }
  function m() {
    i.value |= 2;
  }
  function g() {
    i.value &= ~2;
  }
  return () => {
    let S = L(t, ["value", "disabled"]), y = { checked: p.value, disabled: c.value, active: Boolean(i.value & 2) }, R = { id: o, ref: d, role: "radio", "aria-checked": p.value ? "true" : "false", "aria-labelledby": r.value, "aria-describedby": s.value, "aria-disabled": c.value ? true : void 0, tabIndex: f.value, onClick: c.value ? void 0 : b, onFocus: c.value ? void 0 : m, onBlur: c.value ? void 0 : g };
    return x({ props: __spreadValues(__spreadValues({}, S), R), slot: y, attrs: n, slots: u, name: "RadioGroupOption" });
  };
} });
var Zt = Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(t, { slots: n, attrs: u }) {
  let e = ref(null), o = fe({ name: "SwitchLabel", props: { onClick() {
    !e.value || (e.value.click(), e.value.focus({ preventScroll: true }));
  } } }), r = G({ name: "SwitchDescription" });
  return provide(Zt, { switchRef: e, labelledby: o, describedby: r }), () => x({ props: t, slot: {}, slots: n, attrs: u, name: "SwitchGroup" });
} });
defineComponent({ name: "Switch", emits: { "update:modelValue": (t) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: false } }, setup(t, { emit: n, attrs: u, slots: e }) {
  let o = inject(Zt, null), r = `headlessui-switch-${h()}`;
  function s() {
    n("update:modelValue", !t.modelValue);
  }
  let d = ref(null), a = o === null ? d : o.switchRef, i = P(computed(() => ({ as: t.as, type: u.type })), a);
  function l(f) {
    f.preventDefault(), s();
  }
  function c(f) {
    f.key !== "Tab" && f.preventDefault(), f.key === " " && s();
  }
  function p(f) {
    f.preventDefault();
  }
  return () => {
    let f = { checked: t.modelValue }, b = { id: r, ref: a, role: "switch", type: i.value, tabIndex: 0, "aria-checked": t.modelValue, "aria-labelledby": o == null ? void 0 : o.labelledby.value, "aria-describedby": o == null ? void 0 : o.describedby.value, onClick: l, onKeyup: c, onKeypress: p };
    return x({ props: __spreadValues(__spreadValues({}, t), b), slot: f, attrs: u, slots: e, name: "Switch" });
  };
} });
var oo = Symbol("TabsContext");
function ve(t) {
  let n = inject(oo, null);
  if (n === null) {
    let u = new Error(`<${t} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u, ve), u;
  }
  return n;
}
defineComponent({ name: "TabGroup", emits: { change: (t) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, setup(t, { slots: n, attrs: u, emit: e }) {
  let o = ref(null), r = ref([]), s = ref([]), d = { selectedIndex: o, orientation: computed(() => t.vertical ? "vertical" : "horizontal"), activation: computed(() => t.manual ? "manual" : "auto"), tabs: r, panels: s, setSelectedIndex(a) {
    o.value !== a && (o.value = a, e("change", a));
  }, registerTab(a) {
    r.value.includes(a) || r.value.push(a);
  }, unregisterTab(a) {
    let i = r.value.indexOf(a);
    i !== -1 && r.value.splice(i, 1);
  }, registerPanel(a) {
    s.value.includes(a) || s.value.push(a);
  }, unregisterPanel(a) {
    let i = s.value.indexOf(a);
    i !== -1 && s.value.splice(i, 1);
  } };
  return provide(oo, d), watchEffect(() => {
    var c;
    if (d.tabs.value.length <= 0 || t.selectedIndex === null && o.value !== null)
      return;
    let a = d.tabs.value.map((p) => v(p)).filter(Boolean), i = a.filter((p) => !p.hasAttribute("disabled")), l = (c = t.selectedIndex) != null ? c : t.defaultIndex;
    if (l < 0)
      o.value = a.indexOf(i[0]);
    else if (l > d.tabs.value.length)
      o.value = a.indexOf(i[i.length - 1]);
    else {
      let p = a.slice(0, l), b = [...a.slice(l), ...p].find((m) => i.includes(m));
      if (!b)
        return;
      o.value = a.indexOf(b);
    }
  }), () => {
    let a = { selectedIndex: o.value };
    return x({ props: L(t, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]), slot: a, slots: n, attrs: u, name: "TabGroup" });
  };
} });
defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: n, slots: u }) {
  let e = ve("TabList");
  return () => {
    let o = { selectedIndex: e.selectedIndex.value }, r = { role: "tablist", "aria-orientation": e.orientation.value };
    return x({ props: __spreadValues(__spreadValues({}, t), r), slot: o, attrs: n, slots: u, name: "TabList" });
  };
} });
defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false } }, setup(t, { attrs: n, slots: u }) {
  let e = ve("Tab"), o = `headlessui-tabs-tab-${h()}`, r = ref();
  onMounted(() => e.registerTab(r)), onUnmounted(() => e.unregisterTab(r));
  let s = computed(() => e.tabs.value.indexOf(r)), d = computed(() => s.value === e.selectedIndex.value);
  function a(p) {
    let f = e.tabs.value.map((b) => v(b)).filter(Boolean);
    if (p.key === " " || p.key === "Enter") {
      p.preventDefault(), p.stopPropagation(), e.setSelectedIndex(s.value);
      return;
    }
    switch (p.key) {
      case "Home":
      case "PageUp":
        return p.preventDefault(), p.stopPropagation(), O(f, 1);
      case "End":
      case "PageDown":
        return p.preventDefault(), p.stopPropagation(), O(f, 8);
    }
    return T(e.orientation.value, { vertical() {
      if (p.key === "ArrowUp")
        return O(f, 2 | 16);
      if (p.key === "ArrowDown")
        return O(f, 4 | 16);
    }, horizontal() {
      if (p.key === "ArrowLeft")
        return O(f, 2 | 16);
      if (p.key === "ArrowRight")
        return O(f, 4 | 16);
    } });
  }
  function i() {
    var p;
    (p = v(r)) == null || p.focus();
  }
  function l() {
    var p;
    t.disabled || ((p = v(r)) == null || p.focus(), e.setSelectedIndex(s.value));
  }
  let c = P(computed(() => ({ as: t.as, type: n.type })), r);
  return () => {
    var b, m;
    let p = { selected: d.value }, f = { ref: r, onKeydown: a, onFocus: e.activation.value === "manual" ? i : l, onClick: l, id: o, role: "tab", type: c.value, "aria-controls": (m = (b = e.panels.value[s.value]) == null ? void 0 : b.value) == null ? void 0 : m.id, "aria-selected": d.value, tabIndex: d.value ? 0 : -1, disabled: t.disabled ? true : void 0 };
    return x({ props: __spreadValues(__spreadValues({}, t), f), slot: p, attrs: n, slots: u, name: "Tab" });
  };
} });
defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: n, attrs: u }) {
  let e = ve("TabPanels");
  return () => {
    let o = { selectedIndex: e.selectedIndex.value };
    return x({ props: t, slot: o, attrs: u, slots: n, name: "TabPanels" });
  };
} });
defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(t, { attrs: n, slots: u }) {
  let e = ve("TabPanel"), o = `headlessui-tabs-panel-${h()}`, r = ref();
  onMounted(() => e.registerPanel(r)), onUnmounted(() => e.unregisterPanel(r));
  let s = computed(() => e.panels.value.indexOf(r)), d = computed(() => s.value === e.selectedIndex.value);
  return () => {
    var l, c;
    let a = { selected: d.value }, i = { ref: r, id: o, role: "tabpanel", "aria-labelledby": (c = (l = e.tabs.value[s.value]) == null ? void 0 : l.value) == null ? void 0 : c.id, tabIndex: d.value ? 0 : -1 };
    return x({ props: __spreadValues(__spreadValues({}, t), i), slot: a, attrs: n, slots: u, features: 2 | 1, visible: d.value, name: "TabPanel" });
  };
} });
function no(t) {
  let n = { called: false };
  return (...u) => {
    if (!n.called)
      return n.called = true, t(...u);
  };
}
function Ze() {
  let t = [], n = [], u = { enqueue(e) {
    n.push(e);
  }, requestAnimationFrame(...e) {
    let o = requestAnimationFrame(...e);
    u.add(() => cancelAnimationFrame(o));
  }, nextFrame(...e) {
    u.requestAnimationFrame(() => {
      u.requestAnimationFrame(...e);
    });
  }, setTimeout(...e) {
    let o = setTimeout(...e);
    u.add(() => clearTimeout(o));
  }, add(e) {
    t.push(e);
  }, dispose() {
    for (let e of t.splice(0))
      e();
  }, async workQueue() {
    for (let e of n.splice(0))
      await e();
  } };
  return u;
}
function et(t, ...n) {
  t && n.length > 0 && t.classList.add(...n);
}
function Fe(t, ...n) {
  t && n.length > 0 && t.classList.remove(...n);
}
function $n(t, n) {
  let u = Ze();
  if (!t)
    return u.dispose;
  let { transitionDuration: e, transitionDelay: o } = getComputedStyle(t), [r, s] = [e, o].map((d) => {
    let [a = 0] = d.split(",").filter(Boolean).map((i) => i.includes("ms") ? parseFloat(i) : parseFloat(i) * 1e3).sort((i, l) => l - i);
    return a;
  });
  return r !== 0 ? u.setTimeout(() => n("finished"), r + s) : n("finished"), u.add(() => n("cancelled")), u.dispose;
}
function tt(t, n, u, e, o, r) {
  let s = Ze(), d = r !== void 0 ? no(r) : () => {
  };
  return Fe(t, ...o), et(t, ...n, ...u), s.nextFrame(() => {
    Fe(t, ...u), et(t, ...e), s.add($n(t, (a) => (Fe(t, ...e, ...n), et(t, ...o), d(a))));
  }), s.add(() => Fe(t, ...n, ...u, ...e, ...o)), s.add(() => d("cancelled")), s.dispose;
}
function Q(t = "") {
  return t.split(" ").filter((n) => n.trim().length > 1);
}
var lt = Symbol("TransitionContext");
function _n() {
  return inject(lt, null) !== null;
}
function qn() {
  let t = inject(lt, null);
  if (t === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return t;
}
function zn() {
  let t = inject(rt, null);
  if (t === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return t;
}
var rt = Symbol("NestingContext");
function He(t) {
  return "children" in t ? He(t.children) : t.value.filter(({ state: n }) => n === "visible").length > 0;
}
function io(t) {
  let n = ref([]), u = ref(false);
  onMounted(() => u.value = true), onUnmounted(() => u.value = false);
  function e(r, s = 1) {
    let d = n.value.findIndex(({ id: a }) => a === r);
    d !== -1 && (T(s, { [0]() {
      n.value.splice(d, 1);
    }, [1]() {
      n.value[d].state = "hidden";
    } }), !He(n) && u.value && (t == null || t()));
  }
  function o(r) {
    let s = n.value.find(({ id: d }) => d === r);
    return s ? s.state !== "visible" && (s.state = "visible") : n.value.push({ id: r, state: "visible" }), () => e(r, 0);
  }
  return { children: n, register: o, unregister: e };
}
var uo = 1, Qn = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(t, { emit: n, attrs: u, slots: e }) {
  if (!_n() && it())
    return () => h$1(Yn, __spreadProps(__spreadValues({}, t), { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave") }), e);
  let o = ref(null), r = ref("visible"), s = computed(() => t.unmount ? 0 : 1), { show: d, appear: a } = qn(), { register: i, unregister: l } = zn(), c = { value: true }, p = h(), f = { value: false }, b = io(() => {
    f.value || (r.value = "hidden", l(p), n("afterLeave"));
  });
  onMounted(() => {
    let F = i(p);
    onUnmounted(F);
  }), watchEffect(() => {
    if (s.value === 1 && !!p) {
      if (d && r.value !== "visible") {
        r.value = "visible";
        return;
      }
      T(r.value, { hidden: () => l(p), visible: () => i(p) });
    }
  });
  let m = Q(t.enter), g = Q(t.enterFrom), S = Q(t.enterTo), y = Q(t.entered), R = Q(t.leave), E = Q(t.leaveFrom), D = Q(t.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (r.value === "visible") {
        let F = v(o);
        if (F instanceof Comment && F.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function w(F) {
    let xe = c.value && !a.value, U = v(o);
    !U || !(U instanceof HTMLElement) || xe || (f.value = true, d.value && n("beforeEnter"), d.value || n("beforeLeave"), F(d.value ? tt(U, m, g, S, y, (ye) => {
      f.value = false, ye === "finished" && n("afterEnter");
    }) : tt(U, R, E, D, y, (ye) => {
      f.value = false, ye === "finished" && (He(b) || (r.value = "hidden", l(p), n("afterLeave")));
    })));
  }
  return onMounted(() => {
    watch([d, a], (F, xe, U) => {
      w(U), c.value = false;
    }, { immediate: true });
  }), provide(rt, b), M(computed(() => T(r.value, { visible: 0, hidden: 1 }))), () => {
    let _a2 = t, { appear: F, show: xe, enter: U, enterFrom: ye, enterTo: Xn, entered: Zn, leave: el, leaveFrom: tl, leaveTo: ol } = _a2, so = __objRest(_a2, ["appear", "show", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]);
    return x({ props: __spreadValues(__spreadValues({}, so), { ref: o }), slot: {}, slots: e, attrs: u, features: uo, visible: r.value === "visible", name: "TransitionChild" });
  };
} }), Jn = Qn, Yn = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(t, { emit: n, attrs: u, slots: e }) {
  let o = I(), r = computed(() => t.show === null && o !== null ? T(o.value, { [0]: true, [1]: false }) : t.show);
  watchEffect(() => {
    if (![true, false].includes(r.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let s = ref(r.value ? "visible" : "hidden"), d = io(() => {
    s.value = "hidden";
  }), a = { value: true }, i = { show: r, appear: computed(() => t.appear || !a.value) };
  return onMounted(() => {
    watchEffect(() => {
      a.value = false, r.value ? s.value = "visible" : He(d) || (s.value = "hidden");
    });
  }), provide(rt, d), provide(lt, i), () => {
    let l = L(t, ["show", "appear", "unmount"]), c = { unmount: t.unmount };
    return x({ props: __spreadProps(__spreadValues({}, c), { as: "template" }), slot: {}, slots: __spreadProps(__spreadValues({}, e), { default: () => [h$1(Jn, __spreadValues(__spreadValues(__spreadValues({ onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave") }, u), c), l), e.default)] }), attrs: {}, features: uo, visible: s.value === "visible", name: "Transition" });
  };
} });
export { Da as D, Ga as G, Ia as I, La as L, Pa as P, _a as _, qa as q, wa as w, za as z };
