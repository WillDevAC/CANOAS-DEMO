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

/***/ "./src/components/modal/styles.ts":
/*!****************************************!*\
  !*** ./src/components/modal/styles.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalBackground\": function() { return /* binding */ ModalBackground; },\n/* harmony export */   \"ModalContainer\": function() { return /* binding */ ModalContainer; },\n/* harmony export */   \"TitleCloseBtn\": function() { return /* binding */ TitleCloseBtn; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"Body\": function() { return /* binding */ Body; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: white;\\n  position: fixed;\\n  display: flex;\\n  flex-direction: column;\\n  padding-top: 100px;\\n  justify-content: flex-start;\\n  align-items: center;\\n  z-index: 999;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin: 0 25px;\\n  border-radius: 12px;\\n  background-color: white;\\n  box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 25px;\\n\\n  form {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 15px;\\n  }\\n\\n  label {\\n    color: #44a3d9;\\n    text-align: left;\\n  }\\n\\n  input {\\n    padding: 10px 20px;\\n    border-radius: 5px;\\n    border: 2px solid #DE80B0;\\n\\n    &:last-child {\\n      margin-bottom: 5%;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    justify-content: flex-end;\\n\\n    button {\\n        background-color: transparent;\\n        border: none;\\n        color: #44a3d9;\\n        font-size: 25px;\\n\\n        &:hover {\\n          transition: 0.1s ease-in-out;\\n          color: #DE80B0;\\n          cursor: pointer;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #DE80B0;\\n  display: inline-block;\\n  text-align: center;\\n  margin: 20px 0;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  flex: 50%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 1.7rem;\\n  text-align: center;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  flex: 20%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\n\nvar ModalBackground = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject1());\nvar TitleCloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\nvar Body = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\nvar Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject5());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUUwQyxDQVcxQzs7Ozs7Ozs7O1FBRXlDLENBNkJ6Qzs7Ozs7Ozs7O1FBRXlDLENBZ0J6Qzs7Ozs7Ozs7O1FBRWdDLENBS2hDOzs7Ozs7Ozs7UUFFK0IsQ0FPL0I7Ozs7Ozs7OztRQUVpQyxDQUtqQzs7Ozs7OztBQXJGc0M7QUFFL0IsR0FBSyxDQUFDQyxlQUFlLEdBQUdELDZEQUFVO0FBYWxDLEdBQUssQ0FBQ0csY0FBYyxHQUFHSCw2REFBVTtBQStCakMsR0FBSyxDQUFDSSxhQUFhLEdBQUdKLDZEQUFVO0FBa0JoQyxHQUFLLENBQUNLLEtBQUssR0FBR0wsNkRBQVU7QUFPeEIsR0FBSyxDQUFDTSxJQUFJLEdBQUdOLDZEQUFVO0FBU3ZCLEdBQUssQ0FBQ08sTUFBTSxHQUFHUCw2REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2RhbC9zdHlsZXMudHM/M2UyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMzUpIDBweCA1cHggMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMjVweDtcclxuXHJcbiAgZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTVweDtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGNvbG9yOiAjNDRhM2Q5O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNERTgwQjA7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlQ2xvc2VCdG4gPSBzdHlsZWQuZGl2IGBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjNDRhM2Q5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgY29sb3I6ICNERTgwQjA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogI0RFODBCMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIk1vZGFsQmFja2dyb3VuZCIsImRpdiIsIk1vZGFsQ29udGFpbmVyIiwiVGl0bGVDbG9zZUJ0biIsIlRpdGxlIiwiQm9keSIsIkZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/modal/styles.ts\n");

/***/ })

});