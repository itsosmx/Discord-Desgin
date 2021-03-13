var slideindex = 1
showSlides(slideindex);


function plusSlides(n) {
    showSlides(slideindex += n);
}

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slide");

    if (n > slides.length) {
        slideindex = 1
    }
    if(n < 1) {
        slideindex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideindex-1].style.display = "block";

}