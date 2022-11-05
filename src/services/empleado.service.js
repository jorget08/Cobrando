const { Empleado, Departamento } = require('../db')

class EmpleadoService{
    constructor(){

    }

    async findAll(){
        const empleados = await Empleado.findAll()
        return empleados
    }

    async create(data){
        const {departamentoId} = data
        await Empleado.create(data);
        //departamentoId ? await Empleado.setDepartamento() : null
        return "Empleado creado correctamente"
    }

    async delete(id){
        const empleado = await Empleado.findByPk(id);
        await empleado.destroy();
        return {response: true};
    }

    async findOne(id){
        const empleado = await Empleado.findByPk(id);
        return empleado;
    }

    async findByName(nombre){
        const empleado = await this.findOne({
            where: {
                nombre,
            },
            include: {
                model: Departamento
            }
        });
        return empleado;
    }

    async update(id, data){
        const empleado = await this.findOne(id)
        await empleado.update(data)
        return "Empleado actualizado"
    }
}

module.exports = EmpleadoService;