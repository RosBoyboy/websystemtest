"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_customer_pages_Cart_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/pages/Cart.vue?vue&type=script&lang=js&"
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/pages/Cart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_layout_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/TheNavbar.vue */ "./resources/js/customer/components/layout/TheNavbar.vue");
/* harmony import */ var _components_layout_TheFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/TheFooter.vue */ "./resources/js/customer/components/layout/TheFooter.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CartPage',
  components: {
    TheNavbar: _components_layout_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheFooter: _components_layout_TheFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)({
    cartItems: function cartItems(state) {
      return state.cart;
    }
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['cartTotal'])),
  methods: {
    removeItem: function removeItem(item) {
      this.$store.dispatch('removeFromCart', {
        id: item.id,
        size: item.size
      });
    }
  }
});

/***/ },

/***/ "./resources/js/customer/pages/Cart.vue"
/*!**********************************************!*\
  !*** ./resources/js/customer/pages/Cart.vue ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cart_vue_vue_type_template_id_6bb3a66e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.vue?vue&type=template&id=6bb3a66e& */ "./resources/js/customer/pages/Cart.vue?vue&type=template&id=6bb3a66e&");
/* harmony import */ var _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.vue?vue&type=script&lang=js& */ "./resources/js/customer/pages/Cart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cart_vue_vue_type_template_id_6bb3a66e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cart_vue_vue_type_template_id_6bb3a66e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/customer/pages/Cart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/js/customer/pages/Cart.vue?vue&type=script&lang=js&"
/*!***********************************************************************!*\
  !*** ./resources/js/customer/pages/Cart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/pages/Cart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/js/customer/pages/Cart.vue?vue&type=template&id=6bb3a66e&"
/*!*****************************************************************************!*\
  !*** ./resources/js/customer/pages/Cart.vue?vue&type=template&id=6bb3a66e& ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_6bb3a66e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_6bb3a66e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_6bb3a66e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cart.vue?vue&type=template&id=6bb3a66e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/pages/Cart.vue?vue&type=template&id=6bb3a66e&");


/***/ },

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/pages/Cart.vue?vue&type=template&id=6bb3a66e&"
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/customer/pages/Cart.vue?vue&type=template&id=6bb3a66e& ***!
  \********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("TheNavbar"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            "min-height": "100vh",
            padding: "140px 48px 80px",
            "max-width": "900px",
            margin: "0 auto",
          },
        },
        [
          _c(
            "div",
            {
              staticStyle: {
                "font-family": "'Syne',sans-serif",
                "font-size": "11px",
                "font-weight": "600",
                "letter-spacing": "0.3em",
                "text-transform": "uppercase",
                color: "var(--lime)",
                "margin-bottom": "16px",
              },
            },
            [_vm._v("Your Bag")]
          ),
          _vm._v(" "),
          _c(
            "h1",
            {
              staticStyle: {
                "font-family": "'Bebas Neue',sans-serif",
                "font-size": "clamp(48px,6vw,72px)",
                color: "var(--offwhite)",
                "letter-spacing": "0.04em",
                "margin-bottom": "40px",
              },
            },
            [_vm._v("SHOPPING CART")]
          ),
          _vm._v(" "),
          _vm.cartItems.length === 0
            ? _c(
                "div",
                { staticStyle: { "text-align": "center", padding: "80px 0" } },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "font-family": "'Bebas Neue',sans-serif",
                        "font-size": "60px",
                        color: "rgba(240,236,227,0.1)",
                      },
                    },
                    [_vm._v("EMPTY")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticStyle: {
                        color: "rgba(240,236,227,0.4)",
                        "font-family": "'DM Sans',sans-serif",
                        "margin-top": "8px",
                      },
                    },
                    [_vm._v("Your bag is looking lonely.")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn-primary",
                      staticStyle: { "margin-top": "24px" },
                      on: {
                        click: function ($event) {
                          return _vm.$router.push("/products")
                        },
                      },
                    },
                    [_c("span", [_vm._v("Start Shopping")])]
                  ),
                ]
              )
            : _c(
                "div",
                [
                  _vm._l(_vm.cartItems, function (item) {
                    return _c(
                      "div",
                      {
                        key: item.id + "-" + item.size,
                        staticStyle: {
                          display: "flex",
                          "align-items": "center",
                          gap: "24px",
                          padding: "24px 0",
                          "border-bottom": "1px solid rgba(240,236,227,0.08)",
                        },
                      },
                      [
                        _c("div", {
                          staticStyle: {
                            width: "80px",
                            height: "80px",
                            background: "var(--grey)",
                            "flex-shrink": "0",
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticStyle: { flex: "1" } }, [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-family": "'Syne',sans-serif",
                                "font-weight": "700",
                                color: "var(--offwhite)",
                              },
                            },
                            [_vm._v(_vm._s(item.name))]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "12px",
                                color: "var(--mid)",
                                "margin-top": "4px",
                                "font-family": "'Syne',sans-serif",
                                "letter-spacing": "0.1em",
                              },
                            },
                            [_vm._v(_vm._s(item.category))]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              "font-family": "'Bebas Neue',sans-serif",
                              "font-size": "22px",
                              color: "var(--lime)",
                            },
                          },
                          [
                            _vm._v(
                              "\n          ₱" +
                                _vm._s(
                                  (item.price * item.quantity).toLocaleString()
                                ) +
                                "\n        "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticStyle: {
                              background: "transparent",
                              border: "1px solid rgba(240,236,227,0.2)",
                              color: "rgba(240,236,227,0.5)",
                              padding: "8px 12px",
                              cursor: "none",
                              "font-size": "12px",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.removeItem(item)
                              },
                            },
                          },
                          [_vm._v("✕")]
                        ),
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "margin-top": "40px",
                        display: "flex",
                        "justify-content": "flex-end",
                        "align-items": "center",
                        gap: "32px",
                      },
                    },
                    [
                      _c("div", [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-family": "'Syne',sans-serif",
                              "font-size": "12px",
                              "letter-spacing": "0.15em",
                              "text-transform": "uppercase",
                              color: "rgba(240,236,227,0.5)",
                            },
                          },
                          [_vm._v("Total")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              "font-family": "'Bebas Neue',sans-serif",
                              "font-size": "36px",
                              color: "var(--offwhite)",
                            },
                          },
                          [
                            _vm._v(
                              "\n            ₱" +
                                _vm._s(_vm.cartTotal.toLocaleString()) +
                                "\n          "
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn-primary",
                          on: {
                            click: function ($event) {
                              return _vm.$router.push("/checkout")
                            },
                          },
                        },
                        [_c("span", [_vm._v("Checkout →")])]
                      ),
                    ]
                  ),
                ],
                2
              ),
        ]
      ),
      _vm._v(" "),
      _c("TheFooter"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }

}]);