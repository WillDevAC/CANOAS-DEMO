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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": function() { return /* binding */ About; },\n/* harmony export */   \"Grid\": function() { return /* binding */ Grid; },\n/* harmony export */   \"Description\": function() { return /* binding */ Description; },\n/* harmony export */   \"Image\": function() { return /* binding */ Image; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"Paragraph\": function() { return /* binding */ Paragraph; },\n/* harmony export */   \"ButtonContainer\": function() { return /* binding */ ButtonContainer; },\n/* harmony export */   \"BtnRed\": function() { return /* binding */ BtnRed; },\n/* harmony export */   \"BtnGreen\": function() { return /* binding */ BtnGreen; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: #FFF;  \\n  padding: 30px 100px;\\n\\n  @media screen and (max-width: 768px) {\\n    padding: 30px 50px;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: grid;\\n  min-height: 15.625rem;\\n  grid-template-columns: 4fr 5fr;\\n\\n  @media screen and (max-width: 768px) {\\n    grid-template-columns: 1fr;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: ;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  justify-content: flex-start;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\n  font-size: 2.5rem;\\n  color: black;\\n  padding-bottom: 1rem;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: black;\\n  font-size: 1.2rem;\\n  padding-bottom: 1rem;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: flex-start;\\n  flex-direction: column;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  padding: 10px 20px;\\n  border-radius: 5px;\\n  background-color: red;\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: green;\\n  margin-top: 10px;\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\n\nvar About = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject4());\nvar Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(_templateObject5());\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject6());\nvar BtnRed = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(_templateObject7());\nvar BtnGreen = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(BtnRed)(_templateObject8());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUVnQyxDQU9oQzs7Ozs7Ozs7O1FBRStCLENBUS9COzs7Ozs7Ozs7UUFFc0MsQ0FFdEM7Ozs7Ozs7OztRQUVnQyxDQUdoQzs7Ozs7Ozs7O1FBRStCLENBSy9COzs7Ozs7Ozs7UUFFa0MsQ0FJbEM7Ozs7Ozs7OztRQUUwQyxDQUkxQzs7Ozs7Ozs7O1FBRStCLENBSS9COzs7Ozs7Ozs7UUFFdUMsQ0FHdkM7Ozs7Ozs7QUExRHNDO0FBRS9CLEdBQUssQ0FBQ0MsS0FBSyxHQUFHRCw2REFBVTtBQVN4QixHQUFLLENBQUNHLElBQUksR0FBR0gsNkRBQVU7QUFVdkIsR0FBSyxDQUFDSSxXQUFXLEdBQUdKLDZEQUFVO0FBSTlCLEdBQUssQ0FBQ0ssS0FBSyxHQUFHTCw2REFBVTtBQUt4QixHQUFLLENBQUNNLEtBQUssR0FBR04sNERBQVM7QUFPdkIsR0FBSyxDQUFDUSxTQUFTLEdBQUdSLDJEQUFRO0FBTTFCLEdBQUssQ0FBQ1UsZUFBZSxHQUFHViw2REFBVTtBQU1sQyxHQUFLLENBQUNXLE1BQU0sR0FBR1gsMkRBQVE7QUFNdkIsR0FBSyxDQUFDYSxRQUFRLEdBQUdiLDZEQUFNLENBQUNXLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQvc3R5bGVzLnRzPzQwNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7ICBcclxuICBwYWRkaW5nOiAzMHB4IDEwMHB4O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogMzBweCA1MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG1pbi1oZWlnaHQ6IDE1LjYyNXJlbTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciA1ZnI7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdG5SZWQgPSBzdHlsZWQuYWBcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdG5HcmVlbiA9IHN0eWxlZChCdG5SZWQpYFxyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIkFib3V0IiwiZGl2IiwiR3JpZCIsIkRlc2NyaXB0aW9uIiwiSW1hZ2UiLCJUaXRsZSIsImgxIiwiUGFyYWdyYXBoIiwicCIsIkJ1dHRvbkNvbnRhaW5lciIsIkJ0blJlZCIsImEiLCJCdG5HcmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about/styles.ts\n");

/***/ })

});