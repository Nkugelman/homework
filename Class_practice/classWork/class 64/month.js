'use strict';

/*const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function getMonth(index) {
    return months[index - 1];
}
function getMonthIndex(month) {
    return months.findIndex(m => m.toLowerCase() === month.toLowerCase()) + 1;
}
console.log(getMonth(3));
console.log(getMonthIndex("January"));

const monthUtils = {
    months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ],

getMonth(index) {
    return this.months[index - 1];
},
getMonthIndex(month) {
    return this.months.findIndex(m => m.toLowerCase() === month.toLowerCase()) + 1;
}
}
console.log(monthUtils.getMonth(3));
console.log(monthUtils.getMonthIndex("January"));*/
const monthUtils = (function() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return {
        getMonth(index) {
            return months[index - 1];
        },
        getMonthIndex(month) {
            return months.findIndex(m => m.toLowerCase() === month.toLowerCase()) + 1;
        }
    };
})();

console.log(monthUtils.getMonth(3));
console.log(monthUtils.getMonthIndex("January"));
