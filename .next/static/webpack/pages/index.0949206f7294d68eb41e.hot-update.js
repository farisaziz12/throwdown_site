webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/NavBar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction NavBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"/\"),\n      currentPage = _useState[0],\n      setCurrentPage = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setCurrentPage(window.location.pathname);\n  }, []);\n  return __jsx(\"div\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    \"class\": \"navbar navbar-expand-lg navbar-dark bg-dark\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    \"class\": \"navbar-brand\",\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"Xmas Throwdown\"), __jsx(\"button\", {\n    \"class\": \"navbar-toggler\",\n    type: \"button\",\n    \"data-toggle\": \"collapse\",\n    \"data-target\": \"#navbarSupportedContent\",\n    \"aria-controls\": \"navbarSupportedContent\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    \"class\": \"navbar-toggler-icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    \"class\": \"collapse navbar-collapse\",\n    id: \"navbarSupportedContent\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    \"class\": \"navbar-nav mr-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(\"li\", {\n    \"class\": currentPage == \"/\" ? \"nav-item active\" : \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/\");\n    },\n    \"class\": \"nav-link\",\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, \"Home\"))), __jsx(\"li\", {\n    \"class\": currentPage == \"/schedule\" ? \"nav-item active\" : \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/schedule\");\n    },\n    \"class\": \"nav-link\",\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"schedule\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, \"Schedule\"))), __jsx(\"li\", {\n    \"class\": \"nav-item dropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    \"class\": \"nav-link dropdown-toggle\",\n    href: \"#\",\n    id: \"navbarDropdown\",\n    role: \"button\",\n    \"data-toggle\": \"dropdown\",\n    \"aria-haspopup\": \"true\",\n    \"aria-expanded\": \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }, \"Workouts\"), __jsx(\"div\", {\n    \"class\": \"dropdown-menu\",\n    \"aria-labelledby\": \"navbarDropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/workouts/event-1\");\n    },\n    \"class\": currentPage == \"/workouts/event-1\" ? \"dropdown-item active\" : \"dropdown-item\",\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/workouts/event-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 19\n    }\n  }, \"Event 1\")), __jsx(\"div\", {\n    \"class\": \"dropdown-divider\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/workouts/event-2\");\n    },\n    \"class\": currentPage == \"/workouts/event-2\" ? \"dropdown-item active\" : \"dropdown-item\",\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }, \"Event 2\"), __jsx(\"div\", {\n    \"class\": \"dropdown-divider\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/workouts/event-3\");\n    },\n    \"class\": currentPage == \"/workouts/event-3\" ? \"dropdown-item active\" : \"dropdown-item\",\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, \"Event 3\"))), __jsx(\"li\", {\n    \"class\": currentPage == \"/about\" ? \"nav-item active\" : \"nav-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      return setCurrentPage(\"/about\");\n    },\n    \"class\": \"nav-link\",\n    href: \"#\",\n    tabindex: \"-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 15\n    }\n  }, \"About\"))), __jsx(\"button\", {\n    \"class\": \"btn btn-outline-success my-2 my-sm-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, \"Login\"))));\n}\n\n_s(NavBar, \"eVPA6YR+vdzFyCh9pC3P4JbdCBQ=\");\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWIyNCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3R5bGVzIiwibmF2YmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsR0FBRCxDQURmO0FBQUEsTUFDeEJDLFdBRHdCO0FBQUEsTUFDWEMsY0FEVzs7QUFHL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxrQkFBYyxDQUFDRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpCLENBQWQ7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsZ0VBQU0sQ0FBQ0MsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSw2Q0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFNLGNBQVQ7QUFBd0IsUUFBSSxFQUFDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFJRTtBQUNFLGFBQU0sZ0JBRFI7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLG1CQUFZLFVBSGQ7QUFJRSxtQkFBWSx5QkFKZDtBQUtFLHFCQUFjLHdCQUxoQjtBQU1FLHFCQUFjLE9BTmhCO0FBT0Usa0JBQVcsbUJBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQU0sYUFBTSxxQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FKRixFQWdCRTtBQUFLLGFBQU0sMEJBQVg7QUFBc0Ms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LGlCQUExQixHQUE4QyxVQUR2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxjQUFjLENBQUMsUUFBRCxDQUFwQjtBQUFBLEtBRFg7QUFFRSxhQUFNLFVBRlI7QUFHRSxRQUFJLEVBQUMsR0FIUDtBQUlFLFlBQVEsRUFBQyxJQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixDQXJFRixDQURGLEVBb0ZFO0FBQVEsYUFBTSxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEZGLENBaEJGLENBREYsQ0FERjtBQTJHRDs7R0FsSHVCSCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZShcIi9cIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgWG1hcyBUaHJvd2Rvd25cbiAgICAgICAgPC9hPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPXtjdXJyZW50UGFnZSA9PSBcIi9cIiA/IFwibmF2LWl0ZW0gYWN0aXZlXCIgOiBcIm5hdi1pdGVtXCJ9PlxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UGFnZShcIi9cIil9IGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBjbGFzcz17XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPT0gXCIvc2NoZWR1bGVcIiA/IFwibmF2LWl0ZW0gYWN0aXZlXCIgOiBcIm5hdi1pdGVtXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKFwiL3NjaGVkdWxlXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJzY2hlZHVsZVwiPlNjaGVkdWxlPC9MaW5rPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGlkPVwibmF2YmFyRHJvcGRvd25cIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBXb3Jrb3V0c1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UoXCIvd29ya291dHMvZXZlbnQtMVwiKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzPXtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPT0gXCIvd29ya291dHMvZXZlbnQtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImRyb3Bkb3duLWl0ZW0gYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93b3Jrb3V0cy9ldmVudC0xXCI+RXZlbnQgMTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UoXCIvd29ya291dHMvZXZlbnQtMlwiKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzPXtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPT0gXCIvd29ya291dHMvZXZlbnQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImRyb3Bkb3duLWl0ZW0gYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRXZlbnQgMlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50UGFnZShcIi93b3Jrb3V0cy9ldmVudC0zXCIpfVxuICAgICAgICAgICAgICAgICAgY2xhc3M9e1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSA9PSBcIi93b3Jrb3V0cy9ldmVudC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiZHJvcGRvd24taXRlbSBhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJkcm9wZG93bi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFdmVudCAzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgY2xhc3M9e2N1cnJlbnRQYWdlID09IFwiL2Fib3V0XCIgPyBcIm5hdi1pdGVtIGFjdGl2ZVwiIDogXCJuYXYtaXRlbVwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRQYWdlKFwiL2Fib3V0XCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBteS0yIG15LXNtLTBcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

})