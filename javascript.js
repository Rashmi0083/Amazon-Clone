let sliderLeftBtn = document.getElementById("slide-btn-left")
let sliderRightBtn = document.getElementById("slide-btn-right")

let imageItem = document.querySelectorAll(".image-item")
let startSlider = 0
let endSlider = (imageItem.length - 1) * 100

sliderLeftBtn.addEventListener("click", ()=>{
    if (startSlider < 0)
    {
        startSlider = startSlider + 100
    }
    console.log(startSlider)

    imageItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`
    })
})

sliderRightBtn.addEventListener("click", ()=>{
    if (startSlider >= -endSlider + 100)
    {
        startSlider = startSlider - 100
    }
    console.log(startSlider)

    imageItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`
    })
})
