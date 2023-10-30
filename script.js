const inputEl =  document.querySelector("#password")
let passwordLength = 8

const upperCaseEl = document.querySelector("#uppercase-check")

const numberCaseEl = document.querySelector("#number-check")

const symbolCaseEl = document.querySelector("#symbol-check")


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
    
}

function copy(){
    navigator.clipboard.writeText(inputEl.value)
    alert("Senha copiada!!")
}

const passwordLengthEl = document.querySelector("#password-length")
passwordLengthEl.addEventListener("input", function(){
    passwordLength = passwordLengthEl.value
    generatePassword()
})

upperCaseEl.addEventListener("click", generatePassword)
numberCaseEl.addEventListener("click", generatePassword)
symbolCaseEl.addEventListener("click", generatePassword)

generatePassword()