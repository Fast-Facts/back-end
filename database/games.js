const db = require("./dbConfig.js");

module.exports = {
  get,
  insert,
  add,
};

function get() {
  return db("games");
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

function add(game, id) {
  console.log(game, id, "here");
  const question = game.questions.map((question) => {
      return {question: question, games_id: id, answer: true}})
    return db("questions")
      .insert(question)
      .then((ids) => ids);
  };

