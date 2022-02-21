const btn = document.querySelector('.btn-lg'),
  input = document.querySelector('input'),
  inputContainer = document.querySelector('.input-form')

btn.addEventListener('click', (e) => {
  const re = /\S+@\S+\.\S+/
  const isValidEmail = re.test(input.value)

  if (input.value === '') {
    showErrorMsg('Whoops! It looks like you forgot to add your email')
  } else if (!isValidEmail) {
    showErrorMsg('Please provide a valid email address')
  } else {
    showErrorMsg('', false)
  }
})

function showErrorMsg(msg, isShow = true) {
  let pEl = inputContainer.querySelector('p')

  // check if element exist
  if (!pEl) {
    pEl = document.createElement('p')

    inputContainer.appendChild(pEl)
  }

  pEl.innerText = msg

  if (!isShow) {
    pEl.classList.remove('error')
  } else {
    pEl.classList.add('error')
  }
}
