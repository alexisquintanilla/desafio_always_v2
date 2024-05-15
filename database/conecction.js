import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg
const connectionString = process.env.HOST

export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true
})

try {
    const res = await pool.query('SELECT NOW()')
    const horaActual = res.rows[0].now
    console.log('db conectada ' + horaActual)
} catch (error) {
    console.log(error)
}