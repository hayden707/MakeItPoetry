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
    }
  }
  SourceText.init(
    {
      sourceId: DataTypes.INTEGER,
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
