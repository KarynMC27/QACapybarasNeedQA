let capyImageText = document.querySelector(`.capy_image_text`)
let capyImage = document.querySelector(`img`)
let capySlides = document.querySelector(`.capy_image`)


//changes the capy image/text when the user clicks on the text

// capyImageText.addEventListener(`click`, function () {
//     if (capyImage.src.endsWith("images/capybara-2654006_640.jpg")) {
//         capyImage.src="images/capybara-6010361_640.jpg"
//         capyImageText.innerHTML=`Sizing Issues&nbsp;→`
//         console.log(capyImage.src)
//         console.log(capySlides)
//     }
    
//     else if (capyImage.src.endsWith("images/capybara-6010361_640.jpg")) {
//         capyImage.src="images/capybara-1151518_640.jpg"
//         capyImageText.innerHTML=`Repeat Copy&nbsp;→`
//         console.log(capyImage.src)

//     }
//     else if (capyImage.src.endsWith("images/capybara-1151518_640.jpg")) {
//         capyImage.src="images/capybara-2694300_640.jpg"
//         capyImageText.innerHTML=`Tired Design&nbsp;→`
//         console.log(capyImage.src)
//     }

//     else if (capyImage.src.endsWith("images/capybara-2694300_640.jpg")) {
//         capyImage.src="images/capybara-5509760_640.jpg"
//         capyImageText.innerHTML=`Inconsistent Visuals&nbsp;→`
//         console.log(capyImage.src)
//     }
  
//     else if (capyImage.src.endsWith("images/capybara-5509760_640.jpg")) {
//         capyImage.src="images/capybara-2654006_640.jpg"
//         capyImageText.innerHTML=`Dangling Modifiers&nbsp;→`
//         console.log(capyImage.src)
//     }


// })


// changes the capy image automatically 

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let capySlides = document.getElementsByClassName(`slides`)
    let dots = document.getElementsByClassName(`dot`)

    for (i = 0; i < capySlides.length; i++) {
        capySlides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > capySlides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }

    capySlides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].classList.add("active");
    setTimeout(showSlides, 1500); 
}




