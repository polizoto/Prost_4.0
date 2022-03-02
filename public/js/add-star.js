/*let heartBtn = document.querySelector('.favorite-btn');

async function favClickHandler(event) {
    event.preventDefault();
    

    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

      if(event.target.className === 'cocktail-header') {
        
     } 
    const id = event.target.previousElementSibling.className;
    
    console.log(id)

    const response = await fetch('/api/drinks/addStar', {
        method: 'PUT',
        body: JSON.stringify({
            drink_id: id
        })
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

heartBtn.addEventListener('click', favClickHandler);*/

async function upvoteClickHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
 
    const response = await fetch('/api/drinks/addStar', {
      method: 'POST',
      body: JSON.stringify({
        drink_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
    
        
      document.location.reload();
     
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.favorite-btn').addEventListener('click', upvoteClickHandler);