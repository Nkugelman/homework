function CounterMachine(counter,count, callback){
    for(let i=0; i<count ; i++){
       callback(counter);
    }
};


function twoCounters(countOne, countTwo){
    const count1 = app2.createCounter();
    const count2 = app2.createCounter();
    CounterMachine(count1, countOne, count1.increment);
    console.log(`Counter 1 final count: ${count1.getCount()}`);
    
    CounterMachine(count2, countTwo, count2.increment);
    console.log(`Counter 2 final count: ${count2.getCount()}`);
}
// increment counter1 10 times
CounterMachine(app.counter,10, app.counter.increment);
console.log(`Counter 1 final count: ${app.counter.getCount()}`);
// create two counters from the second one and increment the first 5 times, and the second 15 times.

twoCounters(5,15);