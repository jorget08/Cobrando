const {  Departamento } = require('../db')

class DepartamentoService{
    constructor(){

    }

    async create(data){
        Departamento.create(data)
        return "Departamennto creado correctamente"
    }
}

module.exports = DepartamentoService;