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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"NavLink\": function() { return /* binding */ NavLink; },\n/* harmony export */   \"Calendar\": function() { return /* binding */ Calendar; },\n/* harmony export */   \"Hamburger\": function() { return /* binding */ Hamburger; },\n/* harmony export */   \"NavMenu\": function() { return /* binding */ NavMenu; },\n/* harmony export */   \"NavBtn\": function() { return /* binding */ NavBtn; },\n/* harmony export */   \"NavBtnLink\": function() { return /* binding */ NavBtnLink; }\n/* harmony export */ });\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: white;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: white;\\n  height: 90px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0.5rem calc((100vw - 1500px) / 2);\\n  z-index: 10;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: black;\\n  display: block;\\n  align-items: center;\\n  text-decoration: none;\\n  padding: 0 2rem;\\n  height: 100%;\\n  cursor: pointer;\\n\\n  img {\\n    height: 64px;\\n  }\\n\\n  &:hover {\\n    color: #DE80B0;\\n    transform: scale(1.1);\\n    transition: all 0.1s ease-in-out;\\n  }\\n\\n  @media screen and (max-width: 1180px) {\\n    padding: 0 1rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin-right: 10px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: none;\\n  color: black;\\n  @media screen and (max-width: 960px) {\\n    display: block;\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    transform: translate(-100%, 75%);\\n    font-size: 1.8rem;\\n    cursor: pointer;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  margin-right: -24px;\\n  @media screen and (max-width: 960px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  margin-right: 24px;\\n  @media screen and (max-width: 960px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  border-radius: 4px;\\n  background: #DE80B0;\\n  padding: 10px 22px;\\n  color: #fff;\\n  outline: none;\\n  border: none;\\n  cursor: pointer;\\n  transition: all 0.2s ease-in-out;\\n  text-decoration: none;\\n  margin-left: 24px;\\n\\n  &:hover {\\n    transform: scale(1.03);\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject());\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav(_templateObject1());\nvar NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(_templateObject2());\nvar Calendar = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsFillCalendar2CheckFill)(_templateObject3());\nvar Hamburger = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaBars)(_templateObject4());\nvar NavMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject5());\nvar NavBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav(_templateObject6());\nvar NavBtnLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(_templateObject7());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSytCLENBRS9COzs7Ozs7Ozs7UUFFOEIsQ0FROUI7Ozs7Ozs7OztRQUVnQyxDQXNCaEM7Ozs7Ozs7OztRQUV5RCxDQUV6RDs7Ozs7Ozs7O1FBRXdDLENBWXhDOzs7Ozs7Ozs7UUFFa0MsQ0FPbEM7Ozs7Ozs7OztRQUVpQyxDQU9qQzs7Ozs7Ozs7O1FBRW1DLENBZ0JuQzs7Ozs7OztBQS9GdUM7QUFDRDtBQUVtQjtBQUVsRCxHQUFLLENBQUNHLEtBQUssR0FBR0YsNERBQVM7QUFJdkIsR0FBSyxDQUFDSSxHQUFHLEdBQUdKLDZEQUFVO0FBVXRCLEdBQUssQ0FBQ00sT0FBTyxHQUFHTiwyREFBUTtBQXdCeEIsR0FBSyxDQUFDUSxRQUFRLEdBQUdSLDZEQUFNLENBQUNDLG9FQUF3QjtBQUloRCxHQUFLLENBQUNRLFNBQVMsR0FBR1QsNkRBQU0sQ0FBQ0Qsa0RBQU07QUFjL0IsR0FBSyxDQUFDVyxPQUFPLEdBQUdWLDZEQUFVO0FBUzFCLEdBQUssQ0FBQ1ksTUFBTSxHQUFHWiw2REFBVTtBQVN6QixHQUFLLENBQUNhLFVBQVUsR0FBR2IsMkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3N0eWxlcy50cz8xMDhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhQmFycyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBCc0ZpbGxDYWxlbmRhcjJDaGVja0ZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW0gY2FsYygoMTAwdncgLSAxNTAwcHgpIC8gMik7XHJcbiAgei1pbmRleDogMTA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2TGluayA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogNjRweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNERTgwQjA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExODBweCkge1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYWxlbmRhciA9IHN0eWxlZChCc0ZpbGxDYWxlbmRhcjJDaGVja0ZpbGwpYFxyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIYW1idXJnZXIgPSBzdHlsZWQoRmFCYXJzKWBcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCA3NSUpO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdk1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IC0yNHB4O1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZCdG4gPSBzdHlsZWQubmF2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkJ0bkxpbmsgPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjREU4MEIwO1xyXG4gIHBhZGRpbmc6IDEwcHggMjJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgfVxyXG5gOyJdLCJuYW1lcyI6WyJGYUJhcnMiLCJzdHlsZWQiLCJCc0ZpbGxDYWxlbmRhcjJDaGVja0ZpbGwiLCJUaXRsZSIsImgxIiwiTmF2IiwibmF2IiwiTmF2TGluayIsImEiLCJDYWxlbmRhciIsIkhhbWJ1cmdlciIsIk5hdk1lbnUiLCJkaXYiLCJOYXZCdG4iLCJOYXZCdG5MaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/styles.ts\n");

/***/ })

});