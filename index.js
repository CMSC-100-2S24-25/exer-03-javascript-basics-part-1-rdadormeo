function validatePassword(pass1, pass2) {
    var len, mtch, same = true, upper = false, lower = false, num = false;
    //check if password has at least 8 characters
    if (pass1.length >= 8) {
        len = true;
        //check if passwords have the same length
        if (pass1.length == pass2.length) {
            mtch = true;
            // iterate through both passwords
            for (let i = 0; i < pass1.length; i++) {
                //check if charAt is a number
                if (pass1.charAt(i) > -1) {
                    num = true;
                }
                //check if charAt both is the same
                if ((pass1.charAt(i) == pass2.charAt(i)) && same) {
                    same = true;
                } else {
                    same = false;
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
    //check if all conditions are met
    if ((len && mtch && upper && lower && num) == true) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

function reversePassword(pass) {
    //variable to store reversed password
    var reversed = "";
    //iterate through password in reverse and concatenate each element to reversed
    for (let i = pass.length; i > 0; i--) {
        reversed = reversed + pass.charAt(i-1);
    }
    console.log(reversed);
    return reversed;
}

function storePassword(name, pass1, pass2) {
    //create account object 
    const account = {
        name: name,
        newpassword: pass1,
    }
    //use validatePassword function to check if user is valid
    if (validatePassword(pass1, pass2)) {
        //call reversePassword to become new password
        account.newpassword = reversePassword(pass1);
    } else {
        account.newpassword = pass1;
    }
    console.log(account);
    return account;
}

validatePassword("helloworld", "hello");
validatePassword("hello", "hello");
validatePassword("hello1234", "hello1234");
validatePassword("Hello1234", "Hello1234");
validatePassword("HELLO1234", "HELLO1234");

validatePassword("Hello1234", "hello1234");
validatePassword("HelloWorld", "HelloWorld");

reversePassword("Ryan");

storePassword("John", "Pass1234", "Pass1234");
storePassword("John", "Pass123", "Pass12345");