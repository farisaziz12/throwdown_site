webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useAuth.js":
/*!**************************!*\
  !*** ./hooks/useAuth.js ***!
  \**************************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/hooks/useAuth.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// Provider hook that creates an auth object and handles it's state\n\n\n\nvar authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  user: {}\n});\nvar Provider = authContext.Provider;\nfunction AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var auth = useAuthProvider();\n  return __jsx(Provider, {\n    value: auth,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 10\n    }\n  }, children);\n}\n\n_s(AuthProvider, \"U5QEqN6sgp/9Kus+ung4cQwYnRk=\", false, function () {\n  return [useAuthProvider];\n});\n\n_c = AuthProvider;\nvar useAuth = function useAuth() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(authContext);\n};\n\n_s2(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar useAuthProvider = function useAuthProvider() {\n  _s3();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  if (_config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"app\"]) {\n    _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"app\"].auth().onAuthStateChanged(function (user) {\n      if (user) {\n        setUser(user);\n      }\n    });\n  }\n\n  var signIn = function signIn(email, password) {\n    return _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].signInWithEmailAndPassword(email, password).then(function (response) {\n      setUser(response.user);\n      return response.user;\n    })[\"catch\"](function (error) {\n      return error.message;\n    });\n  };\n\n  var signOut = function signOut() {\n    return _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].signOut().then(function () {\n      return setUser(false);\n    });\n  };\n\n  var signUp = function signUp(_ref2) {\n    var name = _ref2.name,\n        email = _ref2.email,\n        password = _ref2.password;\n    return _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].createUserWithEmailAndPassword(email, password).then(function (response) {\n      _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].currentUser.sendEmailVerification();\n      return setUser(response.user);\n    })[\"catch\"](function (error) {\n      return {\n        error: error\n      };\n    });\n  };\n\n  return {\n    user: user,\n    signUp: signUp,\n    signIn: signIn,\n    signOut: signOut\n  };\n};\n\n_s3(useAuthProvider, \"Iei9RGtZU29Y1RhBe1sbfh/MntA=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQXV0aC5qcz9kYmUwIl0sIm5hbWVzIjpbImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZXIiLCJQcm92aWRlciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aCIsInVzZUF1dGhQcm92aWRlciIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJzZXRVc2VyIiwiYXBwIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbkluIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJtZXNzYWdlIiwic2lnbk91dCIsInNpZ25VcCIsIm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjdXJyZW50VXNlciIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUM7QUFBRUMsTUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUFqQztJQUNRQyxRLEdBQWFILFcsQ0FBYkcsUTtBQUVELFNBQVNDLFlBQVQsT0FBb0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDekMsTUFBTUMsSUFBSSxHQUFHQyxlQUFlLEVBQTVCO0FBQ0EsU0FBTyxNQUFDLFFBQUQ7QUFBVSxTQUFLLEVBQUVELElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JELFFBQXhCLENBQVA7QUFDRDs7R0FIZUQsWTtVQUNERyxlOzs7S0FEQ0gsWTtBQUlULElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDM0IsU0FBT0Msd0RBQVUsQ0FBQ1QsV0FBRCxDQUFqQjtBQUNELENBRk07O0lBQU1RLE87O0FBSWIsSUFBTUQsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0pHLHNEQUFRLENBQUMsSUFBRCxDQURKO0FBQUEsTUFDckJSLElBRHFCO0FBQUEsTUFDZlMsT0FEZTs7QUFHNUIsTUFBSUMsb0RBQUosRUFBUztBQUNQQSx3REFBRyxDQUFDTixJQUFKLEdBQVdPLGtCQUFYLENBQThCLFVBQVVYLElBQVYsRUFBZ0I7QUFDNUMsVUFBSUEsSUFBSixFQUFVO0FBQ1JTLGVBQU8sQ0FBQ1QsSUFBRCxDQUFQO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7O0FBRUQsTUFBTVksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ2xDLFdBQU9WLHFEQUFJLENBQ1JXLDBCQURJLENBQ3VCRixLQUR2QixFQUM4QkMsUUFEOUIsRUFFSkUsSUFGSSxDQUVDLFVBQUNDLFFBQUQsRUFBYztBQUNsQlIsYUFBTyxDQUFDUSxRQUFRLENBQUNqQixJQUFWLENBQVA7QUFDQSxhQUFPaUIsUUFBUSxDQUFDakIsSUFBaEI7QUFDRCxLQUxJLFdBTUUsVUFBQ2tCLEtBQUQsRUFBVztBQUNoQixhQUFPQSxLQUFLLENBQUNDLE9BQWI7QUFDRCxLQVJJLENBQVA7QUFTRCxHQVZEOztBQVlBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsV0FBT2hCLHFEQUFJLENBQUNnQixPQUFMLEdBQWVKLElBQWYsQ0FBb0I7QUFBQSxhQUFNUCxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsS0FBcEIsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTVksTUFBTSxHQUFHLFNBQVRBLE1BQVMsUUFBK0I7QUFBQSxRQUE1QkMsSUFBNEIsU0FBNUJBLElBQTRCO0FBQUEsUUFBdEJULEtBQXNCLFNBQXRCQSxLQUFzQjtBQUFBLFFBQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUM1QyxXQUFPVixxREFBSSxDQUNSbUIsOEJBREksQ0FDMkJWLEtBRDNCLEVBQ2tDQyxRQURsQyxFQUVKRSxJQUZJLENBRUMsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCYiwyREFBSSxDQUFDb0IsV0FBTCxDQUFpQkMscUJBQWpCO0FBQ0EsYUFBT2hCLE9BQU8sQ0FBQ1EsUUFBUSxDQUFDakIsSUFBVixDQUFkO0FBQ0QsS0FMSSxXQU1FLFVBQUNrQixLQUFELEVBQVc7QUFDaEIsYUFBTztBQUFFQSxhQUFLLEVBQUxBO0FBQUYsT0FBUDtBQUNELEtBUkksQ0FBUDtBQVNELEdBVkQ7O0FBV0EsU0FBTztBQUNMbEIsUUFBSSxFQUFKQSxJQURLO0FBRUxxQixVQUFNLEVBQU5BLE1BRks7QUFHTFQsVUFBTSxFQUFOQSxNQUhLO0FBSUxRLFdBQU8sRUFBUEE7QUFKSyxHQUFQO0FBTUQsQ0E1Q0Q7O0lBQU1mLGUiLCJmaWxlIjoiLi9ob29rcy91c2VBdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUHJvdmlkZXIgaG9vayB0aGF0IGNyZWF0ZXMgYW4gYXV0aCBvYmplY3QgYW5kIGhhbmRsZXMgaXQncyBzdGF0ZVxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXBwLCBhdXRoIH0gZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZVwiO1xuaW1wb3J0IHsgYXBwZW5kRXJyb3JzIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyB1c2VyOiB7fSB9KTtcbmNvbnN0IHsgUHJvdmlkZXIgfSA9IGF1dGhDb250ZXh0O1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBhdXRoID0gdXNlQXV0aFByb3ZpZGVyKCk7XG4gIHJldHVybiA8UHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L1Byb3ZpZGVyPjtcbn1cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XG59O1xuXG5jb25zdCB1c2VBdXRoUHJvdmlkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGlmIChhcHApIHtcbiAgICBhcHAuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbiAodXNlcikge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHNpZ25JbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICByZXR1cm4gYXV0aFxuICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UudXNlcjtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiBzZXRVc2VyKGZhbHNlKSk7XG4gIH07XG5cbiAgY29uc3Qgc2lnblVwID0gKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgICByZXR1cm4gYXV0aFxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgYXV0aC5jdXJyZW50VXNlci5zZW5kRW1haWxWZXJpZmljYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHNldFVzZXIocmVzcG9uc2UudXNlcik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4geyBlcnJvciB9O1xuICAgICAgfSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgICBzaWduVXAsXG4gICAgc2lnbkluLFxuICAgIHNpZ25PdXQsXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuth.js\n");

/***/ })

})