const { Router } = require('express');
const { getUsers, putUsers, postUsers, deleteUsers, patchUsers } = require('../controller/users');

const router = Router();

// METHOD GET
router.get('/', getUsers);

// METHOD PUT
router.put('/:id', putUsers);

// METHOD POST
router.post('/', postUsers);

// METHOD DELETE
router.delete('/', deleteUsers);

// METHOD PATCH
router.patch('/', patchUsers);


module.exports = router;