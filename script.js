const buttonClose = document.querySelector('#btn-close')
const buttonWatch = document.querySelector('#btn-watch')
const modal = document.querySelector('#modal')
const btnMenu = document.querySelector('.btn-menu')
const btnMenuClose = document.querySelector('.btn-menu-close')
const menu = document.querySelector('.menu')

buttonClose.addEventListener('click', () => {
  modal.classList.remove('is-visibily')
})

buttonWatch.addEventListener('click', () => {
  modal.classList.add('is-visibily')
})

btnMenu.addEventListener('click', () => {
  menu.classList.add('is-open')
})

btnMenuClose.addEventListener('click' ,() => {
  menu.classList.remove('is-open')
})