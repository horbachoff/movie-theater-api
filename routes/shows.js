const express = require('express');
const router = express.router();
const { Shows } = require('../models/index');

//creating endpoints

// GET 
router.get('/', async (req, res) => {
    res.send( await Shows.findAll())
})

// POST
router.post('/', async (req, res) => {
    await Shows.create(req.body);
    res.json( await Shows.findAll() );
})

// PUT
router.put('/:id', async (req, res) => {
    const newShowData = req.body;
    const showToModify = await Shows.findByPk(req.params.id);
    await showToModify.update(newShowrData);
    res.json( await Shows.findAll() );
})

// DELETE
router.delete('/:id', async (res, req) => {
    await Shows.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json( await Shows.findAll());
})

module.exports = router;