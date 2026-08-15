const Sequelize = require("sequelize");
const MySqlConnection = require("../../connections/mysql_connection");

const BranchMasterModel = MySqlConnection._instance.define(
  "branchMaster",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    cityId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    branchCode: {
      type: Sequelize.DataTypes.STRING(10),
      allowNull: true
    },
    address: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: true
    },
    isActive: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    createdBy: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    updatedBy: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  },
  {
    tableName: "branch_master"
  }
);

module.exports = BranchMasterModel;
