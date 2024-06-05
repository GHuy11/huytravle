var listImg = document.querySelectorAll(".tour-content article tr td img");
console.log(listImg.length)
for (let i = 0; i < listImg.length; i++) {
    listImg[i].onclick = function () {
        // alert(this.src);
        var mainImg = document.querySelector(".tour-content .image .main-img");
        // console.log(mainImg);
        mainImg.src = this.src
    }
    
}