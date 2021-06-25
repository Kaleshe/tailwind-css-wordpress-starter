/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
 (function() {
	var container, button, menu, links, i, len, body, headerMenu;
	
	// Fix menu on scroll
	window.addEventListener('scroll', () => {
	  let headerMenu = document.querySelector('.header-menu');
	  let headerTop = document.querySelector('.header-top');
  
	  if ( window.scrollY > 10 ) {
		headerMenu.classList.add('lg:fixed', 'lg:bg-blue-transparent', 'lg:w-full')
		headerTop.style.paddingTop = headerMenu.offsetHeight + 'px';
	  } else {
		headerMenu.classList.remove('lg:fixed', 'lg:bg-blue-transparent', 'lg:w-full');
		headerTop.style.paddingTop = 0;
	  }
	});
  
	container = document.getElementById('site-navigation');
	if (!container) {
	  return;
	}
  
	button = document.querySelector('button.hamburger');
	if ('undefined' === typeof button) {
	  return;
	}
	
	body = document.body;
  
	menu = container.getElementsByTagName('ul')[0];
  
	// Hide menu toggle button if menu is empty and return early.
	if ('undefined' === typeof menu) {
	  button.style.display = 'none';
	  return;
	}
  
	menu.setAttribute('aria-expanded', 'false');
	if (-1 === menu.className.indexOf('nav-menu')) {
	  menu.className += ' nav-menu';
	}
  
	button.onclick = function() {
	  if (-1 !== container.className.indexOf('toggled')) {
		container.className = container.className.replace(' toggled', '');
		button.setAttribute('aria-expanded', 'false');
		button.classList.remove('is-active');
		menu.setAttribute('aria-expanded', 'false');
		body.classList.remove('menu-open');
	  } else {
		container.className += ' toggled';
		button.setAttribute('aria-expanded', 'true');
		button.classList.add('is-active');
		menu.setAttribute('aria-expanded', 'true');
		body.classList.add('menu-open');
	  }
	};
  
	// Get all the link elements within the menu.
	links = menu.getElementsByTagName('a');
  
	// Each time a menu link is focused or blurred, toggle focus.
	for (i = 0, len = links.length; i < len; i++) {
	  links[i].addEventListener('focus', toggleFocus, true);
	  links[i].addEventListener('blur', toggleFocus, true);
	}
  
	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
	  var self = this;
  
	  // Move up through the ancestors of the current link until we hit .nav-menu.
	  while (-1 === self.className.indexOf('nav-menu')) {
		// On li elements toggle the class .focus.
		if ('li' === self.tagName.toLowerCase()) {
		  if (-1 !== self.className.indexOf('focus')) {
			self.className = self.className.replace(' focus', '');
		  } else {
			self.className += ' focus';
		  }
		}
  
		self = self.parentElement;
	  }
	}
  
	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	(function(container) {
	  var touchStartFn,
		i,
		parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
  
	  if ('ontouchstart' in window) {
		touchStartFn = function(e) {
		  var menuItem = this.parentNode,
			i;
  
		  if (!menuItem.classList.contains('focus')) {
			e.preventDefault();
			for (i = 0; i < menuItem.parentNode.children.length; ++i) {
			  if (menuItem === menuItem.parentNode.children[i]) {
				continue;
			  }
			  menuItem.parentNode.children[i].classList.remove('focus');
			}
			menuItem.classList.add('focus');
		  } else {
			menuItem.classList.remove('focus');
		  }
		};
  
		for (i = 0; i < parentLink.length; ++i) {
		  parentLink[i].addEventListener('touchstart', touchStartFn, false);
		}
	  }
	})(container);
  })();