const { User } = require('../models');

const users = [
    {
        username: 'link',
        email: 'link@gmail.com',
        password: 'protectZelda'
    },
    {
        username: 'zelda',
        email: 'zelda@gmail.com',
        password: 'reignTrue'
    },
    {
        username: 'ganon',
        email: 'ganon@gmail.com',
        password: 'destroyZelda'
    }
]

const seedUsers = () => User.bulkCreate(users);

module.exports = seedUsers;