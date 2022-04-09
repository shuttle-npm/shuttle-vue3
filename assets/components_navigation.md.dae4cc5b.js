import { _ as _sfc_main$2 } from "./chunks/Alert.09481406.js";
import { o as openBlock, c as createBlock, a as createVNode, b as createElementBlock, F as Fragment, r as renderList, n as normalizeClass, w as withCtx, u as unref, f as createBaseVNode, t as toDisplayString, d as createCommentVNode, T as Transition, e as ref, g as createTextVNode, h as createStaticVNode } from "./app.a503ecea.js";
import { _ as _a, q as qa, z as za, G as Ga } from "./chunks/headlessui.esm.6edd7d1e.js";
import { u as useCoreClass } from "./chunks/useCoreClass.322213e7.js";
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
const _hoisted_1$1 = ["onClick"];
const _hoisted_2$1 = ["onClick"];
const _sfc_main$1 = {
  props: {
    items: {
      type: Array
    },
    svClass: {
      type: Object
    },
    minimal: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    var _a2;
    const props = __props;
    const click = (item) => {
      var _a3;
      if ((_a3 = item.disabled) != null ? _a3 : false) {
        return;
      }
      emit("click", item);
    };
    const getItemType = (item) => {
      var _a3;
      return (_a3 = item.type) != null ? _a3 : "item";
    };
    const minimal = (_a2 = props.minimal) != null ? _a2 : false;
    const normal = !minimal;
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-navigation", getOptions(true)),
        useCoreClass("sv-navigation--minimal", getOptions(minimal)),
        useCoreClass("sv-navigation--normal", getOptions(normal))
      ];
    };
    const getItemClasses = () => {
      return [
        useCoreClass("sv-navigation__item", getOptions(true)),
        useCoreClass("sv-navigation__item--minimal", getOptions(minimal)),
        useCoreClass("sv-navigation__item--normal", getOptions(normal))
      ];
    };
    const getButtonClasses = (item) => {
      var _a3;
      return [
        useCoreClass("sv-navigation__button", getOptions(true)),
        useCoreClass("sv-navigation__button--minimal", getOptions(minimal)),
        useCoreClass("sv-navigation__button--normal", getOptions(normal)),
        useCoreClass("sv-navigation__button--disabled", getOptions((_a3 = item == null ? void 0 : item.disabled) != null ? _a3 : false))
      ];
    };
    const getButtonTextClasses = () => {
      return [
        useCoreClass("sv-navigation__button-text", getOptions(true)),
        useCoreClass("sv-navigation__button-text--minimal", getOptions(minimal)),
        useCoreClass("sv-navigation__button-text--normal", getOptions(normal))
      ];
    };
    const getButtonIconClasses = () => {
      return [
        useCoreClass("sv-navigation__button-icon", getOptions(true)),
        useCoreClass("sv-navigation__button-icon--minimal", getOptions(minimal)),
        useCoreClass("sv-navigation__button-icon--normal", getOptions(normal))
      ];
    };
    const getLinkClasses = (item, active) => {
      var _a3;
      return [
        useCoreClass("sv-navigation__link", getOptions(true)),
        useCoreClass("sv-navigation__link--minimal", getOptions(minimal)),
        useCoreClass("sv-navigation__link--normal", getOptions(normal)),
        useCoreClass("sv-navigation__link--active", getOptions(active)),
        useCoreClass("sv-navigation__link--inactive", getOptions(!active)),
        useCoreClass("sv-navigation__link--disabled", getOptions((_a3 = item == null ? void 0 : item.disabled) != null ? _a3 : false))
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
        useCoreClass("sv-navigation__dropdown--minimal", getOptions(minimal)),
        useCoreClass("sv-navigation__dropdown--normal", getOptions(normal))
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
              var _a3, _b;
              return [
                !!((_a3 = item.items) == null ? void 0 : _a3.length) ? (openBlock(), createBlock(unref(_a), {
                  key: 0,
                  as: "div",
                  class: normalizeClass(getButtonClasses(item))
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      class: normalizeClass(getButtonTextClasses())
                    }, toDisplayString(item.text), 3),
                    createVNode(unref(render), {
                      class: normalizeClass(getButtonIconClasses())
                    }, null, 8, ["class"])
                  ]),
                  _: 2
                }, 1032, ["class"])) : createCommentVNode("", true),
                !((_b = item.items) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("a", {
                  key: 1,
                  onClick: ($event) => click(item),
                  class: normalizeClass(getLinkClasses(item))
                }, toDisplayString(item.text), 11, _hoisted_1$1)) : createCommentVNode("", true),
                createVNode(Transition, {
                  enter: "transition ease-out duration-100",
                  enterFrom: "transform opacity-0 scale-95",
                  enterTo: "transform opacity-100 scale-100",
                  leave: "transition ease-in duration-75",
                  leaveFrom: "transform opacity-100 scale-100",
                  leaveTo: "transform opacity-0 scale-95"
                }, {
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
                              }, toDisplayString(subitem.text), 11, _hoisted_2$1))
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
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "navigation",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Navigation "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#navigation",
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
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="language-vue"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> items </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">([</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Link</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/some-link</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Dropdown</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Action</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/action</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Another action</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/another-action</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">divider</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Also disabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">disabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">divider</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Something else</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/something-else</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">        ]</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Disabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">disabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">&lt;Navigation :items=&quot;items&quot; @click=&quot;click&quot; /&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>items</code></td><td><code>Array</code></td><td><code>[]</code></td><td>The items that should be rendered in the navigation menu,</td></tr><tr><td><code>minimal</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>If <code>true</code> the navigation menu has the <code>--minimal</code> class modifiers applied. This is typically applied when the screen size is small, such as on mobile devices.</td></tr><tr><td><code>sv-class</code></td><td><code>Object</code></td><td><code>{}</code></td><td>The <a href="/shuttle-vue3/components/core-class.html">core class object</a> that will render classes along with the corresponding BEM entries.</td></tr></tbody></table><h3 id="items" tabindex="-1">Items <a class="header-anchor" href="#items" aria-hidden="true">#</a></h3><p>The items represent a menu that is one level deep:</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">represents a route</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        disabled: </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">|</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// defaults to false</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// or</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">represents a route</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                disabled: </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">|</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// defaults to false</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">divider|item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">        ]</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">]</span></span>\n<span class="line"></span></code></pre></div><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><ul><li><p><code>sv-navigation</code></p><ul><li><code>--normal</code></li><li><code>--minimal</code></li></ul></li><li><p><code>sv-navigation__item</code></p><ul><li><code>--normal</code></li><li><code>--minimal</code></li></ul></li><li><p><code>sv-navigation__button</code></p><ul><li><code>--normal</code></li><li><code>--minimal</code></li><li><code>--disabled</code></li></ul></li><li><p><code>sv-navigation__button-text</code></p><ul><li><code>--normal</code></li><li><code>--minimal</code></li></ul></li><li><p><code>sv-navigation__button-icon</code></p><ul><li><code>--normal</code></li><li><code>--minimal</code></li></ul></li><li><p><code>sv-navigation__link</code></p><ul><li><code>--normal</code></li><li><code>--minimal</code></li><li><code>--disabled</code></li><li><code>--active</code></li><li><code>--inactive</code></li></ul></li><li><p><code>sv-navigation__divider</code></p></li><li><p><code>sv-navigation__dropdown</code></p><ul><li><code>--normal</code></li><li><code>--minimal</code></li></ul></li></ul>', 8);
const __pageData = '{"title":"Navigation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"Items","slug":"items"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/navigation.md"}';
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
    const message = ref("You can click a navigation item to change this message.");
    const click = (item) => {
      message.value = `You clicked the "${item.text}" item that routes to "${item.to}".`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$2), {
          type: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"]),
        createVNode(unref(_sfc_main$1), {
          items: items.value,
          "sv-class": { "sv-navigation__link": "vt-doc-ignore" },
          onClick: click
        }, null, 8, ["items"]),
        _hoisted_3
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
