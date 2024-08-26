import express from "express";
const app = express();

app.get("/",(req : any, resp : any)=>{
  resp.json({msg : "Hellow World"})
}) 

app.listen(3000)