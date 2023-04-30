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

// const score = document.querySelector('.score-section');
// const scoreTop = score.offsetTop;
// console.log(scoreTop);

window.addEventListener('scroll', function () {
  let pageTop = window.scrollY;
  // console.log(pageTop);
  if (pageTop > 2900) {
    countNumber();
  }
});

/* Contact section accordion */

// 1. 요소 선택

const body = document.querySelector('body');
const accordion = document.querySelector('#accordion');
const accHeaders = document.querySelectorAll('.info-box');
const accContents = document.querySelectorAll('.info-contents');

// 2. 클릭 했을 때 active 클래스 토글

accHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    // 3. 클릭한 요소 함수의 파라미터로 전달
    colseAll(header);
    header.classList.toggle('active');
  });
});
// 4. 함수로 전달받은 파라미터와 새로 반복한 header 요소와 비교 후 다르면 다른 요소에 추가된 클래스 제거
const colseAll = (item) => {
  accHeaders.forEach((header) => {
    if (header !== item) {
      header.classList.remove('active');
    }
  });
};

// 5. 클릭 요소 이외 부분 클릭했을 때 열려 있는 모든 아코디언 닫기
body.addEventListener('click', (e) => {
  if (!accordion.contains(e.target)) {
    accHeaders.forEach((header) => {
      header.classList.remove('active');
    });
  }
});
