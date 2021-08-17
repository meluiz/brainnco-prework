import './style.css'

document.querySelector('[data-js=app]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

document.querySelector('a').addEventListener('click', (event) => {
  event.preventDefault()
  document.querySelector('[data-js=app]').classList.toggle('hidden')
})
