function openModal(imgId) {

    let modalDiv = document.getElementById("myModal");
    let imgToShow = document.getElementById(imgId);
    let imgInModal = document.getElementById("imgModal");
    let captionText = document.getElementById("caption");

    let sixteenImg = document.getElementById("sixteen");
    let seventeenImg = document.getElementById("seventeen");
    let eighteenImg = document.getElementById("eighteen");
    let nineteenImg = document.getElementById("nineteen");
    let twentyImg = document.getElementById("twenty");

    let numberArr = ["one", "tow", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    let before2, before1, after2, after1;

    modalDiv.style.display = "block";

    imgInModal.src = document.getElementById(numberArr[slideIndex]).src;

    captionText.innerHTML = imgToShow.alt;
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modalDiv.style.display = "none";
    }

    var number = document.getElementsByClassName("numbertext")[0];

    if (slideIndex > 14) { slideIndex -= 14; }
    if (slideIndex < 0) { slideIndex += 15; }

    number.innerHTML = (slideIndex + 1 + "/15");

    if (slideIndex < 2) { before2 = slideIndex + 13; } else { before2 = slideIndex - 2; }
    if (slideIndex < 1) { before1 = slideIndex + 14; } else { before1 = slideIndex - 1; }
    if (slideIndex > 13) { after1 = slideIndex - 14; } else { after1 = slideIndex + 1; }
    if (slideIndex > 12) { after2 = slideIndex - 13; } else { after2 = slideIndex + 2; }

    sixteenImg.src = document.getElementById(numberArr[before2]).src;
    seventeenImg.src = document.getElementById(numberArr[before1]).src;
    eighteenImg.src = document.getElementById(numberArr[slideIndex]).src;
    nineteenImg.src = document.getElementById(numberArr[after1]).src;
    twentyImg.src = document.getElementById(numberArr[after2]).src;

}


var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    slideIndex = n - 1;
}

function currentBottomSlide(n) {
    slideIndex += n;
}

function showSlides(n) {
    console.log("in showSlides");
    var i;
    var slides = document.getElementsByClassName("card");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    const cardInnerHtml = slides[slideIndex - 1].innerHTML.split(" ");
    let idImg = cardInnerHtml[1];
    idImg = idImg.split("=");
    idImg = idImg[1].substring(1);
    idImg = idImg.slice(0, -1);

    if (slideIndex > 15) {
        slideIndex -= 5;
    }

    slideIndex -= 1;//slideIndex in numberArr
    openModal(idImg);
}