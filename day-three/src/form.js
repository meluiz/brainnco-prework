const inputUsername = document.querySelector('[data-id=username]')

inputUsername.addEventListener('input', (event) => {
  const target = event.currentTarget
  const lowerCaseWords = [ 'de', 'da', 'do', 'dos' ]
  const valueArray = target.value.split(' ')

  target.value = valueArray.map((word) => {
    return lowerCaseWords.includes(word.toLowerCase())
      ? word.toLowerCase()
      : `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
  }).join(' ')
})

const groupSelect = document.querySelector('[data-id=group-select]')
const groupColors = document.querySelector('[data-id=group-colors]')
const label = document.createElement('label')
const select = document.createElement('select')
const colors = [
  {
    name: 'Azoxo',
    hex: '#5865F2'
  },
  {
    name: 'Verde',
    hex: '#57F287'
  },
  {
    name: 'Amarelo',
    hex: '#FEE75C'
  },
  {
    name: 'Fúcsia',
    hex: '#EB459E'
  },
  {
    name: 'Vermelho',
    hex: '#ED4245'
  }
]

colors.forEach(value => {
  const option = document.createElement('option')
  option.value = value.hex
  option.innerText = value.name
  select.appendChild(option)
})

label.innerText = 'Selecione uma cor'
select.setAttribute('multiple', '')

select.addEventListener('change', (event) => {
  groupColors.innerHTML = ''

  const target = event.target
  const options = target.selectedOptions

  Array.from(options).forEach((option) => {
    const span = document.createElement('span')
    span.style.backgroundColor = option.value

    groupColors.appendChild(span)
  })
})

groupSelect.appendChild(label)
groupSelect.appendChild(select)

