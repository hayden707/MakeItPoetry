'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(model.SourceText, {
        foreignKey: 'user_id',
        as: 'user'
      }),
        User.hasMany(model.NewPoem, {
          foreignKey: 'user_id',
          as: 'user'
        })
    }
  }
  User.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'user'
    }
  )
  return User
}
