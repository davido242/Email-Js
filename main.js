function sendEmail () {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "askMe@gmail.com",
        Password : "askMe",
        To : 'askMe@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiries",
        Body : document.getElementById("message").value,
    }).then(
      message => alert(message)
    );
    alert("Thanks for for your message");
}