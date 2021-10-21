'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //========================================================= main menu
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
    

    //========================================================= cal calc
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
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }

            calcTotalCal();
        });
    }

    getDynamicInfo('[data-option="height"]');
    getDynamicInfo('[data-option="weight"]');
    getDynamicInfo('[data-option="age"]');

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

});