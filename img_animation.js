var img = document.getElementById("welcome_img");

text.onmousemove = function() {
    Resize("70px", "1s", "700px");
}

text.onmouseleave = function()
{
    Resize("50px", "1s" , "550px");
}

function Resize(size, duration, width)
{
    text.style.transitionDuration = duration;
    text.style.fontSize = size;
    //text.style.width = width;
}