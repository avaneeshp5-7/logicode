const exp=require('express');
const app=exp();
const user=require('./Server/rout.js')
const cors=require('cors');
const port = process.env.PORT || '3000';
 app.use(cors());
 app.use("/",user);
app.listen(port,()=>{
    console.log("On port 3000");
});
