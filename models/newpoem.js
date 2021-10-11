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
          foreignKey: 'source_text_id',
          as: 'source_text'
        })
    }
  }
  NewPoem.init(
    {
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
