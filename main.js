function hideHellobox() {
    var hellobox = document.getElementById("hellobox");
    hellobox.style.transition = "opacity 0.5s linear, visibility 0.5s";
    hellobox.style.opacity = "0";
    hellobox.style.visibility = "hidden";
}

document.getElementById("hello").addEventListener("click", hideHellobox);
