///Declare variables to take object from document
var signin_button = document.getElementById("sign_in");
var username = document.getElementById("username");
var un_error = document.getElementById("error_username");
var email = document.getElementById("email");
var e_error = document.getElementById("error_email");
var password = document.getElementById("password");
var pw_error = document.getElementById("error_password");

///list of errors


///If sign-in button is clicked will be called verify function
signin_button.onclick = function () {
    //submit boolen variable
    var submit = true;
    //hide errors
    HideErrors(un_error);
    HideErrors(e_error);
    HideErrors(pw_error);

    //verify if username respect rules
    if(Empty(username,"username",un_error) === false)
    {
        if(CorrectUsername() === false)
        {
            submit = false;
        }
    }
    else{
        submit = false;
    }

    if(Empty(email,"email", e_error) === false)
    {
        if(CorrectEmail() === false)
        {
            submit = false;
        }
    }
    else {
        submit = false;
    }

    if(Empty(password,"password",pw_error) === false)
    {

    }
    else {
        submit = false;
    }

    if(submit === true) {
        signin_button.type = "submit";
    }
}

///Verify if first letter is a vowel
function Vowel(letter)
{
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
} 

/// Verify if input field is empthy or not
function Empty(object, name, error)
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
        return true;

    }
    else{
        return false;
    }
}

//this function verify if username is matched with rules
function CorrectUsername()
{
    if(username.value.length < 5 || username.value.length > 15)
    {
        un_error.textContent = "Username should have between 5 and 15 characters";
        un_error.style.display = "flex";
        return false;
    }

    for(let i = 0; i < username.value.length; i++)
    {
        if(username.value[i] === ' ')
        {
            un_error.textContent = "Username shouldn't contain spaces";
            un_error.style.display = "flex";
            return false;
        }
    }
}

//verify if an email is correct
function CorrectEmail() {
    
    for(let i = 0 ; i < email.value.length; i++)
    {
        if(email.value[i] >= 'A' && email.value[i] <= 'Z')
        {
            e_error.textContent = "Email shouldn't contain uppercase letters";
            e_error.style.display = "flex";
            return false;
        }
    }

    return true;
}

// hide all errors
function HideErrors(error)
{
    error.style.display = "none";
}