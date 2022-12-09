

const unitLinks = document.querySelectorAll(".unit-link");
const iframe = document.querySelector("iframe")
const sideMenu = document.querySelector("aside")

// Hide lessons
function hideLessons(){
    unitLinks.forEach(unit => {
        const parent = unit.parentElement
        const lessonsUl = parent.querySelectorAll("ul.lessons ")
        
        lessonsUl.forEach(lessons => {
            lessons.classList.add("hide")
        })
    })
}
hideLessons();
// Toggle lessons
unitLinks.forEach(unitLink => {
        unitLink.setAttribute("tabindex",1)
        const parent = unitLink.parentElement
        const lessons = parent.querySelector("ul.lessons ")
        
        unitLink.addEventListener("click", e => {
            console.log("unitlink")
            let lesson = lessons.querySelectorAll("li a")
            
            if(lessons.classList.contains("hide")){
                hideLessons()
                lessons.classList.remove("hide"); 
            }else { 
                lessons.classList.add('hide')
            }
            // This ensures each lesson within unit is "tabbale"
            lesson.forEach(addTabindex => {
                addTabindex.setAttribute("tabindex",1)
            })

        })
})

// load lessons
let tabReady = false; // This variable allows focus to go to iframe if tab is pressed on lesson link
unitLinks.forEach(unit => {
    const parent = unit.parentElement
    const lessons = parent.querySelectorAll("ul.lessons > li > a")
    let selectedLesson = '';
    lessons.forEach(lesson => {
        lesson.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            selectedLesson = e.target.href
            iframe.src = selectedLesson
            tabReady = true // tab is ready to be pressed and bring focus to iframe
        })
        // keydown listener waits for tab to be pressed and brings focus to iframe
        lesson.addEventListener("keydown",({keyCode}) => {
            console.log(keyCode)
            if(keyCode === 9 && tabReady){
                // iframe.setAttribute("tabindex",1)
                iframe.focus()
                tabReady = !tabReady
            }
        })
    })
})

// Media queries control sideMenu
const dropArrow = document.querySelector(".drop-arrow")
let currentWidth = 0;
let queryWidth = 570
let widthArray = [];


addEventListener("DOMContentLoaded", e => {
    currentWidth = innerWidth
    if(sideMenu.classList.contains("hide")){
        sideMenu.classList.remove('hide')
    }
})

function toggleAside(){
    if(sideMenu.classList.contains("hide")){
        sideMenu.classList.remove('hide')
    } else {
        sideMenu.classList.add('hide')
    }
}
dropArrow.addEventListener("click", toggleAside)
dropArrow.addEventListener("keydown", ({keyCode}) => {
    if(keyCode === 13){
        toggleAside();
    }
})
dropArrow.addEventListener("focusin", e => {
    if(sideMenu.classList.contains('hide"')){
        sideMenu.classList.remove('hide')
    }
})


addEventListener("resize", e => {
    currentWidth = innerWidth;
    
    if(currentWidth < queryWidth){
        sideMenu.classList.add('hide')
        dropArrow.innerHTML = '&#9660;'
        
    } else {
        sideMenu.classList.remove('hide')
    }
})

