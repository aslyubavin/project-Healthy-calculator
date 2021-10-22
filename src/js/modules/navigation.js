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

export default navigation;