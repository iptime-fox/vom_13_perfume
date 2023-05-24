function kakaoLogin() {
  window.Kakao.Auth.login({
    scope: 'profile_nickname, account_email',
    success: function (authObject) {
      console.log(authObject);
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (response) => {
          const kkAccount = response.kakao_account;
          console.log(kkAccount);
          alert('로그인 되었습니다.');
          location.href = '/perfume/index.html';
        },
      });
    },
  });
}
