var express =require('express')
var router = express.Router()

const credentail = {
    email: "admin@gmail.com",
    password: "admin123"
}

//login
router.post('/login',(req,res)=>{
    if(req.body.email == credentail.email&&req.body.password == credentail.password){
        req.session.user = req.body.email
       res.redirect('/route/dashboard')
    //    res.end("login successful...")
    }else{
        res.end("Invalid Username")
    }
})

//dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send("Unauthorize User")
    }
})

//logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function (err) {
            if(err){
            console.log(err);
                res.send('Error')
            }else{
                res.render('base',{title:"Express", logout:"Logout Successfully...!"})
            }
    })
})

module.exports = router