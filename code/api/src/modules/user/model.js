'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    },
    bio: {
      type: DataTypes.TEXT
    },
    address: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.TEXT
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
    User.hasMany(models.Shipment)
  }

  return User
}