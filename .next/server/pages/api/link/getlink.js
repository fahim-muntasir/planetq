"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/link/getlink";
exports.ids = ["pages/api/link/getlink"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flink%2Fgetlink&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Flink%2Fgetlink.js&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flink%2Fgetlink&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Flink%2Fgetlink.js&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_link_getlink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/link/getlink.js */ \"(api)/./pages/api/link/getlink.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_link_getlink_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_link_getlink_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/link/getlink\",\n        pathname: \"/api/link/getlink\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_link_getlink_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmxpbmslMkZnZXRsaW5rJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZhcGklMkZsaW5rJTJGZ2V0bGluay5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUN3RDtBQUN4RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsdURBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLHVEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudDEvPzg0NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzL2FwaS9saW5rL2dldGxpbmsuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9saW5rL2dldGxpbmtcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9saW5rL2dldGxpbmtcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flink%2Fgetlink&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Flink%2Fgetlink.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { ObjectId } = __webpack_require__(/*! mongodb */ \"mongodb\");\nasync function connectToDatabase() {\n    let client;\n    const connectionString = `mongodb+srv://${\"ghufran\"}:${\"Allahis1\"}@${\"cluster0\"}.psik2ae.mongodb.net/${\"planetradioclient\"}?retryWrites=true&w=majority`;\n    try {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(connectionString, {\n            connectTimeoutMS: 600000,\n            serverSelectionTimeoutMS: 60000\n        });\n        console.log(\"Connecting to MongoDB Atlas cluster...\");\n        await client.connect();\n        console.log(\"Successfully connected to MongoDB Atlas!\");\n        return client;\n    } catch (error) {\n        console.error(\"Connection to MongoDB Atlas failed!\", error);\n        process.exit();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBQ3RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLHdCQUFTO0FBRS9CLGVBQWVDO0lBQ3BCLElBQUlDO0lBRUosTUFBTUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFQyxTQUE0QixDQUFDLENBQUMsRUFBRUEsVUFBNEIsQ0FBQyxDQUFDLEVBQUVBLFVBQStCLENBQUMscUJBQXFCLEVBQUVBLG1CQUE0QixDQUFDLDRCQUE0QixDQUFDO0lBRTNOLElBQUk7UUFDRkYsU0FBUyxJQUFJSixnREFBV0EsQ0FBQ0ssa0JBQWtCO1lBQ3pDTyxrQkFBa0I7WUFDbEJDLDBCQUEwQjtRQUM1QjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNWCxPQUFPWSxPQUFPO1FBQ3BCRixRQUFRQyxHQUFHLENBQUM7UUFFWixPQUFPWDtJQUNULEVBQUUsT0FBT2EsT0FBTztRQUNkSCxRQUFRRyxLQUFLLENBQUMsdUNBQXVDQTtRQUNyRFgsUUFBUVksSUFBSTtJQUNkO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQxLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuY29uc3QgeyBPYmplY3RJZCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgbGV0IGNsaWVudDtcblxuICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gYG1vbmdvZGIrc3J2Oi8vJHtwcm9jZXNzLmVudi5tb25nb2RiX3VzZXJuYW1lfToke3Byb2Nlc3MuZW52Lm1vbmdvZGJfcGFzc3dvcmR9QCR7cHJvY2Vzcy5lbnYubW9uZ29kYl9jbHVzdGVybmFtZX0ucHNpazJhZS5tb25nb2RiLm5ldC8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfZGF0YWJhc2V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWA7XG5cbiAgdHJ5IHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQoY29ubmVjdGlvblN0cmluZywge1xuICAgICAgY29ubmVjdFRpbWVvdXRNUzogNjAwMDAwLFxuICAgICAgc2VydmVyU2VsZWN0aW9uVGltZW91dE1TOiA2MDAwMCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RpbmcgdG8gTW9uZ29EQiBBdGxhcyBjbHVzdGVyLi4uXCIpO1xuICAgIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIE1vbmdvREIgQXRsYXMhXCIpO1xuXG4gICAgcmV0dXJuIGNsaWVudDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQ29ubmVjdGlvbiB0byBNb25nb0RCIEF0bGFzIGZhaWxlZCFcIiwgZXJyb3IpO1xuICAgIHByb2Nlc3MuZXhpdCgpO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIk9iamVjdElkIiwicmVxdWlyZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xpZW50IiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJtb25nb2RiX3VzZXJuYW1lIiwibW9uZ29kYl9wYXNzd29yZCIsIm1vbmdvZGJfY2x1c3Rlcm5hbWUiLCJtb25nb2RiX2RhdGFiYXNlIiwiY29ubmVjdFRpbWVvdXRNUyIsInNlcnZlclNlbGVjdGlvblRpbWVvdXRNUyIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwiZXJyb3IiLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.js\");\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            async authorize (credentials) {\n                const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n                const usersCollection = client.db().collection(\"login\");\n                const user = await usersCollection.findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    throw new Error(\"User does not exist with this gmail\");\n                }\n                const isValid = await usersCollection.findOne({\n                    password: credentials.password\n                });\n                if (!isValid) {\n                    throw new Error(\"Incorrect password!\");\n                }\n                return {\n                    id: user._id,\n                    email: user.email,\n                    userType: user.userType,\n                    sessionId: user.sessionId,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    session: {\n        maxAge: 30 * 60\n    },\n    callbacks: {\n        async jwt ({ token, user, trigger, session }) {\n            if (trigger === \"update\" && session?.userType) {\n                token.userType = session.userType;\n                token.sessionId = session.sessionId;\n            }\n            if (user) {\n                token.id = user.id;\n                token.userType = user.userType;\n                token.sessionId = user.sessionId;\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.userType = token.userType;\n                session.user.sessionId = token.sessionId;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    secret: \"LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDZDtBQUU3QyxNQUFNRyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1RILHNFQUFtQkEsQ0FBQztZQUNsQkksTUFBTTtZQUVOLE1BQU1DLFdBQVVDLFdBQVc7Z0JBQ3pCLE1BQU1DLFNBQVMsTUFBTU4sMERBQWlCQTtnQkFDdEMsTUFBTU8sa0JBQWtCRCxPQUFPRSxFQUFFLEdBQUdDLFVBQVUsQ0FBQztnQkFFL0MsTUFBTUMsT0FBTyxNQUFNSCxnQkFBZ0JJLE9BQU8sQ0FBQztvQkFDekNDLE9BQU9QLFlBQVlPLEtBQUs7Z0JBQzFCO2dCQUVBLElBQUksQ0FBQ0YsTUFBTTtvQkFDVCxNQUFNLElBQUlHLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1DLFVBQVUsTUFBTVAsZ0JBQWdCSSxPQUFPLENBQUM7b0JBQzVDSSxVQUFVVixZQUFZVSxRQUFRO2dCQUNoQztnQkFFQSxJQUFJLENBQUNELFNBQVM7b0JBQ1osTUFBTSxJQUFJRCxNQUFNO2dCQUNsQjtnQkFFQSxPQUFPO29CQUNMRyxJQUFJTixLQUFLTyxHQUFHO29CQUNaTCxPQUFPRixLQUFLRSxLQUFLO29CQUNqQk0sVUFBVVIsS0FBS1EsUUFBUTtvQkFDdkJDLFdBQVdULEtBQUtTLFNBQVM7b0JBQ3pCQyxNQUFNVixLQUFLVSxJQUFJO2dCQUNqQjtZQUNGO1FBQ0Y7S0FDRDtJQUVEQyxTQUFTO1FBQ1BDLFFBQVEsS0FBSztJQUNmO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRWYsSUFBSSxFQUFFZ0IsT0FBTyxFQUFFTCxPQUFPLEVBQUU7WUFDekMsSUFBSUssWUFBWSxZQUFZTCxTQUFTSCxVQUFVO2dCQUM3Q08sTUFBTVAsUUFBUSxHQUFHRyxRQUFRSCxRQUFRO2dCQUNqQ08sTUFBTU4sU0FBUyxHQUFHRSxRQUFRRixTQUFTO1lBQ3JDO1lBRUEsSUFBSVQsTUFBTTtnQkFDUmUsTUFBTVQsRUFBRSxHQUFHTixLQUFLTSxFQUFFO2dCQUNsQlMsTUFBTVAsUUFBUSxHQUFHUixLQUFLUSxRQUFRO2dCQUM5Qk8sTUFBTU4sU0FBUyxHQUFHVCxLQUFLUyxTQUFTO2dCQUNoQ00sTUFBTUwsSUFBSSxHQUFHVixLQUFLVSxJQUFJO1lBQ3hCO1lBRUEsT0FBT0s7UUFDVDtRQUNBLE1BQU1KLFNBQVEsRUFBRUEsT0FBTyxFQUFFSSxLQUFLLEVBQUU7WUFDOUIsSUFBSUEsT0FBTztnQkFDVEosUUFBUVgsSUFBSSxDQUFDTSxFQUFFLEdBQUdTLE1BQU1ULEVBQUU7Z0JBQzFCSyxRQUFRWCxJQUFJLENBQUNRLFFBQVEsR0FBR08sTUFBTVAsUUFBUTtnQkFDdENHLFFBQVFYLElBQUksQ0FBQ1MsU0FBUyxHQUFHTSxNQUFNTixTQUFTO2dCQUN4Q0UsUUFBUVgsSUFBSSxDQUFDVSxJQUFJLEdBQUdLLE1BQU1MLElBQUk7WUFDaEM7WUFFQSxPQUFPQztRQUNUO0lBQ0Y7SUFDQU0sUUFBUUMsOENBQTJCO0FBQ3JDLEVBQUU7QUFDRixpRUFBZTlCLGdEQUFRQSxDQUFDRyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50MS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKCkuY29sbGVjdGlvbihcImxvZ2luXCIpO1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIGRvZXMgbm90IGV4aXN0IHdpdGggdGhpcyBnbWFpbFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgcGFzc3dvcmQhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogdXNlci5faWQsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgdXNlclR5cGU6IHVzZXIudXNlclR5cGUsXG4gICAgICAgICAgc2Vzc2lvbklkOiB1c2VyLnNlc3Npb25JZCxcbiAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIHNlc3Npb246IHtcbiAgICBtYXhBZ2U6IDMwICogNjAsIC8vIFNldCBtYXhBZ2UgdG8gMTAgc2Vjb25kc1xuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgdHJpZ2dlciwgc2Vzc2lvbiB9KSB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gXCJ1cGRhdGVcIiAmJiBzZXNzaW9uPy51c2VyVHlwZSkge1xuICAgICAgICB0b2tlbi51c2VyVHlwZSA9IHNlc3Npb24udXNlclR5cGU7XG4gICAgICAgIHRva2VuLnNlc3Npb25JZCA9IHNlc3Npb24uc2Vzc2lvbklkO1xuICAgICAgfVxuXG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICAgIHRva2VuLnVzZXJUeXBlID0gdXNlci51c2VyVHlwZTtcbiAgICAgICAgdG9rZW4uc2Vzc2lvbklkID0gdXNlci5zZXNzaW9uSWQ7XG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XG4gICAgICAgIHNlc3Npb24udXNlci51c2VyVHlwZSA9IHRva2VuLnVzZXJUeXBlO1xuICAgICAgICBzZXNzaW9uLnVzZXIuc2Vzc2lvbklkID0gdG9rZW4uc2Vzc2lvbklkO1xuICAgICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufTtcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb25uZWN0VG9EYXRhYmFzZSIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiY2xpZW50IiwidXNlcnNDb2xsZWN0aW9uIiwiZGIiLCJjb2xsZWN0aW9uIiwidXNlciIsImZpbmRPbmUiLCJlbWFpbCIsIkVycm9yIiwiaXNWYWxpZCIsInBhc3N3b3JkIiwiaWQiLCJfaWQiLCJ1c2VyVHlwZSIsInNlc3Npb25JZCIsInJvbGUiLCJzZXNzaW9uIiwibWF4QWdlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ0cmlnZ2VyIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/link/getlink.js":
/*!***********************************!*\
  !*** ./pages/api/link/getlink.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n        return;\n    }\n    try {\n        const client = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const db = client.db();\n        const videoLinksCollection = db.collection(\"videolinks\");\n        const usersCollection = db.collection(\"login\");\n        // Get session to check if user is authenticated\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        // Fetch all video links\n        let videoLinks;\n        if (session) {\n            const isAdmin = session.user.role === \"admin\";\n            //console.log(session);\n            //console.log(session.user.role);\n            if (isAdmin) {\n                videoLinks = await videoLinksCollection.find({}).toArray();\n            } else {\n                videoLinks = await videoLinksCollection.find({\n                    status: \"active\"\n                }).toArray();\n            }\n        } else {\n            videoLinks = await videoLinksCollection.find({\n                status: \"active\"\n            }).toArray();\n        }\n        const populatedVideoLinks = await Promise.all(videoLinks.map(async (videoLink)=>{\n            const user = await usersCollection.findOne({\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(videoLink.user)\n            });\n            if (user) {\n                const { password, ...userWithoutPassword } = user;\n                return {\n                    ...videoLink,\n                    user: userWithoutPassword\n                };\n            }\n            return videoLink;\n        }));\n        res.status(200).json(populatedVideoLinks);\n    } catch (error) {\n        console.error(\"Error:\", error);\n        res.status(500).json({\n            message: \"Internal Server Error: Unable to get music\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGluay9nZXRsaW5rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkM7QUFDVjtBQUMwQjtBQUNYO0FBRWxELGVBQWVJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM3QixJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QkQsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO1FBQ3JEO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNWCwwREFBaUJBO1FBQ3RDLE1BQU1ZLEtBQUtELE9BQU9DLEVBQUU7UUFDcEIsTUFBTUMsdUJBQXVCRCxHQUFHRSxVQUFVLENBQUM7UUFDM0MsTUFBTUMsa0JBQWtCSCxHQUFHRSxVQUFVLENBQUM7UUFFdEMsZ0RBQWdEO1FBQ2hELE1BQU1FLFVBQVUsTUFBTWIsZ0VBQWdCQSxDQUFDRSxLQUFLQyxLQUFLSixrRUFBV0E7UUFFNUQsd0JBQXdCO1FBQ3hCLElBQUllO1FBQ0osSUFBSUQsU0FBUztZQUNYLE1BQU1FLFVBQVVGLFFBQVFHLElBQUksQ0FBQ0MsSUFBSSxLQUFLO1lBQ3RDLHVCQUF1QjtZQUN2QixpQ0FBaUM7WUFDakMsSUFBSUYsU0FBUztnQkFDWEQsYUFBYSxNQUFNSixxQkFBcUJRLElBQUksQ0FBQyxDQUFDLEdBQUdDLE9BQU87WUFDMUQsT0FBTztnQkFDTEwsYUFBYSxNQUFNSixxQkFBcUJRLElBQUksQ0FBQztvQkFBRWIsUUFBUTtnQkFBUyxHQUFHYyxPQUFPO1lBQzVFO1FBQ0YsT0FBTztZQUNMTCxhQUFhLE1BQU1KLHFCQUFxQlEsSUFBSSxDQUFDO2dCQUFFYixRQUFRO1lBQVMsR0FBR2MsT0FBTztRQUM1RTtRQUVBLE1BQU1DLHNCQUFzQixNQUFNQyxRQUFRQyxHQUFHLENBQzNDUixXQUFXUyxHQUFHLENBQUMsT0FBT0M7WUFDcEIsTUFBTVIsT0FBTyxNQUFNSixnQkFBZ0JhLE9BQU8sQ0FBQztnQkFBRUMsS0FBSyxJQUFJNUIsNkNBQVFBLENBQUMwQixVQUFVUixJQUFJO1lBQUU7WUFFL0UsSUFBSUEsTUFBTTtnQkFDUixNQUFNLEVBQUVXLFFBQVEsRUFBRSxHQUFHQyxxQkFBcUIsR0FBR1o7Z0JBRTdDLE9BQU87b0JBQ0wsR0FBR1EsU0FBUztvQkFDWlIsTUFBTVk7Z0JBQ1I7WUFDRjtZQUVBLE9BQU9KO1FBQ1Q7UUFHRnJCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNjO0lBQ3ZCLEVBQUUsT0FBT1MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsVUFBVUE7UUFDeEIxQixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBNkM7SUFDL0U7QUFDRjtBQUVBLGlFQUFlTixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50MS8uL3BhZ2VzL2FwaS9saW5rL2dldGxpbmsuanM/ZGFiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gICAgY29uc3QgdmlkZW9MaW5rc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwidmlkZW9saW5rc1wiKTtcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibG9naW5cIik7XG5cbiAgICAvLyBHZXQgc2Vzc2lvbiB0byBjaGVjayBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpO1xuXG4gICAgLy8gRmV0Y2ggYWxsIHZpZGVvIGxpbmtzXG4gICAgbGV0IHZpZGVvTGlua3M7XG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgIGNvbnN0IGlzQWRtaW4gPSBzZXNzaW9uLnVzZXIucm9sZSA9PT0gXCJhZG1pblwiO1xuICAgICAgLy9jb25zb2xlLmxvZyhzZXNzaW9uKTtcbiAgICAgIC8vY29uc29sZS5sb2coc2Vzc2lvbi51c2VyLnJvbGUpO1xuICAgICAgaWYgKGlzQWRtaW4pIHtcbiAgICAgICAgdmlkZW9MaW5rcyA9IGF3YWl0IHZpZGVvTGlua3NDb2xsZWN0aW9uLmZpbmQoe30pLnRvQXJyYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZGVvTGlua3MgPSBhd2FpdCB2aWRlb0xpbmtzQ29sbGVjdGlvbi5maW5kKHsgc3RhdHVzOiBcImFjdGl2ZVwiIH0pLnRvQXJyYXkoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmlkZW9MaW5rcyA9IGF3YWl0IHZpZGVvTGlua3NDb2xsZWN0aW9uLmZpbmQoeyBzdGF0dXM6IFwiYWN0aXZlXCIgfSkudG9BcnJheSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcHVsYXRlZFZpZGVvTGlua3MgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHZpZGVvTGlua3MubWFwKGFzeW5jICh2aWRlb0xpbmspID0+IHtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SWQodmlkZW9MaW5rLnVzZXIpIH0pO1xuXG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgY29uc3QgeyBwYXNzd29yZCwgLi4udXNlcldpdGhvdXRQYXNzd29yZCB9ID0gdXNlcjtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi52aWRlb0xpbmssXG4gICAgICAgICAgICB1c2VyOiB1c2VyV2l0aG91dFBhc3N3b3JkLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmlkZW9MaW5rO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocG9wdWxhdGVkVmlkZW9MaW5rcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvcjogVW5hYmxlIHRvIGdldCBtdXNpY1wiIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG5cblxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiT2JqZWN0SWQiLCJhdXRoT3B0aW9ucyIsImdldFNlcnZlclNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjbGllbnQiLCJkYiIsInZpZGVvTGlua3NDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInVzZXJzQ29sbGVjdGlvbiIsInNlc3Npb24iLCJ2aWRlb0xpbmtzIiwiaXNBZG1pbiIsInVzZXIiLCJyb2xlIiwiZmluZCIsInRvQXJyYXkiLCJwb3B1bGF0ZWRWaWRlb0xpbmtzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInZpZGVvTGluayIsImZpbmRPbmUiLCJfaWQiLCJwYXNzd29yZCIsInVzZXJXaXRob3V0UGFzc3dvcmQiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/link/getlink.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flink%2Fgetlink&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Flink%2Fgetlink.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();