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

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/header/styles.ts\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Navbar = function(param) {\n    var toggle = param.toggle;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openModal = ref[0], setOpenModal = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var HandleRedirectButton = function() {\n        router.push('/dashboard');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n            id: \"header\",\n            className: \"header\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavLogo, {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"images/logo.webp\",\n                        alt: \"Logo algod\\xe3o doce canoas\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Hamburger, {\n                    onClick: toggle\n                }, void 0, false, {\n                    fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavMenu, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                            to: \"home\",\n                            smooth: true,\n                            duration: 500,\n                            offset: -50,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                            to: \"informations\",\n                            smooth: true,\n                            offset: -80,\n                            duration: 500,\n                            children: \"Para o seu filho\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                            to: \"about\",\n                            smooth: true,\n                            duration: 500,\n                            offset: -50,\n                            children: \"Sobre n\\xf3s\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                            to: \"classes\",\n                            smooth: true,\n                            duration: 500,\n                            offset: -130,\n                            children: \"Turmas\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                            onClick: function() {\n                                return HandleRedirectButton();\n                            },\n                            children: \"Restrito\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavBtn, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.NavBtnLink, {\n                        onClick: function() {\n                            setOpenModal(true);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Calendar, {}, void 0, false, {\n                                fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this),\n                            \" Agende sua visita\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/will/\\xc1rea de Trabalho/github/ALGODAO-DOCE-CANOAS/src/components/header/index.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Navbar, \"tOeL7QHIzzq+/L4EwgX5WyEiuI0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFFQTtBQVd0Qjs7QUFJakIsR0FBSyxDQUFDVyxNQUFNLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBZkMsTUFBTSxTQUFOQSxNQUFNOztJQUV2QixHQUFLLENBQTZCWCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUF6Q1ksU0FBUyxHQUFrQlosR0FBZSxLQUEvQmEsWUFBWSxHQUFJYixHQUFlO0lBRWpELEdBQUssQ0FBQ2MsTUFBTSxHQUFHYixzREFBUztJQUV4QixHQUFLLENBQUNjLG9CQUFvQixHQUFHLFFBQy9CLEdBRHFDLENBQUM7UUFDbENELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQVksWUFBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxNQUFNOzhGQUVEZCx3Q0FBRztZQUFDZSxFQUFFLEVBQUMsQ0FBUTtZQUFDQyxTQUFTLEVBQUMsQ0FBUTs7NEZBQ2hDVCw0Q0FBTztvQkFBQ1UsSUFBSSxFQUFDLENBQUc7MEdBQ2RDLENBQUc7d0JBQUNDLEdBQUcsRUFBQyxDQUFrQjt3QkFBQ0MsR0FBRyxFQUFDLENBQTBCOzs7Ozs7Ozs7Ozs0RkFFMURsQiw4Q0FBUTtvQkFBQ21CLE9BQU8sRUFBRVosTUFBTTs7Ozs7OzRGQUN6QkwsNENBQU87O29HQUNMSCw0Q0FBTzs0QkFBQ3FCLEVBQUUsRUFBQyxDQUFNOzRCQUFDQyxNQUFNLEVBQUUsSUFBSTs0QkFBRUMsUUFBUSxFQUFFLEdBQUc7NEJBQUVDLE1BQU0sR0FBRyxFQUFFO3NDQUFFLENBRTdEOzs7Ozs7b0dBQ0N4Qiw0Q0FBTzs0QkFBQ3FCLEVBQUUsRUFBQyxDQUFjOzRCQUFDQyxNQUFNLEVBQUUsSUFBSTs0QkFBRUUsTUFBTSxHQUFHLEVBQUU7NEJBQUVELFFBQVEsRUFBRSxHQUFHO3NDQUFFLENBRXJFOzs7Ozs7b0dBQ0N2Qiw0Q0FBTzs0QkFBQ3FCLEVBQUUsRUFBQyxDQUFPOzRCQUFDQyxNQUFNLEVBQUUsSUFBSTs0QkFBRUMsUUFBUSxFQUFFLEdBQUc7NEJBQUVDLE1BQU0sR0FBRyxFQUFFO3NDQUFFLENBRTlEOzs7Ozs7b0dBQ0N4Qiw0Q0FBTzs0QkFBQ3FCLEVBQUUsRUFBQyxDQUFTOzRCQUFDQyxNQUFNLEVBQUUsSUFBSTs0QkFBRUMsUUFBUSxFQUFFLEdBQUc7NEJBQUVDLE1BQU0sR0FBRyxHQUFHO3NDQUFFLENBRWpFOzs7Ozs7b0dBQ0N4Qiw0Q0FBTzs0QkFBQ29CLE9BQU8sRUFBRSxRQUFRO3VDQUFGUixvQkFBb0I7O3NDQUFJLENBRWhEOzs7Ozs7Ozs7Ozs7NEZBRURSLDJDQUFNOzBHQUNKQywrQ0FBVTt3QkFBQ2UsT0FBTyxFQUFFLFFBQVFWLEdBQUYsQ0FBQzs0QkFBQ0EsWUFBWSxDQUFDLElBQUk7d0JBQUUsQ0FBQzs7d0dBQ2hEUiw2Q0FBUTs7Ozs7NEJBQUUsQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWLENBQUM7R0ExQ0tLLE1BQU07O1FBSUtULGtEQUFTOzs7S0FKcEJTLE1BQU07QUE0Q1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4PzEyNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHtcbiAgTmF2LFxuICBOYXZMaW5rLFxuICBIYW1idXJnZXIsXG4gIENhbGVuZGFyLFxuICBOYXZNZW51LFxuICBOYXZCdG4sXG4gIE5hdkJ0bkxpbmssXG4gIE5hdkxvZ29cbn0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vbW9kYWwnXG5cbmNvbnN0IE5hdmJhciA9ICggeyB0b2dnbGUgfSApID0+IHtcblxuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgSGFuZGxlUmVkaXJlY3RCdXR0b24gPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXYgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPE5hdkxvZ28gaHJlZj0nLyc+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbG9nby53ZWJwXCIgYWx0PVwiTG9nbyBhbGdvZMOjbyBkb2NlIGNhbm9hc1wiIC8+XG4gICAgICAgIDwvTmF2TG9nbz5cbiAgICAgICAgPEhhbWJ1cmdlciBvbkNsaWNrPXt0b2dnbGV9Lz5cbiAgICAgICAgPE5hdk1lbnU+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCJob21lXCIgc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfSBvZmZzZXQ9ey01MH0+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiaW5mb3JtYXRpb25zXCIgc21vb3RoPXt0cnVlfSBvZmZzZXQ9ey04MH0gZHVyYXRpb249ezUwMH0+XG4gICAgICAgICAgICBQYXJhIG8gc2V1IGZpbGhvXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDxOYXZMaW5rIHRvPVwiYWJvdXRcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs1MDB9IG9mZnNldD17LTUwfT5cbiAgICAgICAgICAgIFNvYnJlIG7Ds3NcbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPE5hdkxpbmsgdG89XCJjbGFzc2VzXCIgc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfSBvZmZzZXQ9ey0xMzB9PlxuICAgICAgICAgICAgVHVybWFzXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDxOYXZMaW5rIG9uQ2xpY2s9eygpID0+IEhhbmRsZVJlZGlyZWN0QnV0dG9uKCl9PlxuICAgICAgICAgICAgUmVzdHJpdG9cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvTmF2TWVudT5cbiAgICAgICAgPE5hdkJ0bj5cbiAgICAgICAgICA8TmF2QnRuTGluayBvbkNsaWNrPXsoKSA9PiB7IHNldE9wZW5Nb2RhbCh0cnVlKSB9fT5cbiAgICAgICAgICA8Q2FsZW5kYXIvPiBBZ2VuZGUgc3VhIHZpc2l0YVxuICAgICAgICAgIDwvTmF2QnRuTGluaz5cbiAgICAgICAgPC9OYXZCdG4+XG4gICAgICA8L05hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk5hdiIsIk5hdkxpbmsiLCJIYW1idXJnZXIiLCJDYWxlbmRhciIsIk5hdk1lbnUiLCJOYXZCdG4iLCJOYXZCdG5MaW5rIiwiTmF2TG9nbyIsIk5hdmJhciIsInRvZ2dsZSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInJvdXRlciIsIkhhbmRsZVJlZGlyZWN0QnV0dG9uIiwicHVzaCIsImlkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJ0byIsInNtb290aCIsImR1cmF0aW9uIiwib2Zmc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/index.tsx\n");

/***/ })

});