const db = require('./dbConfig.js')

module.exports = {
    get,
    insert
  };

  function get(){
      return db("games")
  }

  function insert(game){
      return db("games")
      .insert(post)
      .then(ids => {
          return ids
      })
  }