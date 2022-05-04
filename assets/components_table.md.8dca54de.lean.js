import { _ as _sfc_main$4 } from "./chunks/Button.b93f312c.js";
import { _ as _sfc_main$2 } from "./chunks/ButtonGroup.34aa9180.js";
import { _ as _sfc_main$3 } from "./chunks/Checkbox.b780ec41.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { o as openBlock, c as createBlock, a as createVNode, e as ref, f as computed, b as createElementBlock, g as createBaseVNode, n as normalizeClass, F as Fragment, r as renderList, u as unref, d as createCommentVNode, k as renderSlot, h as createTextVNode, t as toDisplayString, j as resolveDynamicComponent, w as withCtx, i as createStaticVNode } from "./app.2556e307.js";
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
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "p-4" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    role: "status",
    class: "w-8 h-8 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
      fill: "currentFill"
    })
  ])
], -1);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode("", 14);
const __pageData = '{"title":"Table","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Slots","slug":"slots"},{"level":2,"title":"Fields","slug":"fields"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/table.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const fields = [
      {
        name: "row",
        text: "#",
        thClass: "border-solid border-0 border-r border-gray-500 w-1",
        tdClass: "border-solid border-0 border-r border-gray-500"
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
          modelValue: variant.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => variant.value = $event),
          buttons: buttons.value,
          class: "mb-4"
        }, null, 8, ["modelValue", "buttons"]),
        createVNode(unref(_sfc_main$3), {
          modelValue: busy.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => busy.value = $event),
          label: "Busy?",
          class: "mb-2"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$3), {
          modelValue: empty.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => empty.value = $event),
          label: "Empty?",
          class: "mb-4"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$1), {
          fields,
          items: unref(getItems),
          variant: variant.value,
          "sv-class": svClass,
          busy: busy.value
        }, {
          "item(row)": withCtx((data) => [
            createTextVNode(toDisplayString(data.index), 1)
          ]),
          "item(custom)": withCtx((data) => [
            createVNode(unref(_sfc_main$4), {
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
            _hoisted_5
          ]),
          _: 1
        }, 8, ["items", "variant", "busy"]),
        _hoisted_6
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
