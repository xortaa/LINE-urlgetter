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

let index = 0
const downloadImage = () => {
  if (index >= imgUrls.length) {
    return
  }

  const xhr = new XMLHttpRequest()
  xhr.responseType = 'blob'
  xhr.onload = () => {
    const link = document.createElement('a')
    link.href = URL.createObjectURL(xhr.response)
    const stickerId = imgUrls[index].split('/')[6] 
    link.download = `${stickerId}.png`
    document.body.appendChild(link)
    link.click()
    setTimeout(() => {
      document.body.removeChild(link)
      index++
      downloadImage()
    }, 1000)
  }
  xhr.open('GET', imgUrls[index])
  xhr.send()
}

downloadImage()