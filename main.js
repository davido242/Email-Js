function sendEmail () {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "davidsaka242@gmail.com",
        Password : "davido242",
        To : 'davidsarka242@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiries",
        Body : document.getElementById("message").value,
    }).then(
      message => alert(message)
    );
    alert("Thanks for for your message");
}