window.pcsTools = (function () {
    'use strict';

         function getElement(selector) {
            return document.querySelector(selector);
        }
         function setCss(element, property, value) {
            element.style[property] = value;
    }
    function getCss(element, property) {
        //  return element.style[property];
        return getComputedStyle(element)[property]
    }
    function on(element, event, callback) {
         element.addEventListener(event, callback);
    }
      
   
    return {
        wrap: function (selector) {
            const element = getElement(selector);
            return {
                getElement: getElement,
                // setCss,
                //  getCss,
         
                css: function ( property, value) {
                    if (arguments.length === 1) {
                        return getCss(element, property);
                    }
                    else {
                        return setCss(element, property, value)
                    }
                
            
                },
                on: (event, callback) => {
                    on(element,event,callback)
                }
                addClick: (callback) => on(element, 'click', callback)
          
            };
        }
    };

}());


