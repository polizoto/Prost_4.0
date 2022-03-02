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
  {
    name: 'Naked and Famous',
    image_url: 'placeholder',
    category_id: 3,
    ingredients: "¾ oz Mezcal (Vida), ¾ oz Yellow Chartreuse, ¾ oz Aperol, ¾ oz Lime juice",
    glass_type: "coupe",
    instructions: "Shake and dbl strain, No Garnish"
  },
  {
    name: 'French 75',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "1 oz Gin (Beefeater), ½ oz Lemon, ½ oz Simple syrup",
    glass_type: "Wine Glass",
    instructions: "Shake and dbl strain, Sparkling Brut to Hemisphere, Fancy lemon twist"
  },
  {
    name: 'Sazerac',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "2 oz Rye (Old Overholt), ¼ bar spoon of granulated sugar, 6 dashes of Peychaud’s bitters",
    glass_type: "Single OF",
    instructions: "Make bittered sugar slurry w/bar spoon then add the Rye, fill w/ ice and stir, Mist Single OF with 3 sprays of Absinthe, Strain into Single OF, Lemon Peel"
  },
  {
    name: 'Jack Rose',
    image_url: 'placeholder',
    category_id: 6,
    ingredients: "1 ½ oz Bonded Apple Brandy, ¾ oz Lemon, ½ oz Grenadine",
    glass_type: "coupe",
    instructions: "Shake and dbl strain, Garnish with a cherry"
  },
  {
    name: 'Moscow Mule',
    image_url: 'placeholder',
    category_id: 4,
    ingredients: "1 ½ oz Vodka, 1 oz Ginger syrup, ½ oz Lime",
    glass_type: "Double OF",
    instructions: "Fill glass with crushed ice, Swizzle, Top with more crushed ice, Garnish with candied ginger & a lime wheel"
  },
  {
    name: 'Old Fashioned',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "2 oz Bourbon or Rye, ¼ bar spoon of granulated sugar, 6 dashes Angostura bitters",
    glass_type: "double OF",
    instructions: "Make bittered sugar slurry with bar spoon, Add lemon peel to slurry, rub the peel face down in the slurry to extract the oils, add the whiskey and ice and stir"
  },
  {
    name: 'Muddled Old Fashioned',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "2 oz Bourbon or Rye, 1 Luxardo Cherry, 1 Slice of orange, ¼ oz demerara syrup, 3 dashes Angostura bitters",
    glass_type: "double OF",
    instructions: "Muddle the fruit carefully, add whiskey and ice, cover w/ large tin and tumble 3 times, pour into the Double OF"
  },
  {
    name: 'Penicillin',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "1 ½ oz Johnnie Walker Red, ¾ oz Lemon, ⅓ oz Honey Syrup, ⅓ oz Ginger Syrup",
    glass_type: "coupe",
    instructions: "Shake and strain, Garnish with candied ginger, mist coupe glass with 3 sprays of Laphroaig"
  },
  {
    name: 'Bees Knees ',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "2 oz Beefeater gin, ½ oz Honey syrup, ½ oz Lemon",
    glass_type: "coupe",
    instructions: "Shake and strain, Garnish with candied ginger, mist coupe glass with 3 sprays of Laphroaig"
  },
  {
    name: 'Alley Cocktail',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "2 oz Wild Turkey 101, ½ oz A26 Dry Vermouth, ¼ oz Luxardo, ¼ oz Cynar, 1 dash celery bitters",
    glass_type: "coupe",
    instructions: "Shake and strain, Garnish with a flamed lemon coin"
  },
  {
    name: 'Fourth Regiment',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "2 oz Wild Turkey 101, ¾ oz Carpano Antica, 1 Dash Peychaud’s, 1 Dash Celery Bitters, 1 Dash Orange Bitters",
    glass_type: "coupe",
    instructions: "Shake and strain"
  },
  {
    name: 'Jibe Ho!',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "1 ½ oz Johnnie Walker Red, ¾ oz Pina Demerara, ¾ oz Lime, ¾ oz Drambuie",
    glass_type: "grande coupe",
    instructions: "Ice Shake, Add Egg white & dry shake, Fine mesh strain, 3 drops of Angostura"
  },
  {
    name: 'Mexican Herbalist',
    image_url: 'placeholder',
    category_id: 3,
    ingredients: "¾ oz Jalapeno Hibiscus Tequila, ¾ oz Jimador, ¾ oz Lime, ½ oz Ginger Syrup, ¼ oz Honey",
    glass_type: "double OF",
    instructions: "Long shake & double strain onto fresh ice, garnish with a lime wheel"
  },
  {
    name: 'Southern Gin Cocktail',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "2 oz Gin (DD American Dry), ¼ oz Cointreau, 2 Dashes Orange bitters",
    glass_type: "coupe",
    instructions: "Stir & strain, fancy orange twist"
  },
  {
    name: 'Clover Club',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "1 ½ oz Gin (Beefeater), ½ oz Dry Vermouth, ½ oz Lemon, ½ oz Raspberry syrup",
    glass_type: "coupe",
    instructions: "Ice Shake, add egg white and dry shake, fine mesh strain, ghost lemon coin"
  },
  {
    name: 'Martinez',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "1 ½ oz Old Tom Gin, 1 ½ oz Carpano Antica, ¼ oz Luxardo, 2 Dashes Orange Bitters",
    glass_type: "coupe",
    instructions: "Stir & strain, fancy orange twist"
  },
  {
    name: 'Dark & Stormy',
    image_url: 'placeholder',
    category_id: 5,
    ingredients: "2 oz Goslings, ¾ oz Ginger, ¾ oz Lime",
    glass_type: "coupe",
    instructions: "10 count shake & strain on fresh ice, Top with Soda, Sink Lime Wheel"
  },
  {
    name: 'Pimms Cup',
    image_url: 'placeholder',
    category_id: 7,
    ingredients: "2 oz Pimm’s No 1, ¾ oz Ginger, ¾ oz Lemon",
    glass_type: "Collins",
    instructions: "Shake & Strain into fresh ice, top with soda, Garnish with 2 slices of cucumber"
  },
  {
    name: 'Boulevardier',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "1 ½ oz Larceny, ¾ oz Carpano Antica, ¾ oz Campari",
    glass_type: "coupe",
    instructions: "Shake & Strain, Garnish with flamed orange coin"
  },
  {
    name: 'Daiquiri',
    image_url: 'placeholder',
    category_id: 5,
    ingredients: "2 oz Don Q, ½ 0z Lime juice, ½ oz simple",
    glass_type: "coupe",
    instructions: "Shake and  double strain"
  },
  {
    name: 'Gimlet',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "2 oz Gin, ⅓ oz Lime juice, ⅓ oz Simple",
    glass_type: "coupe",
    instructions: "Shake and double strain"
  },
  {
    name: 'Caipirinha',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "2 oz Cachaca, ½ oz lime, ½ oz simple",
    glass_type: "double OF",
    instructions: "Muddle the lime and simple together, add the Cachaca, shake and dump"
  },
  {
    name: 'Vieux Carre',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "¾ oz Rye, ¾ oz Ansac Cognac, ¾ oz Carpano Antica, ¼ oz Benedictine, 2 Dash Angostura, 2 Dash Peychaud’s",
    glass_type: "Double OF",
    instructions: "Build over a large cube, Stir a couple times, Garnish with cherry"
  },
  {
    name: 'Vesper',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "1 ½ oz Gin (Beefeater), ¾ oz Vodka (Titos), ½ oz Cocchi Americano Bianco",
    glass_type: "coupe",
    instructions: "Shake and double strain, lemon twist"
  },
  {
    name: 'Mai Tai',
    image_url: 'placeholder',
    category_id: 5,
    ingredients: "2 oz rum blend, ½ oz Cointreau, ½ oz Orgeat, ½ oz Lime",
    glass_type: "brown tiki mug",
    instructions: "pour over crushed ice and swizzle, garnish with mint bouquet"
  },
  {
    name: 'Rusty Nail',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "1 ½ oz Scotch (Johnnie Walker Red), ¾ oz Drambuie",
    glass_type: "coupe",
    instructions: "Build over a large cube, short stir, garnish with lemon peel"
  },
  {
    name: 'Whiskey Sour (with egg white)',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "1 ½ oz Bourbon (WT 101), ½ oz Demerara Syrup, ½ oz Lemon",
    glass_type: "grande coupe",
    instructions: "Ice Shake, Add egg white & dry Shake, Fine mesh strain into a chilled sour glass, Garnish with 3 drops of Angostura"
  },
  {
    name: 'Whiskey Sour (w/o egg white)',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "1 ½ oz Bourbon (WT 101), ¾ oz Demerara Syrup, ¾ oz Lemon",
    glass_type: "double OF",
    instructions: "Shake and dbl strain into fresh ice, Garnish with a flag"
  },
  {
    name: 'Bronx',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "1 oz Gin (Beefeater), 1 oz Orange Juice, ½ oz A26 Vermouth, ½ oz Carpano Antica",
    glass_type: "coupe",
    instructions: "Shake & dbl strain"
  },
  {
    name: 'Income Tax',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "1 ½ oz Beefeater, ¾ oz Orange Juice, ¼ oz A26 Vermouth, ¼ oz Punt e Mes, 2 Dashes Angostura",
    glass_type: "coupe",
    instructions: "Shake & dbl strain"
  },
  {
    name: 'Toronto',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "2 oz Old Overholt Rye, ⅓ oz Fernet Branca, ¼ oz Demerara",
    glass_type: "coupe",
    instructions: "Stir & strain, Garnish with lemon coin"
  },
  {
    name: 'Gold Rush',
    image_url: 'placeholder',
    category_id: 2,
    ingredients: "1 ½ oz Bourbon (Larceny), ¾ oz Honey Syrup, ¾ oz Lemon",
    glass_type: "coupe",
    instructions: "Shake and Dbl strain"
  },
  {
    name: 'Corpse Reviver #2',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "¾ oz Gin (Beefeater), ¾ oz Cocchi Americano Bianco, ¾ oz Cointreau, ¾ oz Lemon",
    glass_type: "coupe",
    instructions: "Shake and Dbl strain, Garnish with Absinthe sprayed coupe"
  },
  {
    name: 'Corpse Reviver #26',
    image_url: 'placeholder',
    category_id: 6,
    ingredients: "¾ oz Fair Game Apple Brandy, ¾ oz Aperol, ¾ oz Lillet Rose, ¾ oz Lemon Juice",
    glass_type: "grand coupe",
    instructions: "10 count shake and strain, Top with Franciacorta (or Sparkling Rose)"
  },
  {
    name: 'Alaska',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "2 oz Tanqueray, ¾ oz Yellow Chartreuse, 2 Dashes Orange bitters",
    glass_type: "coupe",
    instructions: "Shake and strain, no garnish"
  },
  {
    name: 'Kir Royale',
    image_url: 'placeholder',
    category_id: 7,
    ingredients: "½ oz Cassis, Top with Cava",
    glass_type: "coupe",
    instructions: "Garnish with a fancy twist"
  },
  {
    name: 'Kir',
    image_url: 'placeholder',
    category_id: 7,
    ingredients: "½ oz Cassis, Top with driest crispest white wine",
    glass_type: "coupe",
    instructions: "Garnish with fancy twist"
  },
  {
    name: 'Sidecar',
    image_url: 'placeholder',
    category_id: 6,
    ingredients: "1 ½ oz Ansac Cognac, ¾ Cointreau, ¾ Lemon juice",
    glass_type: "coupe",
    instructions: "Shake & strain into sugar rimmed coupe"
  },
  {
    name: 'Cosmopolitan',
    image_url: 'placeholder',
    category_id: 4,
    ingredients: "1 ½ oz Titos, ¾ oz Cointreau, ¼  oz Cranberry syrup, ¼ oz lime, ¼ oz simple",
    glass_type: "coupe",
    instructions: "Shake & dbl strain, Orange twist"
  },






  
];

const seedDrinks = () => Drink.bulkCreate(drinkdata);

module.exports = seedDrinks;