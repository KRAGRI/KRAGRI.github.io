const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () =>{
        cleerActiveClasses()

        slide.classList.add('active')
    })
}

function cleerActiveClasses() {
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}