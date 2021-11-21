document.getElementById('submitlogin').addEventListener('click', function () {
    const usermail = document.getElementById('emailid');
    const mail = usermail.value;
    console.log(mail);

    const userpass = document.getElementById('password');
    const pass= userpass.value;
    console.log(pass);
    

    if (mail == "abc@gmail.com" && pass == "sawda") {

        console.log('valid');
        window.location.href = "banking.html";
    }
    else {
        console.log('invalid');
    }
})