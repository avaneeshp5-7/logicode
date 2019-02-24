const express=require("express");
const rout=express.Router();
const bodyparser=require('body-parser')
const mongojs=require('mongojs');
rout.use(bodyparser.json());
conn=mongojs("mongodb://logicode:logicode123@ds331735.mlab.com:31735/logicodes");
rout.post("/login_url",(req,res)=>{
    console.log("In Login")
    data=req.body
    console.log(data)
    conn.user.find(data,(err,result)=>{
       if(err){
           console.log(err)
       }
       else{
          if(result.length==1)
          {
            //   console.log(result.length)
              res.send({
                  success:true,
                  result:result
              })
          } 
          else{
            res.send({
                success:false,
            }) 
          }
       }
    })
    });
    rout.post('/profile_url',(req,res)=>{
        userid=req.body
        conn.user.find(userid,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send({
                    success:true,
                    result:result
                }) 
            }
        })
    })
    rout.post('/update_url',(req,res)=>{
        data=req.body
       conn.user.update(data[0],{$set:data[1]},(err,result)=>{
           if(err)
           {
               console.log(err)
           }
           else{
            res.send({
                success:true,
                result:result
            }) 
           }
       })
    })
module.exports=rout;