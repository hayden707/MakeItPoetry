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
        foreignKey: 'user_id'
      }),
        NewPoem.belongsTo(models.SourceText, {
          foreignKey: 'source_id'
        })
    }
  }
  NewPoem.init(
    {
      content: DataTypes.TEXT,
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
