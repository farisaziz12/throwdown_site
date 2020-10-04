webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var _content_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/categories */ \"./content/categories.js\");\n/* harmony import */ var _content_categories__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_categories__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Metadata */ \"./components/Metadata.js\");\n/* harmony import */ var _components_InfoCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InfoCard */ \"./components/InfoCard.js\");\n/* harmony import */ var countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! countdown */ \"./node_modules/countdown/countdown.js\");\n/* harmony import */ var countdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(countdown__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var ludicrous = _content_categories__WEBPACK_IMPORTED_MODULE_3__[\"content\"].ludicrous,\n      spicy = _content_categories__WEBPACK_IMPORTED_MODULE_3__[\"content\"].spicy,\n      fun = _content_categories__WEBPACK_IMPORTED_MODULE_3__[\"content\"].fun;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(countdown__WEBPACK_IMPORTED_MODULE_7___default()(new Date(2020, 12, 5)).toString()),\n      countdownTimer = _useState[0],\n      setCountdownTimer = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setInterval(function () {\n      var timer = countdown__WEBPACK_IMPORTED_MODULE_7___default()(new Date(2020, 12, 5)).toString();\n      setCountdownTimer(timer);\n    }, 1000);\n  }, []);\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Metadata__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Xmas Throwdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }), __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, \"Xmas Throwdown\"), __jsx(\"p\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"A fun mixed team competition to celebrate fitness and christmas\")), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, \"Countdown till 05.12.2020\"), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, countdownTimer)), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"Categories\"), __jsx(\"div\", {\n    className: \"card-deck topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, __jsx(_components_InfoCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    content: ludicrous,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }), __jsx(_components_InfoCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    content: spicy,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  }), __jsx(_components_InfoCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    content: fun,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Home, \"DIdOM3V53xvCIVHpytgz+RSeK/4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibHVkaWNyb3VzIiwiY29udGVudCIsInNwaWN5IiwiZnVuIiwidXNlU3RhdGUiLCJjb3VudGRvd24iLCJEYXRlIiwidG9TdHJpbmciLCJjb3VudGRvd25UaW1lciIsInNldENvdW50ZG93blRpbWVyIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJ0aW1lciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImhlYWRlciIsImZvbnRhbmRjZW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsTUFDckJDLFNBRHFCLEdBQ0tDLDJEQURMLENBQ3JCRCxTQURxQjtBQUFBLE1BQ1ZFLEtBRFUsR0FDS0QsMkRBREwsQ0FDVkMsS0FEVTtBQUFBLE1BQ0hDLEdBREcsR0FDS0YsMkRBREwsQ0FDSEUsR0FERzs7QUFBQSxrQkFFZUMsc0RBQVEsQ0FDbERDLGdEQUFTLENBQUMsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CLENBQW5CLENBQUQsQ0FBVCxDQUFpQ0MsUUFBakMsRUFEa0QsQ0FGdkI7QUFBQSxNQUV0QkMsY0FGc0I7QUFBQSxNQUVOQyxpQkFGTTs7QUFNN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxlQUFXLENBQUMsWUFBTTtBQUNoQixVQUFNQyxLQUFLLEdBQUdQLGdEQUFTLENBQUMsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CLENBQW5CLENBQUQsQ0FBVCxDQUFpQ0MsUUFBakMsRUFBZDtBQUNBRSx1QkFBaUIsQ0FBQ0csS0FBRCxDQUFqQjtBQUNELEtBSFUsRUFHUixJQUhRLENBQVg7QUFJRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBTUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBVSxTQUFLLEVBQUUsZ0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxhQUFTLEVBQUVELDhEQUFNLENBQUNFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFHLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUVBREYsQ0FGRixFQVFFO0FBQUssYUFBUyxFQUFFSiw4REFBTSxDQUFDSyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1YsY0FBTCxDQUZGLENBUkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVLLDhEQUFNLENBQUNLLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFVLFdBQU8sRUFBRWxCLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNERBQUQ7QUFBVSxXQUFPLEVBQUVFLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsNERBQUQ7QUFBVSxXQUFPLEVBQUVDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUZGLENBYkYsQ0FERixDQUhGLEVBMkJFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixDQURGO0FBK0JEOztHQTNDdUJKLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9jb250ZW50L2NhdGVnb3JpZXNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgTWV0YWRhdGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0YWRhdGFcIjtcbmltcG9ydCBJbmZvQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmZvQ2FyZFwiO1xuaW1wb3J0IGNvdW50ZG93biBmcm9tIFwiY291bnRkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgbHVkaWNyb3VzLCBzcGljeSwgZnVuIH0gPSBjb250ZW50O1xuICBjb25zdCBbY291bnRkb3duVGltZXIsIHNldENvdW50ZG93blRpbWVyXSA9IHVzZVN0YXRlKFxuICAgIGNvdW50ZG93bihuZXcgRGF0ZSgyMDIwLCAxMiwgNSkpLnRvU3RyaW5nKClcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVyID0gY291bnRkb3duKG5ldyBEYXRlKDIwMjAsIDEyLCA1KSkudG9TdHJpbmcoKTtcbiAgICAgIHNldENvdW50ZG93blRpbWVyKHRpbWVyKTtcbiAgICB9LCAxMDAwKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxNZXRhZGF0YSB0aXRsZT17XCJYbWFzIFRocm93ZG93blwifSAvPlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5YbWFzIFRocm93ZG93bjwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIEEgZnVuIG1peGVkIHRlYW0gY29tcGV0aXRpb24gdG8gY2VsZWJyYXRlIGZpdG5lc3MgYW5kIGNocmlzdG1hc1xuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb250YW5kY2VudGVyfT5cbiAgICAgICAgICAgIDxoMj5Db3VudGRvd24gdGlsbCAwNS4xMi4yMDIwPC9oMj5cbiAgICAgICAgICAgIDxoMz57Y291bnRkb3duVGltZXJ9PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZm9udGFuZGNlbnRlcn0+Q2F0ZWdvcmllczwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVjayB0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICA8SW5mb0NhcmQgY29udGVudD17bHVkaWNyb3VzfSAvPlxuICAgICAgICAgICAgICA8SW5mb0NhcmQgY29udGVudD17c3BpY3l9IC8+XG4gICAgICAgICAgICAgIDxJbmZvQ2FyZCBjb250ZW50PXtmdW59IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})