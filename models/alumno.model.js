import { pool } from "../database/conecction.js"

// mostrar todos los alumnos
const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM ALUMNOS')
    return rows
}
// crear alumnos
const createAlumno = async ({ nombre, rut, curso, nivel }) => {

    const query = {
        text: `
        INSERT INTO ALUMNOS (NOMBRE,RUT,CURSO,NIVEL) 
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
        values: [nombre, rut, curso, nivel]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}
// eliminar alumno
const deleteAlumno = async ({ rut }) => {
    const query = {
        text: `DELETE FROM ALUMNOS WHERE RUT = $1
               RETURNING *
        `,
        values: [rut]
    }

    const { rows } = await pool.query(query)
    return rows[0]

}
// consultar un alumno por su rut
const getAlumno = async ({ rut }) => {
    const query = {
        text: `SELECT * FROM ALUMNOS WHERE RUT = $1`,
        values: [rut]
    }

    const { rows } = await pool.query(query)
    return rows[0]

}
// actualizar un alumno
const updateAlumno = async (alumno) => {
    const query = {
        text: `UPDATE ALUMNOS
        SET NOMBRE = $2, CURSO=$3, NIVEL=$4
        WHERE RUT = $1 RETURNING *`,
        values: [alumno.rut, alumno.nombre, alumno.curso, alumno.nivel]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}


export const Alumnos = { findAll, createAlumno, deleteAlumno, getAlumno, updateAlumno }
