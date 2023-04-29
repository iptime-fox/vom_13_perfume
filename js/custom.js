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
  console.log(pageTop);
  if (pageTop > 2900) {
    countNumber();
  }
});
