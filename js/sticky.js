let lastKnownScrollPosition = 0
let ticking = false

const topOffSet = 250

let slideHeight = 100 // 960 // document.getElementById("slide")
console.log(window.innerHeight)
let slideOffSet = (window.innerHeight-slideHeight)
console.log('slide offset '+slideOffSet)


const nav = document.getElementById("nav")
let visible = false

function doSomething(scrollPos) {
    // Do something with the scroll position
    console.log(scrollPos)
    console.log('triggered: topOffSet')
    visible = true
}

document.addEventListener("scroll", (e) => {
    lastKnownScrollPosition = window.scrollY
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if(!visible && lastKnownScrollPosition >= topOffSet) {
                doSomething(lastKnownScrollPosition);
                ticking = false
            }
    })
        ticking = true
    }
})

// REF: https://jsfiddle.net/qc4NR/
// REF: 
