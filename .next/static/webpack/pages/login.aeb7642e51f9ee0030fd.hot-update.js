webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return login; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_Metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Metadata */ \"./components/Metadata.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.js\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.js\");\n\n\n\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/pages/login.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(undefined),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      password = _useState3[0],\n      setPassword = _useState3[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var auth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__[\"useAuth\"])();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.errors;\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var loginResp;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              loginResp = auth.signIn(email, password);\n\n              if (loginResp.i) {\n                console.log(loginResp.i.email);\n              } else {//   alert(loginResp);\n              }\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    _config_firebase__WEBPACK_IMPORTED_MODULE_8__[\"app\"].auth().onAuthStateChanged(function (user) {\n      if (user) {\n        setUser(user);\n        console.log(user);\n      }\n    });\n  }, []);\n\n  if (user) {\n    router.push(\"/\");\n  }\n\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Metadata__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"Xmas Throwdown Login\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"exampleInputEmail1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"Email address\"), __jsx(\"input\", {\n    name: \"email\",\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    type: \"email\",\n    className: \"form-control\",\n    id: \"exampleInputEmail1\",\n    \"aria-describedby\": \"emailHelp\",\n    ref: register({\n      required: \"Please enter an email\"\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }), __jsx(\"small\", {\n    id: \"emailHelp\",\n    className: \"form-text text-muted\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"If you have a wod-with-faris account you can login using that.\")), __jsx(\"div\", {\n    className: \"form-group\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"exampleInputPassword1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, \"Password\"), __jsx(\"input\", {\n    name: \"password\",\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    },\n    type: \"password\",\n    className: \"form-control\",\n    id: \"exampleInputPassword1\",\n    ref: register({\n      required: \"Please enter a password\",\n      minLength: {\n        value: 6,\n        message: \"Should have at least 6 characters\"\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"form-group form-check\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, \"Submit\"))));\n}\n\n_s(login, \"GznftRsUPYEdT2InWlMZYkLPMsk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"], _hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__[\"useAuth\"], react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/M2I2OSJdLCJuYW1lcyI6WyJsb2dpbiIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidXNlciIsInNldFVzZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsImF1dGgiLCJ1c2VBdXRoIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJvblN1Ym1pdCIsImxvZ2luUmVzcCIsInNpZ25JbiIsImkiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiYXBwIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwicHVzaCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQ0MsU0FBRCxDQURGO0FBQUEsTUFDdkJDLElBRHVCO0FBQUEsTUFDakJDLE9BRGlCOztBQUFBLG1CQUVKSCxzREFBUSxDQUFDLEVBQUQsQ0FGSjtBQUFBLE1BRXZCSSxLQUZ1QjtBQUFBLE1BRWhCQyxRQUZnQjs7QUFBQSxtQkFHRUwsc0RBQVEsQ0FBQyxFQUFELENBSFY7QUFBQSxNQUd2Qk0sUUFIdUI7QUFBQSxNQUdiQyxXQUhhOztBQUk5QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyw4REFBTyxFQUFwQjs7QUFMOEIsaUJBTW9CQywrREFBTyxFQU4zQjtBQUFBLE1BTXRCQyxRQU5zQixZQU10QkEsUUFOc0I7QUFBQSxNQU1aQyxZQU5ZLFlBTVpBLFlB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QjtBQUFBLEtBSFo7QUFJRSxRQUFJLEVBQUMsVUFKUDtBQUtFLGFBQVMsRUFBQyxjQUxaO0FBTUUsTUFBRSxFQUFDLHVCQU5MO0FBT0UsT0FBRyxFQUFFbkIsUUFBUSxDQUFDO0FBQ1pvQixjQUFRLEVBQUUseUJBREU7QUFFWkMsZUFBUyxFQUFFO0FBQ1RGLGFBQUssRUFBRSxDQURFO0FBRVRHLGVBQU8sRUFBRTtBQUZBO0FBRkMsS0FBRCxDQVBmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQW5CRixFQXFDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNGLEVBc0NFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdENGLENBREYsQ0FIRixDQURGO0FBa0REOztHQTlFdUJwQyxLO1VBSVBVLHFELEVBQ0ZFLHNELEVBQ3FDQyx1RCIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgTWV0YWRhdGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0YWRhdGFcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuLi9jb25maWcvZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpbigpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBsb2dpblJlc3AgPSBhdXRoLnNpZ25JbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgIGlmIChsb2dpblJlc3AuaSkge1xuICAgICAgY29uc29sZS5sb2cobG9naW5SZXNwLmkuZW1haWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAgIGFsZXJ0KGxvZ2luUmVzcCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXBwLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKHVzZXIpIHtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8TWV0YWRhdGEgdGl0bGU9XCJYbWFzIFRocm93ZG93biBMb2dpblwiIC8+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJQbGVhc2UgZW50ZXIgYW4gZW1haWxcIixcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNtYWxsIGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgSWYgeW91IGhhdmUgYSB3b2Qtd2l0aC1mYXJpcyBhY2NvdW50IHlvdSBjYW4gbG9naW4gdXNpbmcgdGhhdC5cbiAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlBsZWFzZSBlbnRlciBhIHBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogNixcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiU2hvdWxkIGhhdmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWNoZWNrXCI+PC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

})