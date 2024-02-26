import 'dotenv/config'
import express from 'express'
import router from './routes/routes.js'
import connectDB from './DB/db.js'

const app = express()

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.use('/api/product', router)
app.use('/api/product', router)

const start = async ()=>{
    try {
       await connectDB(process.env.MONGO_URI)
        app.listen(5000, ()=>{
            console.log("server started on 5000");
        })
    } catch (error) {
        console.log(error);
    }
}
start();