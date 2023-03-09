import '../scss/styles.scss'

const btns = document.querySelectorAll('.btn')
const inputs = document.querySelectorAll('form input')

// Only clear when input is no longer active to prevent overlap with label
inputs.forEach(input => input.addEventListener('blur', focusOutInputClear))

btns.forEach(btn => btn.addEventListener('click', e => {
  e.preventDefault()

  const forms = document.querySelectorAll('form')
  forms.forEach(form => form.reset())
  
  // console.log('Form has been reset')
}))

function focusOutInputClear() {
  this.value = ''
}