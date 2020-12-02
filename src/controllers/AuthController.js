const Token = require('../models/Token')
const User = require('../models/User')

module.exports = {

    async auth(req,res){
        const {id, username, name, email, adress, avatar, bio} = await User.findOne({ where: {username: req.body.username }})
         if(!id){
            return res.status(400).json({error : "User Not Found"})
        }else{
            await Token.create({user_id:id})
            return res.json({id, username, name, email, adress, avatar, bio})
        }    
     },
}

