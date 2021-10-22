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

export default calcMass;