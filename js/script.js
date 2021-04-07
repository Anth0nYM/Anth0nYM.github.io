const span = document.querySelector('span')
const ul = document.querySelector('ul')

span.addEventListener('click', function () {
  if (ul.style.display !== 'flex') {
    ul.style.display = 'flex'
  } else {
    ul.style.display = ''
  }
})
