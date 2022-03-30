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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Grid\": function() { return /* binding */ Grid; },\n/* harmony export */   \"About\": function() { return /* binding */ About; },\n/* harmony export */   \"Image\": function() { return /* binding */ Image; },\n/* harmony export */   \"Text\": function() { return /* binding */ Text; },\n/* harmony export */   \"Paragraph\": function() { return /* binding */ Paragraph; },\n/* harmony export */   \"ButtonContainer\": function() { return /* binding */ ButtonContainer; },\n/* harmony export */   \"BtnPink\": function() { return /* binding */ BtnPink; },\n/* harmony export */   \"BtnBlue\": function() { return /* binding */ BtnBlue; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: grid;\\n  min-height: 10rem;\\n\\n  grid-template-columns: 4fr 5fr;\\n  @media screen and (max-width: 850px) {\\n    grid-template-columns: 1fr;\\n    gap: 100px;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: #FFF;  \\n  padding: 30px 50px;\\n  @media screen and (max-width: 850px) {\\n    padding: 30px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  \\n  img{\\n    width: 50%\\n  }\\n\\n  @media screen and (max-width: 1280px) {\\n    justify-content: flex-start;\\n    width: 150%;\\n  }\\n\\n  @media screen and (max-width: 850px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: black;\\n  text-align: justify;\\n  padding-bottom: 2%;\\n  width: 80%;\\n  font-size: 1.1rem;\\n  padding-top: 2%;\\n\\n  @media screen and (max-width: 850px) {\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: flex-start;\\n  padding-top: 2%;\\n\\n  @media screen and (max-width: 480px) {\\n    justify-content: center;\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: white;\\n  padding: 10px 20px;\\n  border-radius: 5px;\\n  background-color: #de80b0;\\n  cursor: pointer;\\n\\n  &:hover {\\n    transition: all 0.1s ease-in-out;\\n    transform: scale(0.98);\\n    background: #de80b0;\\n    color: white;\\n  }\\n\\n  @media screen and (max-width: 768px) {\\n    font-size: 0.8rem;\\n    padding: 10px 10px;\\n  }\\n\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: #44a3d9;\\n  margin-left: 10px;\\n  cursor: pointer;\\n\\n  &:hover {\\n    transition: all 0.1s ease-in-out;\\n    transform: scale(0.98);\\n  }\\n\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\n\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar About = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(_templateObject4());\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject5());\nvar BtnPink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(_templateObject6());\nvar BtnBlue = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(BtnPink)(_templateObject7());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRStCLENBUy9COzs7Ozs7Ozs7UUFFZ0MsQ0FNaEM7Ozs7Ozs7OztRQUVnQyxDQWlCaEM7Ozs7Ozs7OztRQUUrQixDQUkvQjs7Ozs7Ozs7O1FBRWtDLENBV2xDOzs7Ozs7Ozs7UUFFMEMsQ0FRMUM7Ozs7Ozs7OztRQUVnQyxDQW1CaEM7Ozs7Ozs7OztRQUV1QyxDQVV2Qzs7Ozs7OztBQXBHc0M7QUFFL0IsR0FBSyxDQUFDQyxJQUFJLEdBQUdELDZEQUFVO0FBV3ZCLEdBQUssQ0FBQ0csS0FBSyxHQUFHSCw2REFBVTtBQVF4QixHQUFLLENBQUNJLEtBQUssR0FBR0osNkRBQVU7QUFtQnhCLEdBQUssQ0FBQ0ssSUFBSSxHQUFHTCw2REFBVTtBQU12QixHQUFLLENBQUNNLFNBQVMsR0FBR04sMkRBQVE7QUFhMUIsR0FBSyxDQUFDUSxlQUFlLEdBQUdSLDZEQUFVO0FBVWxDLEdBQUssQ0FBQ1MsT0FBTyxHQUFHVCwyREFBUTtBQXFCeEIsR0FBSyxDQUFDVyxPQUFPLEdBQUdYLDZEQUFNLENBQUNTLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQvc3R5bGVzLnRzPzQwNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgNWZyO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOyAgXHJcbiAgcGFkZGluZzogMzBweCA1MHB4O1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiA1MCVcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICB3aWR0aDogODAlO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ0blBpbmsgPSBzdHlsZWQuYWBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU4MGIwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGU4MGIwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIH1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnRuQmx1ZSA9IHN0eWxlZChCdG5QaW5rKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRhM2Q5O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5cclxuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiR3JpZCIsImRpdiIsIkFib3V0IiwiSW1hZ2UiLCJUZXh0IiwiUGFyYWdyYXBoIiwicCIsIkJ1dHRvbkNvbnRhaW5lciIsIkJ0blBpbmsiLCJhIiwiQnRuQmx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/about/styles.ts\n");

/***/ })

});