'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class SourceText extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SourceText.belongsTo(models.User, {
        foreignKey: 'user_id'
      }),
        SourceText.hasMany(models.NewPoem, {
          foreignKey: 'source_id'
        })
    }
  }
  SourceText.init(
    {
      content: DataTypes.TEXT,
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'SourceText',
      tableName: 'sources'
    }
  )
  return SourceText
}
