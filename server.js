const express = require("express");
const app = express();


app.get('/', (req, res) =>{
    res.send("Hello, this is the main page")
})

app.get('/api', (req, res)=> {
    res.json({
        message : 'This is the API route.'
    });
})

app.get('/greet/:name', (req, res)=>{
    const{name} =  req.params;
    res.send(`Hello, ${name}!`)
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})