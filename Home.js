function openImg(imgId) {
    console.log("work " + imgId);
    let modalDiv = document.getElementById("myModal");
    console.log(modalDiv)
    let imgToShow = document.getElementById(imgId);
    let imgInModal = document.getElementById("imgModal");
    let captionText = document.getElementById("caption");

    modalDiv.style.display = "block";
    imgInModal.src = imgToShow.src;
    captionText.innerHTML = imgToShow.alt;
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modalDiv.style.display = "none";
    }
}