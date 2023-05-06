$(function () {
  const versionUpdate = new Date().getTime();
  $('#header-wrapper').load(`/perfume/include/header.html?_v=${versionUpdate}`);
  $('#mobile-overlay-wrapper').load(
    `/perfume/include/mobile-menu.html?_v=${versionUpdate}`
  );
  $('#footer-wrapper').load(`/perfume/include/footer.html?_v=${versionUpdate}`);
});
