const express = require('express');
const router = express.Router();
const carService = require('../service/carService')

router.get('/car', async function(req, res){
    try {
        const cars = await carService.getCar();
        res.status(200).send(cars);
    } catch (error) {
        res.json(error.message);
    }
});

router.get('/car/:id', async function(req, res){
    try {
        const car = await carService.getCarById(req.params.id);
        res.status(200).send(car);
    } catch (error) {
        res.json(error.message);
    }
});

router.post('/car/add', async function(req, res){
    try {
        const car = req.body;
        const newPost = await carService.postCar(car);
        res.status(201).send(newPost);    
    } catch (error) {
        res.json(error.message);
    }
});

router.put('/car/update/:id', async function(req, res){
    try {
        const car = await carService.updateCar(req.params.id, req.body);
        res.status(200).send(car);
    } catch (error) {
        res.json(error.message);
    }
});

router.delete('/car/delete/:id', async function(req, res){
    try {
        const car = await carService.delete(req.params.id);
        res.status(200).send(car);
    } catch (error) {
        res.json(error.message);
    }
});

module.exports = router;
