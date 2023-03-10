const element = document.querySelector('.element')

let dragging = false

let startX = 0
let startY = 0

element.addEventListener('mousedown', (e) => {
  dragging = true
  startX = e.pageX - Number.parseInt(element.style.left || 0)
  startY = e.pageY - Number.parseInt(element.style.top || 0)
})

document.body.addEventListener('mousemove', (e) => {
  if (!dragging) return
  element.style.top = `${e.pageY - startY}px`
  element.style.left = `${e.pageX - startX}px`
})

document.body.addEventListener('mouseup', () => {
  dragging = false
})

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyW') {
        s = element.offsetTop
        element.style.top = `${s - 20}px` 
    }
    if (event.code == 'KeyS') {
        s = element.offsetTop
        element.style.top = `${s + 20}px` 
      }
    if (event.code == 'KeyA') {
        s = element.offsetLeft
        element.style.left = `${s - 20}px` 
      }
    if (event.code == 'KeyD') {
        s = element.offsetLeft
        element.style.left = `${s + 20}px` 
      }
      if (event.code == 'KeyD') {
        s = element.offsetLeft
        element.style.left = `${s + 20}px`
         
      }
  });