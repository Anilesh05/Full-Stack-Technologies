document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Anilesh' && password === '601004') {
        window.location.href = 'Home_page/index.html';
    } else {
        document.getElementById('error-message').innerText='Invalid username and password';
    }
});