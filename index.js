const express = require("express");
require('dotenv').config()
var cors = require('cors');

const db = require('./database/games.js')

const app = express();

app.use(cors())
app.use(express.json())

const port = process.env.PORT 

app.post("/", async (req,res) => {


    try{
        const game = req.body;

        const newGame = await db.insert(game)
        const newQuestions = await db.add(game, newGame[0])
        // console.log(game)
        res.status(201).json(newGame)
    }

    catch(error){
        res.status(500).json({message: "Error creating game"})
    }

})

app.get("/", async (req, res) => {
    
    try{
        const games = await db.get()
        if(!games) {
            return res.status(404).json({message: "No games were found"})
        }
        res.status(200).json(games)
    }
    catch(err){
        res.status(500).json({message: "Error retrieving games"})
    }
}
)

app.get("/games/:id", async (req, res)=> {


    const id = req.params.id

    
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