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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Title\": function() { return /* binding */ Title; },\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"NavLink\": function() { return /* binding */ NavLink; },\n/* harmony export */   \"Hamburger\": function() { return /* binding */ Hamburger; },\n/* harmony export */   \"NavMenu\": function() { return /* binding */ NavMenu; },\n/* harmony export */   \"NavBtn\": function() { return /* binding */ NavBtn; },\n/* harmony export */   \"NavBtnLink\": function() { return /* binding */ NavBtnLink; }\n/* harmony export */ });\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: white;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background: white;\\n  height: 90px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0.5rem calc((100vw - 1500px) / 2);\\n  z-index: 10;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: #DE80B0;\\n  color: black;\\n  display: flex;\\n  align-items: center;\\n  text-decoration: none;\\n  padding: 0 2rem;\\n  height: 100%;\\n  cursor: pointer;\\n\\n  img {\\n    height: 64px;\\n  }\\n\\n  &:hover {\\n    color: #DE80B0;\\n    transform: scale(1.1);\\n    transition: all 0.1s ease-in-out;\\n  }\\n\\n  @media screen and (max-width: 1150px) {\\n    padding: 0 1rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: none;\\n  color: black;\\n  @media screen and (max-width: 960px) {\\n    display: block;\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    transform: translate(-100%, 75%);\\n    font-size: 1.8rem;\\n    cursor: pointer;\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  margin-right: -24px;\\n  @media screen and (max-width: 960px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n  margin-right: 24px;\\n  @media screen and (max-width: 960px) {\\n    display: none;\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  border-radius: 4px;\\n  background: #DE80B0;\\n  padding: 10px 22px;\\n  color: #fff;\\n  outline: none;\\n  border: none;\\n  cursor: pointer;\\n  transition: all 0.2s ease-in-out;\\n  text-decoration: none;\\n  margin-left: 24px;\\n\\n  &:hover {\\n    transition: all 0.2s ease-in-out;\\n    background: #46A4DA;\\n    color: white;\\n  }\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\n\n\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject());\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav(_templateObject1());\nvar NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(_templateObject2());\nvar Hamburger = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaBars)(_templateObject3());\nvar NavMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4());\nvar NavBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav(_templateObject5());\nvar NavBtnLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a(_templateObject6());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUcrQixDQUUvQjs7Ozs7Ozs7O1FBRThCLENBUTlCOzs7Ozs7Ozs7UUFFZ0MsQ0F1QmhDOzs7Ozs7Ozs7UUFFd0MsQ0FZeEM7Ozs7Ozs7OztRQUVrQyxDQU9sQzs7Ozs7Ozs7O1FBRWlDLENBT2pDOzs7Ozs7Ozs7UUFFbUMsQ0FpQm5DOzs7Ozs7O0FBM0Z1QztBQUNEO0FBRS9CLEdBQUssQ0FBQ0UsS0FBSyxHQUFHRCw0REFBUztBQUl2QixHQUFLLENBQUNHLEdBQUcsR0FBR0gsNkRBQVU7QUFVdEIsR0FBSyxDQUFDSyxPQUFPLEdBQUdMLDJEQUFRO0FBeUJ4QixHQUFLLENBQUNPLFNBQVMsR0FBR1AsNkRBQU0sQ0FBQ0Qsa0RBQU07QUFjL0IsR0FBSyxDQUFDUyxPQUFPLEdBQUdSLDZEQUFVO0FBUzFCLEdBQUssQ0FBQ1UsTUFBTSxHQUFHViw2REFBVTtBQVN6QixHQUFLLENBQUNXLFVBQVUsR0FBR1gsMkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3N0eWxlcy50cz8xMDhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhQmFycyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC41cmVtIGNhbGMoKDEwMHZ3IC0gMTUwMHB4KSAvIDIpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuYWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREU4MEIwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI0RFODBCMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhhbWJ1cmdlciA9IHN0eWxlZChGYUJhcnMpYFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDc1JSk7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2TWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogLTI0cHg7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkJ0biA9IHN0eWxlZC5uYXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMjRweDtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2QnRuTGluayA9IHN0eWxlZC5hYFxyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjREU4MEIwO1xyXG4gIHBhZGRpbmc6IDEwcHggMjJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgYmFja2dyb3VuZDogIzQ2QTREQTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7Il0sIm5hbWVzIjpbIkZhQmFycyIsInN0eWxlZCIsIlRpdGxlIiwiaDEiLCJOYXYiLCJuYXYiLCJOYXZMaW5rIiwiYSIsIkhhbWJ1cmdlciIsIk5hdk1lbnUiLCJkaXYiLCJOYXZCdG4iLCJOYXZCdG5MaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/styles.ts\n");

/***/ })

});