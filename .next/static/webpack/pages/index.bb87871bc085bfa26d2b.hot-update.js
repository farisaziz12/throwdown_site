webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FAQ.js":
/*!***************************!*\
  !*** ./components/FAQ.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FAQ; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_poppop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-poppop */ \"./node_modules/react-poppop/lib/index.js\");\n/* harmony import */ var react_poppop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_poppop__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/FAQ.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction FAQ(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var FAQs = props.FAQs;\n\n  var toggleShow = function toggleShow(show) {\n    setShowModal(show);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"accordion\",\n    id: \"accordionExample\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, FAQs.map(function (FAQ) {\n    return __jsx(\"div\", {\n      key: FAQ.question,\n      className: \"card\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      className: \"card-header\",\n      id: \"headingOne\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }, __jsx(\"h2\", {\n      className: \"mb-0\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }\n    }, __jsx(\"button\", {\n      className: \"btn btn-link btn-block text-left\",\n      type: \"button\",\n      \"data-toggle\": \"collapse\",\n      \"data-target\": \"#collapseOne\",\n      \"aria-expanded\": \"false\",\n      \"aria-controls\": \"collapseOne\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, FAQ.question))), __jsx(\"div\", {\n      id: \"collapseOne\",\n      className: \"collapse\",\n      \"aria-labelledby\": \"headingOne\",\n      \"data-parent\": \"#accordionExample\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"card-body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }\n    }, FAQ.answer, FAQ.button === \"quiz\" && __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 19\n      }\n    }, __jsx(\"button\", {\n      className: \"btn btn-success\",\n      onClick: null,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 21\n      }\n    }, \"Quiz\"), __jsx(react_poppop__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      position: \"centerCenter\",\n      open: showModal,\n      closeBtn: true,\n      closeOnEsc: true,\n      onClose: function onClose() {\n        return toggleShow(false);\n      },\n      closeOnOverlay: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      className: \"more-info-modal\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 23\n      }\n    }, __jsx(\"h1\", {\n      className: styles.fontandcenter,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 25\n      }\n    }, title), __jsx(\"h5\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 25\n      }\n    }, \"Standards:\"), __jsx(\"small\", {\n      id: \"standardsHelp\",\n      className: \"form-text text-muted\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 25\n      }\n    }, \"At least 2 team members should fit this criteria\"), __jsx(\"ul\", {\n      className: \"list-group\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 25\n      }\n    }, requirements.map(function (requirement) {\n      return __jsx(\"li\", {\n        key: requirement,\n        className: \"list-group-item\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 29\n        }\n      }, requirement);\n    }))))))));\n  })));\n}\n\n_s(FAQ, \"uVlnG5KLfXemZk5i5Fl+Cg356FU=\");\n\n_c = FAQ;\n\nvar _c;\n\n$RefreshReg$(_c, \"FAQ\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GQVEuanM/YTM4MSJdLCJuYW1lcyI6WyJGQVEiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiRkFRcyIsInRvZ2dsZVNob3ciLCJzaG93IiwibWFwIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJidXR0b24iLCJzdHlsZXMiLCJmb250YW5kY2VudGVyIiwidGl0bGUiLCJyZXF1aXJlbWVudHMiLCJyZXF1aXJlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxLQUFELENBRFQ7QUFBQSxNQUMxQkMsU0FEMEI7QUFBQSxNQUNmQyxZQURlOztBQUFBLE1BR3pCQyxJQUh5QixHQUdoQkosS0FIZ0IsQ0FHekJJLElBSHlCOztBQUtqQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDM0JILGdCQUFZLENBQUNHLElBQUQsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixNQUFFLEVBQUMsa0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ1IsR0FBRDtBQUFBLFdBQ1I7QUFBSyxTQUFHLEVBQUVBLEdBQUcsQ0FBQ1MsUUFBZDtBQUF3QixlQUFTLEVBQUMsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBNkIsUUFBRSxFQUFDLFlBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLGVBQVMsRUFBQyxrQ0FEWjtBQUVFLFVBQUksRUFBQyxRQUZQO0FBR0UscUJBQVksVUFIZDtBQUlFLHFCQUFZLGNBSmQ7QUFLRSx1QkFBYyxPQUxoQjtBQU1FLHVCQUFjLGFBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRR1QsR0FBRyxDQUFDUyxRQVJQLENBREYsQ0FERixDQURGLEVBZ0JFO0FBQ0UsUUFBRSxFQUFDLGFBREw7QUFFRSxlQUFTLEVBQUMsVUFGWjtBQUdFLHlCQUFnQixZQUhsQjtBQUlFLHFCQUFZLG1CQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1QsR0FBRyxDQUFDVSxNQURQLEVBRUdWLEdBQUcsQ0FBQ1csTUFBSixLQUFlLE1BQWYsSUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBUSxlQUFTLEVBQUMsaUJBQWxCO0FBQW9DLGFBQU8sRUFBRSxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFJRSxNQUFDLG1EQUFEO0FBQ0UsY0FBUSxFQUFDLGNBRFg7QUFFRSxVQUFJLEVBQUVSLFNBRlI7QUFHRSxjQUFRLEVBQUUsSUFIWjtBQUlFLGdCQUFVLEVBQUUsSUFKZDtBQUtFLGFBQU8sRUFBRTtBQUFBLGVBQU1HLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsT0FMWDtBQU1FLG9CQUFjLEVBQUUsSUFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBRU0sTUFBTSxDQUFDQyxhQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXNDQyxLQUF0QyxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUdFO0FBQ0UsUUFBRSxFQUFDLGVBREw7QUFFRSxlQUFTLEVBQUMsc0JBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFIRixFQVNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyxZQUFZLENBQUNQLEdBQWIsQ0FBaUIsVUFBQ1EsV0FBRDtBQUFBLGFBQ2hCO0FBQUksV0FBRyxFQUFFQSxXQUFUO0FBQXNCLGlCQUFTLEVBQUMsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0EsV0FESCxDQURnQjtBQUFBLEtBQWpCLENBREgsQ0FURixDQVJGLENBSkYsQ0FISixDQU5GLENBaEJGLENBRFE7QUFBQSxHQUFULENBREgsQ0FERixDQURGO0FBb0VEOztHQTdFdUJoQixHOztLQUFBQSxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GQVEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3BQb3AgZnJvbSBcInJlYWN0LXBvcHBvcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGQVEocHJvcHMpIHtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IEZBUXMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHRvZ2dsZVNob3cgPSAoc2hvdykgPT4ge1xuICAgIHNldFNob3dNb2RhbChzaG93KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvblwiIGlkPVwiYWNjb3JkaW9uRXhhbXBsZVwiPlxuICAgICAgICB7RkFRcy5tYXAoKEZBUSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtGQVEucXVlc3Rpb259IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIiBpZD1cImhlYWRpbmdPbmVcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgYnRuLWJsb2NrIHRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2VPbmVcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZU9uZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge0ZBUS5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwiY29sbGFwc2VPbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdPbmVcIlxuICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25FeGFtcGxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7RkFRLmFuc3dlcn1cbiAgICAgICAgICAgICAgICB7RkFRLmJ1dHRvbiA9PT0gXCJxdWl6XCIgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXtudWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICBRdWl6XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8UG9wUG9wXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJjZW50ZXJDZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZU9uRXNjPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHRvZ2dsZVNob3coZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsb3NlT25PdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mb250YW5kY2VudGVyfT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TdGFuZGFyZHM6PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkc0hlbHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEF0IGxlYXN0IDIgdGVhbSBtZW1iZXJzIHNob3VsZCBmaXQgdGhpcyBjcml0ZXJpYVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlbWVudHMubWFwKChyZXF1aXJlbWVudCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3JlcXVpcmVtZW50fSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXF1aXJlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUG9wUG9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FAQ.js\n");

/***/ })

})