webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/quiz */ \"./content/quiz.js\");\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_content_quiz__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/Quiz.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction Quiz(props) {\n  _s();\n\n  var _this = this;\n\n  var close = props.close;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      done = _useState3[0],\n      setDone = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined),\n      chosenCategory = _useState4[0],\n      setChosenCategory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      results = _useState5[0],\n      setResults = _useState5[1];\n\n  var handleChange = function handleChange(e, _ref) {\n    var value = _ref.value;\n    setValue(value);\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n    quizResults[currentIndex] = value;\n    localStorage.setItem(\"quizResults\", JSON.stringify(quizResults));\n  };\n\n  var handleCalculateResult = function handleCalculateResult() {\n    var results = [];\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n\n    var groupedCategories = lodash__WEBPACK_IMPORTED_MODULE_2__[\"groupBy\"](quizResults, \"category\");\n\n    var keys = Object.keys(groupedCategories);\n    keys.forEach(function (key) {\n      var points = groupedCategories[key].reduce(function (acc, obj) {\n        return acc + obj.points;\n      }, 0);\n      results.push(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, key, points));\n    });\n\n    var chosenCategory = lodash__WEBPACK_IMPORTED_MODULE_2__[\"maxBy\"](results, function (o) {\n      return o.spicy || o.ludicrous || o.fun;\n    });\n\n    if (results.spicy === 2 && results.fun === 2 && results.ludicrous === 2) {\n      setResults(results);\n    } else {\n      setChosenCategory(Object.keys(chosenCategory)[0]);\n      setResults(results);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    localStorage.setItem(\"quizResults\", JSON.stringify([]));\n  }, []);\n\n  var handleNext = function handleNext() {\n    var next = _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"][currentIndex + 1];\n\n    if (next) {\n      setValue(\"\");\n      setCurrentIndex(currentIndex + 1);\n    } else {\n      setDone(true);\n      handleCalculateResult();\n    }\n  };\n\n  var current = _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"][currentIndex];\n  var percentDone = Math.round((currentIndex + 1) / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100);\n  return __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), !done && __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(percentDone, \"%\")\n    },\n    \"aria-valuenow\": percentDone,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, percentDone, \"%\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, !done ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  }, current.question)), current.answers.map(function (answer) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 15\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Checkbox\"], {\n      key: answer.value,\n      radio: true,\n      label: answer.txt,\n      name: \"checkboxRadioGroup\",\n      value: answer.value,\n      checked: value === answer.value,\n      onChange: handleChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }\n    }));\n  })) : results && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 15\n    }\n  }, \"Results\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 15\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 17\n    }\n  }, \"Ideal category: \"), chosenCategory ? chosenCategory.replace(/^\\w/, function (c) {\n    return c.toUpperCase();\n  }) : \"Indecisive\"), __jsx(\"div\", {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, results[0] && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 23\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 25\n    }\n  }, Object.keys(results[0])[0].replace(/^\\w/, function (c) {\n    return c.toUpperCase();\n  }), \":\")), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 23\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(Object.values(results[0])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100, \"%\")\n    },\n    \"aria-valuenow\": Object.values(results[0])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 25\n    }\n  }, Object.values(results[0])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100 > 100 ? 100 : Math.round(Object.values(results[0])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100), \"%\"))), results[1] && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 23\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 25\n    }\n  }, Object.keys(results[1])[0].replace(/^\\w/, function (c) {\n    return c.toUpperCase();\n  }), \":\")), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 23\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(Object.values(results[1])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100, \"%\")\n    },\n    \"aria-valuenow\": Object.values(results[1])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 25\n    }\n  }, Object.values(results[1])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100 > 100 ? 100 : Math.round(Object.values(results[1])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100), \"%\"))), results[2] && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 23\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 190,\n      columnNumber: 25\n    }\n  }, Object.keys(results[2])[0].replace(/^\\w/, function (c) {\n    return c.toUpperCase();\n  }), \":\")), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 197,\n      columnNumber: 23\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(Object.values(results[2])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100, \"%\")\n    },\n    \"aria-valuenow\": Object.values(results[2])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 198,\n      columnNumber: 25\n    }\n  }, Object.values(results[2])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100 > 100 ? 100 : Math.round(Object.values(results[2])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100), \"%\")))))), !done ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 230,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    disabled: !value,\n    onClick: handleNext,\n    type: \"button\",\n    className: \"btn btn-success center-item topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 231,\n      columnNumber: 13\n    }\n  }, \"Next\")) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 241,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    onClick: close,\n    type: \"button\",\n    className: \"btn btn-primary center-item topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 242,\n      columnNumber: 13\n    }\n  }, \"Done\"))));\n}\n\n_s(Quiz, \"WHe+1tj5TOniHLfbLHX/lfywD5E=\");\n\n_c = Quiz;\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6LmpzPzdkMDAiXSwibmFtZXMiOlsiUXVpeiIsInByb3BzIiwiY2xvc2UiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJkb25lIiwic2V0RG9uZSIsInVuZGVmaW5lZCIsImNob3NlbkNhdGVnb3J5Iiwic2V0Q2hvc2VuQ2F0ZWdvcnkiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJxdWl6UmVzdWx0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlQ2FsY3VsYXRlUmVzdWx0IiwiZ3JvdXBlZENhdGVnb3JpZXMiLCJfIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJwb2ludHMiLCJyZWR1Y2UiLCJhY2MiLCJvYmoiLCJwdXNoIiwibyIsInNwaWN5IiwibHVkaWNyb3VzIiwiZnVuIiwidXNlRWZmZWN0IiwiaGFuZGxlTmV4dCIsIm5leHQiLCJxdWl6IiwiY3VycmVudCIsInBlcmNlbnREb25lIiwiTWF0aCIsInJvdW5kIiwibGVuZ3RoIiwic3R5bGVzIiwiZm9udGFuZGNlbnRlciIsIndpZHRoIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwidHh0IiwicmVwbGFjZSIsImMiLCJ0b1VwcGVyQ2FzZSIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUFBLE1BQzFCQyxLQUQwQixHQUNoQkQsS0FEZ0IsQ0FDMUJDLEtBRDBCOztBQUFBLGtCQUVSQyxzREFBUSxDQUFDLEVBQUQsQ0FGQTtBQUFBLE1BRTNCQyxLQUYyQjtBQUFBLE1BRXBC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K0I4QixrREFBSSxDQUFDSyxNQUFyQyxHQUErQyxHQUEvQyxHQUNELEdBREMsR0FFRyxHQUZILEdBR0dGLElBQUksQ0FBQ0MsS0FBTCxDQUNHbkIsTUFBTSxDQUFDZ0MsTUFBUCxDQUFjL0MsT0FBTyxDQUFDLENBQUQsQ0FBckIsRUFBMEIsQ0FBMUIsSUFBK0I4QixrREFBSSxDQUFDSyxNQUFyQyxHQUNFLEdBRkosQ0FqQk4sTUFERixDQVRGLENBNUVKLENBREYsQ0FSRixDQXRCTixFQW9KRyxDQUFDeEMsSUFBRCxHQUNDLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVEsRUFBRSxDQUFDSixLQURiO0FBRUUsV0FBTyxFQUFFcUMsVUFGWDtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsYUFBUyxFQUFDLHNDQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURELEdBWUMsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsV0FBTyxFQUFFdkMsS0FEWDtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsYUFBUyxFQUFDLHNDQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQWhLSixDQWhCRixDQURGO0FBOExEOztHQXZQdUJGLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1aXouanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBGb3JtLCBDaGVja2JveCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgcXVpeiB9IGZyb20gXCIuLi9jb250ZW50L3F1aXpcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeihwcm9wcykge1xuICBjb25zdCB7IGNsb3NlIH0gPSBwcm9wcztcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZG9uZSwgc2V0RG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaG9zZW5DYXRlZ29yeSwgc2V0Q2hvc2VuQ2F0ZWdvcnldID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCB7IHZhbHVlIH0pID0+IHtcbiAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgY29uc3QgcXVpelJlc3VsdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicXVpelJlc3VsdHNcIikpO1xuICAgIHF1aXpSZXN1bHRzW2N1cnJlbnRJbmRleF0gPSB2YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1aXpSZXN1bHRzXCIsIEpTT04uc3RyaW5naWZ5KHF1aXpSZXN1bHRzKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2FsY3VsYXRlUmVzdWx0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBjb25zdCBxdWl6UmVzdWx0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWl6UmVzdWx0c1wiKSk7XG4gICAgY29uc3QgZ3JvdXBlZENhdGVnb3JpZXMgPSBfLmdyb3VwQnkocXVpelJlc3VsdHMsIFwiY2F0ZWdvcnlcIik7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGdyb3VwZWRDYXRlZ29yaWVzKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgcG9pbnRzID0gZ3JvdXBlZENhdGVnb3JpZXNba2V5XS5yZWR1Y2UoXG4gICAgICAgIChhY2MsIG9iaikgPT4gYWNjICsgb2JqLnBvaW50cyxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICAgIHJlc3VsdHMucHVzaCh7IFtrZXldOiBwb2ludHMgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaG9zZW5DYXRlZ29yeSA9IF8ubWF4QnkoXG4gICAgICByZXN1bHRzLFxuICAgICAgKG8pID0+IG8uc3BpY3kgfHwgby5sdWRpY3JvdXMgfHwgby5mdW5cbiAgICApO1xuICAgIGlmIChyZXN1bHRzLnNwaWN5ID09PSAyICYmIHJlc3VsdHMuZnVuID09PSAyICYmIHJlc3VsdHMubHVkaWNyb3VzID09PSAyKSB7XG4gICAgICBzZXRSZXN1bHRzKHJlc3VsdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDaG9zZW5DYXRlZ29yeShPYmplY3Qua2V5cyhjaG9zZW5DYXRlZ29yeSlbMF0pO1xuICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1aXpSZXN1bHRzXCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBxdWl6W2N1cnJlbnRJbmRleCArIDFdO1xuICAgIGlmIChuZXh0KSB7XG4gICAgICBzZXRWYWx1ZShcIlwiKTtcbiAgICAgIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RG9uZSh0cnVlKTtcbiAgICAgIGhhbmRsZUNhbGN1bGF0ZVJlc3VsdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjdXJyZW50ID0gcXVpeltjdXJyZW50SW5kZXhdO1xuICBjb25zdCBwZXJjZW50RG9uZSA9IE1hdGgucm91bmQoKChjdXJyZW50SW5kZXggKyAxKSAvIHF1aXoubGVuZ3RoKSAqIDEwMCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tbW9kYWxcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mb250YW5kY2VudGVyfT5RdWl6PC9oMT5cbiAgICAgIHshZG9uZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgdG9wc3BhY2VcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50RG9uZX0lYCB9fVxuICAgICAgICAgICAgYXJpYS12YWx1ZW5vdz17cGVyY2VudERvbmV9XG4gICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cGVyY2VudERvbmV9JVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8Rm9ybSBjbGFzc05hbWU9XCJ0b3BzcGFjZVwiPlxuICAgICAgICB7IWRvbmUgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICA8c3Ryb25nPntjdXJyZW50LnF1ZXN0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAge2N1cnJlbnQuYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gKFxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGtleT17YW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgcmFkaW9cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXthbnN3ZXIudHh0fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94UmFkaW9Hcm91cFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGFuc3dlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgcmVzdWx0cyAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZm9udGFuZGNlbnRlcn0+UmVzdWx0czwvaDE+XG4gICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPklkZWFsIGNhdGVnb3J5OiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICB7Y2hvc2VuQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgID8gY2hvc2VuQ2F0ZWdvcnkucmVwbGFjZSgvXlxcdy8sIChjKSA9PiBjLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICA6IFwiSW5kZWNpc2l2ZVwifVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcHNwYWNlXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3Jlc3VsdHNbMF0gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXN1bHRzWzBdKVswXS5yZXBsYWNlKC9eXFx3LywgKGMpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyB0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChPYmplY3QudmFsdWVzKHJlc3VsdHNbMF0pWzBdIC8gcXVpei5sZW5ndGgpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbm93PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoT2JqZWN0LnZhbHVlcyhyZXN1bHRzWzBdKVswXSAvIHF1aXoubGVuZ3RoKSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsoT2JqZWN0LnZhbHVlcyhyZXN1bHRzWzBdKVswXSAvIHF1aXoubGVuZ3RoKSAqIDEwMCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoT2JqZWN0LnZhbHVlcyhyZXN1bHRzWzBdKVswXSAvIHF1aXoubGVuZ3RoKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge3Jlc3VsdHNbMV0gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXN1bHRzWzFdKVswXS5yZXBsYWNlKC9eXFx3LywgKGMpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyB0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChPYmplY3QudmFsdWVzKHJlc3VsdHNbMV0pWzBdIC8gcXVpei5sZW5ndGgpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbm93PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoT2JqZWN0LnZhbHVlcyhyZXN1bHRzWzFdKVswXSAvIHF1aXoubGVuZ3RoKSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsoT2JqZWN0LnZhbHVlcyhyZXN1bHRzWzFdKVswXSAvIHF1aXoubGVuZ3RoKSAqIDEwMCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoT2JqZWN0LnZhbHVlcyhyZXN1bHRzWzFdKVswXSAvIHF1aXoubGVuZ3RoKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge3Jlc3VsdHNbMl0gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXN1bHRzWzJdKVswXS5yZXBsYWNlKC9eXFx3LywgKGMpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyB0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChPYmplY3QudmFsdWVzKHJlc3VsdHNbMl0pWzBdIC8gcXVpei5sZW5ndGgpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbm93PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoT2JqZWN0LnZhbHVlcyhyZXN1bHRzWzJdKVswXSAvIHF1aXoubGVuZ3RoKSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyhPYmplY3QudmFsdWVzKHJlc3VsdHNbMl0pWzBdIC8gcXVpei5sZW5ndGgpICogMTAwID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChPYmplY3QudmFsdWVzKHJlc3VsdHNbMl0pWzBdIC8gcXVpei5sZW5ndGgpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICAgIHshZG9uZSA/IChcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF2YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBjZW50ZXItaXRlbSB0b3BzcGFjZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2V9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgY2VudGVyLWl0ZW0gdG9wc3BhY2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb25lXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Quiz.js\n");

/***/ })

})