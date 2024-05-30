const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

router.post('/', usersCtrl.createUser);

router.get('/', usersCtrl.getUsers);

router.get('/email/:email', usersCtrl.findByEmail);

router.get('/:id', usersCtrl.getUserById);

router.patch('/:id', usersCtrl.updateUser);

router.delete('/:id', usersCtrl.deleteUser);

module.exports = router;
