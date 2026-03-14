"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_components_users_UserDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UserDetail.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UserDetail.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
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
  name: 'UserDetail',
  data: function data() {
    return {
      user: null,
      loading: false
    };
  },
  methods: {
    fetchUser: function fetchUser() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$_this$$http$ge, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.loading = true;
              _context.p = 1;
              _context.n = 2;
              return _this.$http.get("/admin/users/".concat(_this.$route.params.id));
            case 2:
              _yield$_this$$http$ge = _context.v;
              data = _yield$_this$$http$ge.data;
              _this.user = data;
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
    formatDate: function formatDate(d) {
      return d ? new Date(d).toLocaleDateString() : '—';
    }
  },
  created: function created() {
    this.fetchUser();
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UserDetail.vue?vue&type=template&id=9f0c9de4"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UserDetail.vue?vue&type=template&id=9f0c9de4 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex items-center gap-3"
  }, [_c("router-link", {
    staticClass: "text-slate-400 hover:text-white",
    attrs: {
      to: "/users"
    }
  }, [_vm._v("← Users")]), _vm._v(" "), _c("h1", {
    staticClass: "text-2xl font-bold text-white"
  }, [_vm._v("User Detail")])], 1), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "text-slate-500"
  }, [_vm._v("Loading…")]) : _vm.user ? _c("div", {
    staticClass: "grid grid-cols-1 lg:grid-cols-3 gap-6"
  }, [_c("div", {
    staticClass: "bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-4"
  }, [_c("div", {
    staticClass: "flex items-center gap-4"
  }, [_c("div", {
    staticClass: "w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-bold"
  }, [_vm._v("\n          " + _vm._s(_vm.user.name[0].toUpperCase()) + "\n        ")]), _vm._v(" "), _c("div", [_c("p", {
    staticClass: "text-white font-semibold"
  }, [_vm._v(_vm._s(_vm.user.name))]), _vm._v(" "), _c("p", {
    staticClass: "text-slate-400 text-sm"
  }, [_vm._v(_vm._s(_vm.user.email))])])]), _vm._v(" "), _c("div", {
    staticClass: "space-y-2 text-sm"
  }, [_c("div", {
    staticClass: "flex justify-between"
  }, [_c("span", {
    staticClass: "text-slate-500"
  }, [_vm._v("Role")]), _vm._v(" "), _c("span", {
    staticClass: "text-white capitalize"
  }, [_vm._v(_vm._s(_vm.user.role))])]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between"
  }, [_c("span", {
    staticClass: "text-slate-500"
  }, [_vm._v("Status")]), _vm._v(" "), _c("span", {
    "class": _vm.user.status === "active" ? "text-green-400" : "text-red-400"
  }, [_vm._v(_vm._s(_vm.user.status))])]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between"
  }, [_c("span", {
    staticClass: "text-slate-500"
  }, [_vm._v("Joined")]), _vm._v(" "), _c("span", {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.user.created_at)))])])])]), _vm._v(" "), _c("div", {
    staticClass: "lg:col-span-2 bg-slate-900 rounded-xl border border-slate-800 p-6"
  }, [_c("h3", {
    staticClass: "text-white font-semibold mb-4"
  }, [_vm._v("Order History (" + _vm._s(_vm.user.orders ? _vm.user.orders.length : 0) + ")")]), _vm._v(" "), _vm.user.orders && _vm.user.orders.length ? _c("div", {
    staticClass: "space-y-2"
  }, _vm._l(_vm.user.orders, function (order) {
    return _c("div", {
      key: order.id,
      staticClass: "flex items-center justify-between py-2 border-b border-slate-800 text-sm"
    }, [_c("span", {
      staticClass: "font-mono text-slate-400 text-xs"
    }, [_vm._v(_vm._s(order.order_number))]), _vm._v(" "), _c("span", {
      staticClass: "text-white"
    }, [_vm._v("$" + _vm._s(parseFloat(order.total).toFixed(2)))]), _vm._v(" "), _c("span", {
      staticClass: "px-2 py-0.5 rounded text-xs bg-slate-700/50 text-slate-400"
    }, [_vm._v(_vm._s(order.status))])]);
  }), 0) : _c("p", {
    staticClass: "text-slate-600 text-sm"
  }, [_vm._v("No orders yet.")])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/js/admin/components/users/UserDetail.vue"
/*!************************************************************!*\
  !*** ./resources/js/admin/components/users/UserDetail.vue ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserDetail_vue_vue_type_template_id_9f0c9de4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDetail.vue?vue&type=template&id=9f0c9de4 */ "./resources/js/admin/components/users/UserDetail.vue?vue&type=template&id=9f0c9de4");
/* harmony import */ var _UserDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDetail.vue?vue&type=script&lang=js */ "./resources/js/admin/components/users/UserDetail.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDetail_vue_vue_type_template_id_9f0c9de4__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserDetail_vue_vue_type_template_id_9f0c9de4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/admin/components/users/UserDetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/admin/components/users/UserDetail.vue?vue&type=script&lang=js"
/*!************************************************************************************!*\
  !*** ./resources/js/admin/components/users/UserDetail.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDetail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UserDetail.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/admin/components/users/UserDetail.vue?vue&type=template&id=9f0c9de4"
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/components/users/UserDetail.vue?vue&type=template&id=9f0c9de4 ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_9f0c9de4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_9f0c9de4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetail_vue_vue_type_template_id_9f0c9de4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDetail.vue?vue&type=template&id=9f0c9de4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UserDetail.vue?vue&type=template&id=9f0c9de4");


/***/ }

}]);