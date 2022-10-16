import { _ as _sfc_main$4 } from "./chunks/Busy.330c0e95.js";
import { _ as _sfc_main$3 } from "./chunks/Button.7f5d353a.js";
import { _ as _sfc_main$2 } from "./chunks/Checkbox.d2234ddc.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { o as openBlock, c as createBlock, a as createVNode, e as ref, f as computed, b as createElementBlock, g as createBaseVNode, n as normalizeClass, F as Fragment, r as renderList, u as unref, d as createCommentVNode, k as renderSlot, h as createTextVNode, t as toDisplayString, j as resolveDynamicComponent, w as withCtx, i as createStaticVNode } from "./app.c06a58f8.js";
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
    const getInlineFieldClasses = (field) => {
      return [
        useCoreClass("sv-table__th-inline", getOptions(true)),
        useCoreClass("sv-table__th-inline--sortable", getOptions(!!field.sortable)),
        useCoreClass("sv-table__th-inline--busy", getOptions(!!props.busy)),
        useCoreClass("sv-table__th-inline--empty", getOptions(!items.length)),
        !!field.thClass ? field.thClass : ""
      ];
    };
    const getFieldContainerClasses = (field) => {
      return [
        useCoreClass("sv-table__th-container", getOptions(true)),
        useCoreClass("sv-table__th-container--sortable", getOptions(!!field.sortable)),
        useCoreClass("sv-table__th-container--reverse", getOptions(!!field.reverse))
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
                    createBaseVNode("div", {
                      class: normalizeClass(getInlineFieldClasses(field))
                    }, toDisplayString(field.text), 3),
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
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fields </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">row</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">thClass</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">border-solid border-0 border-r border-gray-200 w-1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">tdClass</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">border-solid border-0 border-r border-gray-200</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">sortable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">tdClass</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">sortable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">reverse</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Custom</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> items </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Name-A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Name-B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Name-C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Name-D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Name-E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Table</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">fields</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">fields</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">items</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">striped</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">striped</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">item</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">row</span><span style="color:#89DDFF;">)=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-slot:item</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">custom</span><span style="color:#89DDFF;">)=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Remove</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">empty</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p-6 text-center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                (no results)</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">busy</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">role</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w-8 h-8 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 100 101</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fill</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2000/svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">d</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fill</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">currentColor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">d</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fill</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">currentFill</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Table</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>busy</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Indicates that results are being retrieved and renders the <code>busy</code> slot.</td></tr><tr><td><code>fields</code></td><td><code>Array</code></td><td><code>[]</code></td><td>The fields (columns) that should render.</td></tr><tr><td><code>items</code></td><td><code>Array</code></td><td><code>[]</code></td><td>The items that contains the data for each row. The <code>fields</code> would contain the property name of the item to render.</td></tr><tr><td><code>striped</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>If <code>true</code> renders the <code>sv-table__tbody-tr--striped</code> BEM class.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><p>Each field has a slot named <code>field({field.name})</code> with the following props:</p><ul><li><code>field</code></li></ul><p>Items have a slot named <code>item({field.name})</code> with the following props:</p><ul><li><code>field</code></li><li><code>item</code></li><li><code>index</code></li></ul><p>There is also a slot when there are no items called <code>empty</code> and another called <code>busy</code> which is rendered when the <code>busy</code> prop is <code>true</code>.</p><h2 id="fields" tabindex="-1">Fields <a class="header-anchor" href="#fields" aria-hidden="true">#</a></h2><p>A field should have the following structure:</p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>String</code></td><td><em>required</em></td><td>The name of the field which is also the property of the <code>item</code> when rendered by the table.</td></tr><tr><td><code>text</code></td><td><code>String</code></td><td><code>&quot;&quot;</code></td><td>The text to display for the column header.</td></tr><tr><td><code>sortable</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Indicates that the data in the table may be sorted by clicking on the column header.</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><code>sv-table</code></li><li><code>sv-table__container</code></li><li><code>sv-table__thead</code></li><li><code>sv-table__thead-tr</code><ul><li><code>sv-table__thead-tr--busy</code></li><li><code>sv-table__thead-tr--empty</code></li></ul></li><li><code>sv-table__th</code><ul><li><code>sv-table__th--sortable</code></li><li><code>sv-table__th--busy</code></li><li><code>sv-table__th--empty</code></li></ul></li><li><code>sv-table__th-inline</code><ul><li><code>sv-table__th-inline--sortable</code></li><li><code>sv-table__th-inline--busy</code></li><li><code>sv-table__th-inline--empty</code></li></ul></li><li><code>sv-table__th-container</code><ul><li><code>sv-table__th-container--sortable</code></li><li><code>sv-table__th-container--reverse</code></li></ul></li><li><code>sv-table__th-sort-order-icon</code></li><li><code>sv-table__tbody</code></li><li><code>sv-table__td</code><ul><li><code>sv-table__td--busy</code></li><li><code>sv-table__td--empty</code></li></ul></li><li><code>sv-table__tbody-tr</code><ul><li><code>sv-table__tbody-tr--busy</code></li><li><code>sv-table__tbody-tr--empty</code></li><li><code>sv-table__tbody-tr--striped</code></li></ul></li></ul>', 14);
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
        name: "count",
        text: "Count",
        tdClass: "text-right",
        sortable: true,
        reverse: true
      },
      {
        name: "custom",
        text: "Custom"
      }
    ];
    const items = [
      {
        name: "Name-A",
        count: 1
      },
      {
        name: "Name-B",
        count: 2
      },
      {
        name: "Name-C",
        count: 3
      },
      {
        name: "Name-D",
        count: 4
      },
      {
        name: "Name-E",
        count: 5
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
