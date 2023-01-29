function checkInputs() {
    let inputs = document.getElementsByClassName("form-control");
    let btnInputs = document.getElementById("submit");

    let flag = 0;//0 =>all inputs is full , 1=> some input is null
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length == 0) {
            flag = 1;
        } else {
            if (inputs[i].id == "email") {
                if (ValidateEmail(inputs[i]) == false) {
                    flag = 1;
                }
            }
        }
    }
    if (flag == 0) {
        btnInputs.removeAttribute("disabled");
    }
}

function ValidateEmail(mail) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

function sendMessage() {
    alert("thank u");
    let inputs = document.getElementsByClassName("form-control");
    let btnInputs = document.getElementById("submit");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    btnInputs.disabled = true;

}