const router = require('express').Router();
const {
    createAdmin,
    getAdmin,
    updateAdmin,
    deleteAdmin
} = require('../controllers/Admin')

router.post('/', createAdmin)
router.get('/', getAdmin)
router.put('/:id', updateAdmin)
router.delete('/:id', deleteAdmin)

module.exports = router;