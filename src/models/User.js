const { Model, DataTypes } = require('sequelize')

class User extends Model{
    static init (connection){
        super.init({
            username: DataTypes.STRING,
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            adress: DataTypes.STRING,
            avatar: DataTypes.STRING,
            bio: DataTypes.TEXT
            },{
                sequelize: connection
            })
    }
}

module.exports = User