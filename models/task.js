module.exports = (sequelize, Sequelize) => {
    const auth = sequelize.define('Tasks',{
        title: {
            type: Sequelize.STRING,
            required: true
          },
          description: {
            type: Sequelize.STRING,
          },
          completed: {
            type: Sequelize.BOOLEAN,
            default: false
          }
    })
    return auth;
}