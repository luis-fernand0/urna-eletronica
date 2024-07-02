const input = document.querySelector('.input-active')
const logo = document.querySelector('.logo-justica-titulo')
const inputValue = document.getElementById('input-value')
const nomeAluno = document.getElementById('nome-aluno')
const aluno = document.getElementsByName('aluno1')

function mostrarValorBtn (num) {
    inputValue.value = num

    if (num === '1') {
        nomeAluno.innerHTML = 'Nome da menina que não sei'
    } else if (num === '2') {
        nomeAluno.innerHTML = `Nome do menino que não sei`
    }   
}

function sumirLogo () {
    input.classList.remove('input-disabled')
    logo.classList.add('logo-justica-titulo-disabled')
}
setTimeout(sumirLogo, 3000)

