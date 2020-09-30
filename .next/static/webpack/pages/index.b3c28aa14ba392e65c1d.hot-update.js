webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var _content_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/categories */ \"./content/categories.js\");\n/* harmony import */ var _content_categories__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_categories__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Metadata */ \"./components/Metadata.js\");\n/* harmony import */ var _components_InfoCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InfoCard */ \"./components/InfoCard.js\");\n/* harmony import */ var countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! countdown */ \"./node_modules/countdown/countdown.js\");\n/* harmony import */ var countdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(countdown__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var ludicrous = _content_categories__WEBPACK_IMPORTED_MODULE_3__[\"content\"].ludicrous,\n      spicy = _content_categories__WEBPACK_IMPORTED_MODULE_3__[\"content\"].spicy,\n      fun = _content_categories__WEBPACK_IMPORTED_MODULE_3__[\"content\"].fun;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      countdownTimer = _useState[0],\n      setCountdownTimer = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setInterval(function () {\n      var timer = countdown__WEBPACK_IMPORTED_MODULE_7___default()(new Date(2020, 12, 5)).toString();\n      setCountdownTimer(timer);\n    }, 1000); // return clearInterval(timer);\n  }, []);\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Metadata__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Xmas Throwdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, \"Xmas Throwdown\"), __jsx(\"p\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"A fun mixed team competition to celebrate fitness and christmas\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"Countdown till 05.12.2020\"), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, countdownTimer)), __jsx(\"div\", {\n    style: {\n      bottom: \"0\"\n    },\n    className: \"card-group\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, __jsx(_components_InfoCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    content: ludicrous,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }), __jsx(_components_InfoCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    content: spicy,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }), __jsx(_components_InfoCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    content: fun,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  })))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Home, \"4Fg4kxYD1eIGrTq4K9TQndK5ieM=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibHVkaWNyb3VzIiwiY29udGVudCIsInNwaWN5IiwiZnVuIiwidXNlU3RhdGUiLCJjb3VudGRvd25UaW1lciIsInNldENvdW50ZG93blRpbWVyIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJ0aW1lciIsImNvdW50ZG93biIsIkRhdGUiLCJ0b1N0cmluZyIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImhlYWRlciIsImJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxNQUNyQkMsU0FEcUIsR0FDS0MsMkRBREwsQ0FDckJELFNBRHFCO0FBQUEsTUFDVkUsS0FEVSxHQUNLRCwyREFETCxDQUNWQyxLQURVO0FBQUEsTUFDSEMsR0FERyxHQUNLRiwyREFETCxDQUNIRSxHQURHOztBQUFBLGtCQUVlQyxzREFBUSxDQUFDLEVBQUQsQ0FGdkI7QUFBQSxNQUV0QkMsY0FGc0I7QUFBQSxNQUVOQyxpQkFGTTs7QUFJN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxlQUFXLENBQUMsWUFBTTtBQUNoQixVQUFNQyxLQUFLLEdBQUdDLGdEQUFTLENBQUMsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CLENBQW5CLENBQUQsQ0FBVCxDQUFpQ0MsUUFBakMsRUFBZDtBQUNBTix1QkFBaUIsQ0FBQ0csS0FBRCxDQUFqQjtBQUNELEtBSFUsRUFHUixJQUhRLENBQVgsQ0FEYyxDQU1kO0FBQ0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVJLDhEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVUsU0FBSyxFQUFFLGdCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sYUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRiw4REFBTSxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBRyxhQUFTLEVBQUVILDhEQUFNLENBQUNJLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVFQURGLENBRkYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1osY0FBTCxDQUZGLENBUkYsRUFhRTtBQUFLLFNBQUssRUFBRTtBQUFFYSxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQTZCLGFBQVMsRUFBQyxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFVLFdBQU8sRUFBRWxCLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNERBQUQ7QUFBVSxXQUFPLEVBQUVFLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsNERBQUQ7QUFBVSxXQUFPLEVBQUVDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQWJGLENBREYsQ0FIRixFQXdCRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4QkYsQ0FERjtBQTRCRDs7R0F6Q3VCSixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vY29udGVudC9jYXRlZ29yaWVzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IE1ldGFkYXRhIGZyb20gXCIuLi9jb21wb25lbnRzL01ldGFkYXRhXCI7XG5pbXBvcnQgSW5mb0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb0NhcmRcIjtcbmltcG9ydCBjb3VudGRvd24gZnJvbSBcImNvdW50ZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGx1ZGljcm91cywgc3BpY3ksIGZ1biB9ID0gY29udGVudDtcbiAgY29uc3QgW2NvdW50ZG93blRpbWVyLCBzZXRDb3VudGRvd25UaW1lcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVyID0gY291bnRkb3duKG5ldyBEYXRlKDIwMjAsIDEyLCA1KSkudG9TdHJpbmcoKTtcbiAgICAgIHNldENvdW50ZG93blRpbWVyKHRpbWVyKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIC8vIHJldHVybiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPE1ldGFkYXRhIHRpdGxlPXtcIlhtYXMgVGhyb3dkb3duXCJ9IC8+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlhtYXMgVGhyb3dkb3duPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgQSBmdW4gbWl4ZWQgdGVhbSBjb21wZXRpdGlvbiB0byBjZWxlYnJhdGUgZml0bmVzcyBhbmQgY2hyaXN0bWFzXG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPkNvdW50ZG93biB0aWxsIDA1LjEyLjIwMjA8L2gyPlxuICAgICAgICAgICAgPGgzPntjb3VudGRvd25UaW1lcn08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBib3R0b206IFwiMFwiIH19IGNsYXNzTmFtZT1cImNhcmQtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxJbmZvQ2FyZCBjb250ZW50PXtsdWRpY3JvdXN9IC8+XG4gICAgICAgICAgICA8SW5mb0NhcmQgY29udGVudD17c3BpY3l9IC8+XG4gICAgICAgICAgICA8SW5mb0NhcmQgY29udGVudD17ZnVufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})