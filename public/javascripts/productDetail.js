new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    draggable : true,
    responsive: [
      {
        // screens greater than >= 1024px
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });

  document.getElementById('img-prev1').addEventListener('click',()=> {
      document.getElementById('img-main').setAttribute('src','/images/img-phone-01.jpg')
  })

  document.getElementById('img-prev2').addEventListener('click',()=> {
    document.getElementById('img-main').setAttribute('src','/images/img-phone-02.jpg')
})

document.getElementById('img-prev3').addEventListener('click',()=> {
    document.getElementById('img-main').setAttribute('src','/images/img-phone-03.jpg')
})
  
