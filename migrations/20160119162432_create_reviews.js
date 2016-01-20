
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function(table){
    table.increments();
    table.string('movie_id');
    table.string('author');
    table.string('rating');
  })
};

exports.down = function(knex, Promise) {

};
