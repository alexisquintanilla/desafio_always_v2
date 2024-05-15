import { Router } from 'express'

import { getAllAlumnos, postAlumno, deleteAlumno, getAlumno, putAlumno } from "../controllers/alumno.controller.js";

const router = Router()

// ruta para consultar todos los alumnos
router.get('/alumnos', getAllAlumnos)
//ruta para crear un alumno
router.post('/alumnos', postAlumno)
// ruta para eliminar un alumno
router.delete('/alumnos/:rut', deleteAlumno)
// ruta para consultar por un alumno con su rut
router.get('/alumnos/:rut', getAlumno)
// ruta para actualizar un dato de un alumno excepto el rut
router.put('/alumnos/:rut', putAlumno)


export default router