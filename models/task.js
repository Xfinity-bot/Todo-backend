const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const TaskSchema = new Schema({
    title : {
        required : true,
        type :String
    },
    isCompleted : {
        type :Boolean,
        default :false
    },
    
    priority: String,
    createdDate:Date

});

const Task = model('tasks', TaskSchema);
module.exports = Task