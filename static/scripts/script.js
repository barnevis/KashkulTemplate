
document.addEventListener("DOMContentLoaded", function () {
    const kashkul = document.getElementById("kashkul");
    const darkBtn = document.getElementById("darkMode");

    darkBtn.addEventListener("click", function () {
        kashkul.classList.toggle("dark");
    });
});
