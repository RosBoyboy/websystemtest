"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_seller_components_orders_OrderList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/orders/OrderList.vue?vue&type=script&lang=js"
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/orders/OrderList.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  name: 'OrderList',
  data: function data() {
    return {
      orders: [],
      meta: null,
      loading: false,
      search: '',
      statusFilter: '',
      page: 1,
      debounceTimer: null,
      orderStatuses: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'completed', 'cancelled']
    };
  },
  created: function created() {
    this.fetchOrders();
  },
  methods: {
    fetchOrders: function fetchOrders() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var params, _yield$_this$$http$ge, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.loading = true;
              _context.p = 1;
              params = {
                page: _this.page
              };
              if (_this.search) params.search = _this.search;
              if (_this.statusFilter) params.status = _this.statusFilter;
              _context.n = 2;
              return _this.$http.get('/seller/orders', {
                params: params
              });
            case 2:
              _yield$_this$$http$ge = _context.v;
              data = _yield$_this$$http$ge.data;
              _this.orders = data.data;
              _this.meta = data.meta;
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error(_t);
            case 4:
              _context.p = 4;
              _this.loading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    debouncedFetch: function debouncedFetch() {
      var _this2 = this;
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(function () {
        _this2.page = 1;
        _this2.fetchOrders();
      }, 350);
    },
    goToPage: function goToPage(page) {
      this.page = page;
      this.fetchOrders();
    },
    formatDate: function formatDate(d) {
      return new Date(d).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    },
    statusClass: function statusClass(status) {
      var map = {
        pending: 'bg-yellow-900/40 text-yellow-400',
        confirmed: 'bg-blue-900/40 text-blue-400',
        processing: 'bg-purple-900/40 text-purple-400',
        shipped: 'bg-indigo-900/40 text-indigo-400',
        delivered: 'bg-green-900/40 text-green-400',
        completed: 'bg-green-900/60 text-green-300',
        cancelled: 'bg-red-900/40 text-red-400'
      };
      return map[status] || 'bg-slate-800 text-slate-400';
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/orders/OrderList.vue?vue&type=template&id=9f6a41ee"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/orders/OrderList.vue?vue&type=template&id=9f6a41ee ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex items-center gap-3 flex-wrap"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500 w-56",
    attrs: {
      type: "text",
      placeholder: "Search by order #…"
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
  }), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.statusFilter,
      expression: "statusFilter"
    }],
    staticClass: "bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-300 text-sm focus:outline-none focus:border-orange-500",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.statusFilter = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.fetchOrders]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("All Statuses")]), _vm._v(" "), _vm._l(_vm.orderStatuses, function (s) {
    return _c("option", {
      key: s,
      staticClass: "capitalize",
      domProps: {
        value: s
      }
    }, [_vm._v(_vm._s(s))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
  }, [_vm.loading ? _c("div", {
    staticClass: "p-10 text-center text-slate-500"
  }, [_vm._v("Loading…")]) : !_vm.orders.length ? _c("div", {
    staticClass: "p-10 text-center text-slate-500"
  }, [_vm._v("No orders found.")]) : _c("div", {
    staticClass: "overflow-x-auto"
  }, [_c("table", {
    staticClass: "w-full text-sm"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", {
    staticClass: "divide-y divide-slate-800"
  }, _vm._l(_vm.orders, function (order) {
    return _c("tr", {
      key: order.id,
      staticClass: "hover:bg-slate-800/50 transition-colors"
    }, [_c("td", {
      staticClass: "px-5 py-4 text-orange-400 font-medium"
    }, [_vm._v(_vm._s(order.order_number))]), _vm._v(" "), _c("td", {
      staticClass: "px-4 py-4"
    }, [_c("p", {
      staticClass: "text-white"
    }, [_vm._v(_vm._s(order.user ? order.user.name : ""))]), _vm._v(" "), _c("p", {
      staticClass: "text-slate-500 text-xs"
    }, [_vm._v(_vm._s(order.user ? order.user.email : ""))])]), _vm._v(" "), _c("td", {
      staticClass: "px-4 py-4 text-slate-400"
    }, [_vm._v(_vm._s(order.items ? order.items.length : 0) + " item(s)")]), _vm._v(" "), _c("td", {
      staticClass: "px-4 py-4 text-center"
    }, [_c("span", {
      staticClass: "px-2 py-0.5 rounded-full text-xs font-medium",
      "class": _vm.statusClass(order.status)
    }, [_vm._v("\n                " + _vm._s(order.status) + "\n              ")])]), _vm._v(" "), _c("td", {
      staticClass: "px-4 py-4 text-right text-slate-500 text-xs"
    }, [_vm._v(_vm._s(_vm.formatDate(order.created_at)))]), _vm._v(" "), _c("td", {
      staticClass: "px-5 py-4"
    }, [_c("router-link", {
      staticClass: "text-slate-400 hover:text-orange-400 transition-colors text-xs font-medium",
      attrs: {
        to: "/orders/".concat(order.id)
      }
    }, [_vm._v("\n                View →\n              ")])], 1)]);
  }), 0)])]), _vm._v(" "), _vm.meta && _vm.meta.last_page > 1 ? _c("div", {
    staticClass: "flex items-center justify-between px-5 py-4 border-t border-slate-800"
  }, [_c("p", {
    staticClass: "text-slate-500 text-sm"
  }, [_vm._v("\n        Showing " + _vm._s(_vm.meta.from) + "–" + _vm._s(_vm.meta.to) + " of " + _vm._s(_vm.meta.total) + "\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-1"
  }, _vm._l(_vm.meta.last_page, function (page) {
    return _c("button", {
      key: page,
      "class": ["px-3 py-1 rounded-lg text-sm transition-colors", page === _vm.meta.current_page ? "bg-orange-500 text-white" : "bg-slate-800 text-slate-400 hover:text-white"],
      on: {
        click: function click($event) {
          return _vm.goToPage(page);
        }
      }
    }, [_vm._v("\n          " + _vm._s(page) + "\n        ")]);
  }), 0)]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "border-b border-slate-800"
  }, [_c("tr", {
    staticClass: "text-slate-400"
  }, [_c("th", {
    staticClass: "text-left px-5 py-4 font-medium"
  }, [_vm._v("Order #")]), _vm._v(" "), _c("th", {
    staticClass: "text-left px-4 py-4 font-medium"
  }, [_vm._v("Customer")]), _vm._v(" "), _c("th", {
    staticClass: "text-left px-4 py-4 font-medium"
  }, [_vm._v("Items")]), _vm._v(" "), _c("th", {
    staticClass: "text-center px-4 py-4 font-medium"
  }, [_vm._v("Status")]), _vm._v(" "), _c("th", {
    staticClass: "text-right px-4 py-4 font-medium"
  }, [_vm._v("Date")]), _vm._v(" "), _c("th", {
    staticClass: "px-5 py-4"
  })])]);
}];
render._withStripped = true;


/***/ },

/***/ "./resources/js/seller/components/orders/OrderList.vue"
/*!*************************************************************!*\
  !*** ./resources/js/seller/components/orders/OrderList.vue ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderList_vue_vue_type_template_id_9f6a41ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderList.vue?vue&type=template&id=9f6a41ee */ "./resources/js/seller/components/orders/OrderList.vue?vue&type=template&id=9f6a41ee");
/* harmony import */ var _OrderList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderList.vue?vue&type=script&lang=js */ "./resources/js/seller/components/orders/OrderList.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderList_vue_vue_type_template_id_9f6a41ee__WEBPACK_IMPORTED_MODULE_0__.render,
  _OrderList_vue_vue_type_template_id_9f6a41ee__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/seller/components/orders/OrderList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/seller/components/orders/OrderList.vue?vue&type=script&lang=js"
/*!*************************************************************************************!*\
  !*** ./resources/js/seller/components/orders/OrderList.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/orders/OrderList.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/seller/components/orders/OrderList.vue?vue&type=template&id=9f6a41ee"
/*!*******************************************************************************************!*\
  !*** ./resources/js/seller/components/orders/OrderList.vue?vue&type=template&id=9f6a41ee ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_template_id_9f6a41ee__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_template_id_9f6a41ee__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderList_vue_vue_type_template_id_9f6a41ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderList.vue?vue&type=template&id=9f6a41ee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/orders/OrderList.vue?vue&type=template&id=9f6a41ee");


/***/ }

}]);