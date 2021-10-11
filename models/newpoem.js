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
      NewPoem.belongsTo(model.User, {
        foreignKey: 'user_id',
        as: 'user'
      }),
        NewPoem.belongsTo(model.SourceText, {
          foreignKey: 'source_id',
          as: 'source'
        })
    }
  }
  NewPoem.init(
    {
      content: DataTypes.STRING,
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
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
