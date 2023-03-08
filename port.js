var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'Name: ' + name + '<br/> Email: ' + email +
    '<br/> Subject: ' + subject + 'Message: ' + message;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "victormunyi006@gmail.com",
        Password : "DA05B3615F53905E3A39FAFCB2131167A02E",
        To : 'victormunyi006@gmail.com',
        From : email,
        Subject : subject,
        Body : body
    }).then(
    message => alert(message)
    );
});