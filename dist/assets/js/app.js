/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n(function($) { // Begin jQuery\r\n  $(function() { // DOM ready\r\n    // If a link has a dropdown, add sub menu toggle.\r\n    $('nav ul li a:not(:only-child)').click(function(e) {\r\n      $(this).siblings('.nav-dropdown').toggle();\r\n      // Close one dropdown when selecting another\r\n      $('.nav-dropdown').not($(this).siblings()).hide();\r\n      e.stopPropagation();\r\n    });\r\n    // Clicking away from dropdown will remove the dropdown class\r\n    $('html').click(function() {\r\n      $('.nav-dropdown').hide();\r\n    });\r\n    // Toggle open and close nav styles on click\r\n    $('#nav-toggle').click(function() {\r\n      $('nav ul').slideToggle();\r\n    });\r\n    // Hamburger to X toggle\r\n    $('#nav-toggle').on('click', function() {\r\n      this.classList.toggle('active');\r\n    });\r\n  }); // end DOM ready\r\n})(jQuery); // end jQuery\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;