
var coll = document.getElementsByClassName("collapsible");
var glyph = document.getElementsByClassName("glyphicon");
var i;
for (i = 0; i < coll.length; i++) {

    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        console.log(content.id);
        if (content.style.maxHeight) {
            console.log("in if");
            content.style.maxHeight = null;
            document.getElementById("" + content.id + 1).style.display = "none";
            document.getElementById(content.id).style.display = "block";
        } else {
            console.log("in else");
            content.style.maxHeight = content.scrollHeight + "px";
            document.getElementById(content.id).style.display = "none";
            document.getElementById("" + content.id + 1).style.display = "block";

        }
    });
}