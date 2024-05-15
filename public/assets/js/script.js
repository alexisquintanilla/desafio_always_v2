const alumnosDOM = document.querySelector('#cuerpo')
const formAddAlumno = document.querySelector('#formAddAlumno')
const editPush = document.getElementById('editButton')

const getUsers = async () => {
    const { data } = await axios.get('/alumnos')
    alumnosDOM.innerHTML = ''
    data.forEach((alumnos) => {

        alumnosDOM.innerHTML += `
        <tr>
        <th scope="row">${alumnos.rut}</th>
          <td>${alumnos.nombre}</td>
          <td>${alumnos.curso}</td>
          <td>${alumnos.nivel}</td>
          <td>
            <button class="btn btn-warning" onclick="updateUser('${alumnos.rut}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
            <button class="btn btn-danger" onclick="removeUser('${alumnos.rut}')">Eliminar</button>
          </td>
        </tr>
        `
    })
}

const updateUser = async rut => {
    const { data } = await axios.get('/alumnos/' + rut)
    console.log(data)
    document.getElementById('nombreModal').value = data.nombre
    document.getElementById('cursoModal').value = data.curso
    document.getElementById('nivelModal').value = data.nivel
    document.getElementById('rutModal').value = data.rut
}

editPush.addEventListener('click', async () => {
    const nombre = document.getElementById('nombreModal').value
    const curso = document.getElementById('cursoModal').value
    const nivel = document.getElementById('nivelModal').value
    const rut = document.getElementById('rutModal').value

    await axios.put('/alumnos/' + rut, {
        nombre, curso, nivel
    })
    const modal = document.getElementById('exampleModal');
    modal.style.display = 'none';
    location.reload();

})



formAddAlumno.addEventListener('submit', async (e) => {
    e.preventDefault()

    if (!e.target.rut.value || !e.target.nombre.value || !e.target.curso.value || !e.target.nivel.value) {
        return console.log('Todos los campos obligatorios')
    }
    await axios.post('/alumnos', {
        rut: e.target.rut.value,
        nombre: e.target.nombre.value,
        curso: e.target.curso.value,
        nivel: e.target.nivel.value
    })

    getUsers()
})

const removeUser = async (rut) => {
    await axios.delete('/alumnos/' + rut)
    getUsers()
}

getUsers()