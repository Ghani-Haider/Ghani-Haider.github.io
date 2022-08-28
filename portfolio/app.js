// cv link to google drive
var cv_link = "https://drive.google.com/file/d/1PeDbt7o0Rq6h5cGo8KIaUxa6T2ZMDDub/view?usp=sharing";

// page load event
(function () {
    // link to cv
    document.getElementById("cv-hyperlink").setAttribute("href", cv_link);
    document.getElementById("cv-hyperlink2").setAttribute("href", cv_link);

    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    // changing the theme
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();