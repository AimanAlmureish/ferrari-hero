let sliderClick = document.querySelectorAll(".rightContent ul li")
    // console.log(sliderClick.length)
let car1 = document.querySelector(".car img:nth-child(1)");
let car2 = document.querySelector(".car img:nth-child(2)");
let car3 = document.querySelector(".car img:nth-child(3)");

function resetClass() {
    sliderClick.forEach(element => {
        return element.classList.remove("active")
    })
}

if (window.innerHeight <= 900) {
    sliderClick.forEach((element, index) => {
        element.addEventListener("click", () => {
            if (index === 1) {
                console.log("car1");
                car1.style.top = "-100px"
                car2.style.top = "-9px"
                car3.style.top = "264px"
                resetClass();
                element.classList.add("active")

            } else if (index === 2) {
                // car2.style.top = "-135px"
                car2.style.top = "-300px"
                car3.style.top = "-335px"
                car1.style.top = "-100px"
                resetClass();
                element.classList.add("active")

            } else if (index === 0) {
                car1.style.top = "321px"
                car2.style.top = "264px"
                car3.style.top = "264px"
                resetClass();
                element.classList.add("active")

            }
        })
    });

} else {
    sliderClick.forEach((element, index) => {
        element.addEventListener("click", () => {
            if (index === 1) {
                console.log("car1");
                car1.style.top = "-100px"
                car2.style.top = "-9px"
                car3.style.top = "264px"
                resetClass();
                element.classList.add("active")

            } else if (index === 2) {
                // car2.style.top = "-135px"
                car2.style.top = "-459px"
                car3.style.top = "-420px"
                car1.style.top = "-100px"
                resetClass();
                element.classList.add("active")

            } else if (index === 0) {
                car1.style.top = "471px"
                car2.style.top = "460px"
                car3.style.top = "264px"
                resetClass();
                element.classList.add("active")

            }
        })
    });
}



function carSlider() {

}