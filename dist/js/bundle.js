/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calcCal.js":
/*!***********************************!*\
  !*** ./src/js/modules/calcCal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calcCal() {
    const resultCal = document.querySelector('.cal-calc__result span');
    let gender = 'female',
        height, weight, age,
        ratio = 1.375;

    function calcTotalCal() {
        if (!gender || !height || !weight || !age || !ratio) {
            resultCal.innerText = '____';
            return;
        }
        if (gender === 'female') {
            resultCal.innerText = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            resultCal.innerText = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5, 7 * age)) * ratio);
        }
    }

    calcTotalCal();

    function getDynamicInfo(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            switch (input.getAttribute('data-option')) {
                case "height-cal":
                    height = +input.value;
                    break;
                case "weight-cal":
                    weight = +input.value;
                    break;
                case "age-cal":
                    age = +input.value;
                    break;
            }

            calcTotalCal();
        });
    }

    getDynamicInfo('[data-option="height-cal"]');
    getDynamicInfo('[data-option="weight-cal"]');
    getDynamicInfo('[data-option="age-cal"]');

    function getStaticInfo(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                } else {
                    gender = e.target.getAttribute('data-gender');
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotalCal();
            });
        });
    }

    getStaticInfo('#gender', 'cal-calc__choose-item_active');
    getStaticInfo('#activity', 'cal-calc__choose-item_active');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcCal);

/***/ }),

/***/ "./src/js/modules/calcMass.js":
/*!************************************!*\
  !*** ./src/js/modules/calcMass.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calcMass() {
    const resultMass = document.querySelector('.mass-calc__result'),
    resultDescr = document.querySelector('.mass-calc__descr'),
    tableDescr = document.querySelectorAll('[data-descr="descr"');
    let heightMass, weightMass, total;

    function calcTotalMass () {
        if (!heightMass || !weightMass) {
            resultMass.innerText = '___';
            resultDescr.innerText = '';
        } else {
            total = weightMass / ((heightMass * heightMass) / 10000);
            resultMass.innerText = total.toFixed(1);

            if (total.toFixed(1) <= 16) {
                resultDescr.innerText = tableDescr[0].innerText;
            }
            if (total.toFixed(1) > 16 && total.toFixed(1) < 18.5) {
                resultDescr.innerText = tableDescr[1].innerText;
            }
            if (total.toFixed(1) >= 18.5 && total.toFixed(1) < 25) {
                resultDescr.innerText = tableDescr[2].innerText;
            }
            if (total.toFixed(1) >= 25 && total.toFixed(1) < 30) {
                resultDescr.innerText = tableDescr[3].innerText;
            }
            if (total.toFixed(1) >= 30 && total.toFixed(1) < 35) {
                resultDescr.innerText = tableDescr[4].innerText;
            }
            if (total.toFixed(1) >= 35 && total.toFixed(1) < 40) {
                resultDescr.innerText = tableDescr[5].innerText;
            }
            if (total.toFixed(1) >= 40) {
                resultDescr.innerText = tableDescr[6].innerText;
            }
        }
    }

    calcTotalMass();

    function getInputInfo (selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            switch (input.getAttribute('data-option')) {
                case "heightMass":
                    heightMass = +input.value;
                    break;
                case "weightMass":
                    weightMass = +input.value;
                    break;
            }
            calcTotalMass();
        });
    }

    getInputInfo('[data-option = "heightMass"]');
    getInputInfo('[data-option = "weightMass"]');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcMass);

/***/ }),

/***/ "./src/js/modules/navigation.js":
/*!**************************************!*\
  !*** ./src/js/modules/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function navigation() {
    const menu = document.querySelector('.menu'),
    menuCal = document.querySelector('.menu__item-cal'),
    menuMass = document.querySelector('.menu__item-mass'),
    pageCal = document.querySelector('.page-cal'),
    pageMass = document.querySelector('.page-mass'),
    btnMenuCal = document.querySelector('[data-btn="menu-cal"]'),
    btnMenuMass = document.querySelector('[data-btn="menu-mass"]'),
    btnMain = document.querySelectorAll('[data-btn="page-main"]'),
    btnPageCal = document.querySelector('[data-btn="page-mass"]'),
    btnPageMass = document.querySelector('[data-btn="page-cal"]');

    function toogleMainMenu() {
        menu.classList.toggle('menu_active');
    }

    function moveToPageFromMenu(btn, secondBtn, secondMenu, page, pageActiveClass) {
        btn.addEventListener('click', () => {
            secondBtn.style.display = 'none';
            secondMenu.style.flexBasis = '0';
            page.classList.add(pageActiveClass);
            setTimeout(toogleMainMenu, 1000);
            setTimeout(function() {
                secondBtn.style.display = 'block';
                secondMenu.style.flexBasis = '100%';
            }, 2000);
        });
    }

    moveToPageFromMenu(btnMenuCal, btnMenuMass, menuMass, pageCal, 'page-cal_active');
    moveToPageFromMenu(btnMenuMass, btnMenuCal, menuCal, pageMass, 'page-mass_active');


    btnMain.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            toogleMainMenu();
            setTimeout(function() {
                pageCal.classList.remove('page-cal_active');
                pageMass.classList.remove('page-mass_active');
            }, 1000);
        });
    });

    function moveToOtherPage(btn, currentPage, otherPage, currentActiveClass, otherActiveClass) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage.classList.remove(currentActiveClass);
            otherPage.classList.add(otherActiveClass);
        });
    }

    moveToOtherPage(btnPageCal, pageCal, pageMass, 'page-cal_active', 'page-mass_active');
    moveToOtherPage(btnPageMass, pageMass, pageCal, 'page-mass_active', 'page-cal_active');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navigation */ "./src/js/modules/navigation.js");
/* harmony import */ var _modules_calcCal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calcCal */ "./src/js/modules/calcCal.js");
/* harmony import */ var _modules_calcMass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calcMass */ "./src/js/modules/calcMass.js");






window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_calcCal__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_calcMass__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map