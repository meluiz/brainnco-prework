const baseURL = 'http://localhost:3333/cars'
const table = document.querySelector('[data-id=table]')

fetch(baseURL)
  .then((response) => response.json())
  .then((response) => {
    table.innerHTML = ''
    if (response.length === 0) {
      const tr = document.createElement('tr')
      const td = document.createElement('td')
      td.className = 'table-empty'
      td.colSpan = 5
      td.textContent = "Nenhum carro encontrado"
      tr.appendChild(td)
      table.appendChild(tr)
    }
  })
