exports.seed = function(knex, Promise) {
return knex('steps').insert([  
{ recipe_name: 'Cereal', step_number: 1, step_instructions: 'Pour cereal into bowl', recipe_id:1},
{ recipe_name: 'Cereal', step_number: 2, step_instructions: 'Add milk to bowl', recipe_id:1},
{ recipe_name: 'Grilled Cheese Sandwhich', step_number: 1, step_instructions: 'Heat up pan', recipe_id:2},
{ recipe_name: 'Grilled Cheese Sandwhich', step_number: 2, step_instructions: 'Butter bread', recipe_id:2},
{ recipe_name: 'Grilled Cheese Sandwhich', step_number: 3, step_instructions: 'Add bread to pan', recipe_id:2},
{ recipe_name: 'Grilled Cheese Sandwhich', step_number: 4, step_instructions: 'Add Cheese', recipe_id:2},
{ recipe_name: 'Grilled Cheese Sandwhich', step_number: 5, step_instructions: 'Once cheese melts remove from pan and enjoy', recipe_id:2},
]);
}