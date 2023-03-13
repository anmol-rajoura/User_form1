import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(process.env.mongodb_uri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to db'))

const userSchema = new mongoose.Schema({
    name : String,
    Dob: Date,
    Phoneno: String,
    email: String
 
})

const User = new mongoose.model("User", userSchema)
//Routes

// app.post("/userform",(req, res) => {
//     console.log(req.body)
//     // res.status(200)
// })

app.post("/userform", async (req, res) => { 
	try {
        if(req.body.Phoneno.length > 10){
            console.log(req.body)
            res.status(400).send({ message: "invalid Phoneno" });
        } else{
            await new User({ ...req.body}).save();
            res.status(201).send({ message: "successfully Submitted" });
        }

	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}

});

app.get('/userform', async(req, res) => {
    try{
        const users = await User.find()
        res.json(users) 
        // res.send("Try hitting same route in post method")
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})


app.listen(9002,() => {
    console.log("BE started at port 9002")
})