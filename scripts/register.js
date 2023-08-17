const formValidation = () => {
    let promptToUser = "";
    let canSubmit = true;
    let companyName = document.getElementById("company-name").value;
    let exhibitorName = document.getElementById("contact-name-input").value;
    let exhibitorTel = document.getElementById("contact-tel-input").value;
    let isChairNeeded = document.getElementsByName("is-need-chair")[0].checked;
    let chairNumber = document.getElementById("number-of-chair-input").value;

    if (companyName.trim().length === 0) {
        promptToUser += "Company's name is needed.\n";
        canSubmit = false;
    }

    if (exhibitorName.trim().length === 0) {
        promptToUser += "Exhibitor's name is needed.\n";
        canSubmit = false;
    }

    if (exhibitorTel.trim().length === 0) {
        promptToUser += "Exhibitor's telephone number is needed.\n";
        canSubmit = false;
    }

    if (isChairNeeded) {
        if (chairNumber === "") {
            promptToUser += "Please enter an amount of chair needed.\n";
            canSubmit = false;
        } else if (parseInt(chairNumber) < 1 || parseInt(chairNumber) > 10) {
            promptToUser += "Number of chair must be between 1 and 10.";
            canSubmit = false;
        }
    } else {
        if (chairNumber != "") {
            promptToUser += "You chose not to get any chair.\n";
            canSubmit = false;
        }
    }

    alert(promptToUser);
    return canSubmit;
}