"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_seller_components_profile_SellerProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/profile/SellerProfile.vue?vue&type=script&lang=js"
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/profile/SellerProfile.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  name: 'SellerProfile',
  data: function data() {
    return {
      loading: false,
      saving: false,
      error: null,
      success: null,
      seller: null,
      userEmail: '',
      userCreatedAt: '',
      form: {
        name: '',
        store_name: '',
        store_description: '',
        logo: ''
      }
    };
  },
  computed: {
    initials: function initials() {
      return (this.form.store_name || this.form.name || 'S').charAt(0).toUpperCase();
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.fetchProfile();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    fetchProfile: function fetchProfile() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$_this2$$http$g, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this2.loading = true;
              _context2.p = 1;
              _context2.n = 2;
              return _this2.$http.get('/seller/profile');
            case 2:
              _yield$_this2$$http$g = _context2.v;
              data = _yield$_this2$$http$g.data;
              _this2.seller = data.seller;
              _this2.userEmail = data.user.email;
              _this2.userCreatedAt = data.user.created_at;
              _this2.form = {
                name: data.user.name || '',
                store_name: data.seller.store_name || '',
                store_description: data.seller.store_description || '',
                logo: data.seller.logo || ''
              };
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              console.error(_t);
            case 4:
              _context2.p = 4;
              _this2.loading = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    saveProfile: function saveProfile() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$_this3$$http$p, data, _e$response, err, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this3.error = null;
              _this3.success = null;
              _this3.saving = true;
              _context3.p = 1;
              _context3.n = 2;
              return _this3.$http.put('/seller/profile', _this3.form);
            case 2:
              _yield$_this3$$http$p = _context3.v;
              data = _yield$_this3$$http$p.data;
              _this3.seller = data.seller;
              // Update vuex store
              _this3.$store.commit('auth/UPDATE_SELLER', data.seller);
              _this3.success = 'Profile updated successfully.';
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              err = (_e$response = _t2.response) === null || _e$response === void 0 ? void 0 : _e$response.data;
              _this3.error = err !== null && err !== void 0 && err.errors ? Object.values(err.errors).flat().join(' ') : (err === null || err === void 0 ? void 0 : err.message) || 'Save failed.';
            case 4:
              _context3.p = 4;
              _this3.saving = false;
              return _context3.f(4);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    },
    formatDate: function formatDate(d) {
      if (!d) return '—';
      return new Date(d).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      });
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/profile/SellerProfile.vue?vue&type=template&id=1add61ed"
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/profile/SellerProfile.vue?vue&type=template&id=1add61ed ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "max-w-2xl space-y-6"
  }, [_vm.loading ? _c("div", {
    staticClass: "text-slate-500 text-sm"
  }, [_vm._v("Loading profile…")]) : [_c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center gap-5"
  }, [_c("div", {
    staticClass: "w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
  }, [_vm._v("\n        " + _vm._s(_vm.initials) + "\n      ")]), _vm._v(" "), _c("div", [_c("h2", {
    staticClass: "text-white text-xl font-bold"
  }, [_vm._v(_vm._s(_vm.form.store_name || "Your Store"))]), _vm._v(" "), _c("p", {
    staticClass: "text-slate-400 text-sm"
  }, [_vm._v(_vm._s(_vm.form.name))]), _vm._v(" "), _c("span", {
    staticClass: "text-xs px-2 py-0.5 rounded-full mt-1 inline-block",
    "class": _vm.seller && _vm.seller.status === "approved" ? "bg-green-900/40 text-green-400" : "bg-yellow-900/40 text-yellow-400"
  }, [_vm._v(_vm._s(_vm.seller ? _vm.seller.status : ""))])])]), _vm._v(" "), _c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4"
  }, [_c("h3", {
    staticClass: "text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2"
  }, [_vm._v("Store Information")]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("Your Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("Store Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.store_name,
      expression: "form.store_name"
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.store_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "store_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("Store Description")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.store_description,
      expression: "form.store_description"
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none",
    attrs: {
      rows: "4",
      placeholder: "Tell customers about your store…"
    },
    domProps: {
      value: _vm.form.store_description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "store_description", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("Logo URL")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.logo,
      expression: "form.logo"
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "text",
      placeholder: "https://…"
    },
    domProps: {
      value: _vm.form.logo
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "logo", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.error ? _c("div", {
    staticClass: "p-3 bg-red-900/40 border border-red-700 rounded-lg text-red-400 text-sm"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _vm.success ? _c("div", {
    staticClass: "p-3 bg-green-900/40 border border-green-700 rounded-lg text-green-400 text-sm"
  }, [_vm._v(_vm._s(_vm.success))]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors",
    attrs: {
      disabled: _vm.saving
    },
    on: {
      click: _vm.saveProfile
    }
  }, [_vm._v("\n        " + _vm._s(_vm.saving ? "Saving…" : "Save Profile") + "\n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl p-6"
  }, [_c("h3", {
    staticClass: "text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4"
  }, [_vm._v("Account Info")]), _vm._v(" "), _c("dl", {
    staticClass: "space-y-3 text-sm"
  }, [_c("div", {
    staticClass: "flex justify-between"
  }, [_c("dt", {
    staticClass: "text-slate-500"
  }, [_vm._v("Email")]), _vm._v(" "), _c("dd", {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.userEmail))])]), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between"
  }, [_c("dt", {
    staticClass: "text-slate-500"
  }, [_vm._v("Member Since")]), _vm._v(" "), _c("dd", {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.userCreatedAt)))])])])])]], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./resources/js/seller/components/profile/SellerProfile.vue"
/*!******************************************************************!*\
  !*** ./resources/js/seller/components/profile/SellerProfile.vue ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SellerProfile_vue_vue_type_template_id_1add61ed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SellerProfile.vue?vue&type=template&id=1add61ed */ "./resources/js/seller/components/profile/SellerProfile.vue?vue&type=template&id=1add61ed");
/* harmony import */ var _SellerProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerProfile.vue?vue&type=script&lang=js */ "./resources/js/seller/components/profile/SellerProfile.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SellerProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SellerProfile_vue_vue_type_template_id_1add61ed__WEBPACK_IMPORTED_MODULE_0__.render,
  _SellerProfile_vue_vue_type_template_id_1add61ed__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/seller/components/profile/SellerProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/seller/components/profile/SellerProfile.vue?vue&type=script&lang=js"
/*!******************************************************************************************!*\
  !*** ./resources/js/seller/components/profile/SellerProfile.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerProfile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/profile/SellerProfile.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerProfile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/seller/components/profile/SellerProfile.vue?vue&type=template&id=1add61ed"
/*!************************************************************************************************!*\
  !*** ./resources/js/seller/components/profile/SellerProfile.vue?vue&type=template&id=1add61ed ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerProfile_vue_vue_type_template_id_1add61ed__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerProfile_vue_vue_type_template_id_1add61ed__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerProfile_vue_vue_type_template_id_1add61ed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerProfile.vue?vue&type=template&id=1add61ed */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/profile/SellerProfile.vue?vue&type=template&id=1add61ed");


/***/ }

}]);