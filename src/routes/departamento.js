const { Router } = require('express');
const router = Router();
const {Departamento} = require('../db');
const DepartamentoService = require('../services/departamento.service')
const service = new DepartamentoService()

router.post('/', async(req,res,next) => {
    try{
        res.status(201).send(await service.create(req.body))
    }
    catch(error){
        next(error)
    }
})



module.exports = router;