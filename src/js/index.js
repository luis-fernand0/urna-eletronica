const anularVoto = document.getElementById('btn-branco')
const corrigirVoto = document.getElementById('btn-corrigir')
const confirmarVoto = document.getElementById('btn-confirmar')

const logo = document.querySelector('.logo-justica-titulo')
const codChapa = document.getElementById('chapa')
const chapa = document.getElementById('chapa-text')
const text = document.querySelector('.container-text-fim')
const audioPlay = document.querySelector('audio')

function mostrarValorBtn (num) {
    audioPlay.play()

    codChapa.innerHTML = num
    chapa.innerHTML = 'Chapa ' + num
}

function anularInput() {
    text.classList.remove('disabled')
    audioPlay.play()

    function reload () {
        window.location.reload(true)
    }
    setTimeout(reload, 2000)
}

function corrigirInput () {
    chapa.innerHTML = ``
    codChapa.textContent = ``
    audioPlay.play()
}

function confirmarInput () {
    let chapa = Number(codChapa.textContent)
    if(localStorage.getItem(`Chapa_${chapa}`)) {

        let count = localStorage.getItem(`Chapa_${chapa}`)
        localStorage.setItem(`Chapa_${chapa}`, Number(count) + 1)
        
    } else {
        localStorage.setItem(`Chapa_${chapa}`, 1)
    }
    codChapa.innerHTML = ''
    text.classList.remove('disabled')
    audioPlay.play()

    function reload () {
        window.location.reload(true)
    }
    setTimeout(reload, 2000)
}

function sumirLogo () {
    logo.classList.add('logo-justica-titulo-disabled')
}
setTimeout(sumirLogo, 3000)

