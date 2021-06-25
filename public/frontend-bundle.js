/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/navigation */ \"./src/js/navigation.js\");\n/* harmony import */ var _src_js_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_js_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/skip-link-focus-fix */ \"./src/js/skip-link-focus-fix.js\");\n/* harmony import */ var _src_js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/aos'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3NyYy9qcy9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9zcmMvanMvc2tpcC1saW5rLWZvY3VzLWZpeCc7XG5pbXBvcnQgJy4vanMvYW9zJzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * File navigation.js.\n *\n * Handles toggling the navigation menu for small screens and enables TAB key\n * navigation support for dropdown menus.\n */\n(function () {\n  var container, button, menu, links, i, len, body, headerMenu; // Fix menu on scroll\n\n  window.addEventListener('scroll', () => {\n    let headerMenu = document.querySelector('.header-menu');\n    let headerTop = document.querySelector('.header-top');\n\n    if (window.scrollY > 10) {\n      headerMenu.classList.add('lg:fixed', 'lg:bg-blue-transparent', 'lg:w-full');\n      headerTop.style.paddingTop = headerMenu.offsetHeight + 'px';\n    } else {\n      headerMenu.classList.remove('lg:fixed', 'lg:bg-blue-transparent', 'lg:w-full');\n      headerTop.style.paddingTop = 0;\n    }\n  });\n  container = document.getElementById('site-navigation');\n\n  if (!container) {\n    return;\n  }\n\n  button = document.querySelector('button.hamburger');\n\n  if ('undefined' === typeof button) {\n    return;\n  }\n\n  body = document.body;\n  menu = container.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.\n\n  if ('undefined' === typeof menu) {\n    button.style.display = 'none';\n    return;\n  }\n\n  menu.setAttribute('aria-expanded', 'false');\n\n  if (-1 === menu.className.indexOf('nav-menu')) {\n    menu.className += ' nav-menu';\n  }\n\n  button.onclick = function () {\n    if (-1 !== container.className.indexOf('toggled')) {\n      container.className = container.className.replace(' toggled', '');\n      button.setAttribute('aria-expanded', 'false');\n      button.classList.remove('is-active');\n      menu.setAttribute('aria-expanded', 'false');\n      body.classList.remove('menu-open');\n    } else {\n      container.className += ' toggled';\n      button.setAttribute('aria-expanded', 'true');\n      button.classList.add('is-active');\n      menu.setAttribute('aria-expanded', 'true');\n      body.classList.add('menu-open');\n    }\n  }; // Get all the link elements within the menu.\n\n\n  links = menu.getElementsByTagName('a'); // Each time a menu link is focused or blurred, toggle focus.\n\n  for (i = 0, len = links.length; i < len; i++) {\n    links[i].addEventListener('focus', toggleFocus, true);\n    links[i].addEventListener('blur', toggleFocus, true);\n  }\n  /**\n   * Sets or removes .focus class on an element.\n   */\n\n\n  function toggleFocus() {\n    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.\n\n    while (-1 === self.className.indexOf('nav-menu')) {\n      // On li elements toggle the class .focus.\n      if ('li' === self.tagName.toLowerCase()) {\n        if (-1 !== self.className.indexOf('focus')) {\n          self.className = self.className.replace(' focus', '');\n        } else {\n          self.className += ' focus';\n        }\n      }\n\n      self = self.parentElement;\n    }\n  }\n  /**\n   * Toggles `focus` class to allow submenu access on tablets.\n   */\n\n\n  (function (container) {\n    var touchStartFn,\n        i,\n        parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');\n\n    if ('ontouchstart' in window) {\n      touchStartFn = function (e) {\n        var menuItem = this.parentNode,\n            i;\n\n        if (!menuItem.classList.contains('focus')) {\n          e.preventDefault();\n\n          for (i = 0; i < menuItem.parentNode.children.length; ++i) {\n            if (menuItem === menuItem.parentNode.children[i]) {\n              continue;\n            }\n\n            menuItem.parentNode.children[i].classList.remove('focus');\n          }\n\n          menuItem.classList.add('focus');\n        } else {\n          menuItem.classList.remove('focus');\n        }\n      };\n\n      for (i = 0; i < parentLink.length; ++i) {\n        parentLink[i].addEventListener('touchstart', touchStartFn, false);\n      }\n    }\n  })(container);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbmF2aWdhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9uYXZpZ2F0aW9uLmpzPzIzNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIG5hdmlnYXRpb24uanMuXG4gKlxuICogSGFuZGxlcyB0b2dnbGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGZvciBzbWFsbCBzY3JlZW5zIGFuZCBlbmFibGVzIFRBQiBrZXlcbiAqIG5hdmlnYXRpb24gc3VwcG9ydCBmb3IgZHJvcGRvd24gbWVudXMuXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBjb250YWluZXIsIGJ1dHRvbiwgbWVudSwgbGlua3MsIGksIGxlbiwgYm9keSwgaGVhZGVyTWVudTsgLy8gRml4IG1lbnUgb24gc2Nyb2xsXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBsZXQgaGVhZGVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbWVudScpO1xuICAgIGxldCBoZWFkZXJUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXRvcCcpO1xuXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTApIHtcbiAgICAgIGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZCgnbGc6Zml4ZWQnLCAnbGc6YmctYmx1ZS10cmFuc3BhcmVudCcsICdsZzp3LWZ1bGwnKTtcbiAgICAgIGhlYWRlclRvcC5zdHlsZS5wYWRkaW5nVG9wID0gaGVhZGVyTWVudS5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2xnOmZpeGVkJywgJ2xnOmJnLWJsdWUtdHJhbnNwYXJlbnQnLCAnbGc6dy1mdWxsJyk7XG4gICAgICBoZWFkZXJUb3Auc3R5bGUucGFkZGluZ1RvcCA9IDA7XG4gICAgfVxuICB9KTtcbiAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtbmF2aWdhdGlvbicpO1xuXG4gIGlmICghY29udGFpbmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmhhbWJ1cmdlcicpO1xuXG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGJ1dHRvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBtZW51ID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd1bCcpWzBdOyAvLyBIaWRlIG1lbnUgdG9nZ2xlIGJ1dHRvbiBpZiBtZW51IGlzIGVtcHR5IGFuZCByZXR1cm4gZWFybHkuXG5cbiAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgbWVudSkge1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgaWYgKC0xID09PSBtZW51LmNsYXNzTmFtZS5pbmRleE9mKCduYXYtbWVudScpKSB7XG4gICAgbWVudS5jbGFzc05hbWUgKz0gJyBuYXYtbWVudSc7XG4gIH1cblxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoLTEgIT09IGNvbnRhaW5lci5jbGFzc05hbWUuaW5kZXhPZigndG9nZ2xlZCcpKSB7XG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKCcgdG9nZ2xlZCcsICcnKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lICs9ICcgdG9nZ2xlZCc7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1vcGVuJyk7XG4gICAgfVxuICB9OyAvLyBHZXQgYWxsIHRoZSBsaW5rIGVsZW1lbnRzIHdpdGhpbiB0aGUgbWVudS5cblxuXG4gIGxpbmtzID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpOyAvLyBFYWNoIHRpbWUgYSBtZW51IGxpbmsgaXMgZm9jdXNlZCBvciBibHVycmVkLCB0b2dnbGUgZm9jdXMuXG5cbiAgZm9yIChpID0gMCwgbGVuID0gbGlua3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRvZ2dsZUZvY3VzLCB0cnVlKTtcbiAgICBsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdG9nZ2xlRm9jdXMsIHRydWUpO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIG9yIHJlbW92ZXMgLmZvY3VzIGNsYXNzIG9uIGFuIGVsZW1lbnQuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRm9jdXMoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzOyAvLyBNb3ZlIHVwIHRocm91Z2ggdGhlIGFuY2VzdG9ycyBvZiB0aGUgY3VycmVudCBsaW5rIHVudGlsIHdlIGhpdCAubmF2LW1lbnUuXG5cbiAgICB3aGlsZSAoLTEgPT09IHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoJ25hdi1tZW51JykpIHtcbiAgICAgIC8vIE9uIGxpIGVsZW1lbnRzIHRvZ2dsZSB0aGUgY2xhc3MgLmZvY3VzLlxuICAgICAgaWYgKCdsaScgPT09IHNlbGYudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGlmICgtMSAhPT0gc2VsZi5jbGFzc05hbWUuaW5kZXhPZignZm9jdXMnKSkge1xuICAgICAgICAgIHNlbGYuY2xhc3NOYW1lID0gc2VsZi5jbGFzc05hbWUucmVwbGFjZSgnIGZvY3VzJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuY2xhc3NOYW1lICs9ICcgZm9jdXMnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGYgPSBzZWxmLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBUb2dnbGVzIGBmb2N1c2AgY2xhc3MgdG8gYWxsb3cgc3VibWVudSBhY2Nlc3Mgb24gdGFibGV0cy5cbiAgICovXG5cblxuICAoZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIHZhciB0b3VjaFN0YXJ0Rm4sXG4gICAgICAgIGksXG4gICAgICAgIHBhcmVudExpbmsgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAucGFnZV9pdGVtX2hhc19jaGlsZHJlbiA+IGEnKTtcblxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgIHRvdWNoU3RhcnRGbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBtZW51SXRlbSA9IHRoaXMucGFyZW50Tm9kZSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgaWYgKCFtZW51SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzJykpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG1lbnVJdGVtID09PSBtZW51SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuW2ldKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZW51SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcGFyZW50TGluay5sZW5ndGg7ICsraSkge1xuICAgICAgICBwYXJlbnRMaW5rW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0Rm4sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKGNvbnRhaW5lcik7XG59KSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/navigation.js\n");

/***/ }),

/***/ "./src/js/skip-link-focus-fix.js":
/*!***************************************!*\
  !*** ./src/js/skip-link-focus-fix.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * File skip-link-focus-fix.js.\n *\n * Helps with accessibility for keyboard only users.\n *\n * Learn more: https://git.io/vWdr2\n */\n(function () {\n  var isIe = /(trident|msie)/i.test(navigator.userAgent);\n\n  if (isIe && document.getElementById && window.addEventListener) {\n    window.addEventListener('hashchange', function () {\n      var id = location.hash.substring(1),\n          element;\n\n      if (!/^[A-z0-9_-]+$/.test(id)) {\n        return;\n      }\n\n      element = document.getElementById(id);\n\n      if (element) {\n        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {\n          element.tabIndex = -1;\n        }\n\n        element.focus();\n      }\n    }, false);\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9za2lwLWxpbmstZm9jdXMtZml4LmpzP2VjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIHNraXAtbGluay1mb2N1cy1maXguanMuXG4gKlxuICogSGVscHMgd2l0aCBhY2Nlc3NpYmlsaXR5IGZvciBrZXlib2FyZCBvbmx5IHVzZXJzLlxuICpcbiAqIExlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0LmlvL3ZXZHIyXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBpc0llID0gLyh0cmlkZW50fG1zaWUpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICBpZiAoaXNJZSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgZWxlbWVudDtcblxuICAgICAgaWYgKCEvXltBLXowLTlfLV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoIS9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KGVsZW1lbnQudGFnTmFtZSkpIHtcbiAgICAgICAgICBlbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9XG59KSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/skip-link-focus-fix.js\n");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz9lNzBlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/style.scss\n");

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./index.js ./src/sass/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./index.js */"./index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });