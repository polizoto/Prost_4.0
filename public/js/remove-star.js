async function downVoteClickHandler(event) {

    event.preventDefault();

    id = event.target.getAttribute("data-star")
    
    const response = await fetch('/api/drinks/deleteStar', {
      method: 'DELETE',
      body: JSON.stringify({
        star_id: id
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
  

  document.querySelector('.remove-favorite-btn').addEventListener('click', downVoteClickHandler);