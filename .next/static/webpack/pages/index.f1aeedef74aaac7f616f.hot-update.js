webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/quiz */ \"./content/quiz.js\");\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_content_quiz__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _content_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/categories */ \"./content/categories.js\");\n/* harmony import */ var _content_categories__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_content_categories__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/Quiz.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction Quiz() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      done = _useState3[0],\n      setDone = _useState3[1];\n\n  var handleChange = function handleChange(e, _ref) {\n    var value = _ref.value;\n    setValue(value);\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n    quizResults[currentIndex] = value;\n    localStorage.setItem(\"quizResults\", JSON.stringify(quizResults));\n  };\n\n  var handleCalculateResult = function handleCalculateResult() {\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n\n    var groupedCategories = lodash__WEBPACK_IMPORTED_MODULE_1__[\"groupBy\"](quizResults, \"category\");\n\n    console.log(groupedCategories);\n    var keys = Object.keys(groupedCategories);\n    keys.forEach(function (key) {\n      return groupedCategories[key].reduce(function (acc, obj) {\n        return acc + obj.points;\n      }, 0);\n    });\n    console.log(groupedCategories);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    localStorage.setItem(\"quizResults\", JSON.stringify([]));\n  }, []);\n\n  var handleNext = function handleNext() {\n    var next = _content_quiz__WEBPACK_IMPORTED_MODULE_4__[\"quiz\"][currentIndex + 1];\n\n    if (next) {\n      setValue(\"\");\n      setCurrentIndex(currentIndex + 1);\n    } else {\n      setDone(true);\n      handleCalculateResult();\n    }\n  };\n\n  var current = _content_quiz__WEBPACK_IMPORTED_MODULE_4__[\"quiz\"][currentIndex];\n  var percentDone = Math.round((currentIndex + 1) / _content_quiz__WEBPACK_IMPORTED_MODULE_4__[\"quiz\"].length * 100);\n  return __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(percentDone, \"%\")\n    },\n    \"aria-valuenow\": percentDone,\n    \"aria-valuemin\": \"\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, percentDone, \"%\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, current ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }\n  }, current.question)), current.answers.map(function (answer) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Field, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 15\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Checkbox\"], {\n      key: answer.value,\n      radio: true,\n      label: answer.txt,\n      name: \"checkboxRadioGroup\",\n      value: answer.value,\n      checked: value === answer.value,\n      onChange: handleChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }\n    }));\n  })) : null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    disabled: !value,\n    onClick: handleNext,\n    type: \"button\",\n    className: \"btn btn-success center-item topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, \"Next\"))));\n}\n\n_s(Quiz, \"yG2m01TbynmUxhOLeuBcTFblNGk=\");\n\n_c = Quiz;\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6LmpzPzdkMDAiXSwibmFtZXMiOlsiUXVpeiIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImRvbmUiLCJzZXREb25lIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInF1aXpSZXN1bHRzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJoYW5kbGVDYWxjdWxhdGVSZXN1bHQiLCJncm91cGVkQ2F0ZWdvcmllcyIsIl8iLCJjb25zb2xlIiwibG9nIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJyZWR1Y2UiLCJhY2MiLCJvYmoiLCJwb2ludHMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVOZXh0IiwibmV4dCIsInF1aXoiLCJjdXJyZW50IiwicGVyY2VudERvbmUiLCJNYXRoIiwicm91bmQiLCJsZW5ndGgiLCJzdHlsZXMiLCJmb250YW5kY2VudGVyIiwid2lkdGgiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJtYXAiLCJhbnN3ZXIiLCJ0eHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxDQUFELENBRm5CO0FBQUEsTUFFdEJHLFlBRnNCO0FBQUEsTUFFUkMsZUFGUTs7QUFBQSxtQkFHTEosc0RBQVEsQ0FBQyxLQUFELENBSEg7QUFBQSxNQUd0QkssSUFIc0I7QUFBQSxNQUdoQkMsT0FIZ0I7O0FBSzdCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsUUFB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QUFPLEdBQ04sbUVBQ0UsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0EsT0FBTyxDQUFDUSxRQUFqQixDQURGLENBREYsRUFJR1IsT0FBTyxDQUFDUyxPQUFSLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxNQUFEO0FBQUEsV0FDbkIsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMERBQUQ7QUFDRSxTQUFHLEVBQUVBLE1BQU0sQ0FBQzNDLEtBRGQ7QUFFRSxXQUFLLE1BRlA7QUFHRSxXQUFLLEVBQUUyQyxNQUFNLENBQUNDLEdBSGhCO0FBSUUsVUFBSSxFQUFDLG9CQUpQO0FBS0UsV0FBSyxFQUFFRCxNQUFNLENBQUMzQyxLQUxoQjtBQU1FLGFBQU8sRUFBRUEsS0FBSyxLQUFLMkMsTUFBTSxDQUFDM0MsS0FONUI7QUFPRSxjQUFRLEVBQUVNLFlBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRG1CO0FBQUEsR0FBcEIsQ0FKSCxDQURNLEdBbUJKLElBcEJOLEVBcUJFLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVEsRUFBRSxDQUFDTixLQURiO0FBRUUsV0FBTyxFQUFFNkIsVUFGWDtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsYUFBUyxFQUFDLHNDQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQXJCRixDQWRGLENBREY7QUFpREQ7O0dBMUZ1Qi9CLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1aXouanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBGb3JtLCBDaGVja2JveCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgcXVpeiB9IGZyb20gXCIuLi9jb250ZW50L3F1aXpcIjtcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gXCIuLi9jb250ZW50L2NhdGVnb3JpZXNcIjtcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RvbmUsIHNldERvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCB7IHZhbHVlIH0pID0+IHtcbiAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgY29uc3QgcXVpelJlc3VsdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicXVpelJlc3VsdHNcIikpO1xuICAgIHF1aXpSZXN1bHRzW2N1cnJlbnRJbmRleF0gPSB2YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1aXpSZXN1bHRzXCIsIEpTT04uc3RyaW5naWZ5KHF1aXpSZXN1bHRzKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2FsY3VsYXRlUmVzdWx0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHF1aXpSZXN1bHRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1aXpSZXN1bHRzXCIpKTtcbiAgICBjb25zdCBncm91cGVkQ2F0ZWdvcmllcyA9IF8uZ3JvdXBCeShxdWl6UmVzdWx0cywgXCJjYXRlZ29yeVwiKTtcbiAgICBjb25zb2xlLmxvZyhncm91cGVkQ2F0ZWdvcmllcyk7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGdyb3VwZWRDYXRlZ29yaWVzKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT5cbiAgICAgIGdyb3VwZWRDYXRlZ29yaWVzW2tleV0ucmVkdWNlKChhY2MsIG9iaikgPT4gYWNjICsgb2JqLnBvaW50cywgMClcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coZ3JvdXBlZENhdGVnb3JpZXMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWl6UmVzdWx0c1wiLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gcXVpeltjdXJyZW50SW5kZXggKyAxXTtcbiAgICBpZiAobmV4dCkge1xuICAgICAgc2V0VmFsdWUoXCJcIik7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERvbmUodHJ1ZSk7XG4gICAgICBoYW5kbGVDYWxjdWxhdGVSZXN1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3VycmVudCA9IHF1aXpbY3VycmVudEluZGV4XTtcbiAgY29uc3QgcGVyY2VudERvbmUgPSBNYXRoLnJvdW5kKCgoY3VycmVudEluZGV4ICsgMSkgLyBxdWl6Lmxlbmd0aCkgKiAxMDApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1pbmZvLW1vZGFsXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZm9udGFuZGNlbnRlcn0+UXVpejwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHRvcHNwYWNlXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnREb25lfSVgIH19XG4gICAgICAgICAgYXJpYS12YWx1ZW5vdz17cGVyY2VudERvbmV9XG4gICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIlwiXG4gICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7cGVyY2VudERvbmV9JVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvcm0gY2xhc3NOYW1lPVwidG9wc3BhY2VcIj5cbiAgICAgICAge2N1cnJlbnQgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICA8c3Ryb25nPntjdXJyZW50LnF1ZXN0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAge2N1cnJlbnQuYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gKFxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGtleT17YW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgcmFkaW9cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXthbnN3ZXIudHh0fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94UmFkaW9Hcm91cFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGFuc3dlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17IXZhbHVlfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGNlbnRlci1pdGVtIHRvcHNwYWNlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Quiz.js\n");

/***/ })

})