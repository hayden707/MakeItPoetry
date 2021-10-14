'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class NewPoem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NewPoem.belongsTo(models.User, {
        foreignKey: 'user_auth'
      }),
        NewPoem.belongsTo(models.SourceText, {
          foreignKey: 'source_id'
        })
    }
  }
  NewPoem.init(
    {
      tite: DataTypes.STRING,
      content: DataTypes.TEXT,
      user_auth: {
        type: DataTypes.STRING,
        onDelete: 'CASCADE',
        unique: true,
        references: {
          model: 'users',
          key: 'auth'
        }
      },
      source_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'sources',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'NewPoem',
      tableName: 'poems'
    }
  )
  return NewPoem
}
