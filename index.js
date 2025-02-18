function validatePassword(pass1, pass2) {
    var len, mtch, same = true, upper = false, lower = false, num;
    //check if password has at least 8 characters
    if (pass1.length >= 8) {
        len = true;
        //check if passwords have the same length
        if (pass1.length == pass2.length) {
            mtch = true;
            //check if password contains a number using regex
            if (/\d/.test(pass1)) {
                num = true;
                // iterate through both passwords
                for (let i = 0; i < pass1.length; i++) {
                    //check if charAt both is the same
                    if ((pass1.charAt(i) == pass2.charAt(i)) && same) {
                        same = true;
                    } else {
                        same = false;
                    }
                }
            }
            //compare pass1 and pass1.toLowerCase if there is an uppercase letter
            if (pass1 != pass1.toLowerCase()) {
                upper = true;
            }
            //compare pass1 and pass1.toUpperCase if there is a lowercase letter
            if (pass1 != pass1.toUpperCase()) {
                lower = true;
            }
        } else {
            mtch = false;
        }
    } else {
    len = false;
    }
    if ((len && mtch && upper && lower && num) == true) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

// validatePassword("helloworld", "hello");
// validatePassword("hello", "hello");
// validatePassword("hello1234", "hello1234");
// validatePassword("Hello1234", "Hello1234");
// validatePassword("HELLO1234", "HELLO1234");