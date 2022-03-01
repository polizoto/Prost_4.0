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
      results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    renderResults(results);
  });
  
  function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li><a href='/api/drinks/${item}'>${item}</li>`;
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  }
  