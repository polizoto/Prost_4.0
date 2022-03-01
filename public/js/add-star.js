async function favClickHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/addStar', {
        method: 'PUT',
        body: JSON.stringify({
            drink_id: id
        })
    });

    if (response.ok) {
        document.location.reload();
        console.log('favorited!!!!!!!!!!!!!!!!!!!!!!');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.heart').addEventListener('click', favClickHandler);