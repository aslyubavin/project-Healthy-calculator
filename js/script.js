'use strict';

import navigation from './modules/navigation';
import calcCal from './modules/calcCal';
import calcMass from './modules/calcMass';

window.addEventListener('DOMContentLoaded', () => {
    navigation();
    calcCal();
    calcMass();
});