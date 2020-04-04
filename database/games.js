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
    .then((ids) => {
      return ids;
    });
}

function add(game, id ) {
  console.log(game, id, "here");
  const question = game.questions.map((question) => {
      return {question: question[0], answer: question[1], games_id: id}})
    return db("questions")
      .insert(question)
      .then((ids) => ids);
  };

function getQuestions(id){
  console.log(id)
  return db("questions")
    .where("questions.games_id", id)
}

