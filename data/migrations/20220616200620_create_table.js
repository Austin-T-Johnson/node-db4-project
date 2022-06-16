
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id');
            tbl.varchar('recipe_name', 128).notNullable();
            tbl.varchar('created_at', 128)
        })

        .createTable('steps', tbl => {
            tbl.increments('step_id');
            tbl.integer('step_number')
                .notNullable()
                .unsigned()
            tbl.varchar('step_instructions', 256).notNullable()
                .notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .references('recipe_id')
                .inTable('recipes');
            tbl.varchar('recipe_name', 128);
        })

        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id');
            tbl.varchar('ingredient_name', 128).unique().notNullable();
            tbl.integer('quantity').notNullable().unsigned()
        })


};


exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
