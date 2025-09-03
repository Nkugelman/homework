'use strict';
function bankAccount() {
   // let balance = amnt;
    return {
        balance: 100,
        transaction(amount) {
            this.balance += amount;
        },
        getBalance() {
            return this.balance;
        }
    };
}
const account1 = bankAccount();
const account2 = bankAccount();
account1.transaction(300);
account2.transaction(-50);
console.log(account2.getBalance());
console.log(account1.getBalance());
function transaction2(amnt) {
    this.balance += amnt;
}
transaction2.call(account1, 50);
transaction2.apply(account2, [-5]);
 





const addFifty = transaction2.bind(account1, 50)
addFifty();








