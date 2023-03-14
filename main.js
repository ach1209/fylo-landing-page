import './styles.scss'

const btns = document.querySelectorAll('button')

btns.forEach(btn => btn.addEventListener('click', e => {
  e.preventDefault()

  const forms = document.querySelectorAll('form')
  forms.forEach(form => form.reset())
}))

const inputs = document.querySelectorAll('form input')
inputs.forEach(input => input.addEventListener('blur', focusOutInputClear))

function focusOutInputClear() {
  this.value = ''
}