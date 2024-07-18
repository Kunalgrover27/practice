// const express= require ("express");

// const app= express();

// const mid=(req,res,next)=>{
//     res.send("middle bhi agya");
//     next();
// }
// app.use(mid);

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })


// app.listen(8080,()=>{
//     console.log("server is listening on 8080");
// })
const express = require('express')
const app = express()
const port = 3030
const router=require("./routing")

const mid=(req,res,next)=>{
    console.log("middle bhi agya");
    next();
}

app.use('/api/v1',mid,require("./routing") );


// app.use(mid);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})