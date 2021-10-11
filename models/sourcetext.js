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
        foreignKey: 'user_id',
        as: 'user'
      }),
        SourceText.hasMany(model.NewPoem, {
          foreignKey: 'source_text_id',
          as: 'source_text'
        })
    }
  }
  SourceText.init(
    {
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'SourceText',
      tableName: 'source_text'
    }
  )
  return SourceText
}
