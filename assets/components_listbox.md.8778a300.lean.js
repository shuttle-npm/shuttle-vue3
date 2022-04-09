import { o as openBlock, c as createBlock, a as createVNode, e as ref, w as withCtx, f as createBaseVNode, n as normalizeClass, u as unref, g as createTextVNode, t as toDisplayString, d as createCommentVNode, b as createElementBlock, r as renderList, F as Fragment, T as Transition, h as createStaticVNode } from "./app.a503ecea.js";
import { P as Pa, D as Da, w as wa, I as Ia, L as La } from "./chunks/headlessui.esm.6edd7d1e.js";
import { u as useCoreClass } from "./chunks/useCoreClass.322213e7.js";
function render$1(_ctx, _cache) {
  return openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render(_ctx, _cache) {
  return openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "fill-rule": "evenodd",
      d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _hoisted_1$1 = { class: "sv-listbox__selected-option" };
const _hoisted_2$1 = { class: "sv-listbox__icon-container" };
const _hoisted_3$1 = {
  key: 0,
  class: "sv-listbox__option-icon-container--selected"
};
const _sfc_main$1 = {
  props: {
    layout: {
      type: String,
      default: "block"
    },
    label: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: void 0
    },
    displayProperty: {
      type: String,
      default: "text"
    },
    valueProperty: {
      type: String,
      default: "value"
    },
    placeholder: {
      type: String,
      default: "Please select..."
    },
    modelValue: {
      type: void 0
    },
    svClass: {
      type: Object
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    var _a, _b, _c;
    const props = __props;
    const getLayout = () => {
      var _a2;
      return ((_a2 = props.layout) != null ? _a2 : "block").toLowerCase();
    };
    const options = (_a = props.options) != null ? _a : [];
    const selectedOption = ref();
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-listbox", getOptions(true)),
        useCoreClass("sv-listbox--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-listbox--block", getOptions(getLayout() === "block"))
      ];
    };
    const getContainerClasses = () => {
      return [
        useCoreClass("sv-listbox__container", getOptions(true)),
        useCoreClass("sv-listbox__container--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-listbox__container--block", getOptions(getLayout() === "block"))
      ];
    };
    const getButtonClasses = () => {
      return [
        useCoreClass("sv-listbox__button", getOptions(true)),
        useCoreClass("sv-listbox__button--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-listbox__button--block", getOptions(getLayout() === "block"))
      ];
    };
    const getLabelClasses = () => {
      return [
        useCoreClass("sv-listbox__label", getOptions(true)),
        useCoreClass("sv-listbox__label--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-listbox__label--block", getOptions(getLayout() === "block"))
      ];
    };
    const displayProperty = (_b = props.displayProperty) != null ? _b : "text";
    const valueProperty = (_c = props.valueProperty) != null ? _c : "value";
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Ia), {
        modelValue: selectedOption.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedOption.value = $event)
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(getClasses())
          }, [
            createBaseVNode("div", {
              class: normalizeClass(getContainerClasses())
            }, [
              !!props.label ? (openBlock(), createBlock(unref(Pa), {
                key: 0,
                class: normalizeClass(getLabelClasses())
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.label), 1)
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true),
              createVNode(unref(Da), {
                class: normalizeClass(getButtonClasses())
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createBaseVNode("span", _hoisted_1$1, toDisplayString(!!selectedOption.value ? (_a2 = selectedOption.value[unref(displayProperty)]) != null ? _a2 : unref(displayProperty) : __props.placeholder), 1),
                    createBaseVNode("span", _hoisted_2$1, [
                      createVNode(unref(render), {
                        class: "sv-listbox__icon",
                        "aria-hidden": "true"
                      })
                    ])
                  ];
                }),
                _: 1
              }, 8, ["class"])
            ], 2),
            createVNode(Transition, {
              "leave-active-class": "transition duration-100 ease-in",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: withCtx(() => [
                createVNode(unref(wa), { class: "sv-listbox__options" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), (option) => {
                      var _a2;
                      return openBlock(), createBlock(unref(La), {
                        key: (_a2 = option[unref(valueProperty)]) != null ? _a2 : option[unref(displayProperty)],
                        value: option,
                        as: "template",
                        onclick: emit("update:modelValue", option)
                      }, {
                        default: withCtx(({ active, selected }) => {
                          var _a3;
                          return [
                            createBaseVNode("li", {
                              class: normalizeClass([active ? "sv-listbox__option--active" : "sv-listbox__option--inactive", "sv-listbox__option"])
                            }, [
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  selected ? "sv-listbox__option-text--selected" : "sv-listbox__option-text--not-selected",
                                  "sv-listbox__option-text"
                                ])
                              }, toDisplayString((_a3 = option[unref(displayProperty)]) != null ? _a3 : unref(displayProperty)), 3),
                              selected ? (openBlock(), createElementBlock("span", _hoisted_3$1, [
                                createVNode(unref(render$1), {
                                  class: "sv-listbox__option-icon--selected",
                                  "aria-hidden": "true"
                                })
                              ])) : createCommentVNode("", true)
                            ], 2)
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "onclick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 2)
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
};
var listbox_md_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "listbox",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Listbox "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#listbox",
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
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "label",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Label "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#label",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode("", 5);
const __pageData = '{"title":"Listbox","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Label","slug":"label"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/listbox.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const options = [
      { text: "Wade Cooper" },
      { text: "Arlene Mccoy" },
      { text: "Devon Webb" },
      { text: "Tom Cook" },
      { text: "Tanya Fox" },
      { text: "Hellen Schmidt" }
    ];
    const value = ref();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, "Value: " + toDisplayString(!!value.value ? value.value.text : "(nothing selected)"), 1),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          options
        }, null, 8, ["modelValue"]),
        _hoisted_3,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          options,
          label: "Block layout"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          options,
          label: "Inline layout",
          layout: "inline",
          class: "mt-2"
        }, null, 8, ["modelValue"]),
        _hoisted_4
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
