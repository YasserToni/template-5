
let mainColor = localStorage.getItem("color-option");


if (mainColor !== null) {
    // console.log("local storage is not empty")
    document.documentElement.style.setProperty('--main-color', mainColor);

    // remove active class from all li
    document.querySelectorAll(".color-list li").forEach((e) => {
        e.classList.remove("active")
        // add active class to li with data-color equal main-color in local storage
        if (e.dataset.color == mainColor) {
            e.classList.add("active")
        }
    })
}


///////////////////// Setting Box /////////////////
let settngBox = document.querySelector(".setting-box");
let settngBoxIcon = document.querySelector(".setting-box i");
settngBoxIcon.onclick = function () {
    settngBox.classList.toggle("open")
    settngBoxIcon.classList.toggle("rotate")
}

///////////////////// Change Color /////////////////

const colorList = document.querySelectorAll(".color-list li")

// loop in all list items
colorList.forEach((li) => {
    
    // click on every list items
    li.addEventListener("click", (e) => {
        
        // set color in root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // set color in local storage
        localStorage.setItem("color-option", e.target.dataset.color)
        
        // remove active class from all chelidern
        handleActive(e);
    })
})
///////////////////// Choose random background or not  /////////////////

// select span yes and span no in random background
let backgroundSpan = document.querySelectorAll(".random-background span");
// console.log(backgroundSpan);

let backgroundOption = true;

let backgroundInterval;

// check if there is local storage items
let localStorageItems = localStorage.getItem("background_option");

if (localStorageItems !== null) {
        

    if (localStorageItems == 'true') {
        
        backgroundOption = true;
        document.querySelector(".yes").classList.add("active")
        
    } else {
        backgroundOption = false;
        document.querySelector(".no").classList.add("active")
    }
}
    

backgroundSpan.forEach((span) => {
    // console.log(span)
    span.addEventListener("click", (e) => {

        // console.log(e.target);

        handleActive(e)
        // console.log(e.target.dataset.background)

        if (e.target.dataset.background === "yes") {

            // console.log(e.target.dataset.background);

            backgroundOption = true;

            randomizeImage();
            
            // set in local storage background_option equal true
            localStorage.setItem("background_option", true)

        } else {

            // console.log(e.target.dataset.background);

            backgroundOption = false;

            clearInterval(backgroundInterval);
            // set in local storage background_option equal fakse
            localStorage.setItem("background_option", false)

        }

    })
    
})


function randomizeImage() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
                // get random number
                let randomNumber = imgArray[Math.floor(Math.random() * imgArray.length)];
                // change background Image
                landingPage.style.backgroundImage = `url("../imgs/${randomNumber}")`;
            }, 2000)
    }
}
randomizeImage();


///////////////////// Landing Page /////////////////



// get landing page 
let landingPage = document.querySelector(".landing-page");
// set array of image
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg","07.jpg","08.jpg","09.jpg","10.jpg"];



///////////////////// Scroll Progress /////////////////

// select skills
// let ourSkills = document.querySelector(".skills");

// window.onscroll = function () {

//     // skills offsettop
//     let skillsOffsetTop = ourSkills.offsetTop;
//     console.log(skillsOffsetTop)

//     // skills outer Heighter
//     let skillsOuterHeighter = ourSkills.offsetHeight;
//     console.log(skillsOuterHeighter);

//     // window height
//     let windowHeight = this.innerHeight;
//     console.log(windowHeight);

//     // window scroll top
//     let windowScrollTop = this.pageYOffset;
//     console.log(windowScrollTop)

//     if (windowScrollTop > (skillsOffsetTop + skillsOuterHeighter - windowHeight)) {
//         let ourProgress = document.querySelectorAll(".skill-box .skill-progress span");
//         console.log(ourProgress)

//         ourProgress.forEach((e) => {
//             e.style.width = e.dataset.progress;
//         })
//     }
// }

let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
    // console.log(this.scrollY)
    if (this.scrollY >= 870) {
        let ourProgress = document.querySelectorAll(".skill-box .skill-progress span");
        // console.log(ourProgress)

        ourProgress.forEach((e) => {
            e.style.width = e.dataset.progress;
        })
    }
}


///////////////////// Our Gallery /////////////////
// Create Popup Gallery
let ourGallery = document.querySelectorAll(".gallery img");
// loop on ourGallery
ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        // Create element
        let popup = document.createElement("div");
        // add element to body
        document.body.appendChild(popup);
        // add class to popup
        popup.classList.add("popup-overlay");
        // create popup box
        let popupBox = document.createElement("div");
        // add class to pupop box
        popupBox.classList.add("popup-box");

        
        if (img.alt !== null) {
            // create img heading
            let popupHeading = document.createElement("h3");
            // create text node
            let textNode = document.createTextNode(img.alt);
            // add text node to heading
            popupHeading.appendChild(textNode);
            // append heading to popup box
            popupBox.appendChild(popupHeading);
            
        }

        // create the img
        let popupImg = document.createElement("img");
        // set img source
        popupImg.src = e.target.src;
        // add img to Popup box
        popupBox.appendChild(popupImg);
        // append popup box to body
        document.body.appendChild(popupBox);

        // create close span
        let closeSpan = document.createElement("span");
        // add class to close span
        closeSpan.classList.add("close");
        // add icon to close span 
        closeSpan.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        // add closespan to popupbox
        popupBox.appendChild(closeSpan);
    })
})
// remove popup box

document.addEventListener('click',function(e) {
    if (e.target.className == "close") {
        // remove popup box
        document.querySelector(".popup-box").remove();
        // e.target.parentNode.remove(); // document.body.removeChild(e.target.parentNode);
        //remove overlay
        document.querySelector(".popup-overlay").remove();
    }
})

///////////////////// bullets /////////////////
// get all bullets
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
let allBulletsIcon = document.querySelectorAll(".nav-bullets i");
// loob in allBullets
// allBullets.forEach(bullet=> {
//     bullet.addEventListener('click', (e) => {
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         });
//         console.log(document.querySelector(e.target.dataset.section))
//     })
// })  
allBulletsIcon.forEach(bullet=> {
    bullet.addEventListener('click', (e) => {
        document.querySelector(e.target.parentElement.dataset.section).scrollIntoView({
            behavior: 'smooth'
        })
    })
})  

///////////////////// links /////////////////
let links = document.querySelectorAll(".links li a ");
// console.log(links)
// links.forEach(link=> {
//     link.addEventListener('click', (e) => {
//         console.log(e.target.dataset.section)
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         })
//     })
// })

// function scroll to somewhere
function scrollToSomewhere(array) {
    array.forEach(element=> {
    element.addEventListener('click', (e) => {
        console.log(e.target.dataset.section)
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
}
// run function 
scrollToSomewhere(links);

// handle active
function handleActive(ev) {
    
        ev.target.parentElement.querySelectorAll(".active").forEach((e) => {

            e.classList.remove("active");

        })

        ev.target.classList.add("active");


}


// select all bullets span
let bullets = document.querySelectorAll(".bullets-option span");

// select nav-bullets
let navBullets = document.querySelector(".nav-bullets");

// set local storage items
let bulletsItems = localStorage.getItem("bullets-option")

// check if bullets Itmes empty or not
if (bulletsItems !== null) { 

    // loop in span and remove active class 
    bullets.forEach((span) => { 
        span.classList.remove("active");
    })
    
}
if (bulletsItems == 'show') {
    
    navBullets.style.display = 'block';
    document.querySelector(".bullets-option .show").classList.add("active")

} else {
    
    navBullets.style.display = 'none';
    document.querySelector(".bullets-option .hide").classList.add("active")

}

// loop in bullets
bullets.forEach(span => {
    span.addEventListener('click', (e) => {
        if (e.target.dataset.display == 'show') {
            // add display none in navBullets
            navBullets.style.display = 'block';
            // run handleactive
            handleActive(e);
            // set bullets option in local storage
            localStorage.setItem("bullets-option", e.target.dataset.display);
        } else {
            // add display block in navBullets
            navBullets.style.display = 'none';
            // run handleactive
            handleActive(e);
            // set bullets option in local storage
            localStorage.setItem("bullets-option", e.target.dataset.display);
        }
    })
})

///////////////// Reset Option ///////////////
document.querySelector(".reset-option").onclick = function () {
    // reset local storage items
    localStorage.clear();

    localStorage.setItem("color-option" ,"#FF9800")
    localStorage.setItem("background_option", "true")
    localStorage.setItem("bullets-option", "show")
    // reload window
    window.location.reload();
}

///////////////// toggle-menu ///////////////
// select links
let tLinks = document.getElementById("links")
console.log(tLinks)
// select toggle menu
let tToggle = document.getElementById("toggle-menu");
console.log(tToggle)
tToggle.onclick = function (e) {
    // stop propagation 
    e.stopPropagation();

    //toggle classlist to tLinks
    tLinks.classList.toggle("open");
    // add active class to tToggle
    tToggle.classList.toggle("active");
}

// click any where
document.addEventListener("click", function (e) { 
    
    if (e.target !== tToggle && e.target !== tLinks) {

    }
    // check if tlinks contain open class
    if (tLinks.classList.contains("open")) {
        
        // remove open class from tLinks
        tLinks.classList.remove("open");
        // remove active class from toggle
        tToggle.classList.remove("active");
    }

})

// stop stopPropagation on tlinks
tLinks.onclick = function (e) {
    e.stopPropagation();
}
