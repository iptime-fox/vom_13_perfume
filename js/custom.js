/***** Landing section swiper *****/
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 35000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/***** Score section - count number *****/
function countNumber() {
  $('.count-num').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 5000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
}

const score = document.querySelector('.score-section');
const scoreTop = score.getBoundingClientRect().top + window.pageYOffset - 800;

window.addEventListener('scroll', function () {
  let pageTop = window.scrollY;
  if (pageTop > scoreTop) {
    countNumber();
  }
});

/***** Schedule section slick *****/

$('.slick1').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

/***** Image slider slick *****/

$('.slick2').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
});

/***** Contact section accordion *****/

const accordion = document.querySelector('#accordion');
const accHeaders = document.querySelectorAll('.info-box');
const accContents = document.querySelectorAll('.info-contents');
const body = document.querySelector('body');

accHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    colseAll(header);
    header.classList.toggle('active');
  });
});

accContents.forEach((header) => {
  header.addEventListener('click', () => {
    colseAll(header);
    header.classList.toggle('active');
  });
});

const colseAll = (item) => {
  accHeaders.forEach((header) => {
    if (header !== item) {
      header.classList.remove('active');
    }
  });
};

body.addEventListener('click', (e) => {
  if (!accordion.contains(e.target)) {
    accHeaders.forEach((header) => {
      header.classList.remove('active');
    });
  }
});

/* AOS */
AOS.init({
  duration: 1200,
});
