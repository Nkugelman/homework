(function() {
'use strict';

function Drawable() {
}
Drawable.prototype.draw = () => {
    console.log('Drawing...');
};


const drawable = new Drawable();
drawable.draw();

function Printable() {}
Printable.prototype.print = () => {
    console.log('Printing..... ');
}
const printable = new Printable();
printable.print();
 function DrawableAndPrintable() {}
 DrawableAndPrintable.prototype = Object.create(Drawable.prototype);
 Object.assign(DrawableAndPrintable.prototype, Printable.prototype);
 
 const pad = new DrawableAndPrintable();
 pad.draw();
    pad.print();
    ///////////////////////

    const potus =Object.create({foo: () => console.log('foo')},
        {first:{value:'Donald'},
         last:{value:'Trump', writable:true, configurable:true}
    });
    potus.foo();
    console.log(potus.first);
    potus.last = 'POTUS';
    console.log(potus.last);

    
    




}());