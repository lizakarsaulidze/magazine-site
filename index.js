const min = document.querySelector(".min")
const res = document.querySelector(".res")
const dec = document.querySelector(".dec")
const mtavari = document.querySelector('.frstimg')
const all = document.querySelectorAll('.img')


all.forEach((img) => {
    img.addEventListener('click', function () {
        mtavari.src = img.src;
    })

})


let num = 0;

min.addEventListener('click', function () {
    if (num > 0) {
        num--;
        res.innerHTML = num
    }
})

dec.addEventListener('click', function () {
    num++
    res.innerHTML = num;
})

