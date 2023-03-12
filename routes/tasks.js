const express = require('express');
const router = express.Router();
const {getAllTask, addTask, updateTask, deleteTask} = require('../controllers/TaskController.js');
router.route('/all').get(getAllTask);
router.route('/addTask').post(addTask);
router.route('/updateTask/:id').put(updateTask);
router.route('/deleteTask/:id').delete(deleteTask);

module.exports = router;