const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();


app.use(cors())
app.use(bodyParser.json())




const users = ["Rahim", "karim", "ames", "william", "Joshim"];


app.get("/", (reg,res) => {

    const fruit ={
        product : 'anarosh',
        price : '200tk'
    }
    res.send(fruit)
})

//post
app.post("/addUser", (reg,res) => {
    //save to database
    res.send(reg.body)
})



app.get("/fruit/mango", (reg,res) => {
    res.send({fruit:'mango', quantity:230, price:20})
})

app.get("/users/:id", (reg,res)=>{
    const userId = reg.params.id;
    const name = users[userId]
    console.log(name);

    res.send({userId,name})
})

app.listen(3000, ()=> console.log("Listening to port 3000"))