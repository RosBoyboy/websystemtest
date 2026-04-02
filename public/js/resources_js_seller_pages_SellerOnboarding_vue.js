"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_seller_pages_SellerOnboarding_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
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
  name: 'SellerOnboarding',
  data: function data() {
    return {
      currentStep: 0,
      steps: ['Personal Info', 'Shop Details', 'Payment', 'Shipping', 'Verification', 'Agreement'],
      formData: {
        full_name: '',
        contact_number: '',
        store_name: '',
        store_description: '',
        business_type: 'individual',
        shop_address: '',
        bank_name: '',
        account_name: '',
        account_number: '',
        ewallet_type: 'none',
        ewallet_number: '',
        pickup_address: '',
        delivery_methods: [],
        shipping_fee: 0,
        enable_tracking: false,
        terms_accepted: false
      },
      files: {
        logo: null,
        valid_id: null,
        selfie: null,
        business_permit: null
      },
      previews: {
        logo: null,
        valid_id: null,
        selfie: null,
        business_permit: null
      },
      errors: {},
      userEmail: '',
      isSubmitting: false,
      submitError: ''
    };
  },
  computed: {
    progressPercentage: function progressPercentage() {
      if (this.currentStep === 'success') return 100;
      return (this.currentStep + 1) / this.steps.length * 100;
    },
    logoPreview: function logoPreview() {
      return this.previews.logo;
    },
    validIdPreview: function validIdPreview() {
      return this.previews.valid_id;
    },
    selfiePreview: function selfiePreview() {
      return this.previews.selfie;
    },
    permitPreview: function permitPreview() {
      return this.previews.business_permit;
    },
    isFormValid: function isFormValid() {
      return this.formData.full_name && this.formData.contact_number && this.formData.store_name && this.formData.shop_address && this.formData.business_type && this.formData.bank_name && this.formData.account_name && this.formData.account_number && this.formData.ewallet_type && (this.formData.ewallet_type === 'none' || this.formData.ewallet_number) && this.formData.delivery_methods.length > 0 && this.formData.shipping_fee >= 0 && this.formData.terms_accepted && (this.formData.business_type === 'individual' || this.files.business_permit);
    }
  },
  methods: {
    isStepValid: function isStepValid(step) {
      var _this = this;
      var validations = {
        0: function _() {
          return !_this.errors.full_name && !_this.errors.contact_number && _this.formData.full_name && _this.formData.contact_number;
        },
        1: function _() {
          return !_this.errors.store_name && !_this.errors.shop_address && _this.formData.store_name && _this.formData.shop_address && _this.formData.business_type;
        },
        2: function _() {
          return !_this.errors.bank_name && !_this.errors.account_name && !_this.errors.account_number && !_this.errors.ewallet_type && _this.formData.bank_name && _this.formData.account_name && _this.formData.account_number && (_this.formData.ewallet_type === 'none' || _this.formData.ewallet_number);
        },
        3: function _() {
          return !_this.errors.delivery_methods && !_this.errors.shipping_fee && _this.formData.delivery_methods.length > 0 && _this.formData.shipping_fee >= 0;
        },
        4: function _() {
          return true;
        },
        // Verification is optional except business permit
        5: function _() {
          return _this.formData.terms_accepted;
        }
      };
      return validations[step] ? validations[step]() : true;
    },
    validateField: function validateField(fieldName) {
      var _this2 = this;
      var validators = {
        full_name: function full_name() {
          if (!_this2.formData.full_name) return 'Full name is required';
          if (_this2.formData.full_name.length < 3) return 'Full name must be at least 3 characters';
          return '';
        },
        contact_number: function contact_number() {
          if (!_this2.formData.contact_number) return 'Contact number is required';
          if (!/^[0-9\s\-\+\(\)]{7,}$/.test(_this2.formData.contact_number)) {
            return 'Invalid phone number format';
          }
          return '';
        },
        store_name: function store_name() {
          if (!_this2.formData.store_name) return 'Shop name is required';
          if (_this2.formData.store_name.length < 3) return 'Shop name must be at least 3 characters';
          return '';
        },
        shop_address: function shop_address() {
          if (!_this2.formData.shop_address) return 'Shop address is required';
          if (_this2.formData.shop_address.length < 10) return 'Please provide a complete address';
          return '';
        },
        business_type: function business_type() {
          if (!_this2.formData.business_type) return 'Business type is required';
          return '';
        },
        bank_name: function bank_name() {
          if (!_this2.formData.bank_name) return 'Bank name is required';
          return '';
        },
        account_name: function account_name() {
          if (!_this2.formData.account_name) return 'Account holder name is required';
          return '';
        },
        account_number: function account_number() {
          if (!_this2.formData.account_number) return 'Account number is required';
          return '';
        },
        ewallet_type: function ewallet_type() {
          if (!_this2.formData.ewallet_type) return 'E-wallet type is required';
          return '';
        },
        ewallet_number: function ewallet_number() {
          if (_this2.formData.ewallet_type === 'none') return '';
          if (!_this2.formData.ewallet_number) return 'E-wallet number is required';
          if (!/^[0-9\s\-\+\(\)]{7,}$/.test(_this2.formData.ewallet_number)) {
            return 'Invalid e-wallet number format';
          }
          return '';
        },
        delivery_methods: function delivery_methods() {
          if (_this2.formData.delivery_methods.length === 0) {
            return 'Select at least one delivery method';
          }
          return '';
        },
        shipping_fee: function shipping_fee() {
          if (_this2.formData.shipping_fee === null || _this2.formData.shipping_fee === '') {
            return 'Shipping fee is required';
          }
          if (_this2.formData.shipping_fee < 0) return 'Shipping fee cannot be negative';
          return '';
        },
        business_permit: function business_permit() {
          if (_this2.formData.business_type === 'business' && !_this2.files.business_permit) {
            return 'Business permit is required for registered businesses';
          }
          return '';
        },
        terms_accepted: function terms_accepted() {
          if (!_this2.formData.terms_accepted) return 'You must accept the terms and conditions';
          return '';
        }
      };
      if (validators[fieldName]) {
        this.errors[fieldName] = validators[fieldName]();
      }
    },
    clearFieldError: function clearFieldError(fieldName) {
      this.errors[fieldName] = '';
    },
    goToStep: function goToStep(stepIndex) {
      if (stepIndex < this.currentStep) {
        this.currentStep = stepIndex;
      }
    },
    nextStep: function nextStep() {
      if (this.isStepValid(this.currentStep)) {
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep += 1;
          this.$nextTick(function () {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          });
        }
      }
    },
    previousStep: function previousStep() {
      if (this.currentStep > 0) {
        this.currentStep -= 1;
        this.$nextTick(function () {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
    },
    handleLogoUpload: function handleLogoUpload(event) {
      var file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          this.errors.logo = 'File size must be less than 5MB';
          return;
        }
        this.files.logo = file;
        this.createPreview(file, 'logo');
      }
    },
    handleValidIdUpload: function handleValidIdUpload(event) {
      var file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          this.errors.valid_id = 'File size must be less than 5MB';
          return;
        }
        this.files.valid_id = file;
        this.createPreview(file, 'valid_id');
      }
    },
    handleSelfieUpload: function handleSelfieUpload(event) {
      var file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          this.errors.selfie = 'File size must be less than 5MB';
          return;
        }
        this.files.selfie = file;
        this.createPreview(file, 'selfie');
      }
    },
    handlePermitUpload: function handlePermitUpload(event) {
      var file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          this.errors.business_permit = 'File size must be less than 5MB';
          return;
        }
        this.files.business_permit = file;
        this.createPreview(file, 'business_permit');
      }
    },
    createPreview: function createPreview(file, type) {
      var _this3 = this;
      var reader = new FileReader();
      reader.onload = function (e) {
        _this3.previews[type] = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeLogo: function removeLogo() {
      this.files.logo = null;
      this.previews.logo = null;
    },
    removeValidId: function removeValidId() {
      this.files.valid_id = null;
      this.previews.valid_id = null;
    },
    removeSelfie: function removeSelfie() {
      this.files.selfie = null;
      this.previews.selfie = null;
    },
    removePermit: function removePermit() {
      this.files.business_permit = null;
      this.previews.business_permit = null;
    },
    submitForm: function submitForm() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var formDataToSubmit, response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              // Final validation
              _this4.validateField('terms_accepted');
              if (_this4.isFormValid) {
                _context.n = 1;
                break;
              }
              _this4.submitError = 'Please fill in all required fields correctly';
              return _context.a(2);
            case 1:
              _this4.isSubmitting = true;
              _this4.submitError = '';
              _context.p = 2;
              formDataToSubmit = new FormData(); // Add form data
              Object.keys(_this4.formData).forEach(function (key) {
                if (key === 'delivery_methods') {
                  if (Array.isArray(_this4.formData[key])) {
                    _this4.formData[key].forEach(function (method) {
                      formDataToSubmit.append('delivery_methods[]', method);
                    });
                  }
                } else if (typeof _this4.formData[key] === 'boolean') {
                  formDataToSubmit.append(key, _this4.formData[key] ? '1' : '0');
                } else {
                  var val = _this4.formData[key];
                  formDataToSubmit.append(key, val !== null && val !== undefined && val !== '' ? val : '');
                }
              });

              // Add files
              if (_this4.files.logo) formDataToSubmit.append('logo', _this4.files.logo);
              if (_this4.files.valid_id) formDataToSubmit.append('valid_id', _this4.files.valid_id);
              if (_this4.files.selfie) formDataToSubmit.append('selfie', _this4.files.selfie);
              if (_this4.files.business_permit) formDataToSubmit.append('business_permit', _this4.files.business_permit);
              _context.n = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/seller/onboarding/submit', formDataToSubmit, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 3:
              response = _context.v;
              if (response.status === 201 || response.status === 200) {
                _this4.currentStep = 'success';
              }
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error('Submission error:', _t);
              if (_t.response) {
                data = _t.response.data;
                if (data.errors) {
                  _this4.errors = data.errors;
                  _this4.submitError = 'Please fix the validation errors';
                } else {
                  _this4.submitError = data.message || 'Failed to submit registration. Please check the errors above.';
                }
              } else if (_t.request) {
                _this4.submitError = 'Network error: No response from server. Please check your connection.';
              } else {
                _this4.submitError = _t.message || 'An error occurred. Please try again.';
              }
            case 5:
              _context.p = 5;
              _this4.isSubmitting = false;
              return _context.f(5);
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4, 5, 6]]);
      }))();
    },
    goToDashboard: function goToDashboard() {
      this.$router.push('/seller/dashboard');
    }
  },
  mounted: function mounted() {
    var _this5 = this;
    // Get authenticated user email
    axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/seller/profile').then(function (response) {
      if (response.data && response.data.user && response.data.user.email) {
        _this5.userEmail = response.data.user.email;
      }
    })["catch"](function (error) {
      console.warn('Could not fetch user email:', error);
      // Email will remain empty, user can see it's not loaded
    });
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=template&id=2fcf9e87&scoped=true"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=template&id=2fcf9e87&scoped=true ***!
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
    staticClass: "seller-onboarding"
  }, [_vm._m(0), _vm._v(" "), _vm.currentStep === "success" ? _c("div", {
    staticClass: "success-container"
  }, [_c("div", {
    staticClass: "success-card"
  }, [_c("div", {
    staticClass: "success-icon"
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    }
  })])]), _vm._v(" "), _c("h2", [_vm._v("Registration Submitted!")]), _vm._v(" "), _c("p", {
    staticClass: "success-message"
  }, [_vm._v("\n        Your seller registration has been submitted successfully. Our admin team will review your information\n        and contact you within 24-48 hours.\n      ")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("button", {
    staticClass: "btn-primary",
    on: {
      click: _vm.goToDashboard
    }
  }, [_vm._v("Go to Dashboard")])])]) : _c("div", {
    staticClass: "form-container"
  }, [_c("div", {
    staticClass: "progress-container"
  }, [_c("div", {
    staticClass: "progress-bar"
  }, [_c("div", {
    staticClass: "progress-fill",
    style: {
      width: _vm.progressPercentage + "%"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "step-indicators"
  }, _vm._l(_vm.steps, function (step, index) {
    return _c("div", {
      key: index,
      "class": ["step-indicator", {
        active: _vm.currentStep === index,
        completed: _vm.currentStep > index
      }],
      on: {
        click: function click($event) {
          return _vm.goToStep(index);
        }
      }
    }, [_c("span", {
      staticClass: "step-number"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("span", {
      staticClass: "step-label"
    }, [_vm._v(_vm._s(step))])]);
  }), 0)]), _vm._v(" "), _c("form", {
    staticClass: "form-content",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 0,
      expression: "currentStep === 0"
    }],
    staticClass: "form-step"
  }, [_c("h2", [_vm._v("Personal Information")]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "fullName"
    }
  }, [_vm._v("Full Name *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.full_name,
      expression: "formData.full_name"
    }],
    attrs: {
      id: "fullName",
      type: "text",
      placeholder: "Enter your full name"
    },
    domProps: {
      value: _vm.formData.full_name
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("full_name");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "full_name", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError("full_name");
      }]
    }
  }), _vm._v(" "), _vm.errors.full_name ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.full_name))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email Address (Read-only)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userEmail,
      expression: "userEmail"
    }],
    attrs: {
      id: "email",
      type: "email",
      disabled: ""
    },
    domProps: {
      value: _vm.userEmail
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.userEmail = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("small", [_vm._v("This is your registered email address")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "contactNumber"
    }
  }, [_vm._v("Contact Number *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.contact_number,
      expression: "formData.contact_number"
    }],
    attrs: {
      id: "contactNumber",
      type: "tel",
      placeholder: "+63 9XX XXX XXXX"
    },
    domProps: {
      value: _vm.formData.contact_number
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("contact_number");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "contact_number", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError("contact_number");
      }]
    }
  }), _vm._v(" "), _vm.errors.contact_number ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.contact_number))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 1,
      expression: "currentStep === 1"
    }],
    staticClass: "form-step"
  }, [_c("h2", [_vm._v("Shop Details")]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "shopName"
    }
  }, [_vm._v("Shop Name *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.store_name,
      expression: "formData.store_name"
    }],
    attrs: {
      id: "shopName",
      type: "text",
      placeholder: "Enter your shop name"
    },
    domProps: {
      value: _vm.formData.store_name
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("store_name");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "store_name", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError("store_name");
      }]
    }
  }), _vm._v(" "), _vm.errors.store_name ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.store_name))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "shopDescription"
    }
  }, [_vm._v("Shop Description")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.store_description,
      expression: "formData.store_description"
    }],
    attrs: {
      id: "shopDescription",
      placeholder: "Tell customers about your shop...",
      rows: "4"
    },
    domProps: {
      value: _vm.formData.store_description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "store_description", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "businessType"
    }
  }, [_vm._v("Business Type *")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.business_type,
      expression: "formData.business_type"
    }],
    attrs: {
      id: "businessType"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("business_type");
      },
      input: function input($event) {
        return _vm.clearFieldError("business_type");
      },
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "business_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "individual"
    }
  }, [_vm._v("Individual")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "business"
    }
  }, [_vm._v("Registered Business")])]), _vm._v(" "), _vm.errors.business_type ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.business_type))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "shopLogo"
    }
  }, [_vm._v("Shop Logo / Profile Image")]), _vm._v(" "), _c("div", {
    staticClass: "file-upload-group"
  }, [_vm.logoPreview ? _c("div", {
    staticClass: "logo-preview"
  }, [_c("img", {
    attrs: {
      src: _vm.logoPreview,
      alt: "Shop Logo Preview"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn-remove",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.removeLogo
    }
  }, [_vm._v("Remove")])]) : _vm._e(), _vm._v(" "), _c("input", {
    attrs: {
      id: "shopLogo",
      type: "file",
      accept: "image/*"
    },
    on: {
      change: _vm.handleLogoUpload
    }
  }), _vm._v(" "), _c("small", [_vm._v("JPG, PNG, GIF, or WebP (Max 5MB)")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "shopAddress"
    }
  }, [_vm._v("Shop Address *")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.shop_address,
      expression: "formData.shop_address"
    }],
    attrs: {
      id: "shopAddress",
      placeholder: "Enter complete shop address",
      rows: "3"
    },
    domProps: {
      value: _vm.formData.shop_address
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("shop_address");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "shop_address", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError("shop_address");
      }]
    }
  }), _vm._v(" "), _vm.errors.shop_address ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.shop_address))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 2,
      expression: "currentStep === 2"
    }],
    staticClass: "form-step"
  }, [_c("h2", [_vm._v("Payment Information")]), _vm._v(" "), _c("div", {
    staticClass: "form-section"
  }, [_c("h3", [_vm._v("Bank Account Details")]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "bankName"
    }
  }, [_vm._v("Bank Name *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.bank_name,
      expression: "formData.bank_name"
    }],
    attrs: {
      id: "bankName",
      type: "text",
      placeholder: "e.g., BDO, BPI, Metrobank"
    },
    domProps: {
      value: _vm.formData.bank_name
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("bank_name");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "bank_name", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError("bank_name");
      }]
    }
  }), _vm._v(" "), _vm.errors.bank_name ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.bank_name))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "accountName"
    }
  }, [_vm._v("Account Holder Name *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.account_name,
      expression: "formData.account_name"
    }],
    attrs: {
      id: "accountName",
      type: "text",
      placeholder: "Name on bank account"
    },
    domProps: {
      value: _vm.formData.account_name
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("account_name");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "account_name", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError("account_name");
      }]
    }
  }), _vm._v(" "), _vm.errors.account_name ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.account_name))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "accountNumber"
    }
  }, [_vm._v("Account Number *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.account_number,
      expression: "formData.account_number"
    }],
    attrs: {
      id: "accountNumber",
      type: "text",
      placeholder: "Bank account number"
    },
    domProps: {
      value: _vm.formData.account_number
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("account_number");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "account_number", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError("account_number");
      }]
    }
  }), _vm._v(" "), _vm.errors.account_number ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.account_number))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "form-section"
  }, [_c("h3", [_vm._v("E-wallet Option")]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "ewalletType"
    }
  }, [_vm._v("E-wallet Type *")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.ewallet_type,
      expression: "formData.ewallet_type"
    }],
    attrs: {
      id: "ewalletType"
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("ewallet_type");
      },
      input: function input($event) {
        return _vm.clearFieldError("ewallet_type");
      },
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "ewallet_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "none"
    }
  }, [_vm._v("None")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "gcash"
    }
  }, [_vm._v("GCash")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "paymaya"
    }
  }, [_vm._v("PayMaya")])]), _vm._v(" "), _vm.errors.ewallet_type ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.ewallet_type))]) : _vm._e()]), _vm._v(" "), _vm.formData.ewallet_type !== "none" ? _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "ewalletNumber"
    }
  }, [_vm._v("E-wallet Number *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.ewallet_number,
      expression: "formData.ewallet_number"
    }],
    attrs: {
      id: "ewalletNumber",
      type: "tel",
      placeholder: "Enter your ".concat(_vm.formData.ewallet_type, " number")
    },
    domProps: {
      value: _vm.formData.ewallet_number
    },
    on: {
      blur: function blur($event) {
        return _vm.validateField("ewallet_number");
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "ewallet_number", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError("ewallet_number");
      }]
    }
  }), _vm._v(" "), _vm.errors.ewallet_number ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.ewallet_number))]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 3,
      expression: "currentStep === 3"
    }],
    staticClass: "form-step"
  }, [_c("h2", [_vm._v("Shipping & Delivery Setup")]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "pickupAddress"
    }
  }, [_vm._v("Pickup Address")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.pickup_address,
      expression: "formData.pickup_address"
    }],
    attrs: {
      id: "pickupAddress",
      placeholder: "Leave blank to use shop address as pickup location",
      rows: "3"
    },
    domProps: {
      value: _vm.formData.pickup_address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "pickup_address", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("small", [_vm._v("Where customers or couriers can pick up their orders")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Delivery Methods *")]), _vm._v(" "), _c("div", {
    staticClass: "checkbox-group"
  }, [_c("div", {
    staticClass: "checkbox-item"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.delivery_methods,
      expression: "formData.delivery_methods"
    }],
    attrs: {
      id: "selfDelivery",
      type: "checkbox",
      value: "self-delivery"
    },
    domProps: {
      checked: Array.isArray(_vm.formData.delivery_methods) ? _vm._i(_vm.formData.delivery_methods, "self-delivery") > -1 : _vm.formData.delivery_methods
    },
    on: {
      change: function change($event) {
        var $$a = _vm.formData.delivery_methods,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "self-delivery",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.formData, "delivery_methods", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.formData, "delivery_methods", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.formData, "delivery_methods", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "checkbox-label",
    attrs: {
      "for": "selfDelivery"
    }
  }, [_vm._v("Self-delivery")])]), _vm._v(" "), _c("div", {
    staticClass: "checkbox-item"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.delivery_methods,
      expression: "formData.delivery_methods"
    }],
    attrs: {
      id: "thirdParty",
      type: "checkbox",
      value: "third-party"
    },
    domProps: {
      checked: Array.isArray(_vm.formData.delivery_methods) ? _vm._i(_vm.formData.delivery_methods, "third-party") > -1 : _vm.formData.delivery_methods
    },
    on: {
      change: function change($event) {
        var $$a = _vm.formData.delivery_methods,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "third-party",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.formData, "delivery_methods", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.formData, "delivery_methods", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.formData, "delivery_methods", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "checkbox-label",
    attrs: {
      "for": "thirdParty"
    }
  }, [_vm._v("Third-party Courier")])])]), _vm._v(" "), _vm.errors.delivery_methods ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.delivery_methods))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "shippingFee"
    }
  }, [_vm._v("Shipping Fee (PHP) *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.formData.shipping_fee,
      expression: "formData.shipping_fee",
      modifiers: {
        number: true
      }
    }],
    attrs: {
      id: "shippingFee",
      type: "number",
      placeholder: "0.00",
      min: "0",
      step: "0.01"
    },
    domProps: {
      value: _vm.formData.shipping_fee
    },
    on: {
      blur: [function ($event) {
        return _vm.validateField("shipping_fee");
      }, function ($event) {
        return _vm.$forceUpdate();
      }],
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "shipping_fee", _vm._n($event.target.value));
      }, function ($event) {
        return _vm.clearFieldError("shipping_fee");
      }]
    }
  }), _vm._v(" "), _vm.errors.shipping_fee ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.shipping_fee))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "toggle-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.enable_tracking,
      expression: "formData.enable_tracking"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.formData.enable_tracking) ? _vm._i(_vm.formData.enable_tracking, null) > -1 : _vm.formData.enable_tracking
    },
    on: {
      change: function change($event) {
        var $$a = _vm.formData.enable_tracking,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.formData, "enable_tracking", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.formData, "enable_tracking", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.formData, "enable_tracking", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "toggle-slider"
  }), _vm._v(" "), _c("span", {
    staticClass: "toggle-text"
  }, [_vm._v("Enable Order Tracking")])]), _vm._v(" "), _c("small", [_vm._v("Allow customers to track their orders in real-time")])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 4,
      expression: "currentStep === 4"
    }],
    staticClass: "form-step"
  }, [_c("h2", [_vm._v("Verification Documents")]), _vm._v(" "), _c("p", {
    staticClass: "section-info"
  }, [_vm._v("Upload documents to verify your identity and business legitimacy")]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "validId"
    }
  }, [_vm._v("Valid ID (Optional)")]), _vm._v(" "), _c("div", {
    staticClass: "file-upload-group"
  }, [_vm.validIdPreview ? _c("div", {
    staticClass: "document-preview"
  }, [_c("img", {
    attrs: {
      src: _vm.validIdPreview,
      alt: "Valid ID Preview"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn-remove",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.removeValidId
    }
  }, [_vm._v("Remove")])]) : _vm._e(), _vm._v(" "), _c("input", {
    attrs: {
      id: "validId",
      type: "file",
      accept: "image/*,application/pdf"
    },
    on: {
      change: _vm.handleValidIdUpload
    }
  }), _vm._v(" "), _c("small", [_vm._v("PDF, JPG, PNG (Max 5MB) - Passport, Driver's License, etc.")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "selfie"
    }
  }, [_vm._v("Selfie Upload (Optional)")]), _vm._v(" "), _c("div", {
    staticClass: "file-upload-group"
  }, [_vm.selfiePreview ? _c("div", {
    staticClass: "document-preview"
  }, [_c("img", {
    attrs: {
      src: _vm.selfiePreview,
      alt: "Selfie Preview"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn-remove",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.removeSelfie
    }
  }, [_vm._v("Remove")])]) : _vm._e(), _vm._v(" "), _c("input", {
    attrs: {
      id: "selfie",
      type: "file",
      accept: "image/*"
    },
    on: {
      change: _vm.handleSelfieUpload
    }
  }), _vm._v(" "), _c("small", [_vm._v("JPG, PNG, GIF (Max 5MB) - Clear facial photo")])])]), _vm._v(" "), _vm.formData.business_type === "business" ? _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "businessPermit"
    }
  }, [_vm._v("Business Permit / License Registration *")]), _vm._v(" "), _c("div", {
    staticClass: "file-upload-group"
  }, [_vm.permitPreview ? _c("div", {
    staticClass: "document-preview"
  }, [_c("img", {
    attrs: {
      src: _vm.permitPreview,
      alt: "Business Permit Preview"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn-remove",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.removePermit
    }
  }, [_vm._v("Remove")])]) : _vm._e(), _vm._v(" "), _c("input", {
    attrs: {
      id: "businessPermit",
      type: "file",
      accept: "image/*,application/pdf"
    },
    on: {
      change: _vm.handlePermitUpload
    }
  }), _vm._v(" "), _vm.errors.business_permit ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.business_permit))]) : _vm._e(), _vm._v(" "), _c("small", [_vm._v("PDF, JPG, PNG (Max 5MB) - Business registration document")])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 5,
      expression: "currentStep === 5"
    }],
    staticClass: "form-step"
  }, [_c("h2", [_vm._v("Terms & Agreement")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "form-group checkbox-group"
  }, [_c("div", {
    staticClass: "checkbox-item"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.terms_accepted,
      expression: "formData.terms_accepted"
    }],
    attrs: {
      id: "termsAccepted",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.formData.terms_accepted) ? _vm._i(_vm.formData.terms_accepted, null) > -1 : _vm.formData.terms_accepted
    },
    on: {
      change: function change($event) {
        var $$a = _vm.formData.terms_accepted,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.formData, "terms_accepted", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.formData, "terms_accepted", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.formData, "terms_accepted", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "checkbox-label",
    attrs: {
      "for": "termsAccepted"
    }
  }, [_vm._v("\n              I agree to the seller terms and policies *\n            ")])]), _vm._v(" "), _vm.errors.terms_accepted ? _c("span", {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.terms_accepted))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "review-section"
  }, [_c("h3", [_vm._v("Registration Summary")]), _vm._v(" "), _c("div", {
    staticClass: "summary-grid"
  }, [_c("div", {
    staticClass: "summary-item"
  }, [_c("span", {
    staticClass: "label"
  }, [_vm._v("Shop Name")]), _vm._v(" "), _c("span", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formData.store_name))])]), _vm._v(" "), _c("div", {
    staticClass: "summary-item"
  }, [_c("span", {
    staticClass: "label"
  }, [_vm._v("Business Type")]), _vm._v(" "), _c("span", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formData.business_type))])]), _vm._v(" "), _c("div", {
    staticClass: "summary-item"
  }, [_c("span", {
    staticClass: "label"
  }, [_vm._v("Contact Number")]), _vm._v(" "), _c("span", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formData.contact_number))])]), _vm._v(" "), _c("div", {
    staticClass: "summary-item"
  }, [_c("span", {
    staticClass: "label"
  }, [_vm._v("Delivery Methods")]), _vm._v(" "), _c("span", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.formData.delivery_methods.join(", ")))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "form-navigation"
  }, [_vm.currentStep > 0 ? _c("button", {
    staticClass: "btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.previousStep
    }
  }, [_vm._v("\n          ← Previous\n        ")]) : _vm._e(), _vm._v(" "), _vm.currentStep < 5 ? _c("button", {
    staticClass: "btn-primary",
    attrs: {
      type: "button",
      disabled: !_vm.isStepValid(_vm.currentStep)
    },
    on: {
      click: _vm.nextStep
    }
  }, [_vm._v("\n          Next →\n        ")]) : _vm._e(), _vm._v(" "), _vm.currentStep === 5 ? _c("button", {
    staticClass: "btn-primary btn-submit",
    attrs: {
      type: "submit",
      disabled: !_vm.isFormValid || _vm.isSubmitting
    }
  }, [!_vm.isSubmitting ? _c("span", [_vm._v("Submit Registration")]) : _c("span", [_vm._v("Submitting...")])]) : _vm._e()]), _vm._v(" "), _vm.submitError ? _c("div", {
    staticClass: "alert alert-error"
  }, [_vm._v("\n        " + _vm._s(_vm.submitError) + "\n      ")]) : _vm._e()])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "onboarding-header"
  }, [_c("h1", [_vm._v("Complete Your Seller Registration")]), _vm._v(" "), _c("p", [_vm._v("Set up your store to start selling on NurbanNext")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "status-info"
  }, [_c("h3", [_vm._v("What's Next?")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("✓ Your documents are being verified")]), _vm._v(" "), _c("li", [_vm._v("✓ We'll check your payment details")]), _vm._v(" "), _c("li", [_vm._v("✓ Admin approval will be sent to your email")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "terms-content"
  }, [_c("h3", [_vm._v("seller Terms and Conditions")]), _vm._v(" "), _c("div", {
    staticClass: "terms-box"
  }, [_c("p", [_vm._v("\n              By completing this registration, you agree to comply with all seller policies and guidelines.\n              This includes:\n            ")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("Maintaining accurate and honest product listings")]), _vm._v(" "), _c("li", [_vm._v("Processing orders within the specified timeframe")]), _vm._v(" "), _c("li", [_vm._v("Following all platform payment and shipping policies")]), _vm._v(" "), _c("li", [_vm._v("Providing quality customer service")]), _vm._v(" "), _c("li", [_vm._v("Complying with all applicable laws and regulations")]), _vm._v(" "), _c("li", [_vm._v("Protecting customer privacy and data")])]), _vm._v(" "), _c("p", [_vm._v("\n              Violation of these terms may result in account suspension or termination. For complete terms,\n              please visit our "), _c("a", {
    attrs: {
      href: "#",
      target: "_blank"
    }
  }, [_vm._v("full seller agreement")]), _vm._v(".\n            ")])])]);
}];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".seller-onboarding[data-v-2fcf9e87] {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);\n  color: #fff;\n  padding: 40px 20px;\n}\n.seller-onboarding .onboarding-header[data-v-2fcf9e87] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n.seller-onboarding .onboarding-header h1[data-v-2fcf9e87] {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n  font-weight: 700;\n}\n.seller-onboarding .onboarding-header p[data-v-2fcf9e87] {\n  font-size: 1.1rem;\n  color: #bbb;\n}\n.seller-onboarding .success-container[data-v-2fcf9e87] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 60vh;\n}\n.seller-onboarding .success-container .success-card[data-v-2fcf9e87] {\n  background: #0f3460;\n  border-radius: 15px;\n  padding: 50px;\n  text-align: center;\n  max-width: 500px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.seller-onboarding .success-container .success-card .success-icon[data-v-2fcf9e87] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 30px;\n  background: #28a745;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.seller-onboarding .success-container .success-card .success-icon svg[data-v-2fcf9e87] {\n  width: 50px;\n  height: 50px;\n  color: #fff;\n}\n.seller-onboarding .success-container .success-card h2[data-v-2fcf9e87] {\n  font-size: 2rem;\n  margin-bottom: 20px;\n}\n.seller-onboarding .success-container .success-card .success-message[data-v-2fcf9e87] {\n  color: #bbb;\n  line-height: 1.8;\n  margin-bottom: 30px;\n}\n.seller-onboarding .success-container .success-card .status-info[data-v-2fcf9e87] {\n  background: rgba(255, 255, 255, 0.05);\n  padding: 20px;\n  border-radius: 10px;\n  text-align: left;\n  margin-bottom: 30px;\n}\n.seller-onboarding .success-container .success-card .status-info h3[data-v-2fcf9e87] {\n  margin-bottom: 15px;\n  font-size: 1.1rem;\n}\n.seller-onboarding .success-container .success-card .status-info ul[data-v-2fcf9e87] {\n  list-style: none;\n  padding: 0;\n}\n.seller-onboarding .success-container .success-card .status-info ul li[data-v-2fcf9e87] {\n  padding: 8px 0;\n  color: #bbb;\n}\n.seller-onboarding .success-container .success-card .btn-primary[data-v-2fcf9e87] {\n  background: #ff6b35;\n  color: white;\n  border: none;\n  padding: 12px 30px;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.seller-onboarding .success-container .success-card .btn-primary[data-v-2fcf9e87]:hover {\n  background: #ff5722;\n}\n.seller-onboarding .form-container[data-v-2fcf9e87] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.seller-onboarding .form-container .progress-container[data-v-2fcf9e87] {\n  margin-bottom: 50px;\n}\n.seller-onboarding .form-container .progress-container .progress-bar[data-v-2fcf9e87] {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  margin-bottom: 30px;\n  overflow: hidden;\n}\n.seller-onboarding .form-container .progress-container .progress-bar .progress-fill[data-v-2fcf9e87] {\n  height: 100%;\n  background: linear-gradient(90deg, #ff6b35, #f7931e);\n  transition: width 0.3s ease;\n}\n.seller-onboarding .form-container .progress-container .step-indicators[data-v-2fcf9e87] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.seller-onboarding .form-container .progress-container .step-indicators .step-indicator[data-v-2fcf9e87] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.3s;\n}\n.seller-onboarding .form-container .progress-container .step-indicators .step-indicator.active[data-v-2fcf9e87], .seller-onboarding .form-container .progress-container .step-indicators .step-indicator.completed[data-v-2fcf9e87] {\n  opacity: 1;\n}\n.seller-onboarding .form-container .progress-container .step-indicators .step-indicator .step-number[data-v-2fcf9e87] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  transition: all 0.3s;\n}\n.seller-onboarding .form-container .progress-container .step-indicators .step-indicator.active .step-number[data-v-2fcf9e87] {\n  background: #ff6b35;\n  border-color: #ff6b35;\n  transform: scale(1.1);\n}\n.seller-onboarding .form-container .progress-container .step-indicators .step-indicator.completed .step-number[data-v-2fcf9e87] {\n  background: #28a745;\n  border-color: #28a745;\n}\n.seller-onboarding .form-container .progress-container .step-indicators .step-indicator .step-label[data-v-2fcf9e87] {\n  font-size: 0.9rem;\n  white-space: nowrap;\n}\n.seller-onboarding .form-container .form-content[data-v-2fcf9e87] {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 15px;\n  padding: 40px;\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.seller-onboarding .form-container .form-content .form-step[data-v-2fcf9e87] {\n  animation: slideIn-2fcf9e87 0.3s ease;\n}\n.seller-onboarding .form-container .form-content .form-step h2[data-v-2fcf9e87] {\n  font-size: 1.8rem;\n  margin-bottom: 30px;\n  color: #ff6b35;\n}\n.seller-onboarding .form-container .form-content .form-step .section-info[data-v-2fcf9e87] {\n  color: #bbb;\n  margin-bottom: 25px;\n  font-size: 0.95rem;\n}\n.seller-onboarding .form-container .form-content .form-step .form-section[data-v-2fcf9e87] {\n  margin-bottom: 30px;\n}\n.seller-onboarding .form-container .form-content .form-step .form-section h3[data-v-2fcf9e87] {\n  font-size: 1.2rem;\n  margin-bottom: 20px;\n  color: #fff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding-bottom: 12px;\n}\n.seller-onboarding .form-container .form-content .form-group[data-v-2fcf9e87] {\n  margin-bottom: 25px;\n}\n.seller-onboarding .form-container .form-content .form-group label[data-v-2fcf9e87] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.seller-onboarding .form-container .form-content .form-group input[type=text][data-v-2fcf9e87],\n.seller-onboarding .form-container .form-content .form-group input[type=email][data-v-2fcf9e87],\n.seller-onboarding .form-container .form-content .form-group input[type=tel][data-v-2fcf9e87],\n.seller-onboarding .form-container .form-content .form-group input[type=number][data-v-2fcf9e87],\n.seller-onboarding .form-container .form-content .form-group select[data-v-2fcf9e87],\n.seller-onboarding .form-container .form-content .form-group textarea[data-v-2fcf9e87] {\n  width: 100%;\n  padding: 12px 15px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  color: #fff;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: all 0.3s;\n}\n.seller-onboarding .form-container .form-content .form-group input[type=text][data-v-2fcf9e87]:focus,\n.seller-onboarding .form-container .form-content .form-group input[type=email][data-v-2fcf9e87]:focus,\n.seller-onboarding .form-container .form-content .form-group input[type=tel][data-v-2fcf9e87]:focus,\n.seller-onboarding .form-container .form-content .form-group input[type=number][data-v-2fcf9e87]:focus,\n.seller-onboarding .form-container .form-content .form-group select[data-v-2fcf9e87]:focus,\n.seller-onboarding .form-container .form-content .form-group textarea[data-v-2fcf9e87]:focus {\n  outline: none;\n  background: rgba(255, 255, 255, 0.12);\n  border-color: #ff6b35;\n  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);\n}\n.seller-onboarding .form-container .form-content .form-group input[type=text][data-v-2fcf9e87]:disabled,\n.seller-onboarding .form-container .form-content .form-group input[type=email][data-v-2fcf9e87]:disabled,\n.seller-onboarding .form-container .form-content .form-group input[type=tel][data-v-2fcf9e87]:disabled,\n.seller-onboarding .form-container .form-content .form-group input[type=number][data-v-2fcf9e87]:disabled,\n.seller-onboarding .form-container .form-content .form-group select[data-v-2fcf9e87]:disabled,\n.seller-onboarding .form-container .form-content .form-group textarea[data-v-2fcf9e87]:disabled {\n  background: rgba(255, 255, 255, 0.05);\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.seller-onboarding .form-container .form-content .form-group input[type=text][data-v-2fcf9e87]::-moz-placeholder, .seller-onboarding .form-container .form-content .form-group input[type=email][data-v-2fcf9e87]::-moz-placeholder, .seller-onboarding .form-container .form-content .form-group input[type=tel][data-v-2fcf9e87]::-moz-placeholder, .seller-onboarding .form-container .form-content .form-group input[type=number][data-v-2fcf9e87]::-moz-placeholder, .seller-onboarding .form-container .form-content .form-group select[data-v-2fcf9e87]::-moz-placeholder, .seller-onboarding .form-container .form-content .form-group textarea[data-v-2fcf9e87]::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.seller-onboarding .form-container .form-content .form-group input[type=text][data-v-2fcf9e87]::placeholder,\n.seller-onboarding .form-container .form-content .form-group input[type=email][data-v-2fcf9e87]::placeholder,\n.seller-onboarding .form-container .form-content .form-group input[type=tel][data-v-2fcf9e87]::placeholder,\n.seller-onboarding .form-container .form-content .form-group input[type=number][data-v-2fcf9e87]::placeholder,\n.seller-onboarding .form-container .form-content .form-group select[data-v-2fcf9e87]::placeholder,\n.seller-onboarding .form-container .form-content .form-group textarea[data-v-2fcf9e87]::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.seller-onboarding .form-container .form-content .form-group small[data-v-2fcf9e87] {\n  display: block;\n  margin-top: 6px;\n  color: #999;\n  font-size: 0.85rem;\n}\n.seller-onboarding .form-container .form-content .form-group .error-message[data-v-2fcf9e87] {\n  display: block;\n  color: #ff6b6b;\n  font-size: 0.85rem;\n  margin-top: 6px;\n}\n.seller-onboarding .form-container .form-content .file-upload-group[data-v-2fcf9e87] {\n  border: 2px dashed rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  padding: 20px;\n  text-align: center;\n  transition: all 0.3s;\n}\n.seller-onboarding .form-container .form-content .file-upload-group[data-v-2fcf9e87]:hover {\n  border-color: #ff6b35;\n  background: rgba(255, 107, 53, 0.05);\n}\n.seller-onboarding .form-container .form-content .file-upload-group input[type=file][data-v-2fcf9e87] {\n  cursor: pointer;\n}\n.seller-onboarding .form-container .form-content .file-upload-group input[type=file][data-v-2fcf9e87]::file-selector-button {\n  background: #ff6b35;\n  color: white;\n  border: none;\n  padding: 8px 20px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: background 0.3s;\n}\n.seller-onboarding .form-container .form-content .file-upload-group input[type=file][data-v-2fcf9e87]::file-selector-button:hover {\n  background: #ff5722;\n}\n.seller-onboarding .form-container .form-content .file-upload-group .logo-preview[data-v-2fcf9e87],\n.seller-onboarding .form-container .form-content .file-upload-group .document-preview[data-v-2fcf9e87] {\n  margin-bottom: 15px;\n  position: relative;\n}\n.seller-onboarding .form-container .form-content .file-upload-group .logo-preview img[data-v-2fcf9e87],\n.seller-onboarding .form-container .form-content .file-upload-group .document-preview img[data-v-2fcf9e87] {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 8px;\n  display: block;\n  margin: 0 auto;\n}\n.seller-onboarding .form-container .form-content .file-upload-group .logo-preview .btn-remove[data-v-2fcf9e87],\n.seller-onboarding .form-container .form-content .file-upload-group .document-preview .btn-remove[data-v-2fcf9e87] {\n  margin-top: 10px;\n  background: #dc3545;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: background 0.3s;\n}\n.seller-onboarding .form-container .form-content .file-upload-group .logo-preview .btn-remove[data-v-2fcf9e87]:hover,\n.seller-onboarding .form-container .form-content .file-upload-group .document-preview .btn-remove[data-v-2fcf9e87]:hover {\n  background: #c82333;\n}\n.seller-onboarding .form-container .form-content .checkbox-group[data-v-2fcf9e87] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.seller-onboarding .form-container .form-content .checkbox-group .checkbox-item[data-v-2fcf9e87] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.seller-onboarding .form-container .form-content .checkbox-group .checkbox-item input[type=checkbox][data-v-2fcf9e87] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.seller-onboarding .form-container .form-content .checkbox-group .checkbox-item .checkbox-label[data-v-2fcf9e87] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin: 0;\n  font-weight: normal;\n}\n.seller-onboarding .form-container .form-content .toggle-label[data-v-2fcf9e87] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  cursor: pointer;\n  margin: 0;\n  font-weight: normal;\n}\n.seller-onboarding .form-container .form-content .toggle-label input[type=checkbox][data-v-2fcf9e87] {\n  position: relative;\n  width: 50px;\n  height: 28px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.seller-onboarding .form-container .form-content .toggle-label input[type=checkbox][data-v-2fcf9e87]:checked {\n  background: #28a745;\n}\n.seller-onboarding .form-container .form-content .toggle-label input[type=checkbox][data-v-2fcf9e87]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);\n}\n.seller-onboarding .form-container .form-content .toggle-label .toggle-text[data-v-2fcf9e87] {\n  flex: 1;\n}\n.seller-onboarding .form-container .form-content .terms-content[data-v-2fcf9e87] {\n  background: rgba(255, 255, 255, 0.05);\n  border-left: 4px solid #ff6b35;\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n.seller-onboarding .form-container .form-content .terms-content h3[data-v-2fcf9e87] {\n  margin-bottom: 15px;\n  color: #ff6b35;\n}\n.seller-onboarding .form-container .form-content .terms-content .terms-box[data-v-2fcf9e87] {\n  max-height: 300px;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.seller-onboarding .form-container .form-content .terms-content .terms-box[data-v-2fcf9e87]::-webkit-scrollbar {\n  width: 8px;\n}\n.seller-onboarding .form-container .form-content .terms-content .terms-box[data-v-2fcf9e87]::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 10px;\n}\n.seller-onboarding .form-container .form-content .terms-content .terms-box[data-v-2fcf9e87]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n}\n.seller-onboarding .form-container .form-content .terms-content .terms-box[data-v-2fcf9e87]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.seller-onboarding .form-container .form-content .terms-content .terms-box p[data-v-2fcf9e87] {\n  color: #bbb;\n  line-height: 1.8;\n  margin-bottom: 15px;\n}\n.seller-onboarding .form-container .form-content .terms-content .terms-box p a[data-v-2fcf9e87] {\n  color: #ff6b35;\n  text-decoration: none;\n}\n.seller-onboarding .form-container .form-content .terms-content .terms-box p a[data-v-2fcf9e87]:hover {\n  text-decoration: underline;\n}\n.seller-onboarding .form-container .form-content .terms-content .terms-box ul[data-v-2fcf9e87] {\n  list-style-position: inside;\n  color: #bbb;\n  line-height: 1.8;\n  margin-left: 15px;\n}\n.seller-onboarding .form-container .form-content .terms-content .terms-box ul li[data-v-2fcf9e87] {\n  margin-bottom: 8px;\n}\n.seller-onboarding .form-container .form-content .review-section[data-v-2fcf9e87] {\n  background: rgba(255, 107, 53, 0.1);\n  border-radius: 10px;\n  padding: 20px;\n  margin-top: 30px;\n}\n.seller-onboarding .form-container .form-content .review-section h3[data-v-2fcf9e87] {\n  margin-bottom: 15px;\n  color: #ff6b35;\n}\n.seller-onboarding .form-container .form-content .review-section .summary-grid[data-v-2fcf9e87] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 15px;\n}\n.seller-onboarding .form-container .form-content .review-section .summary-grid .summary-item[data-v-2fcf9e87] {\n  display: flex;\n  flex-direction: column;\n}\n.seller-onboarding .form-container .form-content .review-section .summary-grid .summary-item .label[data-v-2fcf9e87] {\n  color: #999;\n  font-size: 0.85rem;\n  margin-bottom: 5px;\n}\n.seller-onboarding .form-container .form-content .review-section .summary-grid .summary-item .value[data-v-2fcf9e87] {\n  color: #fff;\n  font-weight: 600;\n}\n.seller-onboarding .form-container .form-content .form-navigation[data-v-2fcf9e87] {\n  display: flex;\n  gap: 15px;\n  justify-content: space-between;\n  margin-top: 40px;\n  padding-top: 30px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.seller-onboarding .form-container .form-content .form-navigation button[data-v-2fcf9e87] {\n  padding: 12px 30px;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.seller-onboarding .form-container .form-content .form-navigation button[data-v-2fcf9e87]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.seller-onboarding .form-container .form-content .form-navigation .btn-primary[data-v-2fcf9e87] {\n  background: #ff6b35;\n  color: white;\n  min-width: 150px;\n}\n.seller-onboarding .form-container .form-content .form-navigation .btn-primary[data-v-2fcf9e87]:hover:not(:disabled) {\n  background: #ff5722;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);\n}\n.seller-onboarding .form-container .form-content .form-navigation .btn-primary.btn-submit[data-v-2fcf9e87] {\n  min-width: 200px;\n}\n.seller-onboarding .form-container .form-content .form-navigation .btn-secondary[data-v-2fcf9e87] {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.seller-onboarding .form-container .form-content .form-navigation .btn-secondary[data-v-2fcf9e87]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.15);\n}\n.seller-onboarding .form-container .form-content .alert[data-v-2fcf9e87] {\n  padding: 15px 20px;\n  border-radius: 8px;\n  margin-top: 20px;\n  font-size: 0.95rem;\n}\n.seller-onboarding .form-container .form-content .alert.alert-error[data-v-2fcf9e87] {\n  background: rgba(220, 53, 69, 0.15);\n  border-left: 4px solid #dc3545;\n  color: #ff6b6b;\n}\n@keyframes slideIn-2fcf9e87 {\nfrom {\n    opacity: 0;\n    transform: translateY(10px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@media (max-width: 768px) {\n.seller-onboarding[data-v-2fcf9e87] {\n    padding: 20px;\n}\n.seller-onboarding .onboarding-header[data-v-2fcf9e87] {\n    margin-bottom: 30px;\n}\n.seller-onboarding .onboarding-header h1[data-v-2fcf9e87] {\n    font-size: 1.8rem;\n}\n.seller-onboarding .onboarding-header p[data-v-2fcf9e87] {\n    font-size: 0.95rem;\n}\n.seller-onboarding .form-container .progress-container .step-indicators .step-indicator .step-number[data-v-2fcf9e87] {\n    width: 35px;\n    height: 35px;\n    font-size: 0.85rem;\n}\n.seller-onboarding .form-container .progress-container .step-indicators .step-indicator .step-label[data-v-2fcf9e87] {\n    font-size: 0.75rem;\n}\n.seller-onboarding .form-container .form-content[data-v-2fcf9e87] {\n    padding: 25px;\n}\n.seller-onboarding .form-container .form-content .form-section h3[data-v-2fcf9e87] {\n    font-size: 1rem;\n}\n.seller-onboarding .form-container .form-content .form-navigation[data-v-2fcf9e87] {\n    flex-direction: column;\n    gap: 10px;\n}\n.seller-onboarding .form-container .form-content .form-navigation button[data-v-2fcf9e87] {\n    width: 100%;\n}\n.seller-onboarding .success-container .success-card[data-v-2fcf9e87] {\n    padding: 30px;\n}\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerOnboarding_vue_vue_type_style_index_0_id_2fcf9e87_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerOnboarding_vue_vue_type_style_index_0_id_2fcf9e87_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerOnboarding_vue_vue_type_style_index_0_id_2fcf9e87_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/seller/pages/SellerOnboarding.vue"
/*!********************************************************!*\
  !*** ./resources/js/seller/pages/SellerOnboarding.vue ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SellerOnboarding_vue_vue_type_template_id_2fcf9e87_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SellerOnboarding.vue?vue&type=template&id=2fcf9e87&scoped=true */ "./resources/js/seller/pages/SellerOnboarding.vue?vue&type=template&id=2fcf9e87&scoped=true");
/* harmony import */ var _SellerOnboarding_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerOnboarding.vue?vue&type=script&lang=js */ "./resources/js/seller/pages/SellerOnboarding.vue?vue&type=script&lang=js");
/* harmony import */ var _SellerOnboarding_vue_vue_type_style_index_0_id_2fcf9e87_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true */ "./resources/js/seller/pages/SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SellerOnboarding_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SellerOnboarding_vue_vue_type_template_id_2fcf9e87_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SellerOnboarding_vue_vue_type_template_id_2fcf9e87_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2fcf9e87",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/seller/pages/SellerOnboarding.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/seller/pages/SellerOnboarding.vue?vue&type=script&lang=js"
/*!********************************************************************************!*\
  !*** ./resources/js/seller/pages/SellerOnboarding.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerOnboarding_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerOnboarding.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerOnboarding_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/seller/pages/SellerOnboarding.vue?vue&type=template&id=2fcf9e87&scoped=true"
/*!**************************************************************************************************!*\
  !*** ./resources/js/seller/pages/SellerOnboarding.vue?vue&type=template&id=2fcf9e87&scoped=true ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerOnboarding_vue_vue_type_template_id_2fcf9e87_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerOnboarding_vue_vue_type_template_id_2fcf9e87_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerOnboarding_vue_vue_type_template_id_2fcf9e87_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerOnboarding.vue?vue&type=template&id=2fcf9e87&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=template&id=2fcf9e87&scoped=true");


/***/ },

/***/ "./resources/js/seller/pages/SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true"
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/seller/pages/SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerOnboarding_vue_vue_type_style_index_0_id_2fcf9e87_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/pages/SellerOnboarding.vue?vue&type=style&index=0&id=2fcf9e87&lang=scss&scoped=true");


/***/ }

}]);