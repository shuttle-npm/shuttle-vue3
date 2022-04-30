import { _ as _sfc_main$3 } from "./chunks/Button.16897251.js";
import { _ as _sfc_main$2 } from "./chunks/ButtonGroup.0bc5ca5e.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { o as openBlock, c as createBlock, a as createVNode, e as ref, p as computed, b as createElementBlock, f as createBaseVNode, n as normalizeClass, F as Fragment, r as renderList, u as unref, j as renderSlot, g as createTextVNode, t as toDisplayString, i as resolveDynamicComponent, k as withCtx, h as createStaticVNode } from "./app.f6d61257.js";
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
      d: "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
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
      d: "M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
    })
  ]);
}
const _hoisted_1$1 = ["onClick"];
const _sfc_main$1 = {
  props: {
    fields: {
      type: Array,
      default: []
    },
    items: {
      type: Array,
      default: []
    },
    svClass: {
      type: Object
    },
    variant: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const sortedFieldName = ref("");
    const sortOrder = ref("");
    const fieldClick = (field) => {
      if (field.sortable) {
        if (sortedFieldName.value === field.name) {
          sortOrder.value = sortOrder.value === "ascending" ? "descending" : "ascending";
        } else {
          sortedFieldName.value = field.name;
          sortOrder.value = "ascending";
        }
      }
    };
    const items = computed(() => {
      const result = props.items;
      const multiplier = sortOrder.value === "ascending" ? 1 : -1;
      const fieldName = sortedFieldName.value;
      if (fieldName !== "") {
        result.sort((a, b) => {
          return (a[fieldName] > b[fieldName] ? 1 : -1) * multiplier;
        });
      }
      return result;
    });
    const getSortOrderIcon = (field) => {
      if (sortedFieldName.value !== field.name) {
        return;
      }
      return sortOrder.value === "ascending" ? render$1 : render;
    };
    const getFieldSlotName = (field) => {
      return `field(${field.name})`;
    };
    const getItemSlotName = (field) => {
      return `item(${field.name})`;
    };
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-table", getOptions(true))
      ];
    };
    const getContainerClasses = () => {
      return [
        useCoreClass("sv-table__container", getOptions(true))
      ];
    };
    const getHeadClasses = () => {
      return [
        useCoreClass("sv-table__thead", getOptions(true))
      ];
    };
    const getHeadRowClasses = (field) => {
      return [
        useCoreClass("sv-table__thead-tr", getOptions(true))
      ];
    };
    const getFieldClasses = (field) => {
      return [
        useCoreClass("sv-table__th", getOptions(true)),
        useCoreClass("sv-table__th--sortable", getOptions(!!field.sortable))
      ];
    };
    const getFieldContainerClasses = (field) => {
      return [
        useCoreClass("sv-table__th-container", getOptions(true)),
        useCoreClass("sv-table__th-container--sortable", getOptions(!!field.sortable))
      ];
    };
    const getSortOrderIconClasses = (field) => {
      return [
        useCoreClass("sv-table__th-sort-order-icon", getOptions(true))
      ];
    };
    const getBodyClasses = () => {
      return [
        useCoreClass("sv-table__tbody", getOptions(true))
      ];
    };
    const getItemClasses = () => {
      return [
        useCoreClass("sv-table__td", getOptions(true))
      ];
    };
    const getBodyRowClasses = () => {
      return [
        useCoreClass("sv-table__tbody-tr", getOptions(true)),
        useCoreClass("sv-table__tbody-tr--striped", getOptions(props.variant === "striped"))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getContainerClasses())
      }, [
        createBaseVNode("table", {
          class: normalizeClass(getClasses())
        }, [
          createBaseVNode("thead", {
            class: normalizeClass(getHeadClasses())
          }, [
            createBaseVNode("tr", {
              class: normalizeClass(getHeadRowClasses())
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.fields, (field) => {
                return openBlock(), createElementBlock("th", {
                  class: normalizeClass(getFieldClasses(field)),
                  onClick: ($event) => fieldClick(field)
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(getFieldContainerClasses(field))
                  }, [
                    renderSlot(_ctx.$slots, getFieldSlotName(field), { field }, () => [
                      createTextVNode(toDisplayString(field.text) + " ", 1),
                      (openBlock(), createBlock(resolveDynamicComponent(getSortOrderIcon(field)), {
                        class: normalizeClass(getSortOrderIconClasses())
                      }, null, 8, ["class"]))
                    ])
                  ], 2)
                ], 10, _hoisted_1$1);
              }), 256))
            ], 2)
          ], 2),
          createBaseVNode("tbody", {
            class: normalizeClass(getBodyClasses())
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (item, index) => {
              return openBlock(), createElementBlock("tr", {
                class: normalizeClass(getBodyRowClasses())
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.fields, (field) => {
                  return openBlock(), createElementBlock("td", {
                    class: normalizeClass(getItemClasses())
                  }, [
                    renderSlot(_ctx.$slots, getItemSlotName(field), {
                      field,
                      item,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(item[field.name]), 1)
                    ])
                  ], 2);
                }), 256))
              ], 2);
            }), 256))
          ], 2)
        ], 2)
      ], 2);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "table",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Table "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#table",
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
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Remove");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode("", 13);
const __pageData = '{"title":"Table","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Slots","slug":"slots"},{"level":2,"title":"Fields","slug":"fields"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/table.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const fields = [
      {
        name: "row",
        text: "#"
      },
      {
        name: "name",
        text: "Name",
        sortable: true
      },
      {
        name: "custom",
        text: "Custom"
      }
    ];
    const items = [
      {
        name: "Name-A"
      },
      {
        name: "Name-B"
      },
      {
        name: "Name-C"
      },
      {
        name: "Name-D"
      },
      {
        name: "Name-E"
      }
    ];
    const variant = ref("");
    const buttons = ref([
      {
        text: "none",
        value: ""
      },
      {
        text: "striped",
        value: "striped"
      }
    ]);
    const svClass = {
      "sv-table": "vt-doc-ignore",
      "sv-table__thead-tr": "vt-doc-ignore",
      "sv-table__th": "vt-doc-ignore",
      "sv-table__tr-td": "vt-doc-ignore",
      "sv-table__tbody-tr": "vt-doc-ignore",
      "sv-table__td": "vt-doc-ignore"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$2), {
          modelValue: variant.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => variant.value = $event),
          buttons: buttons.value,
          class: "mb-4"
        }, null, 8, ["modelValue", "buttons"]),
        createVNode(unref(_sfc_main$1), {
          fields,
          items,
          variant: variant.value,
          "sv-class": svClass
        }, {
          "item(row)": withCtx((data) => [
            createTextVNode(toDisplayString(data.index), 1)
          ]),
          "item(custom)": withCtx((data) => [
            createVNode(unref(_sfc_main$3), {
              variant: "danger",
              size: "xs"
            }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["variant"]),
        _hoisted_4
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
