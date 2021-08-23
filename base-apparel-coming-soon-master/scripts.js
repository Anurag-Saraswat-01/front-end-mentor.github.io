var icon = document.getElementById("icon-error");

function Validate(inputText) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailFormat)) {
        icon.style.display = "none";
    }
    else {
        icon.style.display = "inline-block";
    }
}