const express = require("express")
const app = express()

//Middleware 
app.use(express.json())

//connect DB
const connectDB = require('./config/connectDB')
connectDB()

//req the router
const authRouter = require('./routes/auth')

//use the routes
app.use('/api/auth',authRouter);

const port = process.env.PORT || 2000

app.listen(port, (error) =>
    error
        ? console.log(error)
        : console.log(`The server is running on port ${port}`)
)