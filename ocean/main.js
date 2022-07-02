const form = document.querySelector(".form")
const validator = {
    handleSubmit(e) {
        e.preventDefault()

        let send = false
        const inputs = document.querySelectorAll("input")

        inputs.forEach((input) => {
            if (input.value === '') {
                validator.showError(input)
            } else {
                send = true
            }
        })
        if (send) {
            inputs[0].value = ""
            inputs[1].value = ""
            document.querySelector(".wellcome").style.display = "block"
            setTimeout(() => {
                document.querySelector(".wellcome").style.display = "none"
            }, 1500);
        }
    },
    showError(input) {
        const errMsg = document.querySelector(".errMsg")
        const errorElement = document.createElement("div")
        errorElement.innerHTML = "Este campo não pode estar vazio"
        errorElement.classList.add("errMsg")
        errorElement.style.fontSize = "12px"
        if (errMsg === null) {
            input.style.border = "1px solid #f00"
            input.parentElement.insertBefore(errorElement, input.nextElementSibling)
        }

        setTimeout(() => {
            input.style.border = "none"
            input.style.borderBottom = "1px solid #F770A8"
            errorElement.remove()
        }, 2000)
    }
}
form.addEventListener("submit", validator.handleSubmit)