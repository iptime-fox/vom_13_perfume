const versionUpdate = new Date().getTime();

const pageURL = document.location.href;
let pageName = '';

if (pageURL.includes('index')) {
  pageName = 'main';
} else if (pageURL.includes('sign')) {
  pageName = 'sign';
}

/* ----- Custom CSS Files -----  */
const setting = document.createElement('link');
const style = document.createElement('link');
const header = document.createElement('link');
const footer = document.createElement('link');
const responsive = document.createElement('link');

setting.rel = 'stylesheet';
setting.href = `/perfume/css/setting.css?_v=${versionUpdate}`;

style.rel = 'stylesheet';
style.href = `/perfume/css/style.css?_v=${versionUpdate}`;

header.rel = 'stylesheet';
header.href = `/perfume/css/header.css?_v=${versionUpdate}`;

footer.rel = 'stylesheet';
footer.href = `/perfume/css/footer.css?_v=${versionUpdate}`;

responsive.rel = 'stylesheet';
responsive.href = `/perfume/css/responsive.css?_v=${versionUpdate}`;

const fileNames = [setting, style, header, footer, responsive];

for (let i = 0; i < fileNames.length; i++) {
  document.head.insertAdjacentElement('beforeend', fileNames[i]);
}

/* ----- Custom JS Files -----  */
const custom = document.createElement('script');
const include = document.createElement('script');
const headerJs = document.createElement('script');

custom.type = 'text/javascript';
custom.src = `/perfume/js/ui/custom.js?_v=${versionUpdate}`;

headerJs.type = 'text/javascript';
headerJs.src = `/perfume/js/ui/header.js?_v=${versionUpdate}`;

include.type = 'text/javascript';
include.src = `/perfume/js/etc/include.js?_v=${versionUpdate}`;

document.body.insertAdjacentElement('beforeend', include);
document.body.insertAdjacentElement('beforeend', headerJs);
document.body.insertAdjacentElement('beforeend', custom);
