'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //========================================================= main menu
    const menu = document.querySelector('.menu'),
        menuCal = document.querySelector('.menu__item-cal'),
        menuMass = document.querySelector('.menu__item-mass'),
        pageCal = document.querySelector('.page-cal'),
        btnMenuCal = document.querySelector('[data-btn="menu-cal"]'),
        btnMenuMass = document.querySelector('[data-btn="menu-mass"]'),
        btnMainMenu = document.querySelector('[data-btn="page-main"]');

    function toogleMainMenu() {
        menu.classList.toggle('menu_active');
        setTimeout(function() {
            menuCal.classList.remove('menu__item-cal_active');
        }, 800);
    }

    btnMenuCal.addEventListener('click', () => {

        window.location.hash = 'page';
        menuCal.classList.add('menu__item-cal_active');
        setTimeout(toogleMainMenu, 1000);
    });

    btnMainMenu.addEventListener('click', (e) => {
        e.preventDefault();

        menuCal.classList.remove('menu__item-cal_active');
        toogleMainMenu();
        window.location.hash = 'menu';
    });

});