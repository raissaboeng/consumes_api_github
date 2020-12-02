module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'api',
    define: {
        timestamps: true,
        underscored: true,
    },
};