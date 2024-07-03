const input = document.querySelector('.div-input')
const logo = document.querySelector('.logo-justica-titulo')
const inputValue = document.getElementById('input-value')
const nomeAluno = document.getElementById('nome-aluno')
const anularVoto = document.getElementById('btn-branco')
const corrigirVoto = document.getElementById('btn-corrigir')
const confirmarVoto = document.getElementById('btn-confirmar')
const text = document.getElementById('text')
const audioPlay = document.querySelector('audio')

function mostrarValorBtn (num) {
    inputValue.value = num
    audioPlay.play()

    if (num === '1') {
        nomeAluno.innerHTML = 'Maria e Gabi'
    } else if (num === '2') {
        nomeAluno.innerHTML = `Lucas Kenji e Murilo`
    } else (
        nomeAluno.innerHTML = `Essa chapa não está mais competindo`
    )
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
    nomeAluno.innerHTML = ``
    inputValue.value = ``
    audioPlay.play()
}

function confirmarInput () {
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

