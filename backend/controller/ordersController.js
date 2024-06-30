const ordersDB = require("../models/ordersDB.js");


module.exports.submitOrder = async (req,res) => {
    const {id, cartItems, totalPrice, tableNum} = req.body;

    const custID = id;
    const status = false;

    let newOrder = new ordersDB ({custID, cartItems, totalPrice, tableNum, status});
    
    newOrder.save()
    
        .then((saved)=>{
            if(saved){
                res.send(true);
            }
            else{res.send(false);}
          })
        .catch(err =>{console.log(err);});

}