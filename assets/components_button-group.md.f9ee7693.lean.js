import { _ as _sfc_main$2 } from "./chunks/Alert.e855adf8.js";
import { o as openBlock, c as createBlock, a as createVNode, b as createElementBlock, F as Fragment, r as renderList, n as normalizeClass, w as withKeys, i as resolveDynamicComponent, f as createBaseVNode, t as toDisplayString, e as ref, u as unref, g as createTextVNode, h as createStaticVNode } from "./app.6385b3a4.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
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
      d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
      d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
const _hoisted_1$1 = ["onClick", "onKeydown"];
const _sfc_main$1 = {
  props: {
    buttons: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    modelValue: {
      type: String,
      default: ""
    },
    svClass: {
      type: Object
    }
  },
  emits: ["update:modelValue", "click"],
  setup(__props, { emit }) {
    const props = __props;
    const click = (event, button) => {
      event.stopPropagation();
      event.preventDefault();
      if (props.disabled) {
        return;
      }
      emit("update:modelValue", button.value);
      emit("click", button);
    };
    const getIcon = (button) => {
      return button.icon ? button.icon : void 0;
    };
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-button-group", getOptions(true))
      ];
    };
    const getButtonClasses = (button) => {
      return [
        useCoreClass("sv-button-group__button", getOptions(true)),
        useCoreClass("sv-button-group__button--selected", getOptions(props.modelValue === button.value)),
        useCoreClass("sv-button-group__button--disabled", getOptions(props.disabled))
      ];
    };
    const getIconClasses = (button) => {
      return [
        useCoreClass("sv-button-group__button-icon", getOptions(true))
      ];
    };
    const getTextClasses = (button) => {
      return [
        useCoreClass("sv-button-group__button-text", getOptions(true))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses())
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.buttons, (button) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(getButtonClasses(button)),
            onClick: ($event) => click($event, button),
            onKeydown: [
              withKeys(($event) => click($event, button), ["space"]),
              withKeys(($event) => click($event, button), ["enter"])
            ],
            tabindex: "0"
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(getIcon(button)), {
              class: normalizeClass(getIconClasses())
            }, null, 8, ["class"])),
            createBaseVNode("span", {
              class: normalizeClass(getTextClasses())
            }, toDisplayString(button.text), 3)
          ], 42, _hoisted_1$1);
        }), 256))
      ], 2);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "button-group",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Button Group "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#button-group",
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
const _hoisted_3 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode("", 6);
const __pageData = '{"title":"Button Group","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"With Icon","slug":"with-icon"},{"level":3,"title":"Disabled","slug":"disabled"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/button-group.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const value = ref();
    const message = ref("You can click a button to change this message.");
    const click = (button) => {
      message.value = `You clicked the "${button.text}" button with value "${button.value}".`;
    };
    const buttons = ref([
      {
        text: "Left",
        value: "left-value"
      },
      {
        text: "Middle",
        value: "middle-value"
      },
      {
        text: "Right",
        value: "right-value"
      }
    ]);
    const buttonsWithIcon = ref([
      {
        text: "Left",
        value: "left-value",
        icon: render
      },
      {
        text: "Middle",
        value: "middle-value"
      },
      {
        text: "Right",
        value: "right-value",
        icon: render$1
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, "Value: " + toDisplayString(value.value), 1),
        createVNode(unref(_sfc_main$2), {
          variant: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"]),
        createVNode(unref(_sfc_main$1), {
          buttons: buttons.value,
          onClick: click,
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event)
        }, null, 8, ["buttons", "modelValue"]),
        _hoisted_3,
        createVNode(unref(_sfc_main$1), {
          buttons: buttonsWithIcon.value,
          onClick: click,
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event)
        }, null, 8, ["buttons", "modelValue"]),
        _hoisted_5,
        createVNode(unref(_sfc_main$1), {
          buttons: buttonsWithIcon.value,
          onClick: click,
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          disabled: true
        }, null, 8, ["buttons", "modelValue"]),
        _hoisted_7
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
