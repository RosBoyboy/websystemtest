"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_customer_components_account_AccountRegister_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountRegister.vue?vue&type=script&lang=js"
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountRegister.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_CustomerLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/CustomerLayout.vue */ "./resources/js/customer/components/layout/CustomerLayout.vue");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AccountRegister',
  components: {
    CustomerLayout: _layout_CustomerLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      loading: false,
      error: null
    };
  },
  methods: {
    handleRegister: function handleRegister() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var resp, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.error = null;
              if (!(_this.form.password !== _this.form.password_confirmation)) {
                _context.n = 1;
                break;
              }
              _this.error = 'Passwords do not match.';
              return _context.a(2);
            case 1:
              _this.loading = true;
              _context.p = 2;
              _context.n = 3;
              return _this.$store.dispatch('auth/register', _this.form);
            case 3:
              _this.$router.push({
                name: 'account'
              });
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              resp = _t.response && _t.response.data;
              if (resp && resp.errors) {
                _this.error = Object.values(resp.errors).map(function (m) {
                  return m[0];
                }).join(' ');
              } else {
                _this.error = resp && resp.message ? resp.message : _t.message || 'Registration failed.';
              }
            case 5:
              _context.p = 5;
              _this.loading = false;
              return _context.f(5);
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4, 5, 6]]);
      }))();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserStateIndicator',
  data: function data() {
    return {
      open: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('auth', ['isAuthenticated', 'currentUser'])), {}, {
    user: function user() {
      return this.currentUser;
    },
    firstName: function firstName() {
      if (!this.user || !this.user.name) return 'Account';
      return this.user.name.split(' ')[0];
    },
    initials: function initials() {
      var _parts$;
      if (!this.user || !this.user.name) return '?';
      var parts = this.user.name.split(' ');
      return (parts[0][0] + (((_parts$ = parts[1]) === null || _parts$ === void 0 ? void 0 : _parts$[0]) || '')).toUpperCase();
    },
    avatarColor: function avatarColor() {
      var _this$user;
      var colors = ['#f97316', '#06b6d4', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b'];
      var hashCode = function hashCode(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
          var _char = str.charCodeAt(i);
          hash = (hash << 5) - hash + _char;
        }
        return Math.abs(hash);
      };
      var index = hashCode(((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.email) || 'user') % colors.length;
      return colors[index];
    },
    roleLabel: function roleLabel() {
      if (!this.user) return null;
      // Check user roles
      if (this.user.roles && this.user.roles.length > 0) {
        return this.user.roles[0].name.charAt(0).toUpperCase() + this.user.roles[0].name.slice(1);
      }
      // Default based on user type
      if (this.user.seller_id) return 'Seller';
      return 'Customer';
    }
  }),
  mounted: function mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount: function beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('auth', ['logout'])), {}, {
    handleClickOutside: function handleClickOutside(event) {
      // Close if clicked outside the component
      if (!this.$el.contains(event.target)) {
        this.open = false;
      }
    }
  })
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CustomerFooter',
  computed: {
    year: function year() {
      return new Date().getFullYear();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerNavbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerNavbar.vue */ "./resources/js/customer/components/layout/CustomerNavbar.vue");
/* harmony import */ var _CustomerFooter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerFooter.vue */ "./resources/js/customer/components/layout/CustomerFooter.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CustomerLayout',
  components: {
    CustomerNavbar: _CustomerNavbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CustomerFooter: _CustomerFooter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_UserStateIndicator_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/UserStateIndicator.vue */ "./resources/js/customer/components/common/UserStateIndicator.vue");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CustomerNavbar',
  components: {
    UserStateIndicator: _common_UserStateIndicator_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      searchOpen: false,
      searchQuery: '',
      mobileOpen: false
    };
  },
  computed: {
    isAuthenticated: function isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    },
    currentUser: function currentUser() {
      return this.$store.getters['auth/currentUser'];
    },
    cartCount: function cartCount() {
      return this.$store.getters['cart/itemCount'];
    },
    firstName: function firstName() {
      if (!this.currentUser) return '';
      return this.currentUser.name.split(' ')[0];
    }
  },
  methods: {
    doSearch: function doSearch() {
      if (!this.searchQuery.trim()) return;
      this.$router.push({
        name: 'products',
        query: {
          q: this.searchQuery.trim()
        }
      });
      this.searchOpen = false;
      this.searchQuery = '';
    },
    logout: function logout() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$store.dispatch('auth/logout');
            case 1:
              _this.mobileOpen = false;
              _this.$router.push({
                name: 'home'
              });
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountRegister.vue?vue&type=template&id=06dcd5b8"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountRegister.vue?vue&type=template&id=06dcd5b8 ***!
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
  return _c("CustomerLayout", [_c("div", {
    staticClass: "min-h-[70vh] flex items-center justify-center px-4 py-16"
  }, [_c("div", {
    staticClass: "w-full max-w-md"
  }, [_c("div", {
    staticClass: "text-center mb-8"
  }, [_c("h1", {
    staticClass: "text-3xl font-black text-white"
  }, [_vm._v("Create Account")]), _vm._v(" "), _c("p", {
    staticClass: "text-slate-400 mt-1"
  }, [_vm._v("Join NurbanNxt and start shopping")])]), _vm._v(" "), _c("div", {
    staticClass: "bg-white rounded-2xl border border-stone-100 p-8 shadow-sm"
  }, [_vm.error ? _c("div", {
    staticClass: "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c("form", {
    staticClass: "space-y-4",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.handleRegister.apply(null, arguments);
      }
    }
  }, [_c("div", [_c("label", {
    staticClass: "block text-xs font-semibold text-slate-700 uppercase mb-1"
  }, [_vm._v("Full Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "w-full px-4 py-2.5 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-stone-900",
    attrs: {
      type: "text",
      required: "",
      placeholder: "Jane Doe"
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
    staticClass: "block text-xs font-semibold text-slate-700 uppercase mb-1"
  }, [_vm._v("Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "w-full px-4 py-2.5 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-stone-900",
    attrs: {
      type: "email",
      required: "",
      placeholder: "you@example.com"
    },
    domProps: {
      value: _vm.form.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "block text-xs font-semibold text-slate-700 uppercase mb-1"
  }, [_vm._v("Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }],
    staticClass: "w-full px-4 py-2.5 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-stone-900",
    attrs: {
      type: "password",
      required: "",
      minlength: "8",
      placeholder: "Min. 8 characters"
    },
    domProps: {
      value: _vm.form.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "password", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "block text-xs font-semibold text-slate-700 uppercase mb-1"
  }, [_vm._v("Confirm Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password_confirmation,
      expression: "form.password_confirmation"
    }],
    staticClass: "w-full px-4 py-2.5 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-stone-900",
    attrs: {
      type: "password",
      required: "",
      placeholder: "••••••••"
    },
    domProps: {
      value: _vm.form.password_confirmation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "password_confirmation", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn-orange w-full py-3 mt-2 disabled:opacity-50",
    attrs: {
      type: "submit",
      disabled: _vm.loading
    }
  }, [_vm.loading ? _c("span", [_vm._v("Creating account…")]) : _c("span", [_vm._v("Create Account")])])]), _vm._v(" "), _c("p", {
    staticClass: "text-center text-sm text-stone-500 mt-6"
  }, [_vm._v("\n          Already have an account?\n          "), _c("router-link", {
    staticClass: "text-orange-500 font-semibold hover:text-orange-600",
    attrs: {
      to: {
        name: "login"
      }
    }
  }, [_vm._v("Sign In")])], 1)])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=template&id=554a69b7&scoped=true"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=template&id=554a69b7&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticStyle: {
      position: "relative"
    }
  }, [_c("button", {
    staticClass: "nn-icon-btn",
    staticStyle: {
      display: "flex",
      "align-items": "center",
      gap: "8px",
      padding: "8px 12px"
    },
    on: {
      click: function click($event) {
        _vm.open = !_vm.open;
      }
    }
  }, [_vm.user ? _c("div", {
    staticClass: "w-6 h-6 rounded-full",
    style: {
      backgroundColor: _vm.avatarColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "11px",
      fontWeight: "bold",
      color: "#fff"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.initials) + "\n    ")]) : _c("svg", {
    attrs: {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      viewBox: "0 0 24 24"
    }
  }, [_c("path", {
    attrs: {
      d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
    }
  }), _c("circle", {
    attrs: {
      cx: "12",
      cy: "7",
      r: "4"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "hidden sm:flex flex-col items-start gap-0.5"
  }, [_c("span", {
    staticClass: "text-xs font-semibold text-slate-200",
    staticStyle: {
      "letter-spacing": "0.05em"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.isAuthenticated ? _vm.firstName : "Account") + "\n      ")])])]), _vm._v(" "), _vm.open ? _c("div", {
    staticClass: "absolute right-0 top-full mt-1",
    staticStyle: {
      background: "#1a1a1a",
      border: "1px solid rgba(240,236,227,0.1)",
      padding: "6px 0",
      "min-width": "180px",
      "z-index": "60",
      "border-radius": "8px",
      "box-shadow": "0 4px 12px rgba(0,0,0,0.3)"
    }
  }, [_vm.isAuthenticated && _vm.user ? _c("div", {
    staticStyle: {
      padding: "8px 16px",
      "border-bottom": "1px solid rgba(240,236,227,0.08)"
    }
  }, [_c("p", {
    staticClass: "text-10px uppercase font-semibold text-slate-400 tracking-wider mb-1"
  }, [_vm._v("Logged in as")]), _vm._v(" "), _c("p", {
    staticClass: "text-xs font-medium text-slate-100"
  }, [_vm._v(_vm._s(_vm.user.name))]), _vm._v(" "), _c("p", {
    staticClass: "text-10px text-slate-500"
  }, [_vm._v(_vm._s(_vm.user.email))])]) : _vm._e(), _vm._v(" "), _vm.isAuthenticated ? [_c("router-link", {
    staticClass: "nn-dropdown-item",
    attrs: {
      to: {
        name: "account"
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.open = false;
      }
    }
  }, [_vm._v("📋 My Account")]), _vm._v(" "), _c("router-link", {
    staticClass: "nn-dropdown-item",
    attrs: {
      to: {
        name: "orders"
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.open = false;
      }
    }
  }, [_vm._v("📦 My Orders")]), _vm._v(" "), _c("router-link", {
    staticClass: "nn-dropdown-item",
    attrs: {
      to: {
        name: "account",
        query: {
          tab: "messages"
        }
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.open = false;
      }
    }
  }, [_vm._v("💬 Messages")]), _vm._v(" "), _c("div", {
    staticStyle: {
      height: "1px",
      background: "rgba(240,236,227,0.08)",
      margin: "4px 0"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "nn-dropdown-item",
    staticStyle: {
      width: "100%",
      "text-align": "left",
      background: "none",
      border: "none",
      color: "#e05c2a",
      cursor: "pointer"
    },
    on: {
      click: _vm.logout
    }
  }, [_vm._v("🚪 Sign Out")])] : [_c("router-link", {
    staticClass: "nn-dropdown-item",
    attrs: {
      to: {
        name: "login"
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.open = false;
      }
    }
  }, [_vm._v("🔐 Sign In")]), _vm._v(" "), _c("router-link", {
    staticClass: "nn-dropdown-item",
    attrs: {
      to: {
        name: "register"
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.open = false;
      }
    }
  }, [_vm._v("✨ Create Account")])]], 2) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=template&id=f22669f0&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=template&id=f22669f0&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("footer", {
    staticStyle: {
      background: "#2a2a2a",
      padding: "80px 48px 40px",
      "border-top": "1px solid rgba(240,236,227,0.06)"
    }
  }, [_c("div", {
    staticClass: "footer-inner-grid",
    staticStyle: {
      display: "grid",
      "grid-template-columns": "2fr 1fr 1fr 1fr",
      gap: "48px",
      "margin-bottom": "60px",
      "max-width": "1280px",
      "margin-left": "auto",
      "margin-right": "auto"
    }
  }, [_c("div", [_vm._m(0), _vm._v(" "), _c("p", {
    staticStyle: {
      "font-size": "13px",
      "line-height": "1.8",
      "font-weight": "300",
      color: "rgba(240,236,227,0.4)",
      "max-width": "260px",
      "margin-bottom": "24px"
    }
  }, [_vm._v("\n        Aesthetic clothing for the culturally wired. We design for those who live ahead of the trend.\n      ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      display: "flex",
      gap: "10px"
    }
  }, _vm._l(["IG", "TK", "FB", "PT"], function (soc) {
    return _c("a", {
      key: soc,
      staticClass: "footer-social",
      attrs: {
        href: "#"
      }
    }, [_vm._v(_vm._s(soc))]);
  }), 0)]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "footer-col-title"
  }, [_vm._v("Shop")]), _vm._v(" "), _c("ul", {
    staticStyle: {
      "list-style": "none",
      padding: "0",
      margin: "0"
    }
  }, [_c("li", {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c("router-link", {
    staticClass: "footer-link",
    attrs: {
      to: {
        name: "products"
      }
    }
  }, [_vm._v("All Products")])], 1), _vm._v(" "), _c("li", {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c("router-link", {
    staticClass: "footer-link",
    attrs: {
      to: {
        name: "products",
        query: {
          sort: "featured"
        }
      }
    }
  }, [_vm._v("Featured")])], 1), _vm._v(" "), _c("li", {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c("router-link", {
    staticClass: "footer-link",
    attrs: {
      to: {
        name: "products",
        query: {
          sort: "latest"
        }
      }
    }
  }, [_vm._v("New Arrivals")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "footer-link",
    attrs: {
      to: {
        name: "products",
        query: {
          sale: 1
        }
      }
    }
  }, [_vm._v("Sale")])], 1)])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "footer-col-title"
  }, [_vm._v("Account")]), _vm._v(" "), _c("ul", {
    staticStyle: {
      "list-style": "none",
      padding: "0",
      margin: "0"
    }
  }, [_c("li", {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c("router-link", {
    staticClass: "footer-link",
    attrs: {
      to: {
        name: "login"
      }
    }
  }, [_vm._v("Sign In")])], 1), _vm._v(" "), _c("li", {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c("router-link", {
    staticClass: "footer-link",
    attrs: {
      to: {
        name: "register"
      }
    }
  }, [_vm._v("Create Account")])], 1), _vm._v(" "), _c("li", {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c("router-link", {
    staticClass: "footer-link",
    attrs: {
      to: {
        name: "orders"
      }
    }
  }, [_vm._v("Order Tracking")])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "footer-link",
    attrs: {
      to: {
        name: "account"
      }
    }
  }, [_vm._v("My Profile")])], 1)])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c("div", {
    staticStyle: {
      "max-width": "1280px",
      margin: "0 auto",
      "border-top": "1px solid rgba(240,236,227,0.06)",
      "padding-top": "28px",
      display: "flex",
      "align-items": "center",
      "justify-content": "space-between",
      "flex-wrap": "wrap",
      gap: "12px"
    }
  }, [_c("span", {
    staticStyle: {
      "font-size": "12px",
      color: "rgba(240,236,227,0.28)",
      "font-weight": "300"
    }
  }, [_vm._v("© " + _vm._s(_vm.year) + " NurbanNxt. All rights reserved. Designed for the bold.")]), _vm._v(" "), _c("div", {
    staticStyle: {
      display: "flex",
      gap: "8px"
    }
  }, _vm._l(["VISA", "MASTERCARD", "GCASH", "MAYA", "COD"], function (pay) {
    return _c("span", {
      key: pay,
      staticStyle: {
        background: "rgba(240,236,227,0.06)",
        padding: "4px 10px",
        "font-size": "9px",
        "font-family": "'Syne',sans-serif",
        "font-weight": "600",
        "letter-spacing": "0.1em",
        color: "rgba(240,236,227,0.3)",
        border: "1px solid rgba(240,236,227,0.08)"
      }
    }, [_vm._v("\n        " + _vm._s(pay) + "\n      ")]);
  }), 0)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "font-family": "'Bebas Neue',cursive",
      "font-size": "40px",
      "letter-spacing": "0.1em",
      "margin-bottom": "16px"
    }
  }, [_c("span", {
    staticStyle: {
      color: "#f97316"
    }
  }, [_vm._v("Nurban")]), _c("span", {
    staticStyle: {
      color: "#f0ece3"
    }
  }, [_vm._v("Nxt")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "footer-col-title"
  }, [_vm._v("Company")]), _vm._v(" "), _c("ul", {
    staticStyle: {
      "list-style": "none",
      padding: "0",
      margin: "0"
    }
  }, [_c("li", {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c("a", {
    staticClass: "footer-link",
    attrs: {
      href: "/seller"
    }
  }, [_vm._v("Seller Portal")])]), _vm._v(" "), _c("li", {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c("a", {
    staticClass: "footer-link",
    attrs: {
      href: "#"
    }
  }, [_vm._v("About Us")])]), _vm._v(" "), _c("li", {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c("a", {
    staticClass: "footer-link",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Contact")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "footer-link",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Sustainability")])])])]);
}];
render._withStripped = true;


/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=template&id=469db117"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=template&id=469db117 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticStyle: {
      "min-height": "100vh",
      display: "flex",
      "flex-direction": "column",
      background: "#0a0a0a"
    }
  }, [_c("CustomerNavbar"), _vm._v(" "), _c("main", {
    staticStyle: {
      flex: "1"
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c("CustomerFooter")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=template&id=259eeefd&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=template&id=259eeefd&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("header", {
    staticStyle: {
      position: "sticky",
      top: "0",
      "z-index": "50",
      background: "rgba(10,10,10,0.96)",
      "backdrop-filter": "blur(12px)",
      "border-bottom": "1px solid rgba(240,236,227,0.06)"
    }
  }, [_c("div", {
    staticStyle: {
      "max-width": "1280px",
      margin: "0 auto",
      padding: "0 24px"
    }
  }, [_c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center",
      "justify-content": "space-between",
      height: "64px"
    }
  }, [_c("router-link", {
    staticStyle: {
      "text-decoration": "none",
      "flex-shrink": "0"
    },
    attrs: {
      to: {
        name: "home"
      }
    }
  }, [_c("span", {
    staticStyle: {
      "font-family": "'Bebas Neue',cursive",
      "font-size": "24px",
      "letter-spacing": "0.08em",
      color: "#f97316",
      "font-weight": "bold"
    }
  }, [_vm._v("NurbanNext")])]), _vm._v(" "), _c("nav", {
    staticClass: "hidden md:flex",
    staticStyle: {
      gap: "28px"
    }
  }, [_c("router-link", {
    staticClass: "nn-nav-link",
    attrs: {
      to: {
        name: "products"
      }
    }
  }, [_vm._v("Shop")]), _vm._v(" "), _c("router-link", {
    staticClass: "nn-nav-link",
    attrs: {
      to: {
        name: "products",
        query: {
          sort: "featured"
        }
      }
    }
  }, [_vm._v("Featured")]), _vm._v(" "), _c("router-link", {
    staticClass: "nn-nav-link",
    attrs: {
      to: {
        name: "products",
        query: {
          sort: "latest"
        }
      }
    }
  }, [_vm._v("New In")])], 1), _vm._v(" "), _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center",
      gap: "12px"
    }
  }, [_c("button", {
    staticClass: "nn-icon-btn",
    on: {
      click: function click($event) {
        _vm.searchOpen = !_vm.searchOpen;
      }
    }
  }, [_c("svg", {
    attrs: {
      width: "18",
      height: "18",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      viewBox: "0 0 24 24"
    }
  }, [_c("circle", {
    attrs: {
      cx: "11",
      cy: "11",
      r: "8"
    }
  }), _c("path", {
    attrs: {
      d: "M21 21l-4.35-4.35"
    }
  })])]), _vm._v(" "), _c("router-link", {
    staticClass: "nn-icon-btn",
    staticStyle: {
      position: "relative"
    },
    attrs: {
      to: {
        name: "cart"
      }
    }
  }, [_c("svg", {
    attrs: {
      width: "18",
      height: "18",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      viewBox: "0 0 24 24"
    }
  }, [_c("path", {
    attrs: {
      d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
    }
  }), _c("line", {
    attrs: {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M16 10a4 4 0 01-8 0"
    }
  })]), _vm._v(" "), _vm.cartCount > 0 ? _c("span", {
    staticStyle: {
      position: "absolute",
      top: "-4px",
      right: "-4px",
      background: "#e05c2a",
      color: "#fff",
      width: "15px",
      height: "15px",
      "border-radius": "50%",
      "font-size": "9px",
      "font-weight": "700",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      "font-family": "'Syne',sans-serif"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.cartCount > 9 ? "9+" : _vm.cartCount) + "\n          ")]) : _vm._e()]), _vm._v(" "), _c("UserStateIndicator"), _vm._v(" "), _c("button", {
    staticClass: "md:hidden nn-icon-btn",
    on: {
      click: function click($event) {
        _vm.mobileOpen = !_vm.mobileOpen;
      }
    }
  }, [_c("svg", {
    attrs: {
      width: "18",
      height: "18",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      viewBox: "0 0 24 24"
    }
  }, [!_vm.mobileOpen ? _c("path", {
    attrs: {
      d: "M4 6h16M4 12h16M4 18h16"
    }
  }) : _c("path", {
    attrs: {
      d: "M6 18L18 6M6 6l12 12"
    }
  })])])], 1)], 1), _vm._v(" "), _vm.searchOpen ? _c("div", {
    staticStyle: {
      padding: "10px 0 14px",
      "border-top": "1px solid rgba(240,236,227,0.06)"
    }
  }, [_c("div", {
    staticStyle: {
      display: "flex",
      gap: "8px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery,
      expression: "searchQuery"
    }],
    staticClass: "input-field",
    staticStyle: {
      flex: "1",
      "font-size": "13px"
    },
    attrs: {
      type: "text",
      placeholder: "Search streetwear…",
      autofocus: ""
    },
    domProps: {
      value: _vm.searchQuery
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.doSearch.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.searchQuery = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn-primary",
    staticStyle: {
      padding: "10px 18px",
      "flex-shrink": "0",
      "font-size": "10px"
    },
    on: {
      click: _vm.doSearch
    }
  }, [_vm._v("Search")])])]) : _vm._e(), _vm._v(" "), _vm.mobileOpen ? _c("div", {
    staticClass: "md:hidden",
    staticStyle: {
      padding: "8px 0 16px",
      "border-top": "1px solid rgba(240,236,227,0.06)"
    }
  }, [_c("router-link", {
    staticClass: "nn-mobile-link",
    attrs: {
      to: {
        name: "products"
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.mobileOpen = false;
      }
    }
  }, [_vm._v("Shop")]), _vm._v(" "), _c("router-link", {
    staticClass: "nn-mobile-link",
    attrs: {
      to: {
        name: "products",
        query: {
          sort: "featured"
        }
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.mobileOpen = false;
      }
    }
  }, [_vm._v("Featured")]), _vm._v(" "), _c("router-link", {
    staticClass: "nn-mobile-link",
    attrs: {
      to: {
        name: "products",
        query: {
          sort: "latest"
        }
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.mobileOpen = false;
      }
    }
  }, [_vm._v("New In")]), _vm._v(" "), _c("div", {
    staticStyle: {
      height: "1px",
      background: "rgba(240,236,227,0.07)",
      margin: "8px 0"
    }
  }), _vm._v(" "), _vm.isAuthenticated ? [_c("router-link", {
    staticClass: "nn-mobile-link",
    attrs: {
      to: {
        name: "account"
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.mobileOpen = false;
      }
    }
  }, [_vm._v("My Account")]), _vm._v(" "), _c("router-link", {
    staticClass: "nn-mobile-link",
    attrs: {
      to: {
        name: "orders"
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.mobileOpen = false;
      }
    }
  }, [_vm._v("My Orders")]), _vm._v(" "), _c("button", {
    staticClass: "nn-mobile-link",
    staticStyle: {
      background: "none",
      border: "none",
      "text-align": "left",
      color: "#e05c2a",
      cursor: "pointer",
      width: "100%"
    },
    on: {
      click: _vm.logout
    }
  }, [_vm._v("Sign Out")])] : [_c("router-link", {
    staticClass: "nn-mobile-link",
    attrs: {
      to: {
        name: "login"
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.mobileOpen = false;
      }
    }
  }, [_vm._v("Sign In")]), _vm._v(" "), _c("router-link", {
    staticClass: "nn-mobile-link",
    attrs: {
      to: {
        name: "register"
      }
    },
    nativeOn: {
      click: function click($event) {
        _vm.mobileOpen = false;
      }
    }
  }, [_vm._v("Create Account")])]], 2) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.nn-icon-btn[data-v-554a69b7] {\r\n  background: none;\r\n  border: none;\r\n  color: rgba(240,236,227,0.6);\r\n  cursor: pointer;\r\n  padding: 8px;\r\n  transition: color 0.2s, background-color 0.2s;\r\n  display: flex;\r\n  align-items: center;\r\n  border-radius: 6px;\n}\n.nn-icon-btn[data-v-554a69b7]:hover { \r\n  color: #f97316;\r\n  background-color: rgba(249, 115, 22, 0.1);\n}\n.nn-icon-btn[data-v-554a69b7]:active {\r\n  background-color: rgba(249, 115, 22, 0.15);\n}\n.nn-dropdown-item[data-v-554a69b7] {\r\n  display: block;\r\n  padding: 8px 18px;\r\n  font-family: 'Syne', sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.12em;\r\n  text-transform: uppercase;\r\n  color: rgba(240,236,227,0.6);\r\n  text-decoration: none;\r\n  transition: color 0.15s, background-color 0.15s;\r\n  cursor: pointer;\r\n  background: none;\r\n  border: none;\n}\n.nn-dropdown-item[data-v-554a69b7]:hover { \r\n  color: #f97316;\r\n  background-color: rgba(249, 115, 22, 0.08);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.footer-col-title[data-v-f22669f0] {\r\n  font-family: 'Syne', sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n  letter-spacing: 0.2em;\r\n  text-transform: uppercase;\r\n  color: #f0ece3;\r\n  margin-bottom: 18px;\n}\n.footer-link[data-v-f22669f0] {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  color: rgba(240,236,227,0.4);\r\n  text-decoration: none;\r\n  transition: color 0.2s;\n}\n.footer-link[data-v-f22669f0]:hover { color: #f97316;\n}\n.footer-social[data-v-f22669f0] {\r\n  width: 34px; height: 34px;\r\n  border: 1px solid rgba(240,236,227,0.18);\r\n  display: flex; align-items: center; justify-content: center;\r\n  color: rgba(240,236,227,0.45);\r\n  font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;\r\n  text-decoration: none;\r\n  transition: all 0.2s;\n}\n.footer-social[data-v-f22669f0]:hover {\r\n  background: #f97316;\r\n  border-color: #f97316;\r\n  color: #0a0a0a;\n}\n@media (max-width: 768px) {\n.footer-inner-grid[data-v-f22669f0] { grid-template-columns: 1fr 1fr !important;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.nn-nav-link[data-v-259eeefd] {\r\n  font-family: 'Syne', sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.18em;\r\n  text-transform: uppercase;\r\n  color: rgba(240,236,227,0.65);\r\n  text-decoration: none;\r\n  transition: color 0.2s;\n}\n.nn-nav-link[data-v-259eeefd]:hover, .nn-nav-link.router-link-active[data-v-259eeefd] { color: #f97316;\n}\n.nn-icon-btn[data-v-259eeefd] {\r\n  background: none;\r\n  border: none;\r\n  color: rgba(240,236,227,0.6);\r\n  cursor: pointer;\r\n  padding: 8px;\r\n  transition: color 0.2s;\r\n  display: flex;\r\n  align-items: center;\n}\n.nn-icon-btn[data-v-259eeefd]:hover { color: #f97316;\n}\n.nn-dropdown-item[data-v-259eeefd] {\r\n  display: block;\r\n  padding: 8px 18px;\r\n  font-family: 'Syne', sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.12em;\r\n  text-transform: uppercase;\r\n  color: rgba(240,236,227,0.6);\r\n  text-decoration: none;\r\n  transition: color 0.15s;\r\n  cursor: pointer;\n}\n.nn-dropdown-item[data-v-259eeefd]:hover { color: #f97316;\n}\n.nn-mobile-link[data-v-259eeefd] {\r\n  display: block;\r\n  padding: 10px 4px;\r\n  font-family: 'Syne', sans-serif;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  letter-spacing: 0.15em;\r\n  text-transform: uppercase;\r\n  color: rgba(240,236,227,0.65);\r\n  text-decoration: none;\r\n  transition: color 0.15s;\n}\n.nn-mobile-link[data-v-259eeefd]:hover { color: #f97316;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStateIndicator_vue_vue_type_style_index_0_id_554a69b7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStateIndicator_vue_vue_type_style_index_0_id_554a69b7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStateIndicator_vue_vue_type_style_index_0_id_554a69b7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerFooter_vue_vue_type_style_index_0_id_f22669f0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerFooter_vue_vue_type_style_index_0_id_f22669f0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerFooter_vue_vue_type_style_index_0_id_f22669f0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNavbar_vue_vue_type_style_index_0_id_259eeefd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNavbar_vue_vue_type_style_index_0_id_259eeefd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNavbar_vue_vue_type_style_index_0_id_259eeefd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./resources/js/customer/components/account/AccountRegister.vue"
/*!**********************************************************************!*\
  !*** ./resources/js/customer/components/account/AccountRegister.vue ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccountRegister_vue_vue_type_template_id_06dcd5b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountRegister.vue?vue&type=template&id=06dcd5b8 */ "./resources/js/customer/components/account/AccountRegister.vue?vue&type=template&id=06dcd5b8");
/* harmony import */ var _AccountRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountRegister.vue?vue&type=script&lang=js */ "./resources/js/customer/components/account/AccountRegister.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountRegister_vue_vue_type_template_id_06dcd5b8__WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountRegister_vue_vue_type_template_id_06dcd5b8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/customer/components/account/AccountRegister.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/customer/components/common/UserStateIndicator.vue"
/*!************************************************************************!*\
  !*** ./resources/js/customer/components/common/UserStateIndicator.vue ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserStateIndicator_vue_vue_type_template_id_554a69b7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserStateIndicator.vue?vue&type=template&id=554a69b7&scoped=true */ "./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=template&id=554a69b7&scoped=true");
/* harmony import */ var _UserStateIndicator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserStateIndicator.vue?vue&type=script&lang=js */ "./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=script&lang=js");
/* harmony import */ var _UserStateIndicator_vue_vue_type_style_index_0_id_554a69b7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css */ "./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserStateIndicator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserStateIndicator_vue_vue_type_template_id_554a69b7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserStateIndicator_vue_vue_type_template_id_554a69b7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "554a69b7",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/customer/components/common/UserStateIndicator.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/customer/components/layout/CustomerFooter.vue"
/*!********************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerFooter.vue ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerFooter_vue_vue_type_template_id_f22669f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerFooter.vue?vue&type=template&id=f22669f0&scoped=true */ "./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=template&id=f22669f0&scoped=true");
/* harmony import */ var _CustomerFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerFooter.vue?vue&type=script&lang=js */ "./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=script&lang=js");
/* harmony import */ var _CustomerFooter_vue_vue_type_style_index_0_id_f22669f0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css */ "./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomerFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerFooter_vue_vue_type_template_id_f22669f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerFooter_vue_vue_type_template_id_f22669f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f22669f0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/customer/components/layout/CustomerFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/customer/components/layout/CustomerLayout.vue"
/*!********************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerLayout.vue ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerLayout_vue_vue_type_template_id_469db117__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerLayout.vue?vue&type=template&id=469db117 */ "./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=template&id=469db117");
/* harmony import */ var _CustomerLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerLayout.vue?vue&type=script&lang=js */ "./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerLayout_vue_vue_type_template_id_469db117__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerLayout_vue_vue_type_template_id_469db117__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/customer/components/layout/CustomerLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/customer/components/layout/CustomerNavbar.vue"
/*!********************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerNavbar.vue ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerNavbar_vue_vue_type_template_id_259eeefd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerNavbar.vue?vue&type=template&id=259eeefd&scoped=true */ "./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=template&id=259eeefd&scoped=true");
/* harmony import */ var _CustomerNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerNavbar.vue?vue&type=script&lang=js */ "./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=script&lang=js");
/* harmony import */ var _CustomerNavbar_vue_vue_type_style_index_0_id_259eeefd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css */ "./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomerNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerNavbar_vue_vue_type_template_id_259eeefd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerNavbar_vue_vue_type_template_id_259eeefd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "259eeefd",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/customer/components/layout/CustomerNavbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/customer/components/account/AccountRegister.vue?vue&type=script&lang=js"
/*!**********************************************************************************************!*\
  !*** ./resources/js/customer/components/account/AccountRegister.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountRegister.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountRegister.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRegister_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=script&lang=js"
/*!************************************************************************************************!*\
  !*** ./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStateIndicator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserStateIndicator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStateIndicator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=script&lang=js"
/*!********************************************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerFooter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=script&lang=js"
/*!********************************************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=script&lang=js"
/*!********************************************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerNavbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/customer/components/account/AccountRegister.vue?vue&type=template&id=06dcd5b8"
/*!****************************************************************************************************!*\
  !*** ./resources/js/customer/components/account/AccountRegister.vue?vue&type=template&id=06dcd5b8 ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRegister_vue_vue_type_template_id_06dcd5b8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRegister_vue_vue_type_template_id_06dcd5b8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRegister_vue_vue_type_template_id_06dcd5b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountRegister.vue?vue&type=template&id=06dcd5b8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountRegister.vue?vue&type=template&id=06dcd5b8");


/***/ },

/***/ "./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=template&id=554a69b7&scoped=true"
/*!******************************************************************************************************************!*\
  !*** ./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=template&id=554a69b7&scoped=true ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStateIndicator_vue_vue_type_template_id_554a69b7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStateIndicator_vue_vue_type_template_id_554a69b7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStateIndicator_vue_vue_type_template_id_554a69b7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserStateIndicator.vue?vue&type=template&id=554a69b7&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=template&id=554a69b7&scoped=true");


/***/ },

/***/ "./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=template&id=f22669f0&scoped=true"
/*!**************************************************************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=template&id=f22669f0&scoped=true ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerFooter_vue_vue_type_template_id_f22669f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerFooter_vue_vue_type_template_id_f22669f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerFooter_vue_vue_type_template_id_f22669f0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerFooter.vue?vue&type=template&id=f22669f0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=template&id=f22669f0&scoped=true");


/***/ },

/***/ "./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=template&id=469db117"
/*!**************************************************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=template&id=469db117 ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLayout_vue_vue_type_template_id_469db117__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLayout_vue_vue_type_template_id_469db117__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLayout_vue_vue_type_template_id_469db117__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerLayout.vue?vue&type=template&id=469db117 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerLayout.vue?vue&type=template&id=469db117");


/***/ },

/***/ "./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=template&id=259eeefd&scoped=true"
/*!**************************************************************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=template&id=259eeefd&scoped=true ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNavbar_vue_vue_type_template_id_259eeefd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNavbar_vue_vue_type_template_id_259eeefd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNavbar_vue_vue_type_template_id_259eeefd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerNavbar.vue?vue&type=template&id=259eeefd&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=template&id=259eeefd&scoped=true");


/***/ },

/***/ "./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css"
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css ***!
  \********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStateIndicator_vue_vue_type_style_index_0_id_554a69b7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/common/UserStateIndicator.vue?vue&type=style&index=0&id=554a69b7&scoped=true&lang=css");


/***/ },

/***/ "./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css"
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerFooter_vue_vue_type_style_index_0_id_f22669f0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerFooter.vue?vue&type=style&index=0&id=f22669f0&scoped=true&lang=css");


/***/ },

/***/ "./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css"
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNavbar_vue_vue_type_style_index_0_id_259eeefd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/layout/CustomerNavbar.vue?vue&type=style&index=0&id=259eeefd&scoped=true&lang=css");


/***/ }

}]);