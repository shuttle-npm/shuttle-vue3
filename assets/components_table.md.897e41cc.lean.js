import { _ as _sfc_main$4 } from "./chunks/Busy.677aa61b.js";
import { _ as _sfc_main$3 } from "./chunks/Button.fe46f02d.js";
import { _ as _sfc_main$2 } from "./chunks/Checkbox.413098e0.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { o as openBlock, c as createBlock, a as createVNode, e as ref, f as computed, b as createElementBlock, g as createBaseVNode, n as normalizeClass, F as Fragment, r as renderList, u as unref, d as createCommentVNode, k as renderSlot, h as createTextVNode, t as toDisplayString, j as resolveDynamicComponent, w as withCtx, i as createStaticVNode } from "./app.64078bd2.js";
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
const _hoisted_2$1 = ["colspan"];
const _hoisted_3$1 = ["colspan"];
const _sfc_main$1 = {
  props: {
    busy: {
      type: Boolean,
      default: false
    },
    fields: {
      type: Array,
      default: []
    },
    items: {
      type: Array,
      default: []
    },
    striped: {
      type: Boolean,
      default: false
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
    const formatValue = (field, value) => {
      if (!!field.formatter && typeof (field.formatter === "function")) {
        return field.formatter(value);
      }
      return value;
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
    const getHeadRowClasses = () => {
      return [
        useCoreClass("sv-table__thead-tr", getOptions(true)),
        useCoreClass("sv-table__thead-tr--busy", getOptions(!!props.busy)),
        useCoreClass("sv-table__thead-tr--empty", getOptions(!items.length))
      ];
    };
    const getFieldClasses = (field) => {
      return [
        useCoreClass("sv-table__th", getOptions(true)),
        useCoreClass("sv-table__th--sortable", getOptions(!!field.sortable)),
        useCoreClass("sv-table__th--busy", getOptions(!!props.busy)),
        useCoreClass("sv-table__th--empty", getOptions(!items.length)),
        !!field.thClass ? field.thClass : ""
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
    const getItemClasses = (field) => {
      return [
        useCoreClass("sv-table__td", getOptions(true)),
        useCoreClass("sv-table__td--busy", getOptions(!!props.busy)),
        useCoreClass("sv-table__td--empty", getOptions(!items.length)),
        !!(field == null ? void 0 : field.tdClass) ? field.tdClass : ""
      ];
    };
    const getBodyRowClasses = () => {
      return [
        useCoreClass("sv-table__tbody-tr", getOptions(true)),
        useCoreClass("sv-table__tbody-tr--busy", getOptions(!!props.busy)),
        useCoreClass("sv-table__tbody-tr--empty", getOptions(!items.length)),
        useCoreClass("sv-table__tbody-tr--striped", getOptions(props.striped))
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
            !props.busy && !!unref(items).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(items), (item, index) => {
              return openBlock(), createElementBlock("tr", {
                class: normalizeClass(getBodyRowClasses())
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.fields, (field) => {
                  return openBlock(), createElementBlock("td", {
                    class: normalizeClass(getItemClasses(field))
                  }, [
                    renderSlot(_ctx.$slots, getItemSlotName(field), {
                      field,
                      item,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(formatValue(field, item[field.name])), 1)
                    ])
                  ], 2);
                }), 256))
              ], 2);
            }), 256)) : createCommentVNode("", true),
            !props.busy && !unref(items).length ? (openBlock(), createElementBlock("tr", {
              key: 1,
              class: normalizeClass(getBodyRowClasses())
            }, [
              createBaseVNode("td", {
                colspan: __props.fields.length,
                class: normalizeClass(getItemClasses())
              }, [
                renderSlot(_ctx.$slots, "empty")
              ], 10, _hoisted_2$1)
            ], 2)) : createCommentVNode("", true),
            props.busy ? (openBlock(), createElementBlock("tr", {
              key: 2,
              class: normalizeClass(getBodyRowClasses())
            }, [
              createBaseVNode("td", {
                colspan: __props.fields.length,
                class: normalizeClass(getItemClasses())
              }, [
                renderSlot(_ctx.$slots, "busy")
              ], 10, _hoisted_3$1)
            ], 2)) : createCommentVNode("", true)
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
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "p-6 text-center" }, "(no results)", -1);
const _hoisted_5 = { class: "p-4" };
const _hoisted_6 = /* @__PURE__ */ createStaticVNode("", 14);
const __pageData = '{"title":"Table","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Slots","slug":"slots"},{"level":2,"title":"Fields","slug":"fields"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/table.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const fields = [
      {
        name: "row",
        text: "#",
        thClass: "border-solid border-0 border-r border-gray-200 w-1",
        tdClass: "border-solid border-0 border-r border-gray-200"
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
    const striped = ref(false);
    const variant = ref("");
    ref([
      {
        text: "none",
        value: ""
      },
      {
        text: "primary",
        value: "primary"
      },
      {
        text: "secondary",
        value: "secondary"
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
    const busy = ref(false);
    const empty = ref(false);
    const getItems = computed(() => {
      return empty.value ? [] : items;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$2), {
          modelValue: striped.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => striped.value = $event),
          label: "Striped?",
          class: "mb-2"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: busy.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => busy.value = $event),
          label: "Busy?",
          class: "mb-2"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$2), {
          modelValue: empty.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => empty.value = $event),
          label: "Empty?",
          class: "mb-4"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$1), {
          fields,
          items: unref(getItems),
          striped: striped.value,
          "sv-class": svClass,
          busy: busy.value,
          variant: variant.value
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
          empty: withCtx(() => [
            _hoisted_4
          ]),
          busy: withCtx(() => [
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(_sfc_main$4))
            ])
          ]),
          _: 1
        }, 8, ["items", "striped", "busy", "variant"]),
        _hoisted_6
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
