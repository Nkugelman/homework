window.pcs = function (selector) {
  'use strict';

  function getElement(selector) {
    return document.querySelector(selector);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function getCss(element, property) {
    return getComputedStyle(element)[property];
  }

  function on(element, event, callback) {
    element.addEventListener(event, callback);
  }

  const element = getElement(selector);

  return {
    css: function (property, value) {
      if (arguments.length === 1) {
        return getCss(element, property);
      } else {
        setCss(element, property, value);
        return this; // make chainable
      }
    },
    on: function (event, callback) {
      on(element, event, callback);
      return this; // make chainable
    },
    click: function (callback) {
      on(element, 'click', callback);
      return this; // make chainable
    },

    // TODO 1: Implement hide()
    hide: function () {
      // set element.style.display = 'none'
      return this;
    },

    // TODO 2: Implement show()
    show: function () {
      // set element.style.display = 'block' (or 'inline')
      return this;
    },

    // TODO 3: Implement toggle()
    toggle: function () {
      // if element.style.display is 'none', call show()
      // else call hide()
      return this;
    }
  };
};
