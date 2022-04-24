import { o as openBlock, c as createBlock, a as createVNode, b as createElementBlock, F as Fragment, r as renderList, n as normalizeClass, w as withCtx, u as unref, t as toDisplayString, d as createCommentVNode, i as resolveDynamicComponent, G as Transition } from "../app.aa6e2e2c.js";
import { _ as _a, q as qa, z as za, G as Ga } from "./headlessui.esm.38e5f17b.js";
import { u as useCoreClass } from "./useCoreClass.4c1eebb8.js";
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
      d: "M19 9l-7 7-7-7"
    })
  ]);
}
const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["onClick"];
const _sfc_main = {
  props: {
    items: {
      type: Array,
      default: []
    },
    svClass: {
      type: Object
    },
    minimal: {
      type: Boolean,
      default: false
    },
    dropdownAlignment: {
      type: String,
      default: "left"
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const click = (item) => {
      var _a2;
      if ((_a2 = item.disabled) != null ? _a2 : false) {
        return;
      }
      if (!!item.click) {
        item.click(item);
      } else {
        emit("click", item);
      }
    };
    const getButtonIcon = (item) => {
      return item.buttonIcon ? item.buttonIcon : render;
    };
    const getItemType = (item) => {
      var _a2;
      return (_a2 = item.type) != null ? _a2 : "item";
    };
    const getDropdownAlignment = () => {
      var _a2;
      switch (((_a2 = props.dropdownAlignment) != null ? _a2 : "left").toLowerCase()) {
        case "right": {
          return "right";
        }
        default: {
          return "left";
        }
      }
    };
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-navigation", getOptions(true)),
        useCoreClass("sv-navigation--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation--normal", getOptions(!props.minimal))
      ];
    };
    const getItemClasses = () => {
      return [
        useCoreClass("sv-navigation__item", getOptions(true)),
        useCoreClass("sv-navigation__item--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__item--normal", getOptions(!props.minimal))
      ];
    };
    const getButtonClasses = (item) => {
      var _a2;
      return [
        useCoreClass("sv-navigation__button", getOptions(true)),
        useCoreClass("sv-navigation__button--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__button--normal", getOptions(!props.minimal)),
        useCoreClass("sv-navigation__button--disabled", getOptions((_a2 = item == null ? void 0 : item.disabled) != null ? _a2 : false))
      ];
    };
    const getButtonTextClasses = () => {
      return [
        useCoreClass("sv-navigation__button-text", getOptions(true)),
        useCoreClass("sv-navigation__button-text--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__button-text--normal", getOptions(!props.minimal))
      ];
    };
    const getButtonIconClasses = () => {
      return [
        useCoreClass("sv-navigation__button-icon", getOptions(true)),
        useCoreClass("sv-navigation__button-icon--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__button-icon--normal", getOptions(!props.minimal))
      ];
    };
    const getLinkClasses = (item, active) => {
      var _a2;
      return [
        useCoreClass("sv-navigation__link", getOptions(true)),
        useCoreClass("sv-navigation__link--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__link--normal", getOptions(!props.minimal)),
        useCoreClass("sv-navigation__link--active", getOptions(active)),
        useCoreClass("sv-navigation__link--inactive", getOptions(!active)),
        useCoreClass("sv-navigation__link--disabled", getOptions((_a2 = item == null ? void 0 : item.disabled) != null ? _a2 : false))
      ];
    };
    const getDividerClasses = (active) => {
      return [
        useCoreClass("sv-navigation__divider", getOptions(true))
      ];
    };
    const getDropdownClasses = () => {
      return [
        useCoreClass("sv-navigation__dropdown", getOptions(true)),
        useCoreClass("sv-navigation__dropdown--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__dropdown--normal", getOptions(!props.minimal)),
        useCoreClass("sv-navigation__dropdown--left", getOptions(getDropdownAlignment() == "left")),
        useCoreClass("sv-navigation__dropdown--right", getOptions(getDropdownAlignment() == "right"))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses())
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createBlock(unref(Ga), {
            as: "div",
            key: item.text,
            class: normalizeClass(getItemClasses())
          }, {
            default: withCtx(() => {
              var _a2, _b;
              return [
                !!((_a2 = item.items) == null ? void 0 : _a2.length) ? (openBlock(), createBlock(unref(_a), {
                  key: 0,
                  as: "div",
                  class: normalizeClass(getButtonClasses(item))
                }, {
                  default: withCtx(() => [
                    item.text ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(getButtonTextClasses())
                    }, toDisplayString(item.text), 3)) : createCommentVNode("", true),
                    (openBlock(), createBlock(resolveDynamicComponent(getButtonIcon(item)), {
                      class: normalizeClass(getButtonIconClasses())
                    }, null, 8, ["class"]))
                  ]),
                  _: 2
                }, 1032, ["class"])) : createCommentVNode("", true),
                !((_b = item.items) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("a", {
                  key: 1,
                  onClick: ($event) => click(item),
                  class: normalizeClass(getLinkClasses(item))
                }, toDisplayString(item.text), 11, _hoisted_1)) : createCommentVNode("", true),
                createVNode(Transition, { name: "sv-navigation" }, {
                  default: withCtx(() => [
                    createVNode(unref(qa), {
                      class: normalizeClass(getDropdownClasses())
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item.items, (subitem) => {
                          return openBlock(), createBlock(unref(za), {
                            key: subitem.text,
                            as: "div"
                          }, {
                            default: withCtx(({ active }) => [
                              getItemType(subitem) === "divider" ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: normalizeClass(getDividerClasses())
                              }, null, 2)) : (openBlock(), createElementBlock("a", {
                                key: 1,
                                onClick: ($event) => click(subitem),
                                class: normalizeClass(getLinkClasses(subitem, active))
                              }, toDisplayString(subitem.text), 11, _hoisted_2))
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }),
            _: 2
          }, 1032, ["class"]);
        }), 128))
      ], 2);
    };
  }
};
export { _sfc_main as _ };
