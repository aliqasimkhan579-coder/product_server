import express from 'express'

const app=express()

//GET
app.get("/working",(req,res)=>{
    res.send("I am working perfectly");
});

app.get("/profile",(req,res)=>{
    res.status(200).json({
        name:"Adan Khan",
        userId:"123",
    });
});

const PORT=5050

app.listen(PORT,()=>{
    console.log("Server is running on PORT 5050")
})