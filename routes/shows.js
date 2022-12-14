const express = require('express');
const router = express.Router();
const { Show } = require('../models/index');

//creating endpoints

// GET 
router.get('/', async (req, res) => {
    res.json( await Show.findAll())
})

// POST
router.post('/', async (req, res) => {
    await Show.create(req.body);
    res.json( await Show.findAll() );
})

// PUT
router.put('/:id', async (req, res) => {
    const newShowData = req.body;
    const showToModify = await Show.findByPk(req.params.id);
    await showToModify.update(newShowData);
    res.send( await Show.findAll() );
})

// DELETE
router.delete('/:id', async (res, req) => {
    await Show.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send( await Show.findAll());
})

module.exports = router;