const router = require("express").Router()
const projectController = require("../apis/employee/projectController")

// router.post("/user/add",employeeController.add)


//======================Employee========================
router.get("/employee/add",projectController.add)
router.get("/employee/all",projectController.all)
router.get("/employee/single", projectController.single)
//======================Employee========================


router.all("**",(req,res)=> {
    res.send({
        success:false,
        status:404,
        message:"Invalid Address"
    })
})

module.exports = router