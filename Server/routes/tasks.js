// require routes to connect with entery point
const express = require('express')
const router = express.Router()

// require controllers
const {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasksControllers.js");

// req must be the first then res parameter
// GET all tasks
router.get('/',getAllTasks)

// GET single task
router.get('/:id',getTask)

// POST a task
router.post('/', createTask)

// DELETE a task
router.delete('/:id', deleteTask)

// UPDATE a task
router.patch("/:id", updateTask);

module.exports = router