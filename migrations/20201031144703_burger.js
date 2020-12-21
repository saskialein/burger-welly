
exports.up = knex => {
    return knex.schema.createTable('burger', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('image_url')
        table.string('restaurant')
        table.string('description')
        table.string('comment')
  })
};

exports.down = knex =>  {
  return knex.schema.dropTable('burger')
};
