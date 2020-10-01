module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/firebase.js":
/*!****************************!*\
  !*** ./config/firebase.js ***!
  \****************************/
/*! exports provided: app, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet app;\nlet auth;\nconst firebaseConfig = {\n  apiKey: \"AIzaSyAYF6CkdEYcdp7Nj6Xb-qfddApF8y4TrTQ\",\n  authDomain: \"wod-with-faris.firebaseapp.com\",\n  databaseURL: \"https://wod-with-faris.firebaseio.com\",\n  projectId: \"wod-with-faris\",\n  storageBucket: \"156551100887\",\n  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,\n  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID\n};\n\nif (!firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"apps\"].length) {\n  app = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"initializeApp\"](firebaseConfig);\n  auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"auth\"]();\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvZmlyZWJhc2UuanM/YzZmMiJdLCJuYW1lcyI6WyJhcHAiLCJhdXRoIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU0VOREVSX0lEIiwibWVhc3VyZW1lbnRJZCIsIk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lEIiwiZmlyZWJhc2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQUlBLEdBQUo7QUFDQSxJQUFJQyxJQUFKO0FBRUEsTUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxRQUFNLEVBQUVDLHlDQURhO0FBRXJCQyxZQUFVLEVBQUVELGdDQUZTO0FBR3JCRSxhQUFXLEVBQUVGLHVDQUhRO0FBSXJCRyxXQUFTLEVBQUVILGdCQUpVO0FBS3JCSSxlQUFhLEVBQUVKLGNBTE07QUFNckJLLG1CQUFpQixFQUFFTCxPQUFPLENBQUNNLEdBQVIsQ0FBWUMsOEJBTlY7QUFPckJDLGVBQWEsRUFBRVIsT0FBTyxDQUFDTSxHQUFSLENBQVlHO0FBUE4sQ0FBdkI7O0FBVUEsSUFBSSxDQUFDQyxpREFBQSxDQUFjQyxNQUFuQixFQUEyQjtBQUN6QmYsS0FBRyxHQUFHYywwREFBQSxDQUF1QlosY0FBdkIsQ0FBTjtBQUNBRCxNQUFJLEdBQUdhLGlEQUFBLEVBQVA7QUFDRCIsImZpbGUiOiIuL2NvbmZpZy9maXJlYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcblxubGV0IGFwcDtcbmxldCBhdXRoO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9LRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0RPTUFJTixcbiAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0RBVEFCQVNFLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU0VOREVSX0lELFxuICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRCxcbn07XG5cbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gIGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XG59XG5cbmV4cG9ydCB7IGFwcCwgYXV0aCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/firebase.js\n");

/***/ }),

/***/ "./hooks/useAuth.js":
/*!**************************!*\
  !*** ./hooks/useAuth.js ***!
  \**************************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/hooks/useAuth.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// Provider hook that creates an auth object and handles it's state\n\n\n\nconst authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  user: {}\n});\nconst {\n  Provider\n} = authContext;\nfunction AuthProvider({\n  children\n}) {\n  const auth = useAuthProvider();\n  return __jsx(Provider, {\n    value: auth,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 10\n    }\n  }, children);\n}\nconst useAuth = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(authContext);\n};\n\nconst useAuthProvider = () => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n\n  if (_config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"app\"]) {\n    _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"app\"].auth().onAuthStateChanged(function (user) {\n      if (user) {\n        setUser(user);\n      }\n    });\n  }\n\n  const signIn = (email, password) => {\n    return _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].signInWithEmailAndPassword(email, password).then(response => {\n      setUser(response.user);\n      return response.user;\n    }).catch(error => {\n      alert(error.message);\n    });\n  };\n\n  const signOut = () => {\n    return _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].signOut().then(() => setUser(false));\n  };\n\n  const signUp = ({\n    name,\n    email,\n    password\n  }) => {\n    return _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].createUserWithEmailAndPassword(email, password).then(response => {\n      _config_firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].currentUser.sendEmailVerification();\n      return setUser(response.user);\n    }).catch(error => {\n      return {\n        error\n      };\n    });\n  };\n\n  return {\n    user,\n    signUp,\n    signIn,\n    signOut\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VBdXRoLmpzP2RiZTAiXSwibmFtZXMiOlsiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlciIsIlByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlQXV0aFByb3ZpZGVyIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJhcHAiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiYWxlcnQiLCJtZXNzYWdlIiwic2lnbk91dCIsInNpZ25VcCIsIm5hbWUiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjdXJyZW50VXNlciIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUM7QUFBRUMsTUFBSSxFQUFFO0FBQVIsQ0FBRCxDQUFqQztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFlSCxXQUFyQjtBQUVPLFNBQVNJLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUFvQztBQUN6QyxRQUFNQyxJQUFJLEdBQUdDLGVBQWUsRUFBNUI7QUFDQSxTQUFPLE1BQUMsUUFBRDtBQUFVLFNBQUssRUFBRUQsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkQsUUFBeEIsQ0FBUDtBQUNEO0FBQ00sTUFBTUcsT0FBTyxHQUFHLE1BQU07QUFDM0IsU0FBT0Msd0RBQVUsQ0FBQ1QsV0FBRCxDQUFqQjtBQUNELENBRk07O0FBSVAsTUFBTU8sZUFBZSxHQUFHLE1BQU07QUFDNUIsUUFBTTtBQUFBLE9BQUNMLElBQUQ7QUFBQSxPQUFPUTtBQUFQLE1BQWtCQyxzREFBUSxDQUFDLElBQUQsQ0FBaEM7O0FBRUEsTUFBSUMsb0RBQUosRUFBUztBQUNQQSx3REFBRyxDQUFDTixJQUFKLEdBQVdPLGtCQUFYLENBQThCLFVBQVVYLElBQVYsRUFBZ0I7QUFDNUMsVUFBSUEsSUFBSixFQUFVO0FBQ1JRLGVBQU8sQ0FBQ1IsSUFBRCxDQUFQO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7O0FBRUQsUUFBTVksTUFBTSxHQUFHLENBQUNDLEtBQUQsRUFBUUMsUUFBUixLQUFxQjtBQUNsQyxXQUFPVixxREFBSSxDQUNSVywwQkFESSxDQUN1QkYsS0FEdkIsRUFDOEJDLFFBRDlCLEVBRUpFLElBRkksQ0FFRUMsUUFBRCxJQUFjO0FBQ2xCVCxhQUFPLENBQUNTLFFBQVEsQ0FBQ2pCLElBQVYsQ0FBUDtBQUNBLGFBQU9pQixRQUFRLENBQUNqQixJQUFoQjtBQUNELEtBTEksRUFNSmtCLEtBTkksQ0FNR0MsS0FBRCxJQUFXO0FBQ2hCQyxXQUFLLENBQUNELEtBQUssQ0FBQ0UsT0FBUCxDQUFMO0FBQ0QsS0FSSSxDQUFQO0FBU0QsR0FWRDs7QUFZQSxRQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUNwQixXQUFPbEIscURBQUksQ0FBQ2tCLE9BQUwsR0FBZU4sSUFBZixDQUFvQixNQUFNUixPQUFPLENBQUMsS0FBRCxDQUFqQyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNZSxNQUFNLEdBQUcsQ0FBQztBQUFFQyxRQUFGO0FBQVFYLFNBQVI7QUFBZUM7QUFBZixHQUFELEtBQStCO0FBQzVDLFdBQU9WLHFEQUFJLENBQ1JxQiw4QkFESSxDQUMyQlosS0FEM0IsRUFDa0NDLFFBRGxDLEVBRUpFLElBRkksQ0FFRUMsUUFBRCxJQUFjO0FBQ2xCYiwyREFBSSxDQUFDc0IsV0FBTCxDQUFpQkMscUJBQWpCO0FBQ0EsYUFBT25CLE9BQU8sQ0FBQ1MsUUFBUSxDQUFDakIsSUFBVixDQUFkO0FBQ0QsS0FMSSxFQU1Ka0IsS0FOSSxDQU1HQyxLQUFELElBQVc7QUFDaEIsYUFBTztBQUFFQTtBQUFGLE9BQVA7QUFDRCxLQVJJLENBQVA7QUFTRCxHQVZEOztBQVdBLFNBQU87QUFDTG5CLFFBREs7QUFFTHVCLFVBRks7QUFHTFgsVUFISztBQUlMVTtBQUpLLEdBQVA7QUFNRCxDQTVDRCIsImZpbGUiOiIuL2hvb2tzL3VzZUF1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcm92aWRlciBob29rIHRoYXQgY3JlYXRlcyBhbiBhdXRoIG9iamVjdCBhbmQgaGFuZGxlcyBpdCdzIHN0YXRlXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhcHAsIGF1dGggfSBmcm9tIFwiLi4vY29uZmlnL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBhcHBlbmRFcnJvcnMgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IHVzZXI6IHt9IH0pO1xuY29uc3QgeyBQcm92aWRlciB9ID0gYXV0aENvbnRleHQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoUHJvdmlkZXIoKTtcbiAgcmV0dXJuIDxQcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvUHJvdmlkZXI+O1xufVxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbn07XG5cbmNvbnN0IHVzZUF1dGhQcm92aWRlciA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgaWYgKGFwcCkge1xuICAgIGFwcC5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBzZXRVc2VyKHVzZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc2lnbkluID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHJldHVybiBhdXRoXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XG4gICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaWduT3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHNldFVzZXIoZmFsc2UpKTtcbiAgfTtcblxuICBjb25zdCBzaWduVXAgPSAoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xuICAgIHJldHVybiBhdXRoXG4gICAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBhdXRoLmN1cnJlbnRVc2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpO1xuICAgICAgICByZXR1cm4gc2V0VXNlcihyZXNwb25zZS51c2VyKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiB7IGVycm9yIH07XG4gICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB1c2VyLFxuICAgIHNpZ25VcCxcbiAgICBzaWduSW4sXG4gICAgc2lnbk91dCxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useAuth.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.js\");\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__[\"AuthProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLFNBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vaG9va3MvdXNlQXV0aFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIj9kZmM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWhvb2stZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-hook-form\n");

/***/ })

/******/ });