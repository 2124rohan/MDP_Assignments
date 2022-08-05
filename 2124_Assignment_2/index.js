import express from "express"
import { graphqlHTTP } from "express-graphql"
import resolvers from "./resolvers"
import schema from "./schema"

const app = express()

app.get('/', (req, res) =>  {
    res.send("Running")
})

const root = resolvers

// middleware
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(7000, ()=>{
    console.log('Server is running on port 7000')
})