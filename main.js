var subimga = document.querySelectorAll(".imglist");
var imgmain = document.querySelector(".img_main")
subimga.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("a")
        console.log("imgsub", btn.src + '-' + "c" , imgmain);
            subimga.forEach((button) => button.classList.remove('select'))
            btn.classList.add("select")
            if(btn.src) {
                imgmain.src = btn.src
            }
    })
})