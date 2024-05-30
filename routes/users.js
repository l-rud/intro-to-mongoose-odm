const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

router.post('/', usersCtrl.createUser);

router.get('/', usersCtrl.getUsers);

router.get('/over21', usersCtrl.findUsersOver21);

router.get('/email/:email', usersCtrl.findByEmail);

router.get('/:id', usersCtrl.getUserById);

router.put('/:id', usersCtrl.updateUser);

router.patch('/:id/skills/add', usersCtrl.addSkills);

router.delete('/:id', usersCtrl.deleteUser);

module.exports = router;
