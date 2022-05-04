import { o as openBlock, c as createBlock, a as createVNode, w as withCtx, g as createBaseVNode, u as unref, n as normalizeClass, d as createCommentVNode, k as renderSlot, _ as _export_sfc, b as createElementBlock, e as ref, h as createTextVNode, i as createStaticVNode, V as VTIconShuttle } from "./app.2556e307.js";
import { _ as _sfc_main$3 } from "./chunks/Alert.67dc2959.js";
import { a as aa, i as ia, r as ra } from "./chunks/headlessui.esm.f71b5cd5.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { _ as _sfc_main$5 } from "./chunks/Navigation.af956493.js";
import { _ as _sfc_main$4 } from "./chunks/Toggle.4f30617c.js";
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
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Open main menu", -1);
const _sfc_main$2 = {
  props: {
    showMenuToggle: {
      type: Boolean,
      default: true
    },
    svClass: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
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
    const getStartClasses = () => {
      return [
        useCoreClass("sv-navbar__start", getOptions(true))
      ];
    };
    const getNavigationClasses = () => {
      return [
        useCoreClass("sv-navbar__navigation", getOptions(true))
      ];
    };
    const getEndClasses = () => {
      return [
        useCoreClass("sv-navbar__end", getOptions(true))
      ];
    };
    const getPanelMinimalClasses = () => {
      return [
        useCoreClass("sv-navbar__panel--minimal", getOptions(true))
      ];
    };
    const getTopMinimalClasses = () => {
      return [
        useCoreClass("sv-navbar__sv-top-minimal", getOptions(true))
      ];
    };
    const getNavigationMinimalClasses = () => {
      return [
        useCoreClass("sv-navbar__navigation-minimal", getOptions(true))
      ];
    };
    const getBottomMinimalClasses = () => {
      return [
        useCoreClass("sv-navbar__bottom-minimal", getOptions(true))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ra), { as: "nav" }, {
        default: withCtx(({ open }) => [
          createBaseVNode("div", {
            class: normalizeClass(getClasses())
          }, [
            props.showMenuToggle ? (openBlock(), createBlock(unref(aa), {
              key: 0,
              class: normalizeClass(getMenuToggleClasses())
            }, {
              default: withCtx(() => [
                _hoisted_1$2,
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
            }, 1032, ["class"])) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(getStartClasses())
            }, [
              renderSlot(_ctx.$slots, "start")
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(getNavigationClasses())
            }, [
              renderSlot(_ctx.$slots, "navigation")
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(getEndClasses())
            }, [
              renderSlot(_ctx.$slots, "end")
            ], 2)
          ], 2),
          createVNode(unref(ia), {
            class: normalizeClass(getPanelMinimalClasses())
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(getTopMinimalClasses())
              }, [
                renderSlot(_ctx.$slots, "top-minimal")
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(getNavigationMinimalClasses())
              }, [
                renderSlot(_ctx.$slots, "navigation-minimal")
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(getBottomMinimalClasses())
              }, [
                renderSlot(_ctx.$slots, "bottom-minimal")
              ], 2)
            ]),
            _: 3
          }, 8, ["class"])
        ]),
        _: 3
      });
    };
  }
};
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var IconGitHub = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "navbar",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Navbar "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#navbar",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "example",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Example "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#example",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_3 = { class: "sv-border border-gray-400" };
const _hoisted_4 = { class: "flex flex-row items-center mr-2" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "font-bold text-orange-500 mt-[2px]" }, "Shuttle", -1);
const _hoisted_6 = { class: "flex flex-row items-center" };
const _hoisted_7 = { class: "hidden sm:block" };
const _hoisted_8 = /* @__PURE__ */ createStaticVNode("", 7);
const __pageData = '{"title":"Navbar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Slots","slug":"slots"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/navbar.md"}';
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
    const showMenuToggle = ref(true);
    const click = (item) => {
      message.value = `You clicked the "${item.text}" item that routes to "${item.to}".`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$3), {
          type: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"]),
        createVNode(unref(_sfc_main$4), {
          modelValue: showMenuToggle.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showMenuToggle.value = $event),
          label: "Show menu toggle (minimal)?",
          "sv-class": { "sv-toggle": "mb-4" }
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(unref(_sfc_main$2), {
            items: items.value,
            "sv-class": { "sv-navbar": "px-2", "sv-navigation__link": "vt-doc-ignore" },
            "show-menu-toggle": showMenuToggle.value
          }, {
            start: withCtx(() => [
              createBaseVNode("div", _hoisted_4, [
                createVNode(unref(VTIconShuttle), { class: "h-10 w-10" }),
                _hoisted_5
              ])
            ]),
            navigation: withCtx(() => [
              createVNode(unref(_sfc_main$5), {
                items: items.value,
                onClick: click,
                "sv-class": { "sv-navigation__link": "vt-doc-ignore" }
              }, null, 8, ["items"])
            ]),
            end: withCtx(() => [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  createVNode(unref(_sfc_main$5), {
                    items: profileItems.value,
                    "sv-class": { "sv-navigation__link": "vt-doc-ignore" },
                    "dropdown-alignment": "right",
                    onClick: click
                  }, null, 8, ["items"])
                ]),
                createVNode(IconGitHub, { class: "h-5 w-5 fill-gray-500 mx-2 cursor-pointer" })
              ])
            ]),
            "navigation-minimal": withCtx(() => [
              createVNode(unref(_sfc_main$5), {
                minimal: true,
                items: items.value,
                onClick: click,
                "sv-class": { "sv-navigation__link": "vt-doc-ignore" }
              }, null, 8, ["items"])
            ]),
            "bottom-minimal": withCtx(() => [
              createVNode(unref(_sfc_main$5), {
                minimal: true,
                items: profileItems.value,
                "sv-class": { "sv-navigation__link": "vt-doc-ignore" },
                "dropdown-alignment": "right",
                onClick: click
              }, null, 8, ["items"])
            ]),
            _: 1
          }, 8, ["items", "show-menu-toggle"])
        ]),
        _hoisted_8
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
