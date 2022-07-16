const imgs = document.querySelector('#img')
const images = document.querySelectorAll('.images')

let carrouselIndex = 0

function carrousel() {
  carrouselIndex++

  if (carrouselIndex > images.length - 1) {
    carrouselIndex = 0
  }
  imgs.style.transform = `translateX(${-carrouselIndex * 100}%)`
}

setInterval(carrousel, 3000)
