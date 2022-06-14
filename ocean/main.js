const init = ()=>{
    const email = document.querySelector('#email')
    const senha = document.querySelector('#senha')
    const submit = document.querySelector('#submit')

    submit.addEventListener('click',() => {
        event.preventDefault()
    })
}

window.onload = init()