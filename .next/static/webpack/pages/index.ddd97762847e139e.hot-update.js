"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/about/styles.ts":
/*!****************************************!*\
  !*** ./src/components/about/styles.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Grid\": function() { return /* binding */ Grid; },\n/* harmony export */   \"About\": function() { return /* binding */ About; },\n/* harmony export */   \"Image\": function() { return /* binding */ Image; },\n/* harmony export */   \"Text\": function() { return /* binding */ Text; },\n/* harmony export */   \"Paragraph\": function() { return /* binding */ Paragraph; },\n/* harmony export */   \"ButtonContainer\": function() { return /* binding */ ButtonContainer; },\n/* harmony export */   \"BtnRed\": function() { return /* binding */ BtnRed; },\n/* harmony export */   \"BtnGreen\": function() { return /* binding */ BtnGreen; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding-top: 3%;\\n  display: grid;\\n\\n  background-color: red;\\n  height: auto;\\n\\n  grid-template-columns: 4fr 5fr;\\n  @media screen and (max-width: 768px) {\\n    grid-template-columns: 1fr;\\n    gap: 100px;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: #FFF;  \\n  padding: 30px 50px;\\n  @media screen and (max-width: 768px) {\\n    padding: 30px 30px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  justify-content: flex-start;\\n\\n  justify-content: center;\\n  align-items: center;\\n\\n  height: 18%;\\n\\n  img{\\n    height: 100%;\\n  }\\n\\n  @media screen and (max-width: 768px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: black;\\n  text-align: justify;\\n  padding-bottom: 2%;\\n  width: 80%;\\n  font-size: 1.1rem;\\n  padding-top: 2%;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: flex-start;\\n  padding-top: 2%;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: white;\\n  padding: 10px 20px;\\n  border-radius: 5px;\\n  background-color: red;\\n  cursor: pointer;\\n\\n  &:hover {\\n    transition: all 0.2s ease-in-out;\\n    background: #46A4DA;\\n    color: white;\\n  }\\n\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: green;\\n  margin-left: 10px;\\n  cursor: pointer;\\n\\n  &:hover {\\n    transition: all 0.2s ease-in-out;\\n    background: #46A4DA;\\n    color: white;\\n  }\\n\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\n\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar About = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(_templateObject4());\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject5());\nvar BtnRed = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(_templateObject6());\nvar BtnGreen = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(BtnRed)(_templateObject7());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRStCLENBWS9COzs7Ozs7Ozs7UUFFZ0MsQ0FNaEM7Ozs7Ozs7OztRQUVnQyxDQWdCaEM7Ozs7Ozs7OztRQUUrQixDQUcvQjs7Ozs7Ozs7O1FBRWtDLENBT2xDOzs7Ozs7Ozs7UUFFMEMsQ0FJMUM7Ozs7Ozs7OztRQUUrQixDQWEvQjs7Ozs7Ozs7O1FBRXVDLENBV3ZDOzs7Ozs7O0FBeEZzQztBQUUvQixHQUFLLENBQUNDLElBQUksR0FBR0QsNkRBQVU7QUFjdkIsR0FBSyxDQUFDRyxLQUFLLEdBQUdILDZEQUFVO0FBUXhCLEdBQUssQ0FBQ0ksS0FBSyxHQUFHSiw2REFBVTtBQWtCeEIsR0FBSyxDQUFDSyxJQUFJLEdBQUdMLDZEQUFVO0FBS3ZCLEdBQUssQ0FBQ00sU0FBUyxHQUFHTiwyREFBUTtBQVMxQixHQUFLLENBQUNRLGVBQWUsR0FBR1IsNkRBQVU7QUFNbEMsR0FBSyxDQUFDUyxNQUFNLEdBQUdULDJEQUFRO0FBZXZCLEdBQUssQ0FBQ1csUUFBUSxHQUFHWCw2REFBTSxDQUFDUyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Fib3V0L3N0eWxlcy50cz80MDYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgZGlzcGxheTogZ3JpZDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGhlaWdodDogYXV0bztcblxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciA1ZnI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMDBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFib3V0ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjsgIFxuICBwYWRkaW5nOiAzMHB4IDUwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiAxOCU7XG5cbiAgaW1ne1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmctdG9wOiAyJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy10b3A6IDIlO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ0blJlZCA9IHN0eWxlZC5hYFxuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiAjNDZBNERBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG5gO1xuXG5leHBvcnQgY29uc3QgQnRuR3JlZW4gPSBzdHlsZWQoQnRuUmVkKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogIzQ2QTREQTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiR3JpZCIsImRpdiIsIkFib3V0IiwiSW1hZ2UiLCJUZXh0IiwiUGFyYWdyYXBoIiwicCIsIkJ1dHRvbkNvbnRhaW5lciIsIkJ0blJlZCIsImEiLCJCdG5HcmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about/styles.ts\n");

/***/ })

});