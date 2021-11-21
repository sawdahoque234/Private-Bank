document.getElementById("submitlogin").addEventListener('click', function () {
    const email = document.getElementById('emailid').value;
    const password = document.getElementById("password").value;
    if (email == 'user@email.com' && password == 'user') {
        window.location.href = "banking.html";

    }
    else {
        const message = document.getElementById("wrong");
        message.style.display = "block";
    }
})