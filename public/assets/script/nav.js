document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    
    if(window.scrollY == 0) header.classList.add("trans");
    header.style.transition = "color 0.5s, background 0.5s";
    
    window.addEventListener("scroll", checkScroll);
    
    if(window.innerWidth < 600) {
        header.classList.add("mobile");
        document.getElementById("open-menu").addEventListener("click", function() {
            header.classList.toggle("open");
        });
    }
    
    function checkScroll() {
        requestAnimationFrame(function buffer() {
            if(window.scrollY == 0) header.classList.add("trans"); 
            else header.classList.remove("trans"); 
        });
    }
});