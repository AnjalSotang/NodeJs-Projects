const express = require("express");
const {create, readAll, read, updateTask, deleteTask} = require('../controllers/auth')
const router = express.Router();

router.post('/create', create);
router.get('/readAll', readAll);
router.get('/read/:id', read);
router.patch('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;