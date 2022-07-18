//Slides

const buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1

    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides')

    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if (newIndex < 0) newIndex = slides.children.length - 1

    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true

    delete activeSlide.dataset.active
  })
})

//Menu mobile

class MobileNavBar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active'
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this)
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
    this.animateLinks()
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      console.log(index)
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
    })
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick)
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavBar = new MobileNavBar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li'
)
mobileNavBar.init()

