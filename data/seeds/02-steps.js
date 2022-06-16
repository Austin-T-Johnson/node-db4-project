exports.seed = function(knex, Promise) {
return knex('steps').insert([  
{  step_number: 1, step_instructions: 'Pour cereal into bowl'},
{  step_number: 2, step_instructions: 'Add milk to bowl'},
{  step_number: 1, step_instructions: 'Heat up pan'},
{  step_number: 2, step_instructions: 'Butter bread'},
{  step_number: 3, step_instructions: 'Add bread to pan'},
{  step_number: 4, step_instructions: 'Add Cheese'},
{  step_number: 5, step_instructions: 'Once cheese melts remove from pan and enjoy'},
]);
}