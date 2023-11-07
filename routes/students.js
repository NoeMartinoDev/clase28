const express = require("express")
const studentsRouter = express.Router()

let students = [
    {
        id: 1,
        name: "Gabriel"
    },
    {
        id: 2,
        name: "Manuel"
    },
    {
        id: 3,
        name: "Julia"
    },
    {
        id: 4,
        name: "Lucía"
    },
]

studentsRouter.get("/:id", (req, res) => {
    const { id } = req.params

    const student = students.find( s => s.id === Number(id))
    if(student) res.status(200).json(student)
    else res.status(404).send(`No se encontró el alumno de id ${id}`)
})

studentsRouter.get("/", (req, res) => {
    const { name } = req.query

    if(name) {
        const student = students.find( s => s.name === name)
        if(student) res.json(student)
        else res.status(404).send("No existe ese estudiante")
    } else res.json(students)
})

studentsRouter.post("/", (req, res) => {
    students.push(req.body)
    res.status(200).send("Student created")
    console.log(students)
})

module.exports = {
    studentsRouter
}