$("#form").on('submit', function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("textarea#message").val();

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
        alert("Hi " + name + ", I have received your message. Thank you for reaching out. I will get back to you soon.");
    } else {
        alert("Please provide your correct email address!");
    }

    $("#form")[0].reset();
});