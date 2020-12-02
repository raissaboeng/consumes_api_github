const { Model, DataTypes } = require('sequelize')
const { associations } = require('./User')


class Repositorie extends Model{
    static init (connection){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            public: DataTypes.BOOLEAN,
            slug: DataTypes.TEXT
            },{
                sequelize: connection
            })
    }

    static associate(models){
        this.belongsTo(models.User,  { foreignKey: 'owner', as: 'user'})
    }
}
module.exports = Repositorie