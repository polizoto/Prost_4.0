async function commentFormHandler(event) {
    event.preventDefault();
    const comment_text = document.getElementById('text-area').value.trim();
    const drink_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log('drink_id:', drink_id)

    
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
        comment_text,
        drink_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log('response:', response)
        document.location.reload();
      } else {
        alert(response.statusText);
    }
  }
}
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);