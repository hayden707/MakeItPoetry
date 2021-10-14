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
      User.hasMany(models.SourceText, {
        foreignKey: 'user_auth'
      }),
        User.hasMany(models.NewPoem, {
          foreignKey: 'user_auth'
        })
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      auth: {
        type: DataTypes.STRING,
        // allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
