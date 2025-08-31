'use strict';

const weekUtils = (function () {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return {
        getDayName(index) {
            return days[index - 1];
        },
        getDayNumber(day) {
            return days.findIndex(d => d.toLowerCase() === day.toLowerCase()) + 1;
        }
    }
})();
console.log(weekUtils.getDayName(3));
console.log(weekUtils.getDayNumber('MONDAY'));



const interstCalc = (function() {
    let intrestRate = 0;
    let loanTerm = 0;
    return {
        calculateInterest(principal) {
            return principal * intrestRate * loanTerm;
        },
        setRate(rate) {
            intrestRate = rate;
            return this;
        },
        setTerm(term) {
            loanTerm = term;
            return this;
        }

    }
})();
console.log(interstCalc.setRate(5).setTerm(15).calculateInterest(1000));
