const { Drink } = require('../models');

const drinkdata = [
  {
    name: 'Negroni',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "1 oz Gin, 1 oz Campari, 1 oz Carpano Antica",
    glass_type: "coupe",
    instructions: "Stir & strain, Garnish with a fancy orange twist"
  },
  {
    name: 'Martini',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "2 oz Beefeater Gin, ¾ oz A26 Dry Vermouth Blend",
    glass_type: "coupe",
    instructions: "Stir & strain, Fancy Lemon Twist or Olives"
  },
  {
    name: 'Vodka Martini',
    image_url: 'placeholder',
    category_id: 4,
    ingredients: "2 ½ oz Vodka",
    glass_type: "coupe",
    instructions: "Shake and dbl strain, Olive/s"
  },
  {
    name: 'Dirty Vodka Martini',
    image_url: 'placeholder',
    category_id: 4,
    ingredients: "2 oz Vodka, ½ oz olive brine",
    glass_type: "coupe",
    instructions: "Shake and dbl strain, Olive/s"
  },
  {
    name: 'Margarita',
    image_url: 'placeholder',
    category_id: 3,
    ingredients: "1 ½ oz Tequila (El Jimador), ¾ oz Cointreau, ¾ oz Lime",
    glass_type: "coupe, double OF",
    instructions: "Long shake, Dbl Strain, With or Without Salt?, Up or Rocks?, Garnish with a lime wheel"
  },
  {
    name: 'Rob Roy',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "2 oz Scotch (Johnnie Walker Red), ¾ oz Punt e Mes, 1 dash Angostura bitters, 1 dash Orange bitters",
    glass_type: "coupe",
    instructions: "Stir & strain, Flamed orange coin"
  },
  {
    name: 'Last Word',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "¾ oz Green Chartreuse, ¾ oz Maraschino, ¾ oz Lime juice, ¾ oz Gin",
    glass_type: "coupe",
    instructions: "Shake and strain, No Garnish"
  },
  {
    name: 'Final Ward',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "¾ oz Yellow Chartreuse, ¾ oz Maraschino, ¾ oz Lemon juice, ¾ oz Rye (Old Overholt)",
    glass_type: "coupe",
    instructions: "Shake and dbl strain, No Garnish"
  },



  
];

const seedDrinks = () => Drink.bulkCreate(drinkdata);

module.exports = seedDrinks;