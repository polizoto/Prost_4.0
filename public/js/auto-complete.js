let searchablesTwo = [
	{
		"id": 1,
		"name": "Negroni"
	},
	{
		"id": 2,
		"name": "Martini"
	},
	{
		"id": 3,
		"name": "Vodka Martini"
	},
	{
		"id": 4,
		"name": "Dirty Vodka Martini"
	},
	{
		"id": 5,
		"name": "Margarita"
	},
	{
		"id": 6,
		"name": "Rob Roy"
	},
	{
		"id": 7,
		"name": "Last Word"
	},
	{
		"id": 8,
		"name": "Final Ward"
	},
	{
		"id": 9,
		"name": "Naked and Famous"
	},
	{
		"id": 10,
		"name": "French 75"
	},
	{
		"id": 11,
		"name": "Mojito"
	},
	{
		"id": 12,
		"name": "Sazerac"
	},
	{
		"id": 13,
		"name": "Jack Rose"
	},
	{
		"id": 14,
		"name": "Moscow Mule"
	},
	{
		"id": 15,
		"name": "Old Fashioned"
	},
	{
		"id": 16,
		"name": "Muddled Old Fashioned"
	},
	{
		"id": 17,
		"name": "Penicillin"
	},
	{
		"id": 18,
		"name": "Bees Knees "
	},
	{
		"id": 19,
		"name": "Alley Cocktail"
	},
	{
		"id": 20,
		"name": "Fourth Regiment"
	},
	{
		"id": 21,
		"name": "Jibe Ho!"
	},
	{
		"id": 22,
		"name": "Mexican Herbalist"
	},
	{
		"id": 23,
		"name": "Southern Gin Cocktail"
	},
	{
		"id": 24,
		"name": "Clover Club"
	},
	{
		"id": 25,
		"name": "Martinez"
	},
	{
		"id": 26,
		"name": "Dark & Stormy"
	},
	{
		"id": 27,
		"name": "Pimm’s Cup"
	},
	{
		"id": 28,
		"name": "Boulevardier"
	},
	{
		"id": 29,
		"name": "Daiquiri"
	},
	{
		"id": 30,
		"name": "Gimlet"
	},
	{
		"id": 31,
		"name": "Caipirinha"
	},
	{
		"id": 32,
		"name": "Vieux Carre"
	},
	{
		"id": 33,
		"name": "Vesper"
	},
	{
		"id": 34,
		"name": "Mai Tai"
	},
	{
		"id": 35,
		"name": "Rusty Nail"
	},
	{
		"id": 36,
		"name": "Whiskey Sour (with egg white)"
	},
	{
		"id": 37,
		"name": "Whiskey Sour (w/o egg white)"
	},
	{
		"id": 38,
		"name": "Bronx"
	},
	{
		"id": 39,
		"name": "Income Tax"
	},
	{
		"id": 40,
		"name": "Toronto"
	},
	{
		"id": 41,
		"name": "Gold Rush"
	},
	{
		"id": 42,
		"name": "Corpse Reviver #2"
	},
	{
		"id": 43,
		"name": "Corpse Reviver #26"
	},
	{
		"id": 44,
		"name": "Alaska"
	},
	{
		"id": 45,
		"name": "Kir Royale"
	},
	{
		"id": 46,
		"name": "Kir"
	},
	{
		"id": 47,
		"name": "Sidecar"
	},
	{
		"id": 48,
		"name": "Cosmopolitan"
	}
]

let searchable = ["Negroni", "Martini","Vodka Martini", "Dirty Vodka Martini","Margarita","Rob Roy","Last Word","Final Ward","Naked and Famous","French 75","Mojito","Sazerac","Jack Rose","Moscow Mule","Old Fashioned","Muddled Old Fashioned"
,"Penicillin","Bees Knees ","Alley Cocktail","Fourth Regiment","Jibe Ho!","Mexican Herbalist","Southern Gin Cocktail", "Clover Club", "Martinez","Dark & Stormy", "Pimm’s Cup", "Boulevardier", "Daiquiri", "Gimlet","Caipirinha","Vieux Carre", "Vesper", "Mai Tai", "Rusty Nail","Whiskey Sour (with egg white)","Whiskey Sour (w/o egg white)","Bronx", "Income Tax","Toronto", "Gold Rush","Corpse Reviver #2","Corpse Reviver #26","Alaska","Kir Royale","Kir","Sidecar","Cosmopolitan"	
]
  
  const searchInput = document.getElementById('query');
  const searchWrapper = document.querySelector('.wrapper');
  const resultsWrapper = document.querySelector('.results');
  
  searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) { 
        console.log(searchablesTwo)
        results = searchablesTwo.filter( (item) =>{
            return item.name.toLowerCase().includes(input.toLowerCase());
        })
        
    //   results = searchable.filter((item) => {
    //     return item.toLowerCase().includes(input.toLowerCase());
    //   });
    }
    renderResults(results);
	
  });
  
  function renderResults(results) {
    if (!results.length) {



      return searchWrapper.classList.remove('show');
    }
    console.log (results)
    const content = results.map((item) => {
        // console.log('item:', item.name)

        return `<li><a href='drink/${item.id}'>${item.name}</li>`;
        
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  }
  
//   for (let i = 0; i < results.length; i++) {
//     const element = results[i].name;
    
//     const elementTwo = results[i].id;
//     console.log('elementTwo:', elementTwo)
//     console.log('element:', element)