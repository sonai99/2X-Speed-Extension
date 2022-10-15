if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle")
    let buttonOn = false;

    button.addEventListener("click", () => {
        if (!buttonOn) {
            buttonOn = true;
            //button slider animation
            button.style.animation = "transformToBlue 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"
            //runs the script
            chrome.tabs.executeScript({
                file: '2x.js'
            })
        }
        else {
            buttonOn = false;
            //animation
            button.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
            //runs script
            chrome.tabs.executeScript({
                file: '1x.js'
            })
        }
    })

}
