const { Router } = require('express');
// Importar todos los routers;
const rutasEmpleado = require('./empleado')
const rutasDepartamento = require('./departamento')

const router = Router();

// Configurar los routers

router.use("/empleado", rutasEmpleado)
router.use("/departamento", rutasDepartamento)
module.exports = router;
