import { o as openBlock, c as createBlock, a as createVNode, w as withCtx, f as createBaseVNode, u as unref, n as normalizeClass, j as renderSlot, e as ref, b as createElementBlock, h as createStaticVNode, V as VTIconShuttle } from "./app.7104fec2.js";
import { _ as _sfc_main$3 } from "./chunks/Alert.d867fd84.js";
import { a as aa, i as ia, r as ra } from "./chunks/headlessui.esm.6088d488.js";
import { u as useCoreClass } from "./chunks/useCoreClass.322213e7.js";
import { _ as _sfc_main$2 } from "./chunks/Navigation.cf3b64b2.js";
function render$2(_ctx, _cache) {
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
      d: "M4 6h16M4 12h16M4 18h16"
    })
  ]);
}
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
      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
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
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Open main menu", -1);
const _sfc_main$1 = {
  props: {
    items: {
      type: Array,
      default: []
    },
    svClass: {
      type: Object
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const click = (item) => {
      var _a;
      if ((_a = item.disabled) != null ? _a : false) {
        return;
      }
      emit("click", item);
    };
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-navbar", getOptions(true))
      ];
    };
    const getMenuToggleClasses = () => {
      return [
        useCoreClass("sv-navbar__menu-toggle", getOptions(true))
      ];
    };
    const getSlotStartClasses = () => {
      return [
        useCoreClass("sv-navbar__slot-start", getOptions(true))
      ];
    };
    const getSlotEndClasses = () => {
      return [
        useCoreClass("sv-navbar__slot-end", getOptions(true))
      ];
    };
    const getNavigationClasses = () => {
      return [
        useCoreClass("sv-navbar__navigation", getOptions(true))
      ];
    };
    const getNavigationPanelClasses = () => {
      return [
        useCoreClass("sv-navbar__navigation-panel", getOptions(true))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ra), { as: "nav" }, {
        default: withCtx(({ open }) => [
          createBaseVNode("div", {
            class: normalizeClass(getClasses())
          }, [
            createVNode(unref(aa), {
              class: normalizeClass(getMenuToggleClasses())
            }, {
              default: withCtx(() => [
                _hoisted_1$1,
                open ? (openBlock(), createBlock(unref(render), {
                  key: 0,
                  class: "h-8 w-8",
                  "aria-hidden": "true"
                })) : (openBlock(), createBlock(unref(render$2), {
                  key: 1,
                  class: "h-8 w-8",
                  "aria-hidden": "true"
                }))
              ]),
              _: 2
            }, 1032, ["class"]),
            createBaseVNode("div", {
              class: normalizeClass(getSlotStartClasses())
            }, [
              renderSlot(_ctx.$slots, "start")
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(getNavigationClasses())
            }, [
              createVNode(_sfc_main$2, {
                items: _ctx.$props.items,
                onClick: click,
                "sv-class": props.svClass
              }, null, 8, ["items", "sv-class"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(getSlotEndClasses())
            }, [
              renderSlot(_ctx.$slots, "end")
            ], 2)
          ], 2),
          createVNode(unref(ia), {
            class: normalizeClass(getNavigationPanelClasses())
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                items: _ctx.$props.items,
                minimal: true,
                onClick: click,
                "sv-class": props.svClass
              }, null, 8, ["items", "sv-class"])
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        _: 3
      });
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 3);
const _hoisted_4 = { class: "sv-border border-gray-400" };
const _hoisted_5 = { class: "flex flex-row items-center mr-2" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "font-bold text-orange-500 mt-[2px]" }, "Shuttle", -1);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode("", 8);
const __pageData = '{"title":"Navbar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"Items","slug":"items"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/navbar.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const items = ref([
      {
        text: "Home",
        to: "/home"
      },
      {
        text: "Link",
        to: "/some-link"
      },
      {
        text: "Dropdown",
        items: [
          {
            text: "Action",
            to: "/action"
          },
          {
            text: "Another action",
            to: "/another-action"
          },
          {
            type: "divider"
          },
          {
            text: "Also disabled",
            disabled: true
          },
          {
            type: "divider"
          },
          {
            text: "Something else",
            to: "/something-else"
          }
        ]
      },
      {
        text: "Disabled",
        disabled: true
      }
    ]);
    const profileItems = ref([
      {
        buttonIcon: render$1,
        items: [
          {
            text: "Profile",
            to: "/profile"
          },
          {
            type: "divider"
          },
          {
            text: "Logout",
            click: () => {
              message.value = "We should invoke the logout functionality here.";
            }
          }
        ]
      }
    ]);
    const message = ref("You can click a navigation item to change this message.");
    ref(false);
    const click = (item) => {
      message.value = `You clicked the "${item.text}" item that routes to "${item.to}".`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(unref(_sfc_main$3), {
          type: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(unref(_sfc_main$1), {
            items: items.value,
            "sv-class": { "sv-navbar": "px-2", "sv-navigation__link": "vt-doc-ignore" },
            onClick: click
          }, {
            start: withCtx(() => [
              createBaseVNode("div", _hoisted_5, [
                createVNode(unref(VTIconShuttle), { class: "h-10 w-10" }),
                _hoisted_6
              ])
            ]),
            end: withCtx(() => [
              createVNode(unref(_sfc_main$2), {
                items: profileItems.value,
                "sv-class": { "sv-navigation__link": "vt-doc-ignore" },
                "dropdown-alignment": "right"
              }, null, 8, ["items"])
            ]),
            _: 1
          }, 8, ["items"])
        ]),
        _hoisted_7
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
