const moveToNextInputField = (val) => {
    let inputFields = document.querySelectorAll("input");
    inputFields[0].classList.add("active");

    if(inputFields[val-1].value != ""){
        inputFields[val].focus();
        inputFields[val].classList.add("active");
    } else if(inputFields[val-1].value == "") {
        inputFields[val-2].focus();
        inputFields[val-2].classList.remove("active");
        inputFields[val-1].classList.remove("active");
    }
}