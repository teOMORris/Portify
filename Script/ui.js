///Declare variables to take object from document
var signin_button = document.getElementById("sign_in");
var username = document.getElementById("username");
var un_error = document.getElementById("error_username");
var email = document.getElementById("email");
var e_error = document.getElementById("error_email");
var password = document.getElementById("password");
var pw_error = document.getElementById("error_password");

//show password or hide
const visibility = document.getElementById("visibilityPassword");
const icon = document.getElementById("icon");
visibility.addEventListener("click",ShowPassword);

function ShowPassword() {
    if(password.type === "password")
    {
        icon.textContent = "visibility";
        password.type = "text";
    }
    else
    {
        icon.textContent = "visibility_off";
        password.type = "password";
    }
}


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
        if(CorrectPassword() === false)
        {
            submit = false;
        }
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
    
    let existEmailSymbol = 0;
    let existDot = 0;

    for(let i = 0; i < email.value.length; i++)
    {
        if(email.value[i] === '@')
        {
            existEmailSymbol++;
        }

        if(email.value[i] === '.')
        {
            existDot++;
        }
        
        if(existDot > 1)
        {
            e_error.textContent = "Should to have just an dot";
            e_error.style.display = "flex";
            return false;
        }
        
        if(existEmailSymbol > 1)
        {
            e_error.textContent ="Should to have just an email symbol";
            e_error.style.display = "flex";
            return false;
        }
    }

    if(existEmailSymbol === 0)
    {
        e_error.textContent ="Should to have at least an email symbol";
        e_error.style.display = "flex";
        return false;
    }

    if(existDot === 0)
    {
        e_error.textContent ="Should to have at least a dot";
        e_error.style.display = "flex";
        return 0;
    }

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


//verify if password respect the rules
function CorrectPassword()
{
    let uppercaseLetter = false;
    let lowercaseLetter  = false;
    let numbers = false;
    for(let i = 0 ; i < password.value.length; i++)
    {
        //password should to contain at least uppercase letter
        if(password.value[i] >= 'A' && password.value[i] <= 'Z')
        {
            uppercaseLetter = true;
        }

        //password should to contain at least lowercase letter 
        if(password.value[i] >= 'a' && password.value[i] <= 'z')
        {
            lowercaseLetter = true;
        }

        //password should to contain numbers
        if(password.value[i] >='1' && password.value[i] <= '9')
        {
            numbers = true;
        }
    }

    if(uppercaseLetter === false)
    {
        pw_error.textContent = "Password should to contain at least uppercase letter";
        pw_error.style.display = "flex";
        return false
    }

    if(lowercaseLetter === false)
    {
        pw_error.textContent = "Password should to contain at least lowercase letter";
        pw_error.style.display = "flex";
        return false;
    }

    if(numbers === false)
    {
        pw_error.textContent = "Password should to contain at least number";
        pw_error.style.display = "flex";
        return false;
    }
}

// hide all errors
function HideErrors(error)
{
    error.style.display = "none";
}