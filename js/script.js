window.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
  })

  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', ()=> {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
  })

  const scrollBtn = document.querySelector('.scrolltoTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
  })
  scrollBtn.addEventListener('click', ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })
  
  window.addEventListener('scroll', ()=> {
    let revaels = document.querySelectorAll('.reveal')

    for(let i = 0; i< revaels.length; i++ ){
      let windowHeight = window.innerHeight;
      let revealTop = revaels[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop <windowHeight - revealPoint) {
        revaels[i].classList.add('active')
      }
    }
  })
})