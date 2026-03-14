"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_seller_components_products_ProductForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/products/ProductForm.vue?vue&type=script&lang=js"
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/products/ProductForm.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  name: 'ProductForm',
  data: function data() {
    return {
      form: {
        name: '',
        description: '',
        category_id: '',
        price: '',
        compare_price: '',
        sku: '',
        stock_quantity: 0,
        low_stock_threshold: 5,
        images: [],
        sizes: [],
        colors: [],
        status: 'draft',
        is_featured: false
      },
      // Each entry: { preview: <dataURL or server URL>, url: <server URL|null>, uploading: bool, error: str|null, file: File|null }
      imageEntries: [],
      dragging: false,
      sizesInput: '',
      colorsInput: '',
      categories: [],
      saving: false,
      fetchingProduct: false,
      error: null
    };
  },
  computed: {
    isEdit: function isEdit() {
      return !!this.$route.params.id;
    },
    anyUploading: function anyUploading() {
      return this.imageEntries.some(function (e) {
        return e.uploading;
      });
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.loadCategories();
          case 1:
            if (!_this.isEdit) {
              _context.n = 2;
              break;
            }
            _context.n = 2;
            return _this.loadProduct();
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    loadCategories: function loadCategories() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$_this2$$http$g, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return _this2.$http.get('/seller/products/categories');
            case 1:
              _yield$_this2$$http$g = _context2.v;
              data = _yield$_this2$$http$g.data;
              _this2.categories = data;
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              console.error(_t);
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    loadProduct: function loadProduct() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$_this3$$http$g, data, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this3.fetchingProduct = true;
              _context3.p = 1;
              _context3.n = 2;
              return _this3.$http.get("/seller/products/".concat(_this3.$route.params.id));
            case 2:
              _yield$_this3$$http$g = _context3.v;
              data = _yield$_this3$$http$g.data;
              _this3.form = {
                name: data.name,
                description: data.description || '',
                category_id: data.category_id,
                price: data.price,
                compare_price: data.compare_price || '',
                sku: data.sku || '',
                stock_quantity: data.stock_quantity,
                low_stock_threshold: data.low_stock_threshold || 5,
                images: data.images || [],
                sizes: data.sizes || [],
                colors: data.colors || [],
                status: data.status,
                is_featured: data.is_featured || false
              };
              // Populate imageEntries from existing server URLs
              _this3.imageEntries = (data.images || []).map(function (url) {
                return {
                  preview: url,
                  url: url,
                  uploading: false,
                  error: null,
                  file: null
                };
              });
              _this3.sizesInput = (data.sizes || []).join(',');
              _this3.colorsInput = (data.colors || []).join(',');
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              _this3.error = 'Failed to load product.';
            case 4:
              _context3.p = 4;
              _this3.fetchingProduct = false;
              return _context3.f(4);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    },
    /* ── Image upload helpers ── */onFileChange: function onFileChange(e) {
      this.processFiles(Array.from(e.target.files));
      e.target.value = ''; // allow re-selecting same file
    },
    onDrop: function onDrop(e) {
      this.dragging = false;
      var files = Array.from(e.dataTransfer.files).filter(function (f) {
        return f.type.startsWith('image/');
      });
      this.processFiles(files);
    },
    processFiles: function processFiles(files) {
      var _this4 = this;
      files.forEach(function (file) {
        if (file.size > 5 * 1024 * 1024) {
          alert("\"".concat(file.name, "\" exceeds 5 MB and was skipped."));
          return;
        }
        var entry = {
          preview: null,
          url: null,
          uploading: true,
          error: null,
          file: file
        };
        _this4.imageEntries.push(entry);
        var idx = _this4.imageEntries.length - 1;

        // Local preview via FileReader
        var reader = new FileReader();
        reader.onload = function (ev) {
          _this4.imageEntries[idx].preview = ev.target.result;
        };
        reader.readAsDataURL(file);

        // Upload to server
        _this4.uploadFile(idx, file);
      });
    },
    uploadFile: function uploadFile(idx, file) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var fd, _yield$_this5$$http$p, data, _e$response, msg, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              fd = new FormData();
              fd.append('image', file);
              _context4.p = 1;
              _context4.n = 2;
              return _this5.$http.post('/seller/products/upload-image', fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 2:
              _yield$_this5$$http$p = _context4.v;
              data = _yield$_this5$$http$p.data;
              _this5.imageEntries[idx].url = data.url;
              _this5.imageEntries[idx].uploading = false;
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t3 = _context4.v;
              msg = ((_e$response = _t3.response) === null || _e$response === void 0 || (_e$response = _e$response.data) === null || _e$response === void 0 ? void 0 : _e$response.message) || 'Upload failed';
              _this5.imageEntries[idx].error = msg;
              _this5.imageEntries[idx].uploading = false;
            case 4:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3]]);
      }))();
    },
    retryUpload: function retryUpload(idx) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var entry;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              entry = _this6.imageEntries[idx];
              if (entry.file) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              entry.error = null;
              entry.uploading = true;
              _context5.n = 2;
              return _this6.uploadFile(idx, entry.file);
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    removeImageEntry: function removeImageEntry(idx) {
      this.imageEntries.splice(idx, 1);
    },
    submit: function submit() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var failedUploads, _e$response2, err, _t4;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              if (!_this7.anyUploading) {
                _context6.n = 1;
                break;
              }
              _this7.error = 'Please wait for all images to finish uploading.';
              return _context6.a(2);
            case 1:
              failedUploads = _this7.imageEntries.filter(function (e) {
                return e.error;
              });
              if (!failedUploads.length) {
                _context6.n = 2;
                break;
              }
              _this7.error = 'Some images failed to upload. Please retry or remove them before saving.';
              return _context6.a(2);
            case 2:
              _this7.error = null;
              _this7.saving = true;

              // Collect server URLs
              _this7.form.images = _this7.imageEntries.map(function (e) {
                return e.url;
              }).filter(Boolean);
              // Parse variant CSV
              _this7.form.sizes = _this7.sizesInput.split(',').map(function (s) {
                return s.trim();
              }).filter(Boolean);
              _this7.form.colors = _this7.colorsInput.split(',').map(function (c) {
                return c.trim();
              }).filter(Boolean);
              _context6.p = 3;
              if (!_this7.isEdit) {
                _context6.n = 5;
                break;
              }
              _context6.n = 4;
              return _this7.$http.put("/seller/products/".concat(_this7.$route.params.id), _this7.form);
            case 4:
              _context6.n = 6;
              break;
            case 5:
              _context6.n = 6;
              return _this7.$http.post('/seller/products', _this7.form);
            case 6:
              _this7.$router.push({
                name: 'seller.products'
              });
              _context6.n = 8;
              break;
            case 7:
              _context6.p = 7;
              _t4 = _context6.v;
              err = (_e$response2 = _t4.response) === null || _e$response2 === void 0 ? void 0 : _e$response2.data;
              if (err !== null && err !== void 0 && err.errors) {
                _this7.error = Object.values(err.errors).flat().join(' ');
              } else {
                _this7.error = (err === null || err === void 0 ? void 0 : err.message) || 'Save failed.';
              }
            case 8:
              _context6.p = 8;
              _this7.saving = false;
              return _context6.f(8);
            case 9:
              return _context6.a(2);
          }
        }, _callee6, null, [[3, 7, 8, 9]]);
      }))();
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/products/ProductForm.vue?vue&type=template&id=076d0f62"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/products/ProductForm.vue?vue&type=template&id=076d0f62 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "max-w-3xl"
  }, [_vm.fetchingProduct ? _c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl p-10 text-center text-slate-500"
  }, [_vm._v("\n    Loading product…\n  ")]) : _c("form", {
    staticClass: "space-y-6",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4"
  }, [_c("h3", {
    staticClass: "text-white font-semibold text-base mb-2"
  }, [_vm._v("Product Details")]), _vm._v(" "), _c("div", [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "text",
      required: "",
      placeholder: "e.g. Urban Cargo Jogger"
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
  }, [_vm._v("Description")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.description,
      expression: "form.description"
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none",
    attrs: {
      rows: "4",
      placeholder: "Product description…"
    },
    domProps: {
      value: _vm.form.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "description", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", [_vm._m(1), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.category_id,
      expression: "form.category_id"
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      required: ""
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "category_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Select category")]), _vm._v(" "), _vm._l(_vm.categories, function (cat) {
    return _c("option", {
      key: cat.id,
      domProps: {
        value: cat.id
      }
    }, [_vm._v(_vm._s(cat.name))]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl p-6"
  }, [_c("h3", {
    staticClass: "text-white font-semibold text-base mb-4"
  }, [_vm._v("Pricing")]), _vm._v(" "), _c("div", {
    staticClass: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, [_c("div", [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.form.price,
      expression: "form.price",
      modifiers: {
        number: true
      }
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "number",
      step: "0.01",
      min: "0",
      required: ""
    },
    domProps: {
      value: _vm.form.price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "price", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  })]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("Compare Price ($)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.form.compare_price,
      expression: "form.compare_price",
      modifiers: {
        number: true
      }
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "number",
      step: "0.01",
      min: "0",
      placeholder: "Original price (optional)"
    },
    domProps: {
      value: _vm.form.compare_price
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "compare_price", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl p-6"
  }, [_c("h3", {
    staticClass: "text-white font-semibold text-base mb-4"
  }, [_vm._v("Inventory")]), _vm._v(" "), _c("div", {
    staticClass: "grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, [_c("div", [_c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("SKU")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.sku,
      expression: "form.sku"
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "text",
      placeholder: "AUTO-GENERATED"
    },
    domProps: {
      value: _vm.form.sku
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "sku", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.form.stock_quantity,
      expression: "form.stock_quantity",
      modifiers: {
        number: true
      }
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "number",
      min: "0",
      required: ""
    },
    domProps: {
      value: _vm.form.stock_quantity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "stock_quantity", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  })]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("Low Stock Threshold")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.form.low_stock_threshold,
      expression: "form.low_stock_threshold",
      modifiers: {
        number: true
      }
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "number",
      min: "0",
      placeholder: "5"
    },
    domProps: {
      value: _vm.form.low_stock_threshold
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "low_stock_threshold", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4"
  }, [_c("h3", {
    staticClass: "text-white font-semibold text-base mb-2"
  }, [_vm._v("Variants")]), _vm._v(" "), _c("div", [_vm._m(4), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sizesInput,
      expression: "sizesInput"
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "text",
      placeholder: "XS,S,M,L,XL,XXL"
    },
    domProps: {
      value: _vm.sizesInput
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.sizesInput = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.colorsInput,
      expression: "colorsInput"
    }],
    staticClass: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors",
    attrs: {
      type: "text",
      placeholder: "Black,White,Gray"
    },
    domProps: {
      value: _vm.colorsInput
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.colorsInput = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl p-6"
  }, [_c("h3", {
    staticClass: "text-white font-semibold text-base mb-1"
  }, [_vm._v("Product Images")]), _vm._v(" "), _c("p", {
    staticClass: "text-slate-500 text-xs mb-4"
  }, [_vm._v("Upload images from your device (JPG, PNG, GIF, WebP — max 5 MB each).")]), _vm._v(" "), _vm.imageEntries.length ? _c("div", {
    staticClass: "grid grid-cols-3 sm:grid-cols-4 gap-3 mb-4"
  }, _vm._l(_vm.imageEntries, function (entry, idx) {
    return _c("div", {
      key: idx,
      staticClass: "relative group rounded-lg overflow-hidden border border-slate-700 bg-slate-800 aspect-square"
    }, [_c("img", {
      staticClass: "w-full h-full object-cover",
      attrs: {
        src: entry.preview,
        alt: "Image ".concat(idx + 1)
      }
    }), _vm._v(" "), entry.uploading ? _c("div", {
      staticClass: "absolute inset-0 bg-black/60 flex items-center justify-center"
    }, [_c("svg", {
      staticClass: "animate-spin w-6 h-6 text-orange-500",
      attrs: {
        fill: "none",
        viewBox: "0 0 24 24"
      }
    }, [_c("circle", {
      staticClass: "opacity-25",
      attrs: {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
      }
    }), _vm._v(" "), _c("path", {
      staticClass: "opacity-75",
      attrs: {
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8v8H4z"
      }
    })])]) : entry.error ? _c("div", {
      staticClass: "absolute inset-0 bg-red-900/70 flex flex-col items-center justify-center p-2"
    }, [_c("span", {
      staticClass: "text-red-300 text-xs text-center leading-tight"
    }, [_vm._v(_vm._s(entry.error))]), _vm._v(" "), _c("button", {
      staticClass: "mt-1 text-xs text-orange-400 underline",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.retryUpload(idx);
        }
      }
    }, [_vm._v("Retry")])]) : _c("div", {
      staticClass: "absolute top-1.5 left-1.5 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
    }, [_c("svg", {
      staticClass: "w-3 h-3 text-white",
      attrs: {
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24"
      }
    }, [_c("path", {
      attrs: {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "3",
        d: "M5 13l4 4L19 7"
      }
    })])]), _vm._v(" "), _c("button", {
      staticClass: "absolute top-1.5 right-1.5 w-6 h-6 bg-black/60 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.removeImageEntry(idx);
        }
      }
    }, [_c("svg", {
      staticClass: "w-3 h-3 text-white",
      attrs: {
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24"
      }
    }, [_c("path", {
      attrs: {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2.5",
        d: "M6 18L18 6M6 6l12 12"
      }
    })])])]);
  }), 0) : _vm._e(), _vm._v(" "), _c("label", {
    staticClass: "flex flex-col items-center justify-center w-full border-2 border-dashed border-slate-700 hover:border-orange-500 rounded-xl py-8 px-4 cursor-pointer transition-colors group",
    "class": {
      "border-orange-500 bg-orange-500/5": _vm.dragging
    },
    on: {
      dragover: function dragover($event) {
        $event.preventDefault();
        _vm.dragging = true;
      },
      dragleave: function dragleave($event) {
        $event.preventDefault();
        _vm.dragging = false;
      },
      drop: function drop($event) {
        $event.preventDefault();
        return _vm.onDrop.apply(null, arguments);
      }
    }
  }, [_c("input", {
    ref: "fileInput",
    staticClass: "hidden",
    attrs: {
      type: "file",
      accept: "image/*",
      multiple: ""
    },
    on: {
      change: _vm.onFileChange
    }
  }), _vm._v(" "), _c("svg", {
    staticClass: "w-10 h-10 text-slate-600 group-hover:text-orange-500 mb-3 transition-colors",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24"
    }
  }, [_c("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M8 10a2 2 0 100-4 2 2 0 000 4zm-4 8h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "text-slate-400 text-sm group-hover:text-orange-400 transition-colors font-medium"
  }, [_vm._v("Click to browse or drag & drop images here")]), _vm._v(" "), _c("p", {
    staticClass: "text-slate-600 text-xs mt-1"
  }, [_vm._v("JPG, PNG, GIF, WebP · Max 5 MB per file")])])]), _vm._v(" "), _c("div", {
    staticClass: "bg-slate-900 border border-slate-800 rounded-xl p-6"
  }, [_c("h3", {
    staticClass: "text-white font-semibold text-base mb-4"
  }, [_vm._v("Status")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-3"
  }, _vm._l(["active", "inactive", "draft"], function (s) {
    return _c("label", {
      key: s,
      staticClass: "flex items-center gap-2 cursor-pointer"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.form.status,
        expression: "form.status"
      }],
      staticClass: "accent-orange-500",
      attrs: {
        type: "radio"
      },
      domProps: {
        value: s,
        checked: _vm._q(_vm.form.status, s)
      },
      on: {
        change: function change($event) {
          return _vm.$set(_vm.form, "status", s);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "text-slate-300 text-sm capitalize"
    }, [_vm._v(_vm._s(s))])]);
  }), 0)]), _vm._v(" "), _vm.error ? _c("div", {
    staticClass: "p-3 bg-red-900/40 border border-red-700 rounded-lg text-red-400 text-sm"
  }, [_vm._v("\n      " + _vm._s(_vm.error) + "\n    ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "flex items-center gap-3"
  }, [_c("button", {
    staticClass: "bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors",
    attrs: {
      type: "submit",
      disabled: _vm.saving
    }
  }, [_vm._v("\n        " + _vm._s(_vm.saving ? "Saving…" : _vm.isEdit ? "Update Product" : "Create Product") + "\n      ")]), _vm._v(" "), _c("router-link", {
    staticClass: "bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium px-6 py-2.5 rounded-lg transition-colors",
    attrs: {
      to: "/products"
    }
  }, [_vm._v("\n        Cancel\n      ")])], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("Name "), _c("span", {
    staticClass: "text-red-500"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("Category "), _c("span", {
    staticClass: "text-red-500"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("Price ($) "), _c("span", {
    staticClass: "text-red-500"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-1"
  }, [_vm._v("Stock Qty "), _c("span", {
    staticClass: "text-red-500"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-2"
  }, [_vm._v("\n          Sizes\n          "), _c("span", {
    staticClass: "text-slate-600 font-normal ml-1"
  }, [_vm._v("(comma-separated, e.g. XS,S,M,L,XL)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "block text-sm font-medium text-slate-400 mb-2"
  }, [_vm._v("\n          Colors\n          "), _c("span", {
    staticClass: "text-slate-600 font-normal ml-1"
  }, [_vm._v("(comma-separated)")])]);
}];
render._withStripped = true;


/***/ },

/***/ "./resources/js/seller/components/products/ProductForm.vue"
/*!*****************************************************************!*\
  !*** ./resources/js/seller/components/products/ProductForm.vue ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductForm_vue_vue_type_template_id_076d0f62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductForm.vue?vue&type=template&id=076d0f62 */ "./resources/js/seller/components/products/ProductForm.vue?vue&type=template&id=076d0f62");
/* harmony import */ var _ProductForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductForm.vue?vue&type=script&lang=js */ "./resources/js/seller/components/products/ProductForm.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductForm_vue_vue_type_template_id_076d0f62__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductForm_vue_vue_type_template_id_076d0f62__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/seller/components/products/ProductForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/seller/components/products/ProductForm.vue?vue&type=script&lang=js"
/*!*****************************************************************************************!*\
  !*** ./resources/js/seller/components/products/ProductForm.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/products/ProductForm.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/seller/components/products/ProductForm.vue?vue&type=template&id=076d0f62"
/*!***********************************************************************************************!*\
  !*** ./resources/js/seller/components/products/ProductForm.vue?vue&type=template&id=076d0f62 ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_076d0f62__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_076d0f62__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductForm_vue_vue_type_template_id_076d0f62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductForm.vue?vue&type=template&id=076d0f62 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/seller/components/products/ProductForm.vue?vue&type=template&id=076d0f62");


/***/ }

}]);