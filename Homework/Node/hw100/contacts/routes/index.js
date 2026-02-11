var express = require('express');
var router = express.Router();

let contacts = [
  {
    id: 1,
    first: 'Donald',
    last: 'Trump',
    phone: '1234567890',
    email: 'dtrump@whitehouse.gov'
  },
  {
    id: 2,
    first: 'JD',
    last: 'Vance',
    phone: '9876543210',
    email: 'jd@whitehouse.gov'
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Contact List',
    contacts,
    noContacts: !contacts?.length,
    partials: { content: 'index.hjs'} });
});

router.get('/addContact', (req, res, next) => {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'addContact.hjs' }
  });
});

router.post('/addContact', (req, res, next) => {
  const newContact = {
    id: contacts.length ? contacts[contacts.length - 1].id + 1 : 1,
    ...req.body
  };

  contacts.push(newContact);

  res.redirect('/contacts');
});


router.post('/deleteContact/:id', (req, res, next) => {
  contacts = contacts.filter(c => c.id !== Number(req.params.id));

  res.writeHead(301, {
    location: '/'
  });

  res.end();
});
router.get('/editContact/:id', (req, res, next) => {
 const contact = contacts.find(c => c.id === Number(req.params.id));

 res.render('layout', {
    title: 'edit Contact',
    contact:contact,
    partials: { content: 'addContact.hjs' }
  });

  
});
module.exports = router;
