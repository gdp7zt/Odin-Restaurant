/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n    let contactContainer = document.createElement('div');\n    contactContainer.classList.add('contactContainer');\n\n    contactContainer.innerHTML = '<div><img src=\\'../imgs/blue-phone-7152.svg\\'>(573) 612-8744</div><div><img src=\\'../imgs/pin-location-4345.svg\\'>1051 E 18th St, Rolla, MO 65401</div></div><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.795070625831!2d-91.75858628450518!3d37.958570709336264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87da55408a55a481%3A0xc95e313357da2293!2sCrepescape!5e0!3m2!1sen!2sus!4v1662261666723!5m2!1sen!2sus\" width=\"600\" height=\"400\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>';\n\n    return contactContainer;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ main)\n/* harmony export */ });\nfunction main() {\n    const main = document.createElement('div');\n    main.classList.add('home');\n    main.innerHTML = '<div>Best crepes in Rolla, MO!</div><div>Opened 2022</div><img height=\\'350\\' width=\\'260\\' src=\\'../imgs/Steph.jpg\\'><div>Come visit us today!</div>';\n    return main;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/main.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menuContainer');\n\n\n    const savoryHeader = createMenuSection('Savory');\n    menuContainer.appendChild(savoryHeader);\n\n    const savory1 = createMenuItem('La Nordique', 'Smoked salmon, dill, lemon, creme fraiche', '$14');\n    menuContainer.appendChild(savory1);\n\n    const savory2 = createMenuItem('Croque Monsieur', 'Ham, Italian Cheese, bechamel sauce', '$11');\n    menuContainer.appendChild(savory2);\n\n    const savory3 = createMenuItem('Croque Madame', 'Ham, cheese, bechamel, egg', '$12');\n    menuContainer.appendChild(savory3);\n\n    const savory4 = createMenuItem('La Fermiere', 'Chicken, Peppers, Mushrooms, Onions, Spinach, Bechamel, Cheese, Bacon', '$14');\n    menuContainer.appendChild(savory4);\n\n    const savory5 = createMenuItem('Brie it On', 'Ham and Brie', '$11');\n    menuContainer.appendChild(savory5);\n\n    const savory6 = createMenuItem('Brie It Is', 'Brie, Apples, Fig Jam', '$11');\n    menuContainer.appendChild(savory6);\n\n\n    const sweetHeader = createMenuSection('Sweet');\n    menuContainer.appendChild(sweetHeader);\n\n    const sweet1 = createMenuItem('Paris', 'Nutella and Whipped cream', '$7');\n    menuContainer.appendChild(sweet1);\n\n    const sweet2 = createMenuItem('La Reine', 'Nutella and Strawberries', '$8');\n    menuContainer.appendChild(sweet2);\n\n    const sweet3 = createMenuItem('Elliot', 'Nutella, Strawberries, Bananas', '$9');\n    menuContainer.appendChild(sweet3);\n\n    const sweet4 = createMenuItem('Tess', 'Vanilla cream and Strawberries', '$8');\n    menuContainer.appendChild(sweet4);\n\n    const sweet5 = createMenuItem('Normandy', 'Cinnamon apples and Caramel sauce', '$10');\n    menuContainer.appendChild(sweet5);\n\n    const sweet6 = createMenuItem('Choco', 'Bananas and Chocolate Sauce', '$7');\n    menuContainer.appendChild(sweet6);\n\n    const sweet7 = createMenuItem('Sugar and Spice', 'Sugar and Cinnamon', '$7');\n    menuContainer.appendChild(sweet7);\n\n    const sweet8 = createMenuItem('Sunshine', 'Lemon curd and Blueberries', '$10');\n    menuContainer.appendChild(sweet8);\n\n\n    const drinkHeader = createMenuSection('Drinks');\n    menuContainer.appendChild(drinkHeader);\n\n    const drink1 = createMenuItem('Perrier', 'Sparkling Water', '$2.50');\n    menuContainer.appendChild(drink1);\n\n    const drink2 = createMenuItem('Water', 'Bottled Water', '$2');\n    menuContainer.appendChild(drink2);\n\n    const drink3 = createMenuItem('Tea', 'Sweet/Unsweet', '$3');\n    menuContainer.appendChild(drink3);\n\n    const drink4 = createMenuItem('Apple Juice', 'Bottled Apple Juice', '$2');\n    menuContainer.appendChild(drink4);\n\n\n    \n\n\n    return menuContainer\n}\n\n\n\n\n\nfunction createMenuItem(name, description, price) {\n    const itemContainer = document.createElement('div');\n    itemContainer.classList.add('menuItemContainer');\n\n    const itemName = document.createElement('h3');\n    itemName.classList.add('menuItemName');\n    itemName.innerHTML = name;\n\n    const ingredients = document.createElement('div');\n    ingredients.classList.add('menuItemIngredients');\n    ingredients.innerHTML = description;\n\n    const itemPrice = document.createElement('div');\n    itemPrice.classList.add('menuItemPrice');\n    itemPrice.innerHTML = price;\n    \n    itemContainer.appendChild(itemName);\n    itemContainer.appendChild(ingredients);\n    itemContainer.appendChild(itemPrice);\n\n    return itemContainer;\n}\n\nfunction createMenuSection(name){\n    const menuSection = document.createElement('h2');\n    menuSection.classList.add('menuSection');\n    menuSection.innerHTML = name;\n\n    return menuSection;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onPageLoad)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction onPageLoad() {\n    const container = document.querySelector('div#container');\n    container.appendChild(createHeader());\n\n    const main = document.createElement('div');\n    main.classList.add('main');\n    main.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    container.appendChild(main);\n\n    container.appendChild(createFooter());\n\n    let homePage = document.querySelector('.header1');\n    homePage.addEventListener('click', () =>{\n        main.removeChild(main.firstChild);\n        main.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    });\n\n    let MenuPage = document.querySelector('.header2');\n    MenuPage.addEventListener('click', () =>{\n        main.removeChild(main.firstChild);\n        main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    });\n\n    let contactPage = document.querySelector('.header3');\n    contactPage.addEventListener('click', () =>{\n        main.removeChild(main.firstChild);\n        main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    });\n}\n\nfunction createHeader() {\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const title = document.createElement('h2');\n    title.innerHTML = 'CrepeScape A la Folie';\n    header.appendChild(title);\n\n    const listItems = document.createElement('ul');\n    listItems.innerHTML= '<li><button class=\\'tab header1\\'>Home</button></li><li><button class=\\'tab header2\\'>Menu</button></li><li><button class=\\'tab header3\\'>Contact</button></li>';\n    header.appendChild(listItems);\n\n    return header;\n}\n\nfunction createFooter() {\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n\n    footer.innerHTML = '<div>Copyright &copy 2022 gdp7zt <a href=\\'https://github.com/gdp7zt/Odin-Restaurant\\' target=\\'_blank\\'><img src=\\'../imgs/icons8-github.svg\\'></a><div>'\n\n    return footer;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;