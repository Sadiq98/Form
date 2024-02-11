// --------------------------------------------------------Regex Pattern Validation-----------------------------------------------------//
function isAlphabet(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        //65 and 90 - Unicode for the uppercase alphabet A-Z, or between 97 and 122, which are the Unicode values for the lowercase alphabet characters a-z.
        return true;
    } else {
        return false;
    }
}

function isNumber(evt) {
    if (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        else {
            return true;
        }    }
}

function isAlphaNumeric(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) || (charCode >= 48 && charCode <= 57)) {
        //65 and 90 - Unicode for the uppercase alphabet A-Z, or between 97 and 122, which are the Unicode values for the lowercase alphabet characters a-z.
        return true;
    }
    if ((charCode >= 48 && charCode <= 57)) {
        return false
    }
    else {
        return false;
    }

}
