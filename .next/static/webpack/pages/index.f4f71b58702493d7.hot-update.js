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

/***/ "./src/components/header/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/header/styles.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"NavLink\": function() { return /* binding */ NavLink; },\n/* harmony export */   \"Bars\": function() { return /* binding */ Bars; },\n/* harmony export */   \"NavMenu\": function() { return /* binding */ NavMenu; },\n/* harmony export */   \"NavBtn\": function() { return /* binding */ NavBtn; },\n/* harmony export */   \"NavBtnLink\": function() { return /* binding */ NavBtnLink; }\n/* harmony export */ });\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: white;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: white;\\n  height: 80px;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 0.5rem calc((100vw - 1000px) / 2);\\n  z-index: 10;\\n  justify-content: flex-start; \\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: #fff;\\n  display: flex;\\n  align-items: center;\\n  text-decoration: none;\\n  padding: 0 1rem;\\n  height: 100%;\\n  cursor: pointer;\\n  &.active {\\n    color: #15cdfc;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: none;\\n  color: #fff;\\n  @media screen and (max-width: 768px) {\\n    display: block;\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    transform: translate(-100%, 75%);\\n    font-size: 1.8rem;\\n    cursor: pointer;\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  margin-right: -24px;\\n  /* Second Nav */\\n  /* margin-right: 24px; */\\n  /* Third Nav */\\n  /* width: 100vw;\\n  white-space: nowrap; */\\n  @media screen and (max-width: 768px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  margin-right: 24px;\\n  /* Third Nav */\\n  /* justify-content: flex-end;\\n  width: 100vw; */\\n  @media screen and (max-width: 768px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border-radius: 4px;\\n  background: #256ce1;\\n  padding: 10px 22px;\\n  color: #fff;\\n  outline: none;\\n  border: none;\\n  cursor: pointer;\\n  transition: all 0.2s ease-in-out;\\n  text-decoration: none;\\n  /* Second Nav */\\n  margin-left: 24px;\\n  &:hover {\\n    transition: all 0.2s ease-in-out;\\n    background: #fff;\\n    color: #010606;\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\n\n\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject());\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav(_templateObject1());\nvar NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(_templateObject2());\nvar Bars = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaBars)(_templateObject3());\nvar NavMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\nvar NavBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav(_templateObject5());\nvar NavBtnLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(_templateObject6());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUcrQixDQUUvQjs7Ozs7Ozs7O1FBRThCLENBUTlCOzs7Ozs7Ozs7UUFFZ0MsQ0FXaEM7Ozs7Ozs7OztRQUVtQyxDQVluQzs7Ozs7Ozs7O1FBRWtDLENBWWxDOzs7Ozs7Ozs7UUFFaUMsQ0FVakM7Ozs7Ozs7OztRQUVtQyxDQWlCbkM7Ozs7Ozs7QUF2RnVDO0FBQ0Q7QUFFL0IsR0FBSyxDQUFDRSxLQUFLLEdBQUdELDREQUFTO0FBSXZCLEdBQUssQ0FBQ0csR0FBRyxHQUFHSCw2REFBVTtBQVV0QixHQUFLLENBQUNLLE9BQU8sR0FBR0wsMkRBQVE7QUFheEIsR0FBSyxDQUFDTyxJQUFJLEdBQUdQLDZEQUFNLENBQUNELGtEQUFNO0FBYzFCLEdBQUssQ0FBQ1MsT0FBTyxHQUFHUiw2REFBVTtBQWMxQixHQUFLLENBQUNVLE1BQU0sR0FBR1YsNkRBQVU7QUFZekIsR0FBSyxDQUFDVyxVQUFVLEdBQUdYLDJEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9zdHlsZXMudHM/MTA4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYUJhcnMgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVyZW0gY2FsYygoMTAwdncgLSAxMDAwcHgpIC8gMik7XG4gIHotaW5kZXg6IDEwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IFxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJi5hY3RpdmUge1xuICAgIGNvbG9yOiAjMTVjZGZjO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQmFycyA9IHN0eWxlZChGYUJhcnMpYFxuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCA3NSUpO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdk1lbnUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IC0yNHB4O1xuICAvKiBTZWNvbmQgTmF2ICovXG4gIC8qIG1hcmdpbi1yaWdodDogMjRweDsgKi9cbiAgLyogVGhpcmQgTmF2ICovXG4gIC8qIHdpZHRoOiAxMDB2dztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2QnRuID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAvKiBUaGlyZCBOYXYgKi9cbiAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMHZ3OyAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZCdG5MaW5rID0gc3R5bGVkLmFgXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogIzI1NmNlMTtcbiAgcGFkZGluZzogMTBweCAyMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8qIFNlY29uZCBOYXYgKi9cbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICY6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwMTA2MDY7XG4gIH1cbmA7Il0sIm5hbWVzIjpbIkZhQmFycyIsInN0eWxlZCIsIlRpdGxlIiwiaDEiLCJOYXYiLCJuYXYiLCJOYXZMaW5rIiwiYSIsIkJhcnMiLCJOYXZNZW51IiwiZGl2IiwiTmF2QnRuIiwiTmF2QnRuTGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/styles.ts\n");

/***/ })

});