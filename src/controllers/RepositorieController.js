const User = require('../models/User')
const Rep = require('../models/Repositorie')
const api = require('../api')


module.exports = {
    async create(req,res){
        const {user_id} = req.params

        const {username} = await User.findByPk(user_id)
        if(!username){
            return res.status(400).json({error: 'User not found'})  
        }

        const result = await api.get(`/users/${username}/repos`)

        if(!result){
            return res.status(400).json({error: 'Repositorie not found'}) 
        }
        const repositories = result.data.map(async function(repositorie){
           const newRep = {name:repositorie.name, 
            description: repositorie.description, 
            public:!repositorie.private, 
            slug:repositorie.full_name, 
            owner: user_id
           }
           
           await Rep.create(newRep)   
           
           return newRep;
        })

        Promise.all(repositories).then(function(results) {
             return res.json(results)
        })
       
    },

    async list(req,res){
        try{
            const {user_id} = req.params

            const {username} = await User.findByPk(user_id)
            if(!username){
                return res.status(400).json({error: 'User not found'})  
            }

            const repositories = await Rep.findAll({ where: { owner: user_id } })

            if(repositories.length <= 0){
                return res.status(400).json("Repositorie not found")
            }
            const response = {
                data: repositories,
                count: repositories.length
            }
            return res.json(response)

        }catch{
            return res.status(400).json("Error")
        }        
    },

    async update(req,res){
        try{ 
            const {user_id, id_rep} = req.params
            const {username} = await User.findByPk(user_id)
            if(username == null){
                return res.status(400).json({error: 'User not found'})  
            }else{
                const rep = await Rep.findByPk(id_rep)
                if(!rep){
                    return res.status(400).json({error: 'Repositorie not found'}) 
                }else{
                    const result = await Rep.update(req.body,{where: {owner: user_id, id: id_rep}} ); 
                    return res.json("Updated "+result[0]+ " repositorie")
                }
            }
        
        }catch{
            return res.status(400).json("Error")
        }
    },

    async delete(req, res) {
        try{
            const {user_id} = req.params

            const {username} = await User.findByPk(user_id)
            if(!username){
                return res.status(400).json({error: 'User not found'})  
            }else{
                await Rep.destroy({where: {owner:user_id}})
                return res.json("Deleted") 
            }
        }catch{
            return res.status(400).json({error : "Error"})
        }
    }
}