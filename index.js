
for(var i = 0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", 
    function (){
        var a = this.innerHTML;
        runWhenClicked(a);
        runWhenPressed(a);
    });
}
document.addEventListener("keydown",function (event){
    var a = event.key;
    runWhenClicked(a);
    runWhenPressed(a);
    
})
function runWhenClicked(key)
{
    var audio;
    switch(key)
        {
            case 'l': 
                 audio = new Audio("sounds/tom-4.mp3");
                break;
            case 'k': 
                 audio = new Audio("sounds/tom-3.mp3");
                break;
            case 'j': 
                 audio = new Audio("sounds/tom-2.mp3");
                break;
            case 'd': 
                 audio = new Audio("sounds/tom-1.mp3");
                break;
            case 's': 
                 audio = new Audio("sounds/snare.mp3");
                break;
            case 'a': 
                 audio = new Audio("sounds/kick-bass.mp3");
                break;
            case 'w': 
                 audio = new Audio("sounds/crash.mp3");
                break;
        }
                audio.play();
}

function runWhenPressed(key)
{
    document.querySelector("."+key).classList.add("press");
    setTimeout(function (){document.querySelector("."+key).classList.remove("press");}, 100)

}