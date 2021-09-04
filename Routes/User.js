const router = require('express').Router();
const {createUser, getUser, updateUser, deleteUser} = require('../controllers/User')

router.post('/', createUser)
router.get('/', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;