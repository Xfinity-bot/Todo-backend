const {  mongoose } = require("mongoose");
const Task =  require('../models/task');
const getAllTask = async (req,res)=>{
    await  Task.find().then((data)=>{
        res.status(200).json(data);

    }).catch((err)=>{
        res.status(500).json({ err: err})
    })

}
const addTask = async (req,res)=>{
    console.log("Updating Task");
    await Task.create({

        "title" : req.body.title,
        "isCompleted" : req.body.isCompleted, 
        "priority": req.body.priority,
        "createdDate":req.body.createdDate,
    }).then((data)=>{res.status(201).json({
        "message":"Successfully Inserted",
        "data":data
    })}).catch((err)=>{res.status(500).json( {"message" : "Failed to Insert",
    "data": err})});

}  
  
const updateTask = async (req,res)=>{
    console.log("Updating Task");
    await Task.findByIdAndUpdate(req.params.id,req.body).then((data)=>{res.status(200).json({
        "message":"Successfully Updated",
        "data":data
    })}).catch((err)=>{res.status(500).json( {"message" : "Failed to Update",
    "data": err})});
}
const deleteTask = async (req,res)=>{
    console.log(req.params.id)
    await Task.deleteOne({'_id':req.params.id}).then((data)=>{res.status(201).json({
        "message":"Successfully Deleted",
        "data":data,
        "id":req.params.id
    })}).catch((err)=>{res.status(500).json( {"message" : "Failed to delete",
    "data": err})});
}

module.exports = {getAllTask, addTask, updateTask, deleteTask};