const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const toTop = document.querySelector('#top');
const toBottom = document.querySelector('#bottom');
// console.log(scrollY);

window.addEventListener('scroll', function () {
  const scrY = window.scrollY;
  if (scrY > headerHeight) {
    header.style.background = 'black';
    toTop.style.display = 'flex';
  } else {
    header.style.background = 'none';
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
  });
});

toBottom.addEventListener('click', function () {
  window.scroll(0, 7000);
});
