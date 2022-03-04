
async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        const message = "<p>Invalid Data</p>"
        $(".message-body").html(message)
        $("#myModal").modal("show");
      }
    }
    else {
      if (!username) {
      const message = "<p>Please enter a username!</p>"
      $(".message-body").html(message)
      $("#myModal").modal("show");
      }
      else if (!email) {
        const message = "<p>Please enter a valid email address!</p>"
        $(".message-body").html(message)
        $("#myModal").modal("show");
        }
        else if (!password) {
          const message = "<p>Please enter a password!</p>"
          $(".message-body").html(message)
          $("#myModal").modal("show");
          }
    }
  }

  async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        const message = "<p>Invalid Credentials</p>"
        $(".message-body").html(message)
        $("#myModal").modal("show");
      }
    }
    else {
      if (!email) {
      const message = "<p>Please enter a valid email address!</p>"
      $(".message-body").html(message)
      $("#myModal").modal("show");
      }
      else if (!password) {
        const message = "<p>Please enter a password!</p>"
        $(".message-body").html(message)
        $("#myModal").modal("show");
        }
      }
  }

  async function closeModal(event) {
    event.preventDefault();
    $("#myModal").modal("hide");
  }

  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

  document.querySelector('#message-modal').addEventListener('submit', closeModal);
  