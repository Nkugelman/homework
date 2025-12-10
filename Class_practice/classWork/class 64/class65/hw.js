'use strict';

 const dayUtils = (function () {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getDay(index) {
    
        return days[index - 1];
    }
    function getIndex(day) {
        return days.findIndex(d => d.toLowerCase() === day.toLowerCase()) + 1;
    }
    return {
        getDay,
        getIndex
    };
}());


console.log(dayUtils.getDay(3));
console.log(dayUtils.getIndex('MONDAY'));
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





