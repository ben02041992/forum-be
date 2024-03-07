import Sequelize from "sequelize";

const db = process.env.MYSQL_URI;

const sequelize = new Sequelize(process.env.MYSQL_URI, {
  dialect: "mysql",
});

sequelize.authenticate();

export default sequelize;
