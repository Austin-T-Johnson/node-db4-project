exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Cereal', created_at: '2021-01-01 08:23:19.120'  },
      { recipe_name: 'Grilled Cheese Sandwhich', created_at: '2021-01-02 05:13:09.100' }
    ]);
  };
  