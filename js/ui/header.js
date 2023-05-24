/* HEADER */
setTimeout(() => {
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight;
  const toTop = document.querySelector('#top');
  const toBottomBg = document.querySelector('.bottom-btn');
  const toBottom = document.querySelector('#bottom');

  window.addEventListener('scroll', function () {
    const scrY = window.scrollY;
    if (scrY > headerHeight) {
      header.style.background = 'black';
      toTop.style.display = 'flex';
      toBottomBg.style.background = 'black';
    } else {
      header.style.background = 'none';
      toTop.style.display = 'none';
      toBottomBg.style.background = 'none';
    }
  });

  toTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
    });
  });

  toBottom.addEventListener('click', function () {
    window.scroll(0, 9000);
  });

  /* MOBILE MENU */
  const mobileMenuIcon = document.querySelector('.menu-icon');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileCloseIcon = document.querySelector('.close-icon');

  mobileMenuIcon.addEventListener('click', function (e) {
    e.preventDefault();
    mobileOverlay.classList.add('on');
    document.body.style.overflow = 'hidden';
  });
  mobileCloseIcon.addEventListener('click', function (e) {
    e.preventDefault();
    mobileOverlay.classList.remove('on');
    document.body.style.overflow = 'auto';
  });

  mobileOverlay.addEventListener('click', function (e) {
    if (
      e.target.getAttribute('class') !== 'mobile-menus' &&
      e.target.nodeName !== 'LI' &&
      e.target.nodeName !== 'A' &&
      e.target.nodeName !== 'I'
    ) {
      mobileOverlay.classList.remove('on');
      document.body.style.overflow = 'auto';
    }
  });

  mobileOverlay.style.top = headerHeight + 'px';

  // ======== 카카오 로그인 ========//
  window.Kakao.init('9be88cae11b6c8765224eb6cc50e7b56');

  // 카카오로그아웃;
  function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
          alert('로그아웃 되었습니다.');
          location.reload();
        },
        fail: function (error) {
          console.log(error);
        },
      });
      Kakao.Auth.setAccessToken(undefined);
    }
  }

  if (Kakao.Auth.getAccessToken()) {
    const logBtn = document.querySelector('.log-btn');

    logBtn.innerHTML = `<a href="#" class="logout"><i class="ri-logout-box-r-line"></i></a>`;
  } else if (!Kakao.Auth.getAccessToken()) {
    const logBtn = document.querySelector('.log-btn');

    logBtn.innerHTML = `<a href="/perfume/pages/sign-in.html" class="login"><img src="/perfume/img/login_kakao.png"></a>`;
  }

  const logoutBtn = document.querySelector('.logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      kakaoLogout();
    });
  }
}, 1500);
