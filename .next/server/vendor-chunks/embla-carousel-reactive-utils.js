"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-reactive-utils";
exports.ids = ["vendor-chunks/embla-carousel-reactive-utils"];
exports.modules = {

/***/ "(ssr)/./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   areOptionsEqual: () => (/* binding */ areOptionsEqual),\n/* harmony export */   arePluginsEqual: () => (/* binding */ arePluginsEqual),\n/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),\n/* harmony export */   sortAndMapPluginToOptions: () => (/* binding */ sortAndMapPluginToOptions)\n/* harmony export */ });\nfunction isObject(subject) {\n  return Object.prototype.toString.call(subject) === '[object Object]';\n}\nfunction isRecord(subject) {\n  return isObject(subject) || Array.isArray(subject);\n}\nfunction canUseDOM() {\n  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);\n}\nfunction areOptionsEqual(optionsA, optionsB) {\n  const optionsAKeys = Object.keys(optionsA);\n  const optionsBKeys = Object.keys(optionsB);\n  if (optionsAKeys.length !== optionsBKeys.length) return false;\n  const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));\n  const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));\n  if (breakpointsA !== breakpointsB) return false;\n  return optionsAKeys.every(key => {\n    const valueA = optionsA[key];\n    const valueB = optionsB[key];\n    if (typeof valueA === 'function') return `${valueA}` === `${valueB}`;\n    if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;\n    return areOptionsEqual(valueA, valueB);\n  });\n}\nfunction sortAndMapPluginToOptions(plugins) {\n  return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map(plugin => plugin.options);\n}\nfunction arePluginsEqual(pluginsA, pluginsB) {\n  if (pluginsA.length !== pluginsB.length) return false;\n  const optionsA = sortAndMapPluginToOptions(pluginsA);\n  const optionsB = sortAndMapPluginToOptions(pluginsB);\n  return optionsA.every((optionA, index) => {\n    const optionB = optionsB[index];\n    return areOptionsEqual(optionA, optionB);\n  });\n}\n\n\n//# sourceMappingURL=embla-carousel-reactive-utils.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtcmVhY3RpdmUtdXRpbHMvZXNtL2VtYmxhLWNhcm91c2VsLXJlYWN0aXZlLXV0aWxzLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUUsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU8sU0FBUyxPQUFPO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFa0Y7QUFDbEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF90YXNrLy4vbm9kZV9tb2R1bGVzL2VtYmxhLWNhcm91c2VsLXJlYWN0aXZlLXV0aWxzL2VzbS9lbWJsYS1jYXJvdXNlbC1yZWFjdGl2ZS11dGlscy5lc20uanM/YjIwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpc09iamVjdChzdWJqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuZnVuY3Rpb24gaXNSZWNvcmQoc3ViamVjdCkge1xuICByZXR1cm4gaXNPYmplY3Qoc3ViamVjdCkgfHwgQXJyYXkuaXNBcnJheShzdWJqZWN0KTtcbn1cbmZ1bmN0aW9uIGNhblVzZURPTSgpIHtcbiAgcmV0dXJuICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG59XG5mdW5jdGlvbiBhcmVPcHRpb25zRXF1YWwob3B0aW9uc0EsIG9wdGlvbnNCKSB7XG4gIGNvbnN0IG9wdGlvbnNBS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnNBKTtcbiAgY29uc3Qgb3B0aW9uc0JLZXlzID0gT2JqZWN0LmtleXMob3B0aW9uc0IpO1xuICBpZiAob3B0aW9uc0FLZXlzLmxlbmd0aCAhPT0gb3B0aW9uc0JLZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBicmVha3BvaW50c0EgPSBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhvcHRpb25zQS5icmVha3BvaW50cyB8fCB7fSkpO1xuICBjb25zdCBicmVha3BvaW50c0IgPSBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhvcHRpb25zQi5icmVha3BvaW50cyB8fCB7fSkpO1xuICBpZiAoYnJlYWtwb2ludHNBICE9PSBicmVha3BvaW50c0IpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIG9wdGlvbnNBS2V5cy5ldmVyeShrZXkgPT4ge1xuICAgIGNvbnN0IHZhbHVlQSA9IG9wdGlvbnNBW2tleV07XG4gICAgY29uc3QgdmFsdWVCID0gb3B0aW9uc0Jba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbHVlQSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGAke3ZhbHVlQX1gID09PSBgJHt2YWx1ZUJ9YDtcbiAgICBpZiAoIWlzUmVjb3JkKHZhbHVlQSkgfHwgIWlzUmVjb3JkKHZhbHVlQikpIHJldHVybiB2YWx1ZUEgPT09IHZhbHVlQjtcbiAgICByZXR1cm4gYXJlT3B0aW9uc0VxdWFsKHZhbHVlQSwgdmFsdWVCKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzb3J0QW5kTWFwUGx1Z2luVG9PcHRpb25zKHBsdWdpbnMpIHtcbiAgcmV0dXJuIHBsdWdpbnMuY29uY2F0KCkuc29ydCgoYSwgYikgPT4gYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKS5tYXAocGx1Z2luID0+IHBsdWdpbi5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGFyZVBsdWdpbnNFcXVhbChwbHVnaW5zQSwgcGx1Z2luc0IpIHtcbiAgaWYgKHBsdWdpbnNBLmxlbmd0aCAhPT0gcGx1Z2luc0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IG9wdGlvbnNBID0gc29ydEFuZE1hcFBsdWdpblRvT3B0aW9ucyhwbHVnaW5zQSk7XG4gIGNvbnN0IG9wdGlvbnNCID0gc29ydEFuZE1hcFBsdWdpblRvT3B0aW9ucyhwbHVnaW5zQik7XG4gIHJldHVybiBvcHRpb25zQS5ldmVyeSgob3B0aW9uQSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBvcHRpb25CID0gb3B0aW9uc0JbaW5kZXhdO1xuICAgIHJldHVybiBhcmVPcHRpb25zRXF1YWwob3B0aW9uQSwgb3B0aW9uQik7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBhcmVPcHRpb25zRXF1YWwsIGFyZVBsdWdpbnNFcXVhbCwgY2FuVXNlRE9NLCBzb3J0QW5kTWFwUGx1Z2luVG9PcHRpb25zIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbWJsYS1jYXJvdXNlbC1yZWFjdGl2ZS11dGlscy5lc20uanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js\n");

/***/ })

};
;