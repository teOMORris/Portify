var text = document.getElementById("welcome_text");
var img = document.getElementById("welcome_img");

function Animation(object)
{
    object.onmousemove = function() {
        Resize("350%", "1s", "43%",object);
    }

    object.onmouseleave = function()
    {
        Resize("320%", "1s" , "40%", object);
    }
}


function Resize(size, duration, width, object)
{
    object.style.transitionDuration = duration;
    if(object === img)
    {
        object.style.width = width;
    }
    else
    {
        object.style.fontSize = size;
    }
    
    //text.style.width = width;
}

Animation(img);
Animation(text);
