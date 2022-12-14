const express = require('express');
const router = express.router();
const { Users } = require('../models/index');

//creating endpoints

// GET 
router.get('/', async (req, res) => {
    res.send( await Users.findAll())
})

// POST
router.post('/', async (req, res) => {
    await Users.create(req.body);
    res.json( await Users.findAll() );
})

// PUT
router.put('/:id', async (req, res) => {
    const newUserData = req.body;
    const userToModify = await Users.findByPk(req.params.id);
    await userToModify.update(newUserData);
    res.json( await Users.findAll() );
})

// DELETE
router.delete('/:id', async (res, req) => {
    await Users.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json( await Users.findAll());
})

module.exports = router;