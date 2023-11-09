const inputEl =  document.querySelector("#password")
let passwordLength = 8

const upperCaseEl = document.querySelector("#uppercase-check")

const numberCaseEl = document.querySelector("#number-check")

const symbolCaseEl = document.querySelector("#symbol-check")

const securityIndicatorBarEl = document.querySelector("#securyti-indicator-bar")


function generatePassword(){
    let chars = "abcdefghjkmnpqrstuvwxyz"

    const upperCase = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numberCase = "123456789"
    const symbolCase = "?!@&*()[]"

    if(upperCaseEl.checked){
        chars += upperCase
    }

    if(numberCaseEl.checked){
        chars += numberCase
    }

    if(symbolCaseEl.checked){
        chars += symbolCase
    }


    let password = ""

    for( i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1 )
    }
    
    inputEl.value = password

    calculateQuality()
    calculateFontSize()
}

function calculateQuality() {
    const percent =  Math.round((passwordLength / 64) * 25 + (upperCaseEl.checked ? 15 : 0) + (numberCaseEl.checked ? 25 : 0 ) + (symbolCaseEl.checked ? 35 : 0 ))

    securityIndicatorBarEl.style.width = `${percent}%`

    if (percent > 69){
        securityIndicatorBarEl.classList.remove("critical")
        securityIndicatorBarEl.classList.remove("warning")
        securityIndicatorBarEl.classList.add("safe")
    }else if (percent > 20){
        securityIndicatorBarEl.classList.remove("critical")
        securityIndicatorBarEl.classList.add("warning")
        securityIndicatorBarEl.classList.remove("safe")
    }else {
        securityIndicatorBarEl.classList.add("critical")
        securityIndicatorBarEl.classList.remove("warning")
        securityIndicatorBarEl.classList.remove("safe")
    }

    if(percent >= 100){
        securityIndicatorBarEl.classList.add("completed")
    } else {
        securityIndicatorBarEl.classList.remove("completed")
    }
}

function calculateFontSize(){
    if(passwordLength > 45){
        inputEl.classList.remove('font-sm')
        inputEl.classList.remove('font-xs')
        inputEl.classList.add('font-xxs')
    } else if (passwordLength > 32){
        inputEl.classList.remove('font-sm')
        inputEl.classList.add('font-xs')
        inputEl.classList.remove('font-xxs')
    } else if (passwordLength > 22){
        inputEl.classList.add('font-sm')
        inputEl.classList.remove('font-xs')
        inputEl.classList.remove('font-xxs')
    } else {
        inputEl.classList.remove('font-sm')
        inputEl.classList.remove('font-xs')
        inputEl.classList.remove('font-xxs')
    }
}

function copy(){
    navigator.clipboard.writeText(inputEl.value)
    alert("Senha copiada!!")
}

const passwordLengthEl = document.querySelector("#password-length")
passwordLengthEl.addEventListener("input", function(){
    passwordLength = passwordLengthEl.value
    document.querySelector("#password-lenght-text").innerText = passwordLength
    generatePassword()
})

upperCaseEl.addEventListener("click", generatePassword)
numberCaseEl.addEventListener("click", generatePassword)
symbolCaseEl.addEventListener("click", generatePassword)

generatePassword()