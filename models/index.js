const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('toDo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const testDbConnection = async () => {
    try{
     await sequelize.authenticate();
     console.log("Connection to the database is successfull :)")
    }
    catch(error){
     console.error("Connection was not successfull:", error)
    }
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tasks = require("./task")(sequelize, Sequelize);

module.exports = db;