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