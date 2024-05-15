import { Alumnos } from '../models/alumno.model.js'
import { handleError } from "../database/errors.js"

// mostrar todos los alumnos
export const getAllAlumnos = async (req, res) => {

    try {
        const alumnos = await Alumnos.findAll()
        if (!alumnos) {
            return res.status(404).json({ ok: false, msg: '404' })
        }
        return res.json(alumnos)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}
//crear un alumno
export const postAlumno = async (req, res) => {
    try {
        const { nombre, rut, curso, nivel } = req.body

        if (!nombre.trim() || !rut.trim() || !curso.trim() || !nivel) {
            return res.json({ ok: false, msg: "campos obligatorios" })
        }
        const newAlumnos = {
            rut,
            nombre,
            curso,
            nivel
        }
        const alumno = await Alumnos.createAlumno(newAlumnos)
        return res.json(alumno)

    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}
//eliminar un alumno
export const deleteAlumno = async (req, res) => {
    try {
        const { rut } = req.params
        console.log(req.params)
        const deleteAlumno = await Alumnos.deleteAlumno({ rut })
        return res.json(deleteAlumno)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}
// revisar un alumno con su rut
export const getAlumno = async (req, res) => {
    try {
        const { rut } = req.params
        const resAlumno = await Alumnos.getAlumno({ rut })
        return res.json(resAlumno)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}
// actualizar un alumno
export const putAlumno = async (req, res) => {
    try {
        const { rut } = req.params
        const { nombre, curso, nivel } = req.body
        if (!nombre.trim() || !rut.trim() || !curso.trim() || !nivel) {
            return res.json({ ok: false, msg: "campos obligatorios" })
        }
        const updateAlumnos = {
            rut,
            nombre,
            curso,
            nivel
        }
        const updateAlumno = await Alumnos.updateAlumno(updateAlumnos)
        return res.json(updateAlumno)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}