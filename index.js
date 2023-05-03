// paste this on the console of the line sticker page 
const ul = document.querySelector('ul.FnStickerList')
const lis = ul.querySelectorAll('li')
lis.forEach(li => { 
  const div = li.querySelector('div:first-child')
  const span = div.querySelector('span')
  const style = window.getComputedStyle(span)
  const backgroundImage = style.getPropertyValue('background-image')
  console.log(backgroundImage)
})