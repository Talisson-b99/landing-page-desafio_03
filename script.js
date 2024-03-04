const buttonClose = document.querySelector('#btn-close')
const buttonWatch = document.querySelector('#btn-watch')
const modal = document.querySelector('#modal')

buttonClose.addEventListener('click', () => {
  modal.classList.remove('is-visibily')
})

buttonWatch.addEventListener('click', () => {
  modal.classList.add('is-visibily')
})