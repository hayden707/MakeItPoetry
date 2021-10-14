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
        foreignKey: 'user_auth'
      }),
        SourceText.hasMany(models.NewPoem, {
          foreignKey: 'source_id'
        })
    }
  }
  SourceText.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      user_auth: {
        type: DataTypes.STRING,
        onDelete: 'CASCADE',
        unique: true,
        references: {
          model: 'users',
          key: 'auth'
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
