const name = document.querySelector('#name')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')

const btn = document.querySelector('#button')
btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (name.value === "") {
        name.style.border = "1px solid red"
        setTimeout(() => name.style.border = "", 2000);
    } else if (email.value === "") {
        email.style.border = "1px solid red"
        setTimeout(() => email.style.border = "", 2000);
    } else if (pass.value === "") {
        pass.style.border = "1px solid red"
        setTimeout(() => pass.style.border = "", 2000);
    }

    else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1
        || (email.value.indexOf("@") - email.value.indexOf(".") !== -6)) {
        email.style.border = "1px solid red"
        alert("O Email deve ter o nome do usuario seguido de @gmail.com")
        setTimeout(() => email.style.border = "", 2000);
    } else if (pass.value.length < 4) {
        alert("A senha deve ter no minimo 4 digitos")
        pass.style.border = "1px solid red"
        setTimeout(() => email.style.border = "", 2000);
    } else {
        alert("Seja bem vindo")
        console.log(`Name:${name.value} Email:${email.value} Senha:${pass.value}`)
    }
})
