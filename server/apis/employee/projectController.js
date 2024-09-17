const projectModel = require('./projectModel')

const add = async (req, res)=>{
    let validations = ""

    if(!req.body.name){   //nhi hai
        validations += "Name is require "
    }
    if(!req.body.description){
        validations += "Description is required "  //+= : value overright n hogi append hogi
    }
    if(!req.body.clientName){
        validations += "clientName is required "  //+= : value overright n hogi append hogi
    }
    if(!req.body.deadline){
        validations += "deadline is required "  //+= : value overright n hogi append hogi
    }
    if(!req.body.technology){
        validations += "technology is required "  //+= : value overright n hogi append hogi
    }



    if(!!validations){    //!!- string value into boolean
        res.send({
            success:false,
            status:420,       //find 420
            messaage:"validations error: "+validations
        })
    } else{
        let total= await projectModel.countDocuments()
        let project = new projectModel({
            autoId:total+1,
            name:req.body.name,
            description:req.body.description,
            clientName:req.body.clientName,
            deadline:req.body.deadline,
            technology:req.body.technology

        })
        project.save()
        .then((result)=>{
            res.send({
                success:true,
                status:200,
                messaage:"New project created",
                data:result
            })

        })
        .catch((err)=>{
            res.send({
                success:false,
                status:500,
                messaage:err.message
            })
        })
    }    
}

const all = (req, res)=>{
    projectModel.find(req.body).exec()           //exe fucn- promise   //find() fucn gives array of objects
    .then((result)=>{
        res.send({
            success:true,
            status:200,
            messaage:"all document loaded",
            total:result.length,
            data:result
        })
    })
    .catch(()=>{
        res.send({
            success:false,
            status:500,
            messaage:"invalid",
        }) 
    })
}

const single = (req, res)=>{
    let validation = ""
    if(!req.body_id){
        validation += "_id is required"

    }
    if(!validation){
        res.send({
            success:false,
            status:422,
            message: "validation error" +validation
        })
    }
    else{
        projectModel.findOne({_id:req.body._id}).exec()
        .then((result)=>{
            if(result == null){
                res.send({
                    succeess:false,
                    status:404,
                    message:"employee category doesnot exist"
                })
            }
            else{
                res.send({
                    success:true,
                    status:200,
                    message:"single Document loaded",
                    data:result
                })
            }
        })
        .catch((err)=>{
            res.send({
            success:false,
            status:500,
            message:err.message
            })
            
        })
    }
}

const update = (req, res)=>{
    let validation = ""
    if(!req.body._id){
        validation +="_id is required"
    }

    if(!!validation){
        res.send({
            success:false,
            status:422,
            messaage:"validation error : "+validation
        })
    }
    else{
        categoryModel.updateOne({_id:req.body._id},{
            $set:{
                name:req.body.name,
                description:req.body.description
        }
    }).exec()
    .then((result)=>{
        if(result.modifiedCount == 1){
            res.send({
                success:true,
                status:200,
                message:"Document Updated",
                data:result
            })
        }
        else{
            res.send({
                success:false,
                status:404,
                message:"Category Not Found"
            })
        }
    })
    .catch((err)=>{
        res.send({
        success:false,
        status:500,
        messaage:err.messaage
        })
    
    })
  }
}

const deleteFun= (req, res)=>{
    let validation = ""
    if(!req.body._id){
        validation += "_id is required"
    }
    if(!!validation){
        res.send({
            success:false,
            status:422,
            message:"Validation Error: "+validation
        })
    }
    else{
        categoryModel.deleteOne({_id:req.body._id}).exec()
        .then((result)=>{
            res.send({
                success:true,
                status:200,
                message:"Document Deleted",
                data:result
            })
        })
        .catch((err)=>{
            res.send({
                success:false,
                status:500,
                message:err.message
            })
        })
    }

}



module.exports= { add, all, single, update, deleteFun}