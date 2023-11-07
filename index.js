const express = require("express")
const server = express()
const { usersRouter } = require("./routes/users")
const { posteosRouter } = require("./routes/posteos")
const { studentsRouter } = require("./routes/students")

server.use(express.json())

server.use("/users", usersRouter)

server.use("/posteos", posteosRouter)

server.use("/students", studentsRouter)

server.listen(3001, () => {
    console.log("Listening on port 3001")
})