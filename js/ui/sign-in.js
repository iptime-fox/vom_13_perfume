Kakao.init('9be88cae11b6c8765224eb6cc50e7b56'); //발급받은 키 중 javascript키를 사용해준다.
console.log(Kakao.isInitialized()); // sdk초기화여부판단
//카카오로그인
function kakaoLogin() {
  Kakao.Auth.authorize({
    redirectUri: '${REDIRECT_URI}',
  });
  // Kakao.Auth.setAccessToken('${ACCESS_TOKEN}');
  // Kakao.Auth.login({
  //   success: function (response) {
  //     Kakao.API.request({
  //       url: '/v2/user/me',
  //       success: function (response) {
  //         console.log(response);
  //       },
  //       fail: function (error) {
  //         console.log(error);
  //       },
  //     });
  //     console.log(response);
  //   },
  //   fail: function (error) {
  //     console.log(error);
  //   },
  // });
}
//카카오로그아웃
function kakaoLogout() {
  if (Kakao.Auth.getAccessToken()) {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
    Kakao.Auth.setAccessToken(undefined);
  }
}

// https://kauth.kakao.com/oauth/authorize?client_id=3132ebb31e3c4b5abfc88cb35109a221&response_type=code&redirect_uri=https://localhost.com

// https://data-jj.tistory.com/53

// https://hanara123.cafe24.com/?code=pxjIhPA-LXzFrpQfNo8npBfcfJp1-aWUKuVfj6G6UKmZ2yZPBV3OJilYE3lfbnImcCB7SwoqJVAAAAGILXtHGQ
