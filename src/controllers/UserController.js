const User = require('../models/User')
const api = require('../api')


module.exports = {
    async list(req,res){
        try{
            const user = await User.findOne({ where: { username: req.params.username } })
            return res.json(user)
            
        }catch{
            return res.status(400).json("Error")
        }        
    },


    async store(req,res){
       try {
            const username= req.body.username
            const response = await api.get(`/users/${username}`)

            const user = await User.create({username:response.data.login, name: response.data.name, email:response.data.email, adress:response.data.location, avatar:response.data.avatar_url, bio:response.data.bio}) 

            return res.json(user)
        }catch{
            return res.status(400).json("Error")
        }
    },

    async update(req,res){
        try{ 
         const result = await User.update(req.body,{where: {id: req.params.id  }});
            return res.json(result)
        }catch{
            return res.status(400).json("Error")
        }
    },

    async delete(req, res) {
        try{
            const {id}  = req.body
            const user = await User.findOne({ where: { id } })
            if(!user){                            
                return res.status(400).json({error : "User not found"})
            }else{
                await User.destroy({where: {id}})
                return res.json("Deleted")
            }
        }catch{
            return res.status(400).json("Error")
        }
  
    }
    
}