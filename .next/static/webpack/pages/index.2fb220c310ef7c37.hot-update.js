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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Grid\": function() { return /* binding */ Grid; },\n/* harmony export */   \"About\": function() { return /* binding */ About; },\n/* harmony export */   \"Image\": function() { return /* binding */ Image; },\n/* harmony export */   \"Text\": function() { return /* binding */ Text; },\n/* harmony export */   \"ButtonContainer\": function() { return /* binding */ ButtonContainer; },\n/* harmony export */   \"BtnPink\": function() { return /* binding */ BtnPink; },\n/* harmony export */   \"BtnBlue\": function() { return /* binding */ BtnBlue; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: grid;\\n  min-height: 10rem;\\n\\n  grid-template-columns: 4fr 5fr;\\n  @media screen and (max-width: 850px) {\\n    grid-template-columns: 1fr;\\n    gap: 100px;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: #FFF;  \\n  padding: 30px 50px;\\n  @media screen and (max-width: 850px) {\\n    padding: 30px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  \\n  img{\\n    width: 50%\\n  }\\n\\n  @media screen and (max-width: 1280px) {\\n    justify-content: flex-start;\\n    width: 150%;\\n  }\\n\\n  @media screen and (max-width: 850px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: flex-start;\\n  padding-top: 2%;\\n\\n  @media screen and (max-width: 480px) {\\n    justify-content: center;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: white;\\n  padding: 10px 20px;\\n  border-radius: 5px;\\n  background-color: #de80b0;\\n  cursor: pointer;\\n\\n  &:hover {\\n    transition: all 0.1s ease-in-out;\\n    transform: scale(1.03);\\n  }\\n\\n  @media screen and (max-width: 768px) {\\n    font-size: 0.8rem;\\n    padding: 10px 10px;\\n  }\\n\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: #44a3d9;\\n  margin-left: 10px;\\n  cursor: pointer;\\n\\n  &:hover {\\n    transition: all 0.1s ease-in-out;\\n    transform: scale(1.03);\\n  }\\n\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\n\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar About = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\nvar BtnPink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(_templateObject5());\nvar BtnBlue = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(BtnPink)(_templateObject6());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFK0IsQ0FTL0I7Ozs7Ozs7OztRQUVnQyxDQU1oQzs7Ozs7Ozs7O1FBRWdDLENBaUJoQzs7Ozs7Ozs7O1FBRStCLENBSS9COzs7Ozs7Ozs7UUFFMEMsQ0FRMUM7Ozs7Ozs7OztRQUVnQyxDQWlCaEM7Ozs7Ozs7OztRQUV1QyxDQVV2Qzs7Ozs7OztBQXJGc0M7QUFFL0IsR0FBSyxDQUFDQyxJQUFJLEdBQUdELDZEQUFVO0FBV3ZCLEdBQUssQ0FBQ0csS0FBSyxHQUFHSCw2REFBVTtBQVF4QixHQUFLLENBQUNJLEtBQUssR0FBR0osNkRBQVU7QUFtQnhCLEdBQUssQ0FBQ0ssSUFBSSxHQUFHTCw2REFBVTtBQU12QixHQUFLLENBQUNNLGVBQWUsR0FBR04sNkRBQVU7QUFVbEMsR0FBSyxDQUFDTyxPQUFPLEdBQUdQLDJEQUFRO0FBbUJ4QixHQUFLLENBQUNTLE9BQU8sR0FBR1QsNkRBQU0sQ0FBQ08sT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hYm91dC9zdHlsZXMudHM/NDA2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xyXG5cclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciA1ZnI7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAxMDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7ICBcclxuICBwYWRkaW5nOiAzMHB4IDUwcHg7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDUwJVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdG5QaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlODBiMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIH1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnRuQmx1ZSA9IHN0eWxlZChCdG5QaW5rKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRhM2Q5O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgfVxyXG5cclxuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiR3JpZCIsImRpdiIsIkFib3V0IiwiSW1hZ2UiLCJUZXh0IiwiQnV0dG9uQ29udGFpbmVyIiwiQnRuUGluayIsImEiLCJCdG5CbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/about/styles.ts\n");

/***/ })

});