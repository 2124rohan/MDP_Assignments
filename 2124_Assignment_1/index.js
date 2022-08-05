require('./database/connection')
const Data = require('./database/model')

const user = {
    name1: 'Rohan',
    Age: 21 
}

const data = async ()=>{
    await Data(user).save()
}

data()
