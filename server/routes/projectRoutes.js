const router = require("express").Router()
// const projectController = require('../apis/project/projectController')

const projectController = require('../apis/employee/projectController')

router.get('/project/add', projectController.add)
router.get('/project/all', projectController.all)
router.get('/project/single', projectController.single)
router.get('/project/update', projectController.update)
router.get('/project/deleteFun', projectController.deleteFun)

router.all("**",(req,res)=>{
    res.send({
        success:false,
        status:404,
        message:"Invalid Address"
    })
})

module.exports = router