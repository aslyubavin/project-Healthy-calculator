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

export default calcCal;