const input = document.querySelector('.div-input')
const logo = document.querySelector('.logo-justica-titulo')
const inputValue = document.getElementById('input-value')
const chapa = document.getElementById('chapa')
const anularVoto = document.getElementById('btn-branco')
const corrigirVoto = document.getElementById('btn-corrigir')
const confirmarVoto = document.getElementById('btn-confirmar')
const text = document.getElementById('text')
const audioPlay = document.querySelector('audio')

function mostrarValorBtn (num) {
    inputValue.value = num
    audioPlay.play()

    chapa.innerHTML = 'Chapa ' + num
}

function anularInput() {
    input.classList.add('input-disabled')
    text.classList.remove('text-disabled')
    audioPlay.play()

    function reload () {
        window.location.reload(true)
    }
    setTimeout(reload, 2000)
}

function corrigirInput () {
    chapa.innerHTML = ``
    inputValue.value = ``
    audioPlay.play()
}

function confirmarInput () {
    if(localStorage.getItem(`Chapa_${inputValue.value}`)) {

        let count = localStorage.getItem(`Chapa_${inputValue.value}`)
        localStorage.setItem(`Chapa_${inputValue.value}`, Number(count) + 1)
        
    } else {
        localStorage.setItem(`Chapa_${inputValue.value}`, 1)
    }
    input.classList.add('input-disabled')
    text.classList.remove('text-disabled')
    audioPlay.play()

    function reload () {
        window.location.reload(true)
    }
    setTimeout(reload, 2000)
}

function sumirLogo () {
    input.classList.remove('input-disabled')
    logo.classList.add('logo-justica-titulo-disabled')
}
setTimeout(sumirLogo, 3000)

