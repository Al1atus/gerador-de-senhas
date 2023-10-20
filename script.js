const inputEl =  document.querySelector("#password")
let passwordLength = 8

function generatePassword(){
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

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

generatePassword()