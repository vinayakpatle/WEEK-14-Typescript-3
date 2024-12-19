import { z } from 'zod';
import express from "express";

const app = express();

const profileSchema=z.object({
    name:z.string().min(5),
    email:z.string().max(100).email(),
    age:z.number().min(18).max(200).optional()
})

type profileSchemaType=z.infer<typeof profileSchema>;
// it will infer the type of profileSchema althougth profileSchema is runtime things
// no need write it again

app.put("/user",(req,res)=>{
    const {success} =profileSchema.safeParse(req.body);
    const updateBody: profileSchemaType=req.body;

    if(!success){
        res.status(411).json({
            message:"There is something wrong in credentials"
        });
        return ;
    }

    res.json({
        message:"Database get updated"
    })

})


app.listen(3000,()=>{
    console.log("This server is running at 3000 port");
})