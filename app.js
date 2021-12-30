const express = require('express');
const app = express();

app.listen(3030,() =>
console.log ('DH-Heroes')
)
app.get("/DH-Heroes",(req,res)=>{
    res.send("Hola, estamos en el home")
})
