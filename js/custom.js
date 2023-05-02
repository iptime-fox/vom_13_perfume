/* Score section - count number */
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

/* Contact section accordion */

const body = document.querySelector('body');
const accordion = document.querySelector('#accordion');
const accHeaders = document.querySelectorAll('.info-box');
const accContents = document.querySelectorAll('.info-contents');

accHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    colseAll(header);
    header.classList.toggle('active');
  });
});
const colseAll = (item) => {
  accHeaders.forEach((header) => {
    if (header !== item || header !== item.nextSibling) {
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
