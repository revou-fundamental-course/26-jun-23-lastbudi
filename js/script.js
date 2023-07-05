function validateForm() {
    let fname = document.forms["form"]["fullname"].value;
    let email = document.forms["form"]["email"].value;
    let option = document.forms["form"]["option"].value;

    if (fname == "") {
        alert("nama tidak boleh kosong");
        return false;
    }
    if (email == "") {
        alert("email tidak boleh kosong");
        return false;
    }
    if (option == "") {
        alert("opsi tidak boleh kosong");
        return false;
    }
    
    document.getElementById("sender-fullname").innerHTML = fname;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-option").innerHTML = option;
    }