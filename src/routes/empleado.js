const { Router } = require('express');
const router = Router();
const {Empleado} = require('../db');
const EmpleadoService = require('../services/empleado.service')
const service = new EmpleadoService()

router.get("/", async(req,res,next) => {
    try {
        const {name} = req.query
        name ? 
        res.status(200).json(await service.findByName()) : 
        res.status(200).json(await service.findAll())
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req,res,next) => {
    try {
        const {id} = req.params
        res.send(200).json(await service.findOne(id))
    } catch (error) {
        next(error)
    }
})

router.post('/', async(req,res,next) => {
    try{
        res.status(201).send(await service.create(req.body))
    }
    catch(error){
        next(error)
    }
})

router.patch('/:id', async(req,res,next) => {
    try{
        const {id} = req.params
        res.status(201).send(await service.update(id, req.body))
    }
    catch(error){
        next(error)
    }
})

router.delete('/:id', async(req,res,next) => {
    try{
        const {id} = req.params
        res.status(201).send(await service.delete(id))
    }
    catch(error){
        next(error)
    }
})

module.exports = router;