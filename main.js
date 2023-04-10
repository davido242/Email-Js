function sendEmail () {
    Email.send({
        SecureToken: "0d686827-65be-43c5-aa25-91c9a389d70c",
        To : "davidsaka242@gmail.com",
        From : "davidsarka242@gmail.com",
        Subject : "2NGO Test Mail",
        Body : "Message " + document.getElementById("message").value + "<br /> Name : " + document.getElementById("name").value + 
        "<br /> Number : " + document.getElementById("phone").value + "<br /> Email : " + document.getElementById("email").value
    }).then(
      message => alert(message)
    );
}