const form = document.getElementById("form")
const colorInput = document.getElementById("color")
const schemeInput = document.getElementById("scheme")
const results = document.getElementById("result")
let colorsArr = []
let colorHTML = ""


form.addEventListener("submit", function (event) {
    event.preventDefault()

    let hexNum = colorInput.value.slice(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexNum}&mode=${schemeInput.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            colorsArr = data.colors

            for (let i = 0; i < colorsArr.length; i++) {

                colorHTML += `<div class="color-item">
                                <div class="color-div" style="background: ${colorsArr[i].hex.value};"></div>
                                <p class="hex-color">${colorsArr[i].hex.value}</p>
                              </div>`

            }

        })


    results.innerHTML = colorHTML
    colorHTML = ""
})















