const express = require("express")
const posteosRouter = express.Router()

let info = []

posteosRouter.post("/", (req, res) => {
    info.push(req.body)
    //res.send("La información se agregó correctamente")
    res.json(info)
})

module.exports = {
    posteosRouter
}