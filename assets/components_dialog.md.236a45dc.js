import { _ as _sfc_main$2 } from "./chunks/Button.fe46f02d.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { Q as Qn, Y as Yn } from "./chunks/headlessui.esm.6b1df13f.js";
import { o as openBlock, c as createBlock, w as withCtx, g as createBaseVNode, a as createVNode, n as normalizeClass, u as unref, b as createElementBlock, t as toDisplayString, d as createCommentVNode, k as renderSlot, e as ref, h as createTextVNode, i as createStaticVNode } from "./app.64078bd2.js";
const _sfc_main$1 = {
  props: {
    message: {
      type: String
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    setIsOpen: {
      type: Function
    },
    svClass: {
      type: Object
    },
    title: {
      type: String
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
        useCoreClass("sv-dialog", getOptions(true))
      ];
    };
    const getTitleClasses = () => {
      return [
        useCoreClass("sv-dialog__title", getOptions(true))
      ];
    };
    const getMessageClasses = () => {
      return [
        useCoreClass("sv-dialog__message", getOptions(true))
      ];
    };
    const getOverlayClasses = () => {
      return [
        useCoreClass("sv-dialog__overlay", getOptions(true))
      ];
    };
    const getContainerClasses = () => {
      return [
        useCoreClass("sv-dialog__container", getOptions(true))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Yn), {
        show: !!props.isOpen
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(getClasses())
          }, [
            createVNode(unref(Qn), {
              enter: "sv-dialog__overlay-enter-active",
              "enter-from": "sv-dialog__overlay-enter-from",
              "enter-to": "sv-dialog__overlay-enter-to",
              leave: "sv-dialog__overlay-leave-active",
              "leave-from": "sv-dialog__overlay-leave-from",
              "leave-to": "sv-dialog__overlay-leave-to"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(getOverlayClasses()),
                  onClick: _cache[0] || (_cache[0] = ($event) => {
                    var _a;
                    return (_a = props.setIsOpen) == null ? void 0 : _a.call(props, false);
                  })
                }, null, 2)
              ]),
              _: 1
            }),
            createVNode(unref(Qn), {
              enter: "sv-dialog-enter-active",
              "enter-from": "sv-dialog-enter-from",
              "enter-to": "sv-dialog-enter-to",
              leave: "sv-dialog-leave-active",
              "leave-from": "sv-dialog-leave-from",
              "leave-to": "sv-dialog-leave-to"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(getContainerClasses())
                }, [
                  !!props.title ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(getTitleClasses())
                  }, toDisplayString(props.title), 3)) : createCommentVNode("", true),
                  !!props.message ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(getMessageClasses())
                  }, toDisplayString(props.message), 3)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "default")
                ], 2)
              ]),
              _: 3
            })
          ], 2)
        ]),
        _: 3
      }, 8, ["show"]);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "dialog",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Dialog "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#dialog",
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
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Show");
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-2" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "text-sm" }, " This text is provided in the default slot. ")
], -1);
const _hoisted_5 = { class: "mt-4" };
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Dialog</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isOpen </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> setIsOpen </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">isOpen</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Dialog</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">is-open</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isOpen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        :</span><span style="color:#C792EA;">set-is-open</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">setIsOpen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Dialog Title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A message for the dialog.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mt-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-sm text-gray-500</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                This text is provided in the default slot.</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mt-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">setIsOpen</span><span style="color:#89DDFF;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                Button</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Dialog</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>message</code></td><td><code>String</code></td><td><code>&quot;&quot;</code></td><td>A message to show in the dialog.</td></tr><tr><td><code>isOpen</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Set to <code>true</code> to show the dialog; else <code>false</code> to hide the dialog.</td></tr><tr><td><code>setIsOpen</code></td><td><code>Function</code></td><td><code>undefined</code></td><td>The function to call that would set the <code>isOpen</code> prop to <code>false</code>. Should take a single argument that represents the <code>isOpen</code> state.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr><tr><td><code>title</code></td><td><code>String</code></td><td><code>&quot;&quot;</code></td><td>A title to show in the dialog.</td></tr></tbody></table><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><code>sv-dialog</code></li><li><code>sv-dialog__title</code></li><li><code>sv-dialog__message</code></li><li><code>sv-dialog__overlay</code></li><li><code>sv-dialog__container</code></li></ul>', 5);
const __pageData = '{"title":"Dialog","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/dialog.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const isOpen = ref(false);
    const setIsOpen = (value) => {
      isOpen.value = value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$2), {
          onClick: _cache[0] || (_cache[0] = ($event) => setIsOpen(true))
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }),
        createVNode(unref(_sfc_main$1), {
          "is-open": isOpen.value,
          "set-is-open": setIsOpen,
          title: "Dialog Title",
          message: "A message for the dialog."
        }, {
          default: withCtx(() => [
            _hoisted_4,
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("button", {
                type: "button",
                class: "inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",
                onClick: _cache[1] || (_cache[1] = ($event) => setIsOpen(false))
              }, " Button ")
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        _hoisted_6
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
