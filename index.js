require('dotenv').config()
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3000
var corsOpt = {
    origin: `http://localhost:${PORT}`
}

/**
 * Middleware
 */
app.use(cors(corsOpt))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"this is core API",
        data:"{}"
    })
})

/**
 * Router Middleware
 */



 /** 
  * Starting server
  */

 app.listen(PORT, (req,res)=>{
    console.log(`Server started at PORT ${PORT}`)
})
