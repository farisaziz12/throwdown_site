webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FAQ.js":
/*!***************************!*\
  !*** ./components/FAQ.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FAQ; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_poppop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-poppop */ \"./node_modules/react-poppop/lib/index.js\");\n/* harmony import */ var react_poppop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_poppop__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/FAQ.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction FAQ(props) {\n  var _this = this;\n\n  var FAQs = props.FAQs;\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"accordion\",\n    id: \"accordionExample\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, FAQs.map(function (FAQ) {\n    return __jsx(\"div\", {\n      key: FAQ.question,\n      className: \"card\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      className: \"card-header\",\n      id: \"headingOne\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }\n    }, __jsx(\"h2\", {\n      className: \"mb-0\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 15\n      }\n    }, __jsx(\"button\", {\n      className: \"btn btn-link btn-block text-left\",\n      type: \"button\",\n      \"data-toggle\": \"collapse\",\n      \"data-target\": \"#collapseOne\",\n      \"aria-expanded\": \"false\",\n      \"aria-controls\": \"collapseOne\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }\n    }, FAQ.question))), __jsx(\"div\", {\n      id: \"collapseOne\",\n      className: \"collapse\",\n      \"aria-labelledby\": \"headingOne\",\n      \"data-parent\": \"#accordionExample\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"card-body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 15\n      }\n    }, FAQ.answer, FAQ.button === \"quiz\" && __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 19\n      }\n    }, __jsx(\"button\", {\n      className: \"btn btn-success\",\n      onClick: null,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }\n    }, \"Quiz\")))));\n  })));\n}\n_c = FAQ;\n\nvar _c;\n\n$RefreshReg$(_c, \"FAQ\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GQVEuanM/YTM4MSJdLCJuYW1lcyI6WyJGQVEiLCJwcm9wcyIsIkZBUXMiLCJtYXAiLCJxdWVzdGlvbiIsImFuc3dlciIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsTUFDekJDLElBRHlCLEdBQ2hCRCxLQURnQixDQUN6QkMsSUFEeUI7QUFFakMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixNQUFFLEVBQUMsa0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFBSSxDQUFDQyxHQUFMLENBQVMsVUFBQ0gsR0FBRDtBQUFBLFdBQ1I7QUFBSyxTQUFHLEVBQUVBLEdBQUcsQ0FBQ0ksUUFBZDtBQUF3QixlQUFTLEVBQUMsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBNkIsUUFBRSxFQUFDLFlBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGVBQVMsRUFBQyxrQ0FEWjtBQUVFLFVBQUksRUFBQyxRQUZQO0FBR0UscUJBQVksVUFIZDtBQUlFLHFCQUFZLGNBSmQ7QUFLRSx1QkFBYyxPQUxoQjtBQU1FLHVCQUFjLGFBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRR0osR0FBRyxDQUFDSSxRQVJQLENBREYsQ0FERixDQURGLEVBZ0JFO0FBQ0UsUUFBRSxFQUFDLGFBREw7QUFFRSxlQUFTLEVBQUMsVUFGWjtBQUdFLHlCQUFnQixZQUhsQjtBQUlFLHFCQUFZLG1CQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0osR0FBRyxDQUFDSyxNQURQLEVBRUdMLEdBQUcsQ0FBQ00sTUFBSixLQUFlLE1BQWYsSUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBUSxlQUFTLEVBQUMsaUJBQWxCO0FBQW9DLGFBQU8sRUFBRSxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FISixDQU5GLENBaEJGLENBRFE7QUFBQSxHQUFULENBREgsQ0FERixDQURGO0FBMENEO0tBNUN1Qk4sRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRkFRLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvcFBvcCBmcm9tIFwicmVhY3QtcG9wcG9wXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZBUShwcm9wcykge1xuICBjb25zdCB7IEZBUXMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvblwiIGlkPVwiYWNjb3JkaW9uRXhhbXBsZVwiPlxuICAgICAgICB7RkFRcy5tYXAoKEZBUSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtGQVEucXVlc3Rpb259IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIiBpZD1cImhlYWRpbmdPbmVcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgYnRuLWJsb2NrIHRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2VPbmVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZU9uZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge0ZBUS5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwiY29sbGFwc2VPbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIlxuICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25FeGFtcGxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7RkFRLmFuc3dlcn1cbiAgICAgICAgICAgICAgICB7RkFRLmJ1dHRvbiA9PT0gXCJxdWl6XCIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXtudWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICBRdWl6XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FAQ.js\n");

/***/ })

})