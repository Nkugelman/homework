(function () {
    'use strict';
    const contactTable = document.querySelector('#contactsTabletbody');
    const firsrtInput = document.querySelector('#first');
    const lastInput = document.querySelector('#last');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const addContactForm = document.querySelector('#addContactForm');
    const contacts = [];
    addContactForm.querySelector('#addContactForm').addEventListener('submit', e => {
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
     `;
        /*firsrtInput.value = '';
        lastInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';*/
       addContactForm.reset();
    });
 
}());