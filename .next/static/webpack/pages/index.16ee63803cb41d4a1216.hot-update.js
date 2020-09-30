webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/NavBar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction NavBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"/\"),\n      currentPage = _useState[0],\n      setCurrentPage = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setCurrentPage(window.location.pathname);\n  }, []);\n  return __jsx(\"div\", {\n    classNameName: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-dark bg-dark\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: \"navbar-brand\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"Xmas Throwdown\"), __jsx(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbarSupportedContent\",\n    \"aria-controls\": \"navbarSupportedContent\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"navbar-toggler-icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"navbarSupportedContent\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    className: \"navbar-nav mr-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    className: currentPage == \"/\" ? \"nav-item active\" : \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/\");\n    },\n    className: \"nav-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \"Home\"))), __jsx(\"li\", {\n    className: currentPage == \"/schedule\" ? \"nav-item active\" : \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/schedule\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/schedule\");\n    },\n    className: \"nav-link\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, \"Schedule\"))), __jsx(\"li\", {\n    className: \"nav-item dropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link dropdown-toggle\",\n    id: \"navbarDropdown\",\n    role: \"button\",\n    \"data-toggle\": \"dropdown\",\n    \"aria-haspopup\": \"true\",\n    \"aria-expanded\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 15\n    }\n  }, \"Workouts\"), __jsx(\"div\", {\n    className: \"dropdown-menu\",\n    \"aria-labelledby\": \"navbarDropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"workouts/event-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/workouts/event-1\");\n    },\n    className: currentPage == \"/workouts/event-1\" ? \"dropdown-item active\" : \"dropdown-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 19\n    }\n  }, \"Event 1\")), __jsx(\"div\", {\n    className: \"dropdown-divider\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"workouts/event-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/workouts/event-2\");\n    },\n    className: currentPage == \"/workouts/event-2\" ? \"dropdown-item active\" : \"dropdown-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 19\n    }\n  }, \"Event 2\")), __jsx(\"div\", {\n    className: \"dropdown-divider\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"workouts/event-3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/workouts/event-3\");\n    },\n    className: currentPage == \"/workouts/event-3\" ? \"dropdown-item active\" : \"dropdown-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 19\n    }\n  }, \"Event 3\")))), __jsx(\"li\", {\n    className: currentPage == \"/about\" ? \"nav-item active\" : \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/about\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/about\");\n    },\n    className: \"nav-link\",\n    tabIndex: \"-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 17\n    }\n  }, \"About\")))), __jsx(\"button\", {\n    className: \"btn btn-outline-success my-2 my-sm-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, \"Login\"))));\n}\n\n_s(NavBar, \"eVPA6YR+vdzFyCh9pC3P4JbdCBQ=\");\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWIyNCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3R5bGVzIiwibmF2YmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsR0FBRCxDQURmO0FBQUEsTUFDeEJDLFdBRHdCO0FBQUEsTUFDWEMsY0FEVzs7QUFHL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxrQkFBYyxDQUFDRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpCLENBQWQ7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLGlCQUFhLEVBQUVDLGdFQUFNLENBQUNDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFDRSxhQUFTLEVBQUMsZ0JBRFo7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLG1CQUFZLFVBSGQ7QUFJRSxtQkFBWSx5QkFKZDtBQUtFLHFCQUFjLHdCQUxoQjtBQU1FLHFCQUFjLE9BTmhCO0FBT0Usa0JBQVcsbUJBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQU0sYUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FGRixFQWNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FB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SSxlQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQTNCRixDQVhGLENBdEJGLEVBMEVFO0FBQ0UsYUFBUyxFQUNQQSxXQUFXLElBQUksUUFBZixHQUEwQixpQkFBMUIsR0FBOEMsVUFGbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxjQUFjLENBQUMsUUFBRCxDQUFwQjtBQUFBLEtBRFg7QUFFRSxhQUFTLEVBQUMsVUFGWjtBQUdFLFlBQVEsRUFBQyxJQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQUxGLENBMUVGLENBREYsRUE0RkU7QUFBUSxhQUFTLEVBQUMsc0NBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1RkYsQ0FkRixDQURGLENBREY7QUFtSEQ7O0dBMUh1QkgsTTs7S0FBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2QmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoXCIvXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFBhZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWVOYW1lPXtzdHlsZXMubmF2YmFyfT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5YbWFzIFRocm93ZG93bjwvYT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjdXJyZW50UGFnZSA9PSBcIi9cIiA/IFwibmF2LWl0ZW0gYWN0aXZlXCIgOiBcIm5hdi1pdGVtXCJ9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKFwiL1wiKX0gY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSA9PSBcIi9zY2hlZHVsZVwiID8gXCJuYXYtaXRlbSBhY3RpdmVcIiA6IFwibmF2LWl0ZW1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2NoZWR1bGVcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UoXCIvc2NoZWR1bGVcIil9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2NoZWR1bGVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgIGlkPVwibmF2YmFyRHJvcGRvd25cIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBXb3Jrb3V0c1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIndvcmtvdXRzL2V2ZW50LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKFwiL3dvcmtvdXRzL2V2ZW50LTFcIil9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPT0gXCIvd29ya291dHMvZXZlbnQtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiZHJvcGRvd24taXRlbSBhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50IDFcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIndvcmtvdXRzL2V2ZW50LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKFwiL3dvcmtvdXRzL2V2ZW50LTJcIil9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPT0gXCIvd29ya291dHMvZXZlbnQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiZHJvcGRvd24taXRlbSBhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50IDJcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIndvcmtvdXRzL2V2ZW50LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKFwiL3dvcmtvdXRzL2V2ZW50LTNcIil9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPT0gXCIvd29ya291dHMvZXZlbnQtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiZHJvcGRvd24taXRlbSBhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50IDNcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlID09IFwiL2Fib3V0XCIgPyBcIm5hdi1pdGVtIGFjdGl2ZVwiIDogXCJuYXYtaXRlbVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UGFnZShcIi9hYm91dFwiKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG15LTIgbXktc20tMFwiPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

})