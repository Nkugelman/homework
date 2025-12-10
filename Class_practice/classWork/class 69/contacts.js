(function () {
    'use strict';

    function getElement(selector) {
        return document.querySelector(selector);
    }
    function setCss(element, property, value) {
        element.style[property] = value;
    }
    function addClick(element, callback) {
        element.addEventListener('click', callback);
    }
    const contactTable = getElement('#contactsTabletbody');
    const firsrtInput = getElement('#first');
    const lastInput = getElement('#last');
    const emailInput = getElement('#email');
    const phoneInput = getElement('#phone');
    const addContactForm = getElement('#addContactForm');
    let contacts = [];
    addContactForm.addEventListener('submit', e => {
        if (!contacts.length) {
        contactTable.deleteRow(0);
    }
       e.preventDefault();
       const newContact = {
           first: firsrtInput.value,
           last: lastInput.value,
           email: emailInput.value,
           phone: phoneInput.value
       };
       contacts.push(newContact);
       console.log(contacts);
      /*  const newRow = document.createElement('tr');
        const firstCell = document.createElement('td');
        firstCell.innerText = 'donald';
        newRow.appendChild(firstCell);
        contactTable.appendChild(newRow);*/

        const row = contactTable.insertRow();
     row.innerHTML = `
        <td>${newContact.first}</td>
        <td>${newContact.last}</td>
        <td>${newContact.email}</td>
        <td>${newContact.phone}</td>
        <td><button>delete</></>
     `;
        
        
        const button = row.querySelector('button');
        addClick(button, () => {
            contactTable.removeChild(row);

            contacts = contacts.filter(c => c !== newContact)
        })
        /*firsrtInput.value = '';
        lastInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';*/
       addContactForm.reset();
    });
    document.querySelector('#addContact').addEventListener('click', () => {
        addContactForm.style.display ='inline-block'
    })
}());