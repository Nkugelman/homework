/* global $, pcsMessageBox */
(function () {
  'use strict';


  const contactsTable = $('#contactsTable tbody');
  const firstInput = $('#first');
  const lastInput = $('#last');
  const emailInput = $('#email');
  const phoneInput = $('#phone');
  const addContactForm = $('#addContactForm');


  let contacts = [];


  addContactForm.on('submit', e => {
    e.preventDefault();


    const newContact = {
      first: firstInput.val(),
      last: lastInput.val(),
      email: emailInput.val(),
      phone: phoneInput.val(),
    };


    addContact(newContact);


    hideForm();
  });


  function addContact(newContact) {
    if (!contacts.length) {
      // contactsTable[0].deleteRow(0);
      contactsTable.empty();
    }


    contacts.push(newContact);


    const row = $(`<tr>
                     <td>${newContact.first}</td>
                     <td>${newContact.last}</td>
                     <td>${newContact.email}</td>
                     <td>${newContact.phone}</td>
                     <td><button>delete</button></td>
                    </tr>`);


    contactsTable.append(row);


    const button = row.find('button');
    /*const buttonCell = document.createElement('td');
    const button = document.createElement('button');
    button.innerText = 'delete';
    buttonCell.appendChild(button);
    row.appendChild(buttonCell);*/


    button.click(() => {
      row.remove();


      contacts = contacts.filter(c => c !== newContact);


      if (!contacts.length) {
        contactsTable.html(`<tr>
          <td colspan="5">No contacts loaded</td>
        </tr>`);
      }
    });
  }


  function hideForm() {
    // addContactForm.reset();
    // addContactForm[0].reset();


    addContactForm.trigger('reset');


    addContactForm.css('display', 'none');
  };


  $('#addContact').click(() => {
    addContactForm.css('display', 'inline-block');
  });


  $('#cancel').click(() => {
    hideForm();
  });

$('#load').click(async()=>{
  try{
 const response = await fetch('people.json');
 if(!response.ok){
  throw new Error(`${response.status}- ${response.statusText}`)
 }
 const loadedContacts = await response.json();
 loadedContacts.forEach(addContact);
 console.log(loadedContacts);
  }catch(e){
    console.error(e.message);
    
  }
 

});
 
      

}());
