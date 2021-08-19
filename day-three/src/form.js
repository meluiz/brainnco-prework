const inputUsername = document.querySelector('[data-id]')

const lowerCaseWords = [ 'de', 'da', 'do', 'dos' ]
inputUsername.addEventListener('input', (event) => {
  const target = event.currentTarget
  const valueArray = target.value.split(' ')

  target.value = valueArray.map((word) => {
    return lowerCaseWords.includes(word.toLowerCase())
            ? word.toLowerCase()
            : `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
  }).join(' ')

})

