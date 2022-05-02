///Declare variables to take object from document
var signin_button = document.getElementById("sign_in");
var username = document.getElementById("username");
var un_error = document.getElementById("error_username");
var email = document.getElementById("email");
var e_error = document.getElementById("error_email");
var password = document.getElementById("password");
var pw_error = document.getElementById("error_password");

///If sign-in button is clicked will be called verify function
signin_button.onclick = function () {
    Verify(username,"username",un_error);
    Verify(email,"email", e_error);
    Verify(password,"password",pw_error);
}

///Verify if first letter is a vowel
function Vowel(letter)
{
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
} 

/// Verify if input field is empthy or not
function Verify(object, name, error)
{
    if(object.value.length == 0)
    {
        signin_button.type = "button";
        //if first letter is a vowel change mod of show error
        if(Vowel(name[0])) {
            error.textContent = "You should to write an " + name;
        }
        else{
            error.textContent = "You should to write a " + name;
        }
        
        //change display mode to show error message
        error.style.display = "flex";

    }
    else{
        //if all fields isn't empty, change button type for submit information
        signin_button.type = "submit";
        console.log(signin_button.type);
        error.style.display = "none";
    }
}
