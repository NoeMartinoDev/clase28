const express = require('express');
const usersRouter = express.Router()

usersRouter.get("/:id/:name", (req, res) => {
    console.log(req.params)
})

usersRouter.get("/", (req, res) => {
    const { name } = req.query

    if(name) {
        res.send("Me llegó la query")
    } else {
        res.send("No me llegó la query pero anda todo ok")
    }
})

module.exports = {
    usersRouter
}