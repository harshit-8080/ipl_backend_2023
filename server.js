const express = require("express");


const setupAndStartServer = async function(){

    const app = express();

    // app.get("/",(req,res)=>{
      
    //     console.log("Request = ",req);
    //     console.log("Response = ",res);

    //     return res.status(200).json({
    //         "MSG":"Response from api version 2.0"
    //     })
    // })

    // app.get("/home",(req,res)=>{
    
    //     return res.status(200).json({
    //         "MSG":"home api called"
    //     })
    // })
    // app.get("/contact/harshit",(req,res)=>{
    
    //     return res.status(200).json({
    //         "MSG":"contact api called"
    //     })
    // })


    app.listen(3000,()=>{
        console.log("Server started at 3000");
    })

}


setupAndStartServer();