// require .env
require('dotenv').config()

// require express
const express = require('express')

// require mongoose
const mongoose = require('mongoose')

// require routes
const taskRoutes = require('./routes/tasks.js')

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/notes',taskRoutes)

// connect DB server listen added to assure that we connected to DB
mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
      // listen to requests
      app.listen(process.env.PORT, () => {
        console.log("server is started at localhost:3001/api/notes");
      });
    }
).catch(
    (error)=>{
        console.log(error)
    }
)