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

  // if (loginBtn !== null) {
  //   loginBtn.addEventListener('click', function () {
  //     kakaoLogin();
  //   });
  // }

  // if (logoutBtn !== null) {
  //   logoutBtn.addEventListener('click', function () {
  //     kakaoLogout();
  //   });
  // }

  // window.Kakao.init('916b880c45aa564a38d3b67110580f07');

  // function kakaoLogin() {
  //   window.Kakao.Auth.login({
  //     scope: 'profile_nickname, account_email',
  //     success: function (authObject) {
  //       console.log(authObject);
  //       window.Kakao.API.request({
  //         url: '/v2/user/me',
  //         success: (response) => {
  //           const kkAccount = response.kakao_account;
  //           location.href = '/perfume/index.html';
  //         },
  //       });
  //     },
  //   });
  // }

  // if (window.localStorage.getItem('kakao_c901544241a83cd2b303fefa0c095b34')) {
  //   console.log('abc');
  //   const logBtn = document.querySelector('.log-btn');
  //   logBtn.innerHTML = `<a href="#" class="logout"><i class="ri-logout-box-r-line"></i></a>`;
  //   kakaoLogout();
  // } else {
  //   const logBtn = document.querySelector('.log-btn');
  //   logBtn.innerHTML = `<a href="/perfume/pages/sign-in.html" class="login"><i class="ri-user-line"></i></a>`;
  //   kakaoLogin();
  // }

  // logoutBtn.addEventListener('click', function () {});
  window.Kakao.init('916b880c45aa564a38d3b67110580f07');

  // function kakaoLogin() {
  //   window.Kakao.Auth.login({
  //     scope: 'profile_nickname, account_email',
  //     success: function (authObject) {
  //       console.log(authObject);
  //       window.Kakao.API.request({
  //         url: '/v2/user/me',
  //         success: (response) => {
  //           const kkAccount = response.kakao_account;
  //           console.log(kkAccount);
  //           console.log(Kakao.Auth.getAccessToken());
  //           location.href = '/perfume/index.html';
  //         },
  //       });
  //     },
  //   });
  // }

  // 카카오로그아웃;
  function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
          // console.log(response);
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

  // console.log(Kakao.Auth.getAccessToken());

  if (Kakao.Auth.getAccessToken()) {
    const logBtn = document.querySelector('.log-btn');

    logBtn.innerHTML = `<a href="#" class="logout"><i class="ri-logout-box-r-line"></i></a>`;
  } else if (!Kakao.Auth.getAccessToken()) {
    const logBtn = document.querySelector('.log-btn');

    logBtn.innerHTML = `<a href="/perfume/pages/sign-in.html" class="login"><i class="ri-user-line"></i></a>`;
  }

  const logoutBtn = document.querySelector('.logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      kakaoLogout();
    });
  }

  // const loginBtn = document.querySelector('.login');
  // console.log(loginBtn);

  // loginBtn.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   console.log('abc');
  //   kakaoLogin();
  // });
}, 1500);
