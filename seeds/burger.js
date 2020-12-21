
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('burger').del()
    .then(function () {
      // Inserts seed entries
      return knex('burger').insert([
        {id: 1, name: 'The Greta Thunburger', image_url: 'https://www.visawoap.com/thumb/400x300/crop/https/goodcms.s3.amazonaws.com/woap/event/E9C6E133-082A-492A-8FEA-634BB1C3A07A_1_201_a-200304-163914.jpeg', restaurant: 'The Botanist', description: 'Housemade Swedish meatball-inspired vegan \'beef\' patty with cumin gouda, cucumber ribbons, mushroom aioli, pickled red cabbage, dill mayonnaise and beetroot greens in a Pandoro charcoal bun, with hasselback potatoes.', comment: 'Quite nice, yummy vegan mayonaise, a bit tight with the hasselback potatoes'},
        {id: 2, name: 'The Forager', image_url: 'https://www.visawoap.com/thumb/400x300/crop/https/goodcms.s3.amazonaws.com/woap/event/3K3A2556-200807-091759.jpg', restaurant: 'Mediterranean Foods Trattoria and Deli', description: 'Black Angus beef patty with truffled prosciutto cotto ham, Taleggio cheese, lollo lettuce, balsamic borettane pickled onion and locally foraged porcini mushrooms in an Altamura sourdough bread bun, with Van der Rose potato wedges.', comment: 'Very good'},
        {id: 3, name: 'Hail Mary', image_url: 'https://www.visawoap.com/thumb/400x300/crop/https/goodcms.s3.amazonaws.com/woap/event/88163937_244358030061052_2276858839028465664_n-200304-135425.jpg', restaurant: 'Bebemos', description: 'Cereal-crusted churrasco chicken tenders with wild boar bacon, smoked cheese, micro celery salsa, Apostle Bloody Mary chutney in a Zaida\'s spirulina bun, with curly fry nachos, sour cream and Bloody Mary sauce.', comment: 'Very yummy burger, good chips and bun'},
        {id: 4, name: 'Phantom of the Okra', image_url: 'https://www.visawoap.com/thumb/400x300/crop/https/goodcms.s3.amazonaws.com/woap/event/EAD54921-578F-4796-9F55-11C084BEC2DD-200624-083815-200812-152120.jpeg', restaurant: 'Baobab Cafe', description: 'Deep-fried okra with chilli mango chutney, pickled radish, red slaw and baba ganoush in a Zaida\'s blue bun.', comment: 'A bit average, not enough sauce, no fries, not filling'}
      ]);
    });
};
