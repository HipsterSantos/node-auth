const express = require('express');
const router = express.Router();
const joi  = require('@hapy/joi');
router.get('me',async function(req,res){

});

router.post('/',async (req,res)=>{

})


function validUser(body){
    var uSchema = joi.object({

    })

    uSchema.validate(body);
}

module.exports = router;



//signup , /me