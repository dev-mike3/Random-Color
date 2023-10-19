const colourCode = document.getElementById('colorCode')
const colourBox = document.getElementById('color-box')


let colorCode = ''



function generateBtn(){

    
    const hexChars = "0123454678ABCDEF"
    let hexColor = "#"
    for (let i = 0; i < 6; i++){
        hexColor += hexChars[Math.floor(Math.random() * 16)]
    }
 
    colourBox.style.background = hexColor
    colourCode.innerHTML = hexColor
    
}
function resetBtn(){
    colourCode.innerHTML = ""
    colourBox.style.background = ""
}

function copyRgb(){
    const colorText = colourBox.style.background
    const tempInput = document.createElement('input')
    document.body.appendChild(tempInput)
    tempInput.value = colorText
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    alert('color copied to clipboard' +colorText)
}

function copyHex(){
    const colorText = colourBox.style.backgroundColor
    const hexcode = rgbToHex(colorText)
    const tempInput = document.createElement('input')
    document.body.appendChild(tempInput)
    tempInput.value = hexcode
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    alert('Color copied to clipboard '+hexcode)

}

function rgbToHex(rgbcolor){
    const regex = /rgb\((\d+), (\d+), (\d+)\)/
    const matches = regex.exec(rgbcolor)
    const r = parseInt(matches[1])
    const g = parseInt(matches[2])
    const b = parseInt(matches[3])
    return '#' + componentToHex(r) + componentToHex(g)+ componentToHex(b)


 
}
function componentToHex(c){
    const hex = c.toString(16)
    return hex.length === 1? '0'+hex:hex
}