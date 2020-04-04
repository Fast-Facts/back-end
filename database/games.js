const db = require("./dbConfig.js");

module.exports = {
  get,
  insert,
  add,
  getQuestions
};

function get() {
  return db("games")
}

function insert(game) {
  const newGame = { user: game.user, name: game.name };
//   console.log(newGame);
  return db("games")
    .insert(newGame)
    .returning("id")
    .then((ids) => {
      console.log(ids, "GAME SRTHSRTHSRTHSRTHSRTHSRHTID")
      return ids;
    }); 
}

function add(game, id ) {
  console.log(game, id, "here");
  const question = game.questions.map((question) => {
      return {question: question[0], answer: question[1], games_id: id}})
    return db("questions")
      .insert(question)
      .returning("games_id")
      .then((ids) => ids);
  };

function getQuestions(id){
  console.log(id)
  return db("questions")
    .where("questions.games_id", id)
}

