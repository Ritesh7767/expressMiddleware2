const express = require("express")

const app = express()


const typeChecker = (typeValue, ...args) => {
    return args.every(ele => typeof ele == typeValue)
}

app.use(express.json())

const dataValidate = (req, res, next) => {

    const {ID, Name, Description, Rating, Genre, Cast} = req.body
    
    if(!typeChecker("String", Name, Description, Genre)) return res.status(400).txt("bad request, some data is invalid")
    
    if(!typeChecker("number", ID, Rating)) return res.status(400).txt("bad request, some data is invalid")
    
    if(!Cast instanceof Array) return res.status(400).txt("bad request, some data is invalid")

    next()
}

app.post('/', (req, res) => {
    
    res.json({message : "Data received"})
})

app.listen(3000, () => {
    console.log("Server started")
})