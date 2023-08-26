const tasks = require("../models/taskModel.js");
const mongoose = require('mongoose')


// GET all Tasks
const getAllTasks = async (req, res) => {
  const allTasks = await tasks.find({}).sort({createdAt: -1});
  res.status(200).json(allTasks);
};

// GET a single Task
const getTask = async (req, res) => {
  const { id } = req.params

  let emptyField = []

  if (!name) {
    emptyField.push('Name')
  }

  if (!details) {
    emptyField.push('Details');
  }

  if (emptyField.length > 0 ){
    return res.status(400).json({error: 'Please fill in all the fields', emptyField})
  }

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No Such Task"})
  }
  const task = await tasks.findById(id)

  if (!task){
    return res.status(404).json({error: "No Such Task"})
  }else{
    res.status(200).json(task);
  }
};

// CREATE new Task
const createTask = async (req,res)=>{
    
    // Add doc to DB
    const { name, details } = req.body;

    try {
      const task = await tasks.create({ name, details });
      res.status(200).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

// DELETE a Task
const deleteTask = async(req,res)=>{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No Such Task" });
    }

    const task  = await tasks.findOneAndDelete({_id: id})

    if (!task) {
      return res.status(404).json({ error: "No Such Task" });
    }

    res.status(200).json(task)
}

// UPDATE a Task
const updateTask = async (req,res)=>{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such Task" });
    }

    const task = await tasks.findOneAndUpdate({_id:id},{
        ...req.body
    })
 
    if (!task) {
      return res.status(404).json({ error: "No Such Task" });
    }

    return res.status(200).json(task)
}

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
};