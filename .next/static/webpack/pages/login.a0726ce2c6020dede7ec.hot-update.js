webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return login; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_Metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Metadata */ \"./components/Metadata.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.js\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.js\");\n\n\n\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/pages/login.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(undefined),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      password = _useState3[0],\n      setPassword = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      noEmail = _useState4[0],\n      setNoEmail = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      noPassword = _useState5[0],\n      setNoPassword = _useState5[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var auth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__[\"useAuth\"])();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.errors;\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!email && !password) {\n                setNoEmail(true);\n                setNoPassword(true);\n              } else if (email && !password) {\n                setNoPassword(true);\n                setNoEmail(false);\n              } else if (!email && password) {\n                setNoPassword(false);\n                setNoEmail(true);\n              } else {\n                auth.signIn(email, password);\n                setNoPassword(false);\n                setNoEmail(false);\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    _config_firebase__WEBPACK_IMPORTED_MODULE_8__[\"app\"].auth().onAuthStateChanged(function (user) {\n      if (user) {\n        setUser(user);\n        console.log(user);\n      }\n    });\n  }, []);\n\n  if (user) {\n    router.push(\"/\");\n  }\n\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Metadata__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"Xmas Throwdown Login\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }), __jsx(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"exampleInputEmail1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"Email address\"), __jsx(\"input\", {\n    name: \"email\",\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    type: \"email\",\n    className: \"form-control\",\n    id: \"exampleInputEmail1\",\n    \"aria-describedby\": \"emailHelp\",\n    ref: register({\n      required: \"Please enter an email\"\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    id: \"validationServer03Feedback\",\n    \"class\": \"invalid-feedback\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, \"Please provide a valid city.\"), __jsx(\"small\", {\n    id: \"emailHelp\",\n    className: \"form-text text-muted\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"If you have a wod-with-faris account you can login using that.\")), __jsx(\"div\", {\n    className: \"form-group\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"exampleInputPassword1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, \"Password\"), __jsx(\"input\", {\n    name: \"password\",\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    },\n    type: \"password\",\n    className: \"form-control\",\n    id: \"exampleInputPassword1\",\n    ref: register({\n      required: \"Please enter a password\",\n      minLength: {\n        value: 6,\n        message: \"Should have at least 6 characters\"\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"form-group form-check\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, \"Submit\"))));\n}\n\n_s(login, \"Bf/3RHRnjvhSGNZ0gbrbZl+gfss=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"], _hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__[\"useAuth\"], react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/M2I2OSJdLCJuYW1lcyI6WyJsb2dpbiIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidXNlciIsInNldFVzZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm5vRW1haWwiLCJzZXROb0VtYWlsIiwibm9QYXNzd29yZCIsInNldE5vUGFzc3dvcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwidXNlQXV0aCIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwib25TdWJtaXQiLCJzaWduSW4iLCJ1c2VFZmZlY3QiLCJhcHAiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQ0MsU0FBRCxDQURGO0FBQUEsTUFDdkJDLElBRHVCO0FBQUEsTUFDakJDLE9BRGlCOztBQUFBLG1CQUVKSCxzREFBUSxDQUFDLEVBQUQsQ0FGSjtBQUFBLE1BRXZCSSxLQUZ1QjtBQUFBLE1BRWhCQyxRQUZnQjs7QUFBQSxtQkFHRUwsc0RBQVEsQ0FBQyxFQUFELENBSFY7QUFBQSxNQUd2Qk0sUUFIdUI7QUFBQSxNQUdiQyxXQUhhOztBQUFBLG1CQUlBUCxzREFBUSxDQUFDLEtBQUQsQ0FKUjtBQUFBLE1BSXZCUSxPQUp1QjtBQUFBLE1BSWRDLFVBSmM7O0FBQUEsbUJBS01ULHNEQUFRLENBQUMsS0FBRCxDQUxkO0FBQUEsTUFLdkJVLFVB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Q0YsQ0FERixDQUhGLENBREY7QUFxREQ7O0dBM0Z1QnRDLEs7VUFNUGMscUQsRUFDRkUsc0QsRUFDcUNDLHVEIiwiZmlsZSI6Ii4vcGFnZXMvbG9naW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBNZXRhZGF0YSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXRhZGF0YVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZVwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9ob29rcy91c2VBdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKCkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbm9FbWFpbCwgc2V0Tm9FbWFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtub1Bhc3N3b3JkLCBzZXROb1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWVtYWlsICYmICFwYXNzd29yZCkge1xuICAgICAgc2V0Tm9FbWFpbCh0cnVlKTtcbiAgICAgIHNldE5vUGFzc3dvcmQodHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChlbWFpbCAmJiAhcGFzc3dvcmQpIHtcbiAgICAgIHNldE5vUGFzc3dvcmQodHJ1ZSk7XG4gICAgICBzZXROb0VtYWlsKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKCFlbWFpbCAmJiBwYXNzd29yZCkge1xuICAgICAgc2V0Tm9QYXNzd29yZChmYWxzZSk7XG4gICAgICBzZXROb0VtYWlsKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdXRoLnNpZ25JbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgc2V0Tm9QYXNzd29yZChmYWxzZSk7XG4gICAgICBzZXROb0VtYWlsKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcHAuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbiAodXNlcikge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBpZiAodXNlcikge1xuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxNZXRhZGF0YSB0aXRsZT1cIlhtYXMgVGhyb3dkb3duIExvZ2luXCIgLz5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlBsZWFzZSBlbnRlciBhbiBlbWFpbFwiLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidmFsaWRhdGlvblNlcnZlcjAzRmVlZGJhY2tcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBjaXR5LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c21hbGwgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICBJZiB5b3UgaGF2ZSBhIHdvZC13aXRoLWZhcmlzIGFjY291bnQgeW91IGNhbiBsb2dpbiB1c2luZyB0aGF0LlxuICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiUGxlYXNlIGVudGVyIGEgcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiA2LFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTaG91bGQgaGF2ZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tY2hlY2tcIj48L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

})