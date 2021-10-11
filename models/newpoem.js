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
    }
  }
  NewPoem.init(
    {
      poemId: DataTypes.INTEGER,
      sourceId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'NewPoem',
      tableName: 'new_poem'
    }
  )
  return NewPoem
}
