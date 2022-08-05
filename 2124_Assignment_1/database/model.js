const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name1:{
        type: String,
    },
    Age:{
        type:Number
    }
})

const data = mongoose.model('Data', dataSchema)

module.exports = data