function sendEmail () {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ask@gmail.com",
        Password : "ask",
        To : 'ask@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiries",
        Body : document.getElementById("message").value,
    }).then(
      message => alert(message)
    );
    alert("Thanks for for your message");
}