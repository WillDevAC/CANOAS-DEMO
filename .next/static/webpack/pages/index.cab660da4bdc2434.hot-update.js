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

/***/ "./src/components/layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/layout/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/layout/styles.ts\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header */ \"./src/components/header/index.tsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sidebar */ \"./src/components/sidebar/index.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar layout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var myRef = useRef(null);\n    var toggle = function() {\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: isOpen,\n                toggle: toggle\n            }, void 0, false, {\n                fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/layout/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                toggle: toggle\n            }, void 0, false, {\n                fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/layout/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/layout/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(layout, \"On8PTnJXEV0ejtZo64kVVZZ14CE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (layout);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFFSDtBQUVRO0FBRUU7O0FBRTlDLEdBQUssQ0FBQ0ssTUFBTSxHQUFhLFFBQVEsUUFBWSxDQUFDO1FBQWpCQyxRQUFRLFNBQVJBLFFBQVE7O0lBRW5DLEdBQUssQ0FBdUJMLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5DTSxNQUFNLEdBQWVOLEdBQWUsS0FBNUJPLFNBQVMsR0FBSVAsR0FBZTtJQUUzQyxHQUFLLENBQUNRLEtBQUssR0FBR0MsTUFBTSxDQUFDLElBQUk7SUFFekIsR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFDakIsR0FEdUIsQ0FBQztRQUNwQkgsU0FBUyxFQUFFRCxNQUFNLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTTs7d0ZBRUNILDJEQUFPO2dCQUFDRyxNQUFNLEVBQUVBLE1BQU07Z0JBQUVJLE1BQU0sRUFBRUEsTUFBTTs7Ozs7O3dGQUN0Q1IsMERBQU07Z0JBQUNRLE1BQU0sRUFBRUEsTUFBTTs7Ozs7O3dGQUVyQlQsOENBQVM7MEJBQ0pJLFFBQVE7Ozs7Ozs7O0FBS3RCLENBQUM7R0FyQktELE1BQU07QUF1QlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudHN4P2VhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NpZGViYXInXG5cbmNvbnN0IGxheW91dDogUmVhY3QuRkMgPSAoIHsgY2hpbGRyZW4gfSApID0+IHtcblxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG15UmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+ICBcbiAgICAgICAgPFNpZGViYXIgaXNPcGVuPXtpc09wZW59IHRvZ2dsZT17dG9nZ2xlfS8+XG4gICAgICAgIDxIZWFkZXIgdG9nZ2xlPXt0b2dnbGV9Lz5cbiAgICAgICAgXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiU2lkZWJhciIsImxheW91dCIsImNoaWxkcmVuIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibXlSZWYiLCJ1c2VSZWYiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/index.tsx\n");

/***/ })

});