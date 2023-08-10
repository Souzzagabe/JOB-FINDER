const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db',
    define: {
        timestamps: true // Habilita as colunas createdAt e updatedAt
    }
})

module.exports = sequelize