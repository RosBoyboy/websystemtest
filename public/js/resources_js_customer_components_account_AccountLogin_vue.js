"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_customer_components_account_AccountLogin_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountLogin.vue?vue&type=script&lang=js"
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountLogin.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AccountLogin',
  data: function data() {
    return {
      loginType: 'customer',
      // 'customer' or 'admin'
      form: {
        email: '',
        password: ''
      },
      loading: false,
      error: null,
      // Registration Verification states
      requiresOtp: false,
      verifying: false,
      otpCode: '',
      // 2FA login states
      requiresTwoFactor: false,
      twoFactorCode: ''
    };
  },
  methods: {
    handleLogin: function handleLogin() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var resp, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.error = null;
              _this.loading = true;
              _context.p = 1;
              if (!(_this.loginType === 'admin')) {
                _context.n = 3;
                break;
              }
              _context.n = 2;
              return _this.handleAdminLogin();
            case 2:
              _context.n = 4;
              break;
            case 3:
              _context.n = 4;
              return _this.handleCustomerLogin();
            case 4:
              _context.n = 6;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
              resp = _t.response && _t.response.data;
              _this.error = resp && resp.message ? resp.message : _t.message || 'Login failed.';
            case 6:
              _context.p = 6;
              _this.loading = false;
              return _context.f(6);
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[1, 5, 6, 7]]);
      }))();
    },
    handleAdminLogin: function handleAdminLogin() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$post, data, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/auth/login', _this2.form);
            case 1:
              _yield$axios$post = _context2.v;
              data = _yield$axios$post.data;
              if (!(data.user.role !== 'admin')) {
                _context2.n = 2;
                break;
              }
              throw new Error('Access denied. Admin only.');
            case 2:
              // Store admin auth
              localStorage.setItem('admin_token', data.token);
              localStorage.setItem('admin_user', JSON.stringify(data.user));
              axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common['Authorization'] = "Bearer ".concat(data.token);

              // Redirect to admin dashboard
              window.location.href = '/admin/app/#/';
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              throw _t2;
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 3]]);
      }))();
    },
    // Customer login
    handleCustomerLogin: function handleCustomerLogin() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$post2, data, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/auth/login', _this3.form);
            case 1:
              _yield$axios$post2 = _context3.v;
              data = _yield$axios$post2.data;
              if (!data.email_unverified) {
                _context3.n = 2;
                break;
              }
              _this3.requiresOtp = true;
              return _context3.a(2);
            case 2:
              if (!data.two_factor_required) {
                _context3.n = 3;
                break;
              }
              _this3.requiresTwoFactor = true;
              return _context3.a(2);
            case 3:
              if (!(data.user.role === 'admin')) {
                _context3.n = 4;
                break;
              }
              throw new Error('Admins must use the admin portal.');
            case 4:
              _context3.n = 5;
              return _this3.$store.dispatch('auth/login', _this3.form);
            case 5:
              _this3.$router.push({
                name: 'account'
              });
              _context3.n = 8;
              break;
            case 6:
              _context3.p = 6;
              _t3 = _context3.v;
              if (!(_t3.response && _t3.response.status === 403 && _t3.response.data && _t3.response.data.email_unverified)) {
                _context3.n = 7;
                break;
              }
              _this3.requiresOtp = true;
              return _context3.a(2);
            case 7:
              throw _t3;
            case 8:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 6]]);
      }))();
    },
    // Verifying Registration OTP within the login screen
    verifyRegistrationOtp: function verifyRegistrationOtp() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var resp, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _this4.error = null;
              _this4.verifying = true;
              _context4.p = 1;
              _context4.n = 2;
              return _this4.$store.dispatch('auth/verifyRegistrationOtp', {
                email: _this4.form.email,
                otp: _this4.otpCode
              });
            case 2:
              // Once verified, they receive an auth token and transition into the system
              _this4.$router.push({
                name: 'account'
              });
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
              resp = _t4.response && _t4.response.data;
              _this4.error = resp && resp.message ? resp.message : 'Invalid or expired OTP.';
            case 4:
              _context4.p = 4;
              _this4.verifying = false;
              return _context4.f(4);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3, 4, 5]]);
      }))();
    }
  },
  created: function created() {
    // If already logged in, redirect appropriately
    var adminToken = localStorage.getItem('admin_token');
    var customerToken = localStorage.getItem('customer_token');
    if (adminToken) {
      window.location.href = '/admin/app/#/';
    } else if (customerToken) {
      this.$router.push({
        name: 'account'
      });
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountLogin.vue?vue&type=template&id=da665eb8"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountLogin.vue?vue&type=template&id=da665eb8 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "min-h-screen bg-black flex flex-col"
  }, [_c("nav", {
    staticClass: "sticky top-0 z-50 bg-black border-b border-stone-900 px-12 py-4 flex items-center justify-between"
  }, [_c("router-link", {
    staticClass: "text-white font-bold text-xl tracking-wider",
    attrs: {
      to: {
        name: "home"
      }
    }
  }, [_vm._v("\n      NURBAN"), _c("span", {
    staticClass: "text-orange-500"
  }, [_vm._v("NXT")])]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center gap-6"
  }, [_c("router-link", {
    staticClass: "text-sm text-stone-400 hover:text-white uppercase tracking-wider transition-colors",
    attrs: {
      to: {
        name: "products"
      }
    }
  }, [_vm._v("Shop")]), _vm._v(" "), _c("router-link", {
    staticClass: "text-sm text-stone-400 hover:text-white uppercase tracking-wider transition-colors",
    attrs: {
      to: {
        name: "products",
        query: {
          sort: "featured"
        }
      }
    }
  }, [_vm._v("Featured")]), _vm._v(" "), _c("router-link", {
    staticClass: "text-stone-400 hover:text-white transition-colors",
    attrs: {
      to: {
        name: "cart"
      }
    }
  }, [_c("svg", {
    staticClass: "w-5 h-5",
    attrs: {
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
  }), _c("path", {
    attrs: {
      d: "M16 10a4 4 0 01-8 0"
    }
  })])])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "flex-1 flex items-center justify-center px-6 py-12"
  }, [_c("div", {
    staticClass: "w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl"
  }, [_c("div", {
    staticClass: "hidden lg:flex relative bg-gradient-to-b from-black/40 to-black/60 items-center justify-center p-12",
    staticStyle: {
      "background-image": "url('/images/auth/login-hero.jpg')",
      "background-size": "cover",
      "background-position": "center"
    }
  }, [_c("div", {
    staticClass: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
  }), _vm._v(" "), _c("div", {
    staticClass: "relative z-10 text-left max-w-sm"
  }, [_c("h1", {
    staticClass: "text-5xl font-black text-white mb-4",
    staticStyle: {
      "font-family": "'Bebas Neue', sans-serif",
      "letter-spacing": "0.05em"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.loginType === "customer" ? "Welcome Back" : "Admin Access") + "\n          ")]), _vm._v(" "), _c("p", {
    staticClass: "text-xl text-stone-300"
  }, [_vm._v("\n            " + _vm._s(_vm.loginType === "customer" ? "Sign in to your NurbanNxt account" : "Administrator panel signin") + "\n          ")])])]), _vm._v(" "), _c("div", {
    staticClass: "bg-white p-12 flex flex-col justify-center"
  }, [_c("div", {
    staticClass: "flex gap-2 mb-8 rounded-lg bg-stone-100 border border-stone-300 p-1"
  }, [_c("button", {
    "class": ["flex-1 py-2.5 px-3 rounded-lg font-semibold transition-all text-sm", _vm.loginType === "customer" ? "bg-orange-500 text-white" : "text-stone-600 hover:text-black"],
    on: {
      click: function click($event) {
        _vm.loginType = "customer";
      }
    }
  }, [_c("svg", {
    staticClass: "w-4 h-4 inline mr-1.5",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24"
    }
  }, [_c("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    }
  })]), _vm._v("\n            Customer\n          ")]), _vm._v(" "), _c("button", {
    "class": ["flex-1 py-2.5 px-3 rounded-lg font-semibold transition-all text-sm", _vm.loginType === "admin" ? "bg-orange-500 text-white" : "text-stone-600 hover:text-black"],
    on: {
      click: function click($event) {
        _vm.loginType = "admin";
      }
    }
  }, [_c("svg", {
    staticClass: "w-4 h-4 inline mr-1.5",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24"
    }
  }, [_c("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    }
  })]), _vm._v("\n            Admin\n          ")])]), _vm._v(" "), _c("h2", {
    staticClass: "text-3xl font-black text-black mb-2",
    staticStyle: {
      "font-family": "'Bebas Neue', sans-serif",
      "letter-spacing": "0.05em"
    }
  }, [_vm._v("LOGIN")]), _vm._v(" "), _c("p", {
    staticClass: "text-xs text-stone-500 mb-6"
  }, [_vm._v("\n          " + _vm._s(_vm.loginType === "customer" ? "Access your customer or seller account" : "Administrator access only") + "\n        ")]), _vm._v(" "), _vm.error ? _c("div", {
    staticClass: "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium"
  }, [_vm._v("\n          " + _vm._s(_vm.error) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.requiresOtp ? _c("div", [_c("div", {
    staticClass: "mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium text-center"
  }, [_vm._v("\n            Please check your email. Your account is unverified, an ongoing OTP has just been sent to your email.\n          ")]), _vm._v(" "), _c("form", {
    staticClass: "space-y-4",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.verifyRegistrationOtp.apply(null, arguments);
      }
    }
  }, [_c("div", [_c("label", {
    staticClass: "block text-xs font-semibold text-slate-700 uppercase mb-1"
  }, [_vm._v("Enter 6-Digit OTP")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.otpCode,
      expression: "otpCode"
    }],
    staticClass: "w-full px-4 py-2.5 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-stone-900 text-center tracking-[0.5em] font-bold text-lg",
    attrs: {
      type: "text",
      required: "",
      minlength: "6",
      maxlength: "6",
      placeholder: "123456"
    },
    domProps: {
      value: _vm.otpCode
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.otpCode = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn-orange w-full py-3 mt-2 disabled:opacity-50",
    attrs: {
      type: "submit",
      disabled: _vm.verifying
    }
  }, [_vm.verifying ? _c("span", [_vm._v("Verifying…")]) : _c("span", [_vm._v("Verify Account")])])])]) : _vm._e(), _vm._v(" "), !_vm.requiresOtp && !_vm.requiresTwoFactor ? _c("form", {
    staticClass: "space-y-5",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.handleLogin.apply(null, arguments);
      }
    }
  }, [_c("div", [_c("label", {
    staticClass: "block text-xs font-bold text-stone-600 uppercase mb-2 tracking-wider"
  }, [_vm._v("Email")]), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("span", {
    staticClass: "absolute left-4 top-3.5 text-stone-400"
  }, [_c("svg", {
    staticClass: "w-5 h-5",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      viewBox: "0 0 24 24"
    }
  }, [_c("path", {
    attrs: {
      d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }
  })])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.email,
      expression: "form.email"
    }],
    staticClass: "w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-stone-800 font-medium",
    attrs: {
      type: "email",
      required: "",
      placeholder: _vm.loginType === "customer" ? "you@example.com" : "admin@nurbannxt.com"
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
  })])]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "block text-xs font-bold text-stone-600 uppercase mb-2 tracking-wider"
  }, [_vm._v("Password")]), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("span", {
    staticClass: "absolute left-4 top-3.5 text-stone-400"
  }, [_c("svg", {
    staticClass: "w-5 h-5",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      viewBox: "0 0 24 24"
    }
  }, [_c("rect", {
    attrs: {
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2",
      ry: "2"
    }
  }), _c("path", {
    attrs: {
      d: "M7 11V7a5 5 0 0110 0v4"
    }
  })])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }],
    staticClass: "w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-stone-800 font-medium",
    attrs: {
      type: "password",
      required: "",
      placeholder: "••••••••"
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
  })])]), _vm._v(" "), _c("button", {
    staticClass: "w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg py-3.5 rounded-lg transition-all uppercase tracking-wider mt-8",
    attrs: {
      type: "submit",
      disabled: _vm.loading
    }
  }, [_vm.loading ? _c("span", {
    staticClass: "flex items-center justify-center gap-2"
  }, [_c("svg", {
    staticClass: "w-5 h-5 animate-spin",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24"
    }
  }, [_c("circle", {
    attrs: {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "2",
      fill: "none",
      opacity: "0.3"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }
  })]), _vm._v("\n              Signing in…\n            ")]) : _c("span", [_vm._v("Sign In")])])]) : _vm._e(), _vm._v(" "), _vm.loginType === "customer" ? [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-5 pt-5 border-t border-stone-200"
  }, [_c("p", {
    staticClass: "text-sm text-stone-600"
  }, [_vm._v("\n              Don't have an account?\n              "), _c("router-link", {
    staticClass: "text-orange-500 font-bold hover:text-orange-600 transition-colors",
    attrs: {
      to: {
        name: "register"
      }
    }
  }, [_vm._v("\n                Create one\n              ")])], 1)]), _vm._v(" "), _c("p", {
    staticClass: "text-center text-xs text-stone-500 mt-4 leading-relaxed"
  }, [_vm._v("\n            Seller mode is available after login in your account dashboard.\n          ")])] : [_vm._m(1)]], 2)])]), _vm._v(" "), _vm._m(2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center mt-6"
  }, [_c("a", {
    staticClass: "text-sm text-orange-500 font-semibold hover:text-orange-600 transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("\n              Forgot password?\n            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mt-6 p-3 bg-slate-100 rounded-lg border border-slate-300 text-xs text-slate-700"
  }, [_c("p", [_c("strong", [_vm._v("Admin Portal")])]), _vm._v(" "), _c("p", [_vm._v("Access restricted to administrators only. Unauthorized access attempts are logged.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("footer", {
    staticClass: "bg-stone-900 border-t border-stone-800"
  }, [_c("div", {
    staticClass: "max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12"
  }, [_c("div", [_c("h3", {
    staticClass: "text-white font-bold text-lg mb-4"
  }, [_vm._v("NURBAN"), _c("span", {
    staticClass: "text-orange-500"
  }, [_vm._v("NXT")])]), _vm._v(" "), _c("p", {
    staticClass: "text-stone-400 text-sm leading-relaxed"
  }, [_vm._v("\n          Aesthetic clothing for the culturally wired.\n        ")])]), _vm._v(" "), _c("div", [_c("h4", {
    staticClass: "text-white font-bold text-sm uppercase mb-4 tracking-wider"
  }, [_vm._v("SHOP")]), _vm._v(" "), _c("ul", {
    staticClass: "space-y-2"
  }, [_c("li", [_c("a", {
    staticClass: "text-stone-400 text-sm hover:text-white transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("All Products")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "text-stone-400 text-sm hover:text-white transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Featured")])])])]), _vm._v(" "), _c("div", [_c("h4", {
    staticClass: "text-white font-bold text-sm uppercase mb-4 tracking-wider"
  }, [_vm._v("ACCOUNT")]), _vm._v(" "), _c("ul", {
    staticClass: "space-y-2"
  }, [_c("li", [_c("a", {
    staticClass: "text-stone-400 text-sm hover:text-white transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Seller Portal")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "text-stone-400 text-sm hover:text-white transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Create Account")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "text-stone-400 text-sm hover:text-white transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Order Tracking")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "text-stone-400 text-sm hover:text-white transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("My Profile")])])])]), _vm._v(" "), _c("div", [_c("h4", {
    staticClass: "text-white font-bold text-sm uppercase mb-4 tracking-wider"
  }, [_vm._v("COMPANY")]), _vm._v(" "), _c("ul", {
    staticClass: "space-y-2"
  }, [_c("li", [_c("a", {
    staticClass: "text-stone-400 text-sm hover:text-white transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("About Us")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "text-stone-400 text-sm hover:text-white transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Contact")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "text-stone-400 text-sm hover:text-white transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Sustainability")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "text-stone-400 text-sm hover:text-white transition-colors",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Careers")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "border-t border-stone-800 px-12 py-6 flex justify-between items-center"
  }, [_c("p", {
    staticClass: "text-stone-500 text-xs"
  }, [_vm._v("© 2026 NurbanNxt. All rights reserved.")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-4"
  }, [_c("span", {
    staticClass: "text-stone-500 text-xs border border-stone-700 px-3 py-1 rounded"
  }, [_vm._v("VISA")]), _vm._v(" "), _c("span", {
    staticClass: "text-stone-500 text-xs border border-stone-700 px-3 py-1 rounded"
  }, [_vm._v("MASTERCARD")]), _vm._v(" "), _c("span", {
    staticClass: "text-stone-500 text-xs border border-stone-700 px-3 py-1 rounded"
  }, [_vm._v("GCASH")])])])]);
}];
render._withStripped = true;


/***/ },

/***/ "./resources/js/customer/components/account/AccountLogin.vue"
/*!*******************************************************************!*\
  !*** ./resources/js/customer/components/account/AccountLogin.vue ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccountLogin_vue_vue_type_template_id_da665eb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountLogin.vue?vue&type=template&id=da665eb8 */ "./resources/js/customer/components/account/AccountLogin.vue?vue&type=template&id=da665eb8");
/* harmony import */ var _AccountLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountLogin.vue?vue&type=script&lang=js */ "./resources/js/customer/components/account/AccountLogin.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountLogin_vue_vue_type_template_id_da665eb8__WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountLogin_vue_vue_type_template_id_da665eb8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/customer/components/account/AccountLogin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/customer/components/account/AccountLogin.vue?vue&type=script&lang=js"
/*!*******************************************************************************************!*\
  !*** ./resources/js/customer/components/account/AccountLogin.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountLogin.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountLogin.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/customer/components/account/AccountLogin.vue?vue&type=template&id=da665eb8"
/*!*************************************************************************************************!*\
  !*** ./resources/js/customer/components/account/AccountLogin.vue?vue&type=template&id=da665eb8 ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountLogin_vue_vue_type_template_id_da665eb8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountLogin_vue_vue_type_template_id_da665eb8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountLogin_vue_vue_type_template_id_da665eb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountLogin.vue?vue&type=template&id=da665eb8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/components/account/AccountLogin.vue?vue&type=template&id=da665eb8");


/***/ }

}]);