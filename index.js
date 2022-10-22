const express = require('express');
const app = express();



app.get("/", (reg,res) => {
    res.send("thank you for calling me")
})

app.listen(3000, ()=> console.log("Listening to port 3000"))