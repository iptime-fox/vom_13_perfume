// Kakao.init('9be88cae11b6c8765224eb6cc50e7b56'); //발급받은 키 중 javascript키를 사용해준다.
// console.log(Kakao.isInitialized()); // sdk초기화여부판단
// //카카오로그인
// function kakaoLogin() {
//   Kakao.Auth.authorize({
//     redirectUri: '${REDIRECT_URI}',
//   });
//   // Kakao.Auth.setAccessToken('${ACCESS_TOKEN}');
//   // Kakao.Auth.login({
//   //   success: function (response) {
//   //     Kakao.API.request({
//   //       url: '/v2/user/me',
//   //       success: function (response) {
//   //         console.log(response);
//   //       },
//   //       fail: function (error) {
//   //         console.log(error);
//   //       },
//   //     });
//   //     console.log(response);
//   //   },
//   //   fail: function (error) {
//   //     console.log(error);
//   //   },
//   // });
// }

// U2FsdGVkX18waiR2hw5Wx01VC9mzobJySCo1TShx2iH5ohUIiIyyFpn071iNsc8p9aphmBtE3FiMrEe75bmIkBLTQYJFkS2yXUX83P7+9CA=

// if (window.localStorage.getItem('kakao_c901544241a83cd2b303fefa0c095b34')) {
//   console.log('abc');
// }

// https://kauth.kakao.com/oauth/authorize?client_id=3132ebb31e3c4b5abfc88cb35109a221&response_type=code&redirect_uri=https://localhost.com

// https://data-jj.tistory.com/53

// https://hanara123.cafe24.com/?code=pxjIhPA-LXzFrpQfNo8npBfcfJp1-aWUKuVfj6G6UKmZ2yZPBV3OJilYE3lfbnImcCB7SwoqJVAAAAGILXtHGQ

// if (Kakao.Auth.getAccessToken()) {
//   const logBtn = document.querySelector('.log-btn');
//   logBtn.innerHTML = `<a href="#" class="logout"><i class="ri-logout-box-r-line"></i></a>`;
// }
// window.Kakao.init('916b880c45aa564a38d3b67110580f07');

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
          // console.log(Kakao.Auth.getAccessToken());
          alert('로그인 되었습니다.');
          location.href = '/perfume/index.html';
        },
      });
    },
  });
}
