import { _ as _sfc_main$3 } from "./chunks/Alert.8f88d4e2.js";
import { o as openBlock, c as createBlock, a as createVNode, f as computed, w as withCtx, g as createBaseVNode, n as normalizeClass, u as unref, h as createTextVNode, t as toDisplayString, d as createCommentVNode, b as createElementBlock, k as renderSlot, r as renderList, F as Fragment, J as Transition, e as ref, i as createStaticVNode } from "./app.c06a58f8.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { P as Pa, D as Da, w as wa, I as Ia, L as La } from "./chunks/headlessui.esm.2f6fc0a2.js";
import { _ as _sfc_main$2 } from "./chunks/Input.7bbccbb1.js";
import { _ as _sfc_main$4 } from "./chunks/ValidationMessage.7d03ed6b.js";
function render$2(_ctx, _cache) {
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
function render$1(_ctx, _cache) {
  return openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
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
const _hoisted_1$1 = {
  key: 0,
  class: "sv-listbox__selected-option"
};
const _hoisted_2$1 = {
  key: 1,
  class: "sv-listbox__placeholder"
};
const _hoisted_3$1 = { class: "sv-listbox__icon-container" };
const _hoisted_4$1 = { class: "relative" };
const _hoisted_5 = {
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
      type: [String, Number]
    },
    searchable: {
      type: Boolean
    },
    svClass: {
      type: Object
    }
  },
  emits: ["update:modelValue", "searchValue"],
  setup(__props, { emit }) {
    var _a, _b;
    const props = __props;
    const getLayout = () => {
      var _a2;
      return ((_a2 = props.layout) != null ? _a2 : "block").toLowerCase();
    };
    const selectedOptionText = computed(() => {
      var _a2;
      return (_a2 = props.options.find((item) => item[props.valueProperty] === props.modelValue)) == null ? void 0 : _a2[props.displayProperty];
    });
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
    const getMessageClasses = () => {
      return [
        useCoreClass("sv-listbox__message", getOptions(true)),
        useCoreClass("sv-listbox__message--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-listbox__message--block", getOptions(getLayout() === "block"))
      ];
    };
    const getListboxOptionsClasses = () => {
      return [
        useCoreClass("sv-listbox__options", getOptions(true)),
        useCoreClass("sv-listbox__options--searchable", getOptions(props.searchable))
      ];
    };
    const displayProperty = (_a = props.displayProperty) != null ? _a : "text";
    const valueProperty = (_b = props.valueProperty) != null ? _b : "value";
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Ia), {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => emit("update:modelValue", value)),
        "model-value": props.modelValue
      }, {
        default: withCtx(({ open }) => [
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
                    unref(selectedOptionText) ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(unref(selectedOptionText)), 1)) : (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString((_a2 = props.placeholder) != null ? _a2 : "(select option)"), 1)),
                    createBaseVNode("span", _hoisted_3$1, [
                      createVNode(unref(render), {
                        class: "sv-listbox__icon",
                        "aria-hidden": "true"
                      })
                    ])
                  ];
                }),
                _: 1
              }, 8, ["class"]),
              _ctx.$slots.message && !open ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(getMessageClasses())
              }, [
                renderSlot(_ctx.$slots, "message")
              ], 2)) : createCommentVNode("", true)
            ], 2),
            createVNode(Transition, {
              "leave-active-class": "transition duration-100 ease-in",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: withCtx(() => [
                createVNode(unref(wa), {
                  class: normalizeClass(getListboxOptionsClasses())
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_4$1, [
                      props.searchable ? (openBlock(), createBlock(unref(_sfc_main$2), {
                        key: 0,
                        class: "sv-listbox__search",
                        "icon-end": unref(render$1),
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = (value) => emit("searchValue", value))
                      }, null, 8, ["icon-end"])) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(props.options, (option) => {
                        return openBlock(), createBlock(unref(La), {
                          key: option[unref(valueProperty)],
                          value: option[unref(valueProperty)],
                          as: "template"
                        }, {
                          default: withCtx(({ active, selected }) => {
                            var _a2;
                            return [
                              createBaseVNode("li", {
                                class: normalizeClass([active ? "sv-listbox__option--active" : "sv-listbox__option--inactive", "sv-listbox__option"])
                              }, [
                                createBaseVNode("span", {
                                  class: normalizeClass([
                                    selected ? "sv-listbox__option-text--selected" : "sv-listbox__option-text--not-selected",
                                    "sv-listbox__option-text"
                                  ])
                                }, toDisplayString((_a2 = option[unref(displayProperty)]) != null ? _a2 : unref(displayProperty)), 3),
                                selected ? (openBlock(), createElementBlock("span", _hoisted_5, [
                                  createVNode(unref(render$2), {
                                    class: "sv-listbox__option-icon--selected",
                                    "aria-hidden": "true"
                                  })
                                ])) : createCommentVNode("", true)
                              ], 2)
                            ];
                          }),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            })
          ], 2)
        ]),
        _: 3
      }, 8, ["model-value"]);
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
const _hoisted_4 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode("", 3);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode("", 5);
const __pageData = '{"title":"Listbox","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Label","slug":"label"},{"level":3,"title":"Searchable","slug":"searchable"},{"level":3,"title":"Slot","slug":"slot"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/listbox.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const options = [
      { value: 0, text: "(no one)" },
      { value: 1, text: "Wade Cooper" },
      { value: 2, text: "Arlene Mccoy" },
      { value: 3, text: "Devon Webb" },
      { value: 4, text: "Tom Cook" },
      { value: 5, text: "Tanya Fox" },
      { value: 6, text: "Hellen Schmidt" },
      { value: 7, text: "Inigo Montoya" },
      { value: 8, text: "Hartwig Schierbaum" }
    ];
    const value = ref();
    const searchValue = ref("");
    const filter = (value2) => {
      searchValue.value = value2;
    };
    const filteredOptions = computed(() => {
      if (!searchValue.value) {
        return options;
      }
      const result = options.filter((option) => {
        return option.text.indexOf(searchValue.value) > -1;
      });
      return result;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, "Value: " + toDisplayString(value.value != void 0 ? value.value : "(nothing selected)"), 1),
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
        _hoisted_4,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value.value = $event),
          options: unref(filteredOptions),
          label: "Block layout",
          searchable: "",
          onSearchValue: filter
        }, null, 8, ["modelValue", "options"]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value.value = $event),
          options: unref(filteredOptions),
          label: "Inline layout",
          layout: "inline",
          class: "mt-2",
          searchable: "",
          onSearchValue: filter
        }, null, 8, ["modelValue", "options"]),
        _hoisted_6,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => value.value = $event),
          options,
          label: "Block layout"
        }, {
          message: withCtx(() => [
            createVNode(unref(_sfc_main$3), {
              message: "This is an info alert.",
              size: "sm",
              outline: "",
              class: "mt-2",
              variant: "info"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => value.value = $event),
          options,
          label: "Inline layout",
          layout: "inline",
          class: "mt-2"
        }, {
          message: withCtx(() => [
            createVNode(unref(_sfc_main$4), { message: "This is a validation message." })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _hoisted_9
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
