const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/data',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Database Is Connected Sucessfullly!')
}).catch(()=>{
    console.log({error: 'Could Not connect to the database'})
})

