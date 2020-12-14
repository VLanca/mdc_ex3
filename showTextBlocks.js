function showTextInLine(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == "inline") ? "none" : "inline";
}

$("teste").hover(function() {
    $("toggledText").css("display", "block");
});