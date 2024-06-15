document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Message sent successfully.');
        // Here you can add code to actually send the form data to your server
        // or email service using fetch/AJAX.
    }
});
