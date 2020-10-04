webpackHotUpdate_N_E("pages/index",{

/***/ "./components/InfoCard.js":
/*!********************************!*\
  !*** ./components/InfoCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InfoCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_poppop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-poppop */ \"./node_modules/react-poppop/lib/index.js\");\n/* harmony import */ var react_poppop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_poppop__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/InfoCard.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction InfoCard(props) {\n  _s();\n\n  var _this = this;\n\n  var _props$content = props.content,\n      title = _props$content.title,\n      description = _props$content.description,\n      more_info = _props$content.more_info,\n      requirements = _props$content.requirements,\n      img = _props$content.img;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var toggleShow = function toggleShow(show) {\n    setShowModal(show);\n  };\n\n  return __jsx(\"div\", {\n    className: \"center-item card\",\n    style: {\n      width: \"18rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: img,\n    className: \"card-img-top\",\n    alt: \"...\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"h5\", {\n    className: \"card-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"p\", {\n    className: \"card-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, description), __jsx(\"button\", {\n    onClick: function onClick() {\n      return toggleShow(true);\n    },\n    className: \"btn btn-primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Learn more\")), __jsx(react_poppop__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    position: \"centerCenter\",\n    open: showModal,\n    closeBtn: true,\n    closeOnEsc: true,\n    onClose: function onClose() {\n      return toggleShow(false);\n    },\n    closeOnOverlay: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, title), __jsx(\"h5\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"Standards:\"), __jsx(\"ul\", {\n    className: \"list-group\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, requirements.map(function (requirement) {\n    return __jsx(\"li\", {\n      className: \"list-group-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }\n    }, requirement);\n  })))));\n}\n\n_s(InfoCard, \"uVlnG5KLfXemZk5i5Fl+Cg356FU=\");\n\n_c = InfoCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"InfoCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmZvQ2FyZC5qcz9kZDk4Il0sIm5hbWVzIjpbIkluZm9DYXJkIiwicHJvcHMiLCJjb250ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1vcmVfaW5mbyIsInJlcXVpcmVtZW50cyIsImltZyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidG9nZ2xlU2hvdyIsInNob3ciLCJ3aWR0aCIsInN0eWxlcyIsImZvbnRhbmRjZW50ZXIiLCJtYXAiLCJyZXF1aXJlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQTs7QUFBQSx1QkFDdUJBLEtBQUssQ0FBQ0MsT0FEN0I7QUFBQSxNQUM5QkMsS0FEOEIsa0JBQzlCQSxLQUQ4QjtBQUFBLE1BQ3ZCQyxXQUR1QixrQkFDdkJBLFdBRHVCO0FBQUEsTUFDVkMsU0FEVSxrQkFDVkEsU0FEVTtBQUFBLE1BQ0NDLFlBREQsa0JBQ0NBLFlBREQ7QUFBQSxNQUNlQyxHQURmLGtCQUNlQSxHQURmOztBQUFBLGtCQUVKQyxzREFBUSxDQUFDLEtBQUQsQ0FGSjtBQUFBLE1BRS9CQyxTQUYrQjtBQUFBLE1BRXBCQyxZQUZvQjs7QUFJdEMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCRixnQkFBWSxDQUFDRSxJQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBa0MsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRU4sR0FBVjtBQUFlLGFBQVMsRUFBQyxjQUF6QjtBQUF3QyxPQUFHLEVBQUMsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCSixLQUE1QixDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCQyxXQUExQixDQUZGLEVBR0U7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNTyxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEtBQWpCO0FBQXlDLGFBQVMsRUFBQyxpQkFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixDQUZGLEVBU0UsTUFBQyxtREFBRDtBQUNFLFlBQVEsRUFBQyxjQURYO0FBRUUsUUFBSSxFQUFFRixTQUZSO0FBR0UsWUFBUSxFQUFFLElBSFo7QUFJRSxjQUFVLEVBQUUsSUFKZDtBQUtFLFdBQU8sRUFBRTtBQUFBLGFBQU1FLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsS0FMWDtBQU1FLGtCQUFjLEVBQUUsSUFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUcsOERBQU0sQ0FBQ0MsYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ1osS0FBdEMsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFHRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csWUFBWSxDQUFDVSxHQUFiLENBQWlCLFVBQUNDLFdBQUQ7QUFBQSxXQUNoQjtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlDQSxXQUFqQyxDQURnQjtBQUFBLEdBQWpCLENBREgsQ0FIRixDQVJGLENBVEYsQ0FERjtBQThCRDs7R0F0Q3VCakIsUTs7S0FBQUEsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5mb0NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3BQb3AgZnJvbSBcInJlYWN0LXBvcHBvcFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvQ2FyZChwcm9wcykge1xuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgbW9yZV9pbmZvLCByZXF1aXJlbWVudHMsIGltZyB9ID0gcHJvcHMuY29udGVudDtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVTaG93ID0gKHNob3cpID0+IHtcbiAgICBzZXRTaG93TW9kYWwoc2hvdyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1pdGVtIGNhcmRcIiBzdHlsZT17eyB3aWR0aDogXCIxOHJlbVwiIH19PlxuICAgICAgPGltZyBzcmM9e2ltZ30gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3RpdGxlfTwvaDU+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlU2hvdyh0cnVlKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgTGVhcm4gbW9yZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBvcFBvcFxuICAgICAgICBwb3NpdGlvbj1cImNlbnRlckNlbnRlclwiXG4gICAgICAgIG9wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgY2xvc2VCdG49e3RydWV9XG4gICAgICAgIGNsb3NlT25Fc2M9e3RydWV9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHRvZ2dsZVNob3coZmFsc2UpfVxuICAgICAgICBjbG9zZU9uT3ZlcmxheT17dHJ1ZX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tbW9kYWxcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZm9udGFuZGNlbnRlcn0+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgPGg1PlN0YW5kYXJkczo8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICB7cmVxdWlyZW1lbnRzLm1hcCgocmVxdWlyZW1lbnQpID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPntyZXF1aXJlbWVudH08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BvcFBvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InfoCard.js\n");

/***/ })

})