"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_components_inventory_InventoryManager_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=script&lang=js"
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InventoryManager',
  data: function data() {
    return {
      products: [],
      meta: {
        current_page: 1,
        last_page: 1
      },
      loading: false,
      search: '',
      page: 1,
      editing: null,
      editQty: 0,
      _debounce: null
    };
  },
  methods: {
    fetchProducts: function fetchProducts() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$_this$$http$ge, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.loading = true;
              _context.p = 1;
              _context.n = 2;
              return _this.$http.get('/admin/inventory', {
                params: {
                  search: _this.search,
                  page: _this.page
                }
              });
            case 2:
              _yield$_this$$http$ge = _context.v;
              data = _yield$_this$$http$ge.data;
              _this.products = data.data;
              _this.meta = {
                current_page: data.current_page,
                last_page: data.last_page
              };
            case 3:
              _context.p = 3;
              _this.loading = false;
              return _context.f(3);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[1,, 3, 4]]);
      }))();
    },
    debouncedFetch: function debouncedFetch() {
      clearTimeout(this._debounce);
      this._debounce = setTimeout(this.fetchProducts, 300);
    },
    changePage: function changePage(p) {
      this.page = p;
      this.fetchProducts();
    },
    startEdit: function startEdit(product) {
      this.editing = product.id;
      this.editQty = product.stock_quantity;
    },
    saveStock: function saveStock(product) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this2.$http.put("/admin/inventory/".concat(product.id), {
                stock_quantity: _this2.editQty
              });
            case 1:
              product.stock_quantity = _this2.editQty;
              _this2.editing = null;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  },
  created: function created() {
    this.fetchProducts();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=template&id=1687a522"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=template&id=1687a522 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "space-y-4"
  }, [_c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("h1", {
    staticClass: "text-2xl font-bold text-white"
  }, [_vm._v("Inventory")]), _vm._v(" "), _c("router-link", {
    staticClass: "px-4 py-2 bg-red-900/40 border border-red-700/50 text-red-400 hover:bg-red-900/60 rounded-lg text-sm flex items-center gap-2",
    attrs: {
      to: "/inventory?low=1"
    }
  }, [_vm._v("\n      ⚠ Low Stock\n    ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "flex gap-3 bg-slate-900 rounded-xl border border-slate-800 p-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 w-80",
    attrs: {
      type: "text",
      placeholder: "Search by name or SKU…"
    },
    domProps: {
      value: _vm.search
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }, _vm.debouncedFetch]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "bg-slate-900 rounded-xl border border-slate-800 overflow-hidden"
  }, [_vm.loading ? _c("div", {
    staticClass: "p-8 text-center text-slate-500"
  }, [_vm._v("Loading…")]) : _c("table", {
    staticClass: "w-full text-sm text-left text-slate-400"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.products, function (product) {
    return _c("tr", {
      key: product.id,
      staticClass: "border-b border-slate-800/60 hover:bg-slate-800/40 transition-colors",
      "class": product.stock_quantity <= product.low_stock_threshold ? "bg-red-950/20" : ""
    }, [_c("td", {
      staticClass: "py-3 px-4 text-white font-medium"
    }, [_vm._v(_vm._s(product.name))]), _vm._v(" "), _c("td", {
      staticClass: "py-3 px-4 font-mono text-xs"
    }, [_vm._v(_vm._s(product.sku))]), _vm._v(" "), _c("td", {
      staticClass: "py-3 px-4"
    }, [_vm._v(_vm._s(product.seller ? product.seller.store_name : "—"))]), _vm._v(" "), _c("td", {
      staticClass: "py-3 px-4"
    }, [_vm.editing === product.id ? _c("div", {
      staticClass: "flex items-center gap-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: _vm.editQty,
        expression: "editQty",
        modifiers: {
          number: true
        }
      }],
      staticClass: "w-20 bg-slate-800 border border-orange-500 rounded px-2 py-1 text-white text-xs",
      attrs: {
        type: "number",
        min: "0"
      },
      domProps: {
        value: _vm.editQty
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.editQty = _vm._n($event.target.value);
        },
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "text-green-400 text-xs",
      on: {
        click: function click($event) {
          return _vm.saveStock(product);
        }
      }
    }, [_vm._v("Save")]), _vm._v(" "), _c("button", {
      staticClass: "text-slate-500 text-xs",
      on: {
        click: function click($event) {
          _vm.editing = null;
        }
      }
    }, [_vm._v("Cancel")])]) : _c("span", {
      "class": product.stock_quantity <= product.low_stock_threshold ? "text-red-400 font-semibold" : "text-white"
    }, [_vm._v("\n              " + _vm._s(product.stock_quantity) + "\n            ")])]), _vm._v(" "), _c("td", {
      staticClass: "py-3 px-4"
    }, [_vm._v(_vm._s(product.low_stock_threshold))]), _vm._v(" "), _c("td", {
      staticClass: "py-3 px-4"
    }, [_vm.editing !== product.id ? _c("button", {
      staticClass: "text-orange-500 hover:text-orange-400 text-xs",
      on: {
        click: function click($event) {
          return _vm.startEdit(product);
        }
      }
    }, [_vm._v("Edit Stock")]) : _vm._e()])]);
  }), _vm._v(" "), _vm.products.length === 0 ? _c("tr", [_c("td", {
    staticClass: "py-8 text-center text-slate-600",
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("No products found")])]) : _vm._e()], 2)]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-between px-4 py-3 border-t border-slate-800"
  }, [_c("span", {
    staticClass: "text-xs text-slate-500"
  }, [_vm._v("Page " + _vm._s(_vm.meta.current_page) + " of " + _vm._s(_vm.meta.last_page))]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-2"
  }, [_c("button", {
    staticClass: "px-3 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700 disabled:opacity-40",
    attrs: {
      disabled: _vm.meta.current_page <= 1
    },
    on: {
      click: function click($event) {
        return _vm.changePage(_vm.meta.current_page - 1);
      }
    }
  }, [_vm._v("Prev")]), _vm._v(" "), _c("button", {
    staticClass: "px-3 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700 disabled:opacity-40",
    attrs: {
      disabled: _vm.meta.current_page >= _vm.meta.last_page
    },
    on: {
      click: function click($event) {
        return _vm.changePage(_vm.meta.current_page + 1);
      }
    }
  }, [_vm._v("Next")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "text-xs text-slate-500 uppercase border-b border-slate-800"
  }, [_c("tr", [_c("th", {
    staticClass: "py-3 px-4"
  }, [_vm._v("Product")]), _vm._v(" "), _c("th", {
    staticClass: "py-3 px-4"
  }, [_vm._v("SKU")]), _vm._v(" "), _c("th", {
    staticClass: "py-3 px-4"
  }, [_vm._v("Seller")]), _vm._v(" "), _c("th", {
    staticClass: "py-3 px-4"
  }, [_vm._v("Stock")]), _vm._v(" "), _c("th", {
    staticClass: "py-3 px-4"
  }, [_vm._v("Threshold")]), _vm._v(" "), _c("th", {
    staticClass: "py-3 px-4"
  }, [_vm._v("Actions")])])]);
}];
render._withStripped = true;


/***/ },

/***/ "./resources/js/admin/components/inventory/InventoryManager.vue"
/*!**********************************************************************!*\
  !*** ./resources/js/admin/components/inventory/InventoryManager.vue ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InventoryManager_vue_vue_type_template_id_1687a522__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InventoryManager.vue?vue&type=template&id=1687a522 */ "./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=template&id=1687a522");
/* harmony import */ var _InventoryManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryManager.vue?vue&type=script&lang=js */ "./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InventoryManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _InventoryManager_vue_vue_type_template_id_1687a522__WEBPACK_IMPORTED_MODULE_0__.render,
  _InventoryManager_vue_vue_type_template_id_1687a522__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/admin/components/inventory/InventoryManager.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=script&lang=js"
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InventoryManager.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryManager_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=template&id=1687a522"
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=template&id=1687a522 ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryManager_vue_vue_type_template_id_1687a522__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryManager_vue_vue_type_template_id_1687a522__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryManager_vue_vue_type_template_id_1687a522__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InventoryManager.vue?vue&type=template&id=1687a522 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/inventory/InventoryManager.vue?vue&type=template&id=1687a522");


/***/ }

}]);