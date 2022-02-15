function validName(name) {
    var pattern = /^((([a-z]|[à-ü])+)[\s])+([a-z]|[à-ü])+$/i;
    var labelFeedbackValidation = document.querySelector("#feedbackName");

    if (name.match(pattern)) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false;
}

function validPhone(phone) {
    var pattern = /^[0-9]{11}$/;
    var labelFeedbackValidation = document.querySelector("#feedbackPhone");

    if (phone.match(pattern)) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false;
}

function validPassword(password) {
    var pattern = /^[0-9]{6,8}$/;
    var labelFeedbackValidation = document.querySelector("#feedbackPassword");

    if (password.match(pattern)) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false
}

function validEmail(email) {
    var pattern = /^(([a-z]|[0-9])+[.]?)+([a-z]|[0-9])+[@]([a-z]|[0-9])+[.]com$/i;
    var labelFeedbackValidation = document.querySelector("#feedbackEmail");

    if (email.match(pattern)) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false;
}

function validBirthday(birthday) {
    var labelFeedbackValidation = document.querySelector("#feedbackBirthday");

    if (birthday) {
        labelFeedbackValidation.classList.add("invisible");
        return true;
    }

    labelFeedbackValidation.classList.remove("invisible");
    return false;
}
