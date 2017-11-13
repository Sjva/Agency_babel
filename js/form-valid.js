$(document).ready(function(){
//     $(".btn_orange").click(function(){
//         $("#contact_form").fadeIn("slow");
//     });
//     $(".close").click(function(){
//         $("#mes-send").fadeOut("slow");
//     });
    $('form').submit(function (e) {
        e.preventDefault();
        validateFormOnSubmit(e.target);
    })
});


function validateFormOnSubmit(contact_form) {
    reason = "";
    reason += validateName(contact_form.username);
    reason += validatePhone(contact_form.phone);
    reason += validateEmail(contact_form.email);
    reason += validateQuestion(contact_form.question);

    if (reason.length > 0) {
        return false;
    } else {
        return false;
    }
}
function validateName(name) {
    var error = "";
    var tname = trim(name.value); // value of field with whitespace trimmed off

    if (name.value === "") {
        $("#username").addClass('modal-error');
        name.value = "Поле обязательное для заполнения.";
        error = "2";
    } else {
        $("#username").removeClass('modal-error');
    }
    return error;
}
function validatePhone(phone) {
    var error = "";
    var tphone = trim(email.value); // value of field with whitespace trimmed off
    var phoneFilter = /^\d+$/;

    if (phone.value === "") {
        $("#phone").addClass('modal-error');
        phone.value = "Поле обязательное для заполнения.";
        error = "2";
    } else if (!phoneFilter.test(+tphone)) { //test email for illegal characters
        $("#phone").addClass('modal-error');
        phone.value = "Введите правильный номер телефона";
        error = "3";
    } else {
        $("#phone").removeClass('modal-error');
    }
    return error;
}
function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}
function validateEmail(email) {
    var error = "";
    var temail = trim(email.value); // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;

    if (email.value === "") {
        $("#email").addClass('modal-error');
        email.value = "Поле обязательное для заполнения.";
        error = "2";
    } else if (!emailFilter.test(temail)) { //test email for illegal characters
        $("#email").addClass('modal-error');
        email.value = "Введите правильный почтовый адрес.";
        error = "3";
    } else {
        $("#email").removeClass('modal-error');
    }
    return error;
}
function validateQuestion(question) {
    var error = "";

    if (question.value.length === 0) {
        $("#question").addClass('modal-error');
        $('#question').html("Поле обязательное для заполнения.");
        error = "1";
    } else {
        $('#question').removeClass('modal-error');
        $('#question').html("");
    }
    return error;
}
