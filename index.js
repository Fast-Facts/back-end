const express = require("express");
require('dotenv').config()
var cors = require('cors');

const db = require('./database/games.js')

const app = express();

app.use(cors())
app.use(express.json())

const port = process.env.PORT 

app.post("/", async (req,res) => {

    console.log(req.body)

    try{
        const game = req.body;
        console.log(game)

        const newGame = await db.insert(game)
        console.log(newGame)
        const newQuestions = await db.add(game, newGame[0])
        // console.log(game)
        res.status(201).json(newGame)
    }

    catch(error){
        res.status(500).json({message: "Error creating game"})
        console.log(error)
    }

})

app.get("/", async (req, res) => {
    
    try{
        const games = await db.get()
        console.log("hello")
        if(!games) {
            return res.status(404).json({message: "No games were found"})
        }
        res.status(200).json(games)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: "Error retrieving games"})
    }
}
)

app.get("/games/:id", async (req, res)=> {

    console.log(req.params.id)

    const id = req.params.id

    console.log(id)
    
    try{
        games = await db.getQuestions(id)
        res.status(200).json(games)
    }

    catch(err){
        console.log(err)
    }
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});