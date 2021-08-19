const form = document.querySelector('[data-id=add-car]')
const table = document.querySelector('[data-id=table]')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const target = event.target
  const fields = [
    { name: 'color', document: target.elements.color },
    { name: 'image', document: target.elements.image },
    { name: 'brandModel', document: target.elements.brandModel },
    { name: 'year', document: target.elements.year },
    { name: 'plate', document: target.elements.plate }
  ]

  const tr = document.createElement('tr')
  const values = [
    { type: 'color', value: target.elements.color.value },
    { type: 'image', value: target.elements.image.value },
    { type: 'brandModel', value: target.elements.brandModel.value },
    { type: 'year', value: target.elements.year.value },
    { type: 'plate', value: target.elements.plate.value }
  ]

  values.forEach((item) => {
    const td = document.createElement('td')
    if (item.type === 'color') {
      td.className = 'table-color'

      const span = document.createElement('span')
      span.style.backgroundColor = item.value
      td.appendChild(span)
    } else if (item.type === 'image') {
      td.className = 'table-image'

      const img = document.createElement('img')
      img.src = item.value
      td.appendChild(img)
    } else {
      td.innerText = item.value
    }

    tr.appendChild(td)
  })

  table.appendChild(tr)

  fields.forEach((field) =>
    field.type === 'color'
      ? field.document.value = '#000000'
      : field.document.value = ''
  )

  target.elements.image.focus()
})
