webpackHotUpdate_N_E("pages/login",{

/***/ "./hooks/useAuth.js":
/*!**************************!*\
  !*** ./hooks/useAuth.js ***!
  \**************************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/hooks/useAuth.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// Provider hook that creates an auth object and handles it's state\n\n\n\nvar authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  user: {}\n});\nvar Provider = authContext.Provider;\nfunction AuthProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var auth = useAuthProvider();\n  return __jsx(Provider, {\n    value: auth,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 10\n    }\n  }, children);\n}\n\n_s(AuthProvider, \"U5QEqN6sgp/9Kus+ung4cQwYnRk=\", false, function () {\n  return [useAuthProvider];\n});\n\n_c = AuthProvider;\nvar useAuth = function useAuth() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(authContext);\n};\n\n_s2(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar useAuthProvider = function useAuthProvider() {\n  _s3();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  if (_config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"app\"]) {\n    _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"app\"].auth().onAuthStateChanged(function (user) {\n      if (user) {\n        setUser(user);\n      }\n    });\n  }\n\n  var signIn = function signIn(email, password) {\n    return _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].signInWithEmailAndPassword(email, password).then(function (response) {\n      setUser(response.user);\n      return response.user;\n    })[\"catch\"](function (error) {\n      alert(error.message);\n    });\n  };\n\n  var signOut = function signOut() {\n    return _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].signOut().then(function () {\n      return setUser(false);\n    });\n  };\n\n  var signUp = function signUp(_ref2) {\n    var firstName = _ref2.firstName,\n        lastName = _ref2.lastName,\n        email = _ref2.email,\n        password = _ref2.password;\n    return _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].createUserWithEmailAndPassword(email, password).then(function (response) {\n      _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].currentUser.sendEmailVerification();\n      return setUser(response.user);\n    }).then(function () {\n      fetch(\"https://wod-with-faris-backend.herokuapp.com/user/create\", {\n        method: \"POST\",\n        headers: {\n          Accept: \"application/json\",\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          email: email,\n          first_name: firstName,\n          last_name: lastName,\n          tokens: 0,\n          coach: false\n        })\n      }).then(function (resp) {\n        return resp.json();\n      }).then(function (resp) {\n        return console.log(resp);\n      });\n    })[\"catch\"](function (error) {\n      return {\n        error: error\n      };\n    });\n  };\n\n  return {\n    user: user,\n    signUp: signUp,\n    signIn: signIn,\n    signOut: signOut\n  };\n};\n\n_s3(useAuthProvider, \"Iei9RGtZU29Y1RhBe1sbfh/MntA=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQXV0aC5qcz9kYmUwIl0sIm5hbWVzIjpbImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZXIiLCJQcm92aWRlciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aCIsInVzZUF1dGhQcm92aWRlciIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJzZXRVc2VyIiwiYXBwIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbkluIiwiZW1haWwiLCJwYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJzaWduT3V0Iiwic2lnblVwIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjdXJyZW50VXNlciIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInRva2VucyIsImNvYWNoIiwicmVzcCIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQztBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUFELENBQWpDO0lBQ1FDLFEsR0FBYUgsVyxDQUFiRyxRO0FBRUQsU0FBU0MsWUFBVCxPQUFvQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN6QyxNQUFNQyxJQUFJLEdBQUdDLGVBQWUsRUFBNUI7QUFDQSxTQUFPLE1BQUMsUUFBRDtBQUFVLFNBQUssRUFBRUQsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3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RUFBSkEsSUFESztBQUVMc0IsVUFBTSxFQUFOQSxNQUZLO0FBR0xWLFVBQU0sRUFBTkEsTUFISztBQUlMUyxXQUFPLEVBQVBBO0FBSkssR0FBUDtBQU1ELENBOUREOztJQUFNaEIsZSIsImZpbGUiOiIuL2hvb2tzL3VzZUF1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcm92aWRlciBob29rIHRoYXQgY3JlYXRlcyBhbiBhdXRoIG9iamVjdCBhbmQgaGFuZGxlcyBpdCdzIHN0YXRlXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhcHAsIGF1dGggfSBmcm9tIFwiLi4vY29uZmlnL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBhcHBlbmRFcnJvcnMgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IHVzZXI6IHt9IH0pO1xuY29uc3QgeyBQcm92aWRlciB9ID0gYXV0aENvbnRleHQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoUHJvdmlkZXIoKTtcbiAgcmV0dXJuIDxQcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvUHJvdmlkZXI+O1xufVxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbn07XG5cbmNvbnN0IHVzZUF1dGhQcm92aWRlciA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgaWYgKGFwcCkge1xuICAgIGFwcC5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBzZXRVc2VyKHVzZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc2lnbkluID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHJldHVybiBhdXRoXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XG4gICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaWduT3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHNldFVzZXIoZmFsc2UpKTtcbiAgfTtcblxuICBjb25zdCBzaWduVXAgPSAoeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xuICAgIHJldHVybiBhdXRoXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBhdXRoLmN1cnJlbnRVc2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpO1xuICAgICAgICByZXR1cm4gc2V0VXNlcihyZXNwb25zZS51c2VyKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly93b2Qtd2l0aC1mYXJpcy1iYWNrZW5kLmhlcm9rdWFwcC5jb20vdXNlci9jcmVhdGVcIiwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBsYXN0TmFtZSxcbiAgICAgICAgICAgIHRva2VuczogMCxcbiAgICAgICAgICAgIGNvYWNoOiBmYWxzZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oKHJlc3ApID0+IGNvbnNvbGUubG9nKHJlc3ApKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiB7IGVycm9yIH07XG4gICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB1c2VyLFxuICAgIHNpZ25VcCxcbiAgICBzaWduSW4sXG4gICAgc2lnbk91dCxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useAuth.js\n");

/***/ })

})