const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    autoId:{ type: Number, default:0},
    name:{ type: String, default:""},
    description:{ type: String, default:""},
    clientName:{ type: String, default:""},
    deadline:{ type: Date, default:0},
    technology:{ type: String, default:""},
    createdAt:{ type: Date, default:Date.now()},
    status:{ type:Boolean, default:true}
})

module.exports = mongoose.model('project', projectSchema)