
exports.up = function(knex) {
    return knex.schema
    .createTable('games', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('user').notNullable();
    })
    .createTable('questions', function(questions){
        questions.increments('id').primary();
        questions.integer('games_id').references('id').inTable('games').notNullable().onDelete('cascade')
        questions.string('question').notNullable()
        questions.string('answer').notNullable()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('games');
    return knex.schema.dropTable('questions');
};
