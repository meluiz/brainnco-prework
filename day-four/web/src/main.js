
const baseURL = 'http://localhost:3333/cars'

const form = document.querySelector('[data-id=add-car]')
const table = document.querySelector('[data-id=table]')
const error = document.querySelector('[data-id=form-error]')

const createTableRow = (fields) => {
  const tr = document.createElement('tr')

  if (fields.length === 0) {

    const td = document.createElement('td')

    td.className = 'table-empty'
    td.textContent = 'Nenhum carro encontrado'
    td.colSpan = 6
    tr.appendChild(td)

  } else {
    fields.forEach((field) => {
      const td = document.createElement('td')
      td.className = `table-${field.name}`

      if (field.name === 'color') {
        const span = document.createElement('span')
        span.style.backgroundColor = `${field.value}`
        td.appendChild(span)
      } else if (field.name === 'image') {
        const img = document.createElement('img')
        img.src = `${field.value}`
        td.appendChild(img)
      } else {
        td.textContent = field.value
      }

      tr.appendChild(td)
    })
  }

  return tr
}

const renderTableRow = (data) => {
  table.innerHTML = ''

  if (data.length === 0) {
    const tableRow = createTableRow(data)
    table.appendChild(tableRow)
  } else {
    data.forEach((car) => {
      const fields = [
        { name: 'color', value: car.color },
        { name: 'image', value: car.image },
        { name: 'brandModel', value: car.brandModel },
        { name: 'year', value: car.year },
        { name: 'plate', value: car.plate }
      ]

      const tableRow = createTableRow(fields)
      table.appendChild(tableRow)
    })
  }
}

const getCars = () => {
  return fetch(baseURL)
    .then((response) => response.json())
    .then((response) => renderTableRow(response))
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const target = event.target
  const fields = {
    image: target.elements.image,
    brandModel: target.elements.brandModel,
    year: target.elements.year,
    plate: target.elements.plate,
    color: target.elements.color
  }

  if (
    fields.image.value.length === 0 ||
    fields.brandModel.value.length === 0 ||
    fields.year.value.length === 0 ||
    fields.plate.value.length === 0 ||
    fields.color.value.length === 0
  ) {
    return error.textContent = 'Todos os campos são obrigatórios'
  }

  fetch(baseURL, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      image: fields.image.value,
      brandModel: fields.brandModel.value,
      year: parseInt(fields.year.value),
      plate: fields.plate.value,
      color: fields.color.value
    })
  })
  .then((response) => response.json())
  .then((response) => {
    error.textContent = ''


    if (!response.error) {
      fields.image.value = ''
      fields.brandModel.value = ''
      fields.year.value = ''
      fields.plate.value = ''
      fields.color.value = ''
      target.elements[0].focus()
      return getCars()
    }

    error.textContent = response.message
  })

})

getCars()
