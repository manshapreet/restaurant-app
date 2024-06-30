const customersDB = require("../models/customersDB.js");


module.exports.signUp = async (req,res)=>{

    const {phone, name}=req.body; 
    console.log(req.body);

    let user = await customersDB.findOne({phone});

    if(!user){

        res.send(false);

        
    }

    else{
        req.session.Username=phone;
        req.session.UserID=user._id.toString();
        res.json({Username:req.session.Username})
    }



}


module.exports.submitName = async(req,res)=>{

    const {phone, name} = req.body;
    console.log(req.body);

    let newCustomer = new customersDB ({phone, name});
        newCustomer.save()
         .then((saved)=>{
            if(saved){
                req.session.Username=phone;
                req.session.UserID=saved._id.toString();
                res.json({Username:req.session.Username})
            }
            else{res.send(false);}
          })
         .catch(err =>{console.log(err);});
}


module.exports.logIn = async(req, res)=>{
    const {phone, name } = req.body; 
    // console.log(req.body);

    let user = await customersDB.findOne({phone});
    
    if(user){
        
        req.session.Username=phone;
        req.session.UserID=user._id.toString();
        res.json({Username:req.session.Username})
    }
    else if(!user){
        res.json(false)
    }
}