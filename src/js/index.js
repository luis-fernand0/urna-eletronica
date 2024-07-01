const input = document.querySelector('.input-active')
const logo = document.querySelector('.logo-justica-titulo')
const valorBtn = document.querySelector('.btn-teclado')

valorBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('teste-active')
})

function sumirLogo () {
    input.classList.remove('input-disabled')
    logo.classList.add('logo-justica-titulo-disabled')
}
setTimeout(sumirLogo, 3000)

