const express=require('express');
const app=express();
const port=3000;

app.use('/',(req,res)=>
{
    res.send("Hello");
})
app.listen(3000,(req,res)=>
{
    console.log(`port is listening on port number ,${port}`);
})