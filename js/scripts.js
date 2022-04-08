/*
document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('.navigation__item').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelectorAll('.navigation__item').forEach((item) => {
      item.classList.remove('active')
    })
    item.classList.add('active')
  })
})

})

*/

document.addEventListener('DOMContentLoaded', () => {

  const navToggleButton = document.querySelector('.navtoggle')

  const navSearchButton = document.querySelectorAll('.navigation__searchbtn')

  navSearchButton.forEach((searchbtn) => {
    searchbtn.addEventListener('click', () => {
      document.querySelector('.searchform-wrap').classList.toggle('active')
      document.querySelector('.navigation').classList.remove('active')
      navToggleButton.classList.remove('active')
      window.scrollTo(0, 0);
    })
  })

  navToggleButton.addEventListener('click', () => {
    document.querySelector('.searchform-wrap').classList.remove('active')
    document.querySelector('.navigation').classList.toggle('active')
    navToggleButton.classList.toggle('active')
  })

  document.querySelectorAll('ul.navigation > li.parent > a').forEach((toplvlitem) => {
    toplvlitem.addEventListener('click', (event) => {
      event.preventDefault()
    })
  })

  document.querySelectorAll('ul.navigation > li.parent > a').forEach((parent) => {
    parent.addEventListener('click', (event) => {
      event.target.parentNode.classList.toggle('active')
    })
  })

  document.querySelectorAll('.nav-back').forEach((navback) => {
    navback.addEventListener('click', () => {
      document.querySelectorAll('ul.navigation li.active').forEach((parent) => {
        parent.classList.remove('active')
      })
    })
  })

  document.querySelector('.search-close-button').addEventListener('click', () => {
    document.querySelector('.searchform-wrap').classList.toggle('active')
  })
})
