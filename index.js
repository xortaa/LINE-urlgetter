// paste this on the console of the line sticker page 
const ul = document.querySelector('ul.FnStickerList')
const lis = ul.querySelectorAll('li')

let imgUrls = []
lis.forEach(li => { 
  const div = li.querySelector('div:first-child')
  const span = div.querySelector('span')
  const style = window.getComputedStyle(span)
  const backgroundImage = style.getPropertyValue('background-image')
  const imgUrl = backgroundImage.substring(5, backgroundImage.length - 2)
  imgUrls.push(imgUrl)
})

for (let i = 0; i < imgUrls.length; i++) {
  const link = document.createElement('a')
  link.href = imgUrls[i];
  const stickerId = imgUrls[i].split('/')[6] 
  link.download = `${stickerId}.png`
  document.body.appendChild(link)
  link.click()
  setTimeout(() => {
    document.body.removeChild(link)
  }, 1000)
}