let latesCaseGallery = document.querySelector("#latesCaseGallery");
let backBtn = document.querySelector("#backBtn")
let nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener('click' , () => {
    latesCaseGallery.style.scrollBehavior = "smooth";
    latesCaseGallery.scrollLeft += 374
})

backBtn.addEventListener("click", () => {
    latesCaseGallery.style.scrollBehavior = "smooth";
    latesCaseGallery.scrollLeft -= 374;
});