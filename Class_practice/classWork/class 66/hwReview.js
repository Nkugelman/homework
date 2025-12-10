(function (){
    'use strict';

    function createAccnt(openingBalance) {
        
    return {
        balance: openingBalance,
       
    };
}
 function preformTransaction(amnt) {
            this.balance += amnt;
        }
const acct1 = createAccnt(1000);
const acct2 = createAccnt(2000);

    preformTransaction.call(acct1, 50);

    preformTransaction.call(acct1, 450);
    const depositFiftyAcct1 = preformTransaction.bind(acct1, 50);
    depositFiftyAcct1();

    const withDrawFiftyAcct1 = preformTransaction.bind(acct1, -50);
    withDrawFiftyAcct1();

console.log(acct1,acct2);


    } ());