const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    // Encontrar todos os usuarios que terminam com @gmail.com
    // Desses usuários, buscar todos que moram na rua Santos Coelho
    // Desses usuários, buscar tecnologias que começam com React

    const users = await User.findAll({
      attributes: [ 'name', 'email' ],
      where: {
        email: {
          [Op.iLike]: '%@gmail.com'
        }
      },
      include: [
        { association: 'addresses', where: { street: 'Santos Coelho' } },
        {
          association: 'techs',
          required: false,
          where: { 
            name: { 
              [Op.iLike]: 'React%' 
            } 
          } 
        },
      ]
    })

    return res.json(users);
  }
};