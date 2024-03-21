let numberOfDrums = document.querySelectorAll(".drum").length;

// Detecting for mouse clicks
for(let i = 0; i < numberOfDrums ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () 
    {
        let buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}

// Detecting for keyboard
document.addEventListener("keydown", function(event)
{   
    playSound(event.key);
    buttonAnimation(event.key);
})

// Function to play sounds
function playSound(testcase) {
    switch(testcase)
    {
        case "w":
                let tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                let tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                let tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
                
            case "d":
                let tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                let snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
    
            case "k":
                let crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
                    
            case "l":
                let kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;

            default:
                console.log(testcase);
    }
}

// Function to animate our buttons
function buttonAnimation(currentKey)
{
    
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}
