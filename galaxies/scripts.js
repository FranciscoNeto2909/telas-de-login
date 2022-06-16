const form = document.querySelector(".form")
const validator = {
    handleSubmit(e) {
        e.preventDefault()

        let send = true
        const inputs = document.querySelectorAll("input")

        inputs.forEach((input) => {
            if (input.value === '') {
                validator.showError(input)
            }
        })
        send = false
        if (send) {
            form.submit()
            inputs.value = ""
        }
    },
    showError(input){
        const errorElement = document.createElement("div")
        errorElement.innerHTML = "Este campo não pode estar vazio"
        errorElement.style.marginTop = "5px"
        errorElement.style.fontSize = "12px"
        input.style.border = "1px solid #f00"
        input.parentElement.insertBefore(errorElement, input.nextElementSibling)
       
        setTimeout(() => {
            input.style.border = "none"
            input.style.borderBottom = "1px solid #F770A8"
            errorElement.remove()
        }, 2000)
    }
}
form.addEventListener("submit", validator.handleSubmit)