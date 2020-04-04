const router = require("express").Router();

router.post("/", async (req,res) => {
    try{
        const game = req.body;

        const newGame = await db.insert(game)

        res.status(201).json(newGame)
    }

    catch(error){
        res.status(500).json({message: "Error creating game"})

    }
})

router.get("/", async (req, res) => {
    try{
        const games = await db.get()

        if(!games) {
            return res.status(404).json({message: "No games were found"})
        }
    }
    catch(err){
        res.status(500).json({message: "Error retrieving games"})
    }
}
)