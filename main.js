var subimga = document.querySelectorAll(".product-gallery__thumb");

subimga.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("a")
            subimga.forEach((button) => button.classList.remove('select'))
            btn.classList.add("select")
            
    })
})