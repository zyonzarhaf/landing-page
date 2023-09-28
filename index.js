const topBar = document.querySelector('.topbar');
const contactInfo = document.querySelector('.contact-info');
const sidebar = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.sidebar-btn');
const closeBtn = document.querySelector('.close-btn');
const copy = document.querySelector('.copy');

const boxH = contactInfo.getBoundingClientRect().height;

window.addEventListener('scroll', debounce(handleScroll, 100));
sidebarBtn.addEventListener('click', handleSidebarClick);
closeBtn.addEventListener('click', handleCloseClick);
sidebar.addEventListener('click', handleLinkClick);
window.addEventListener('resize', debounce(handleResize, 250));

function debounce(func, delay) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
}

function handleScroll() {
  if (window.scrollY > (80 / 100) * window.innerHeight) {
    topBar.style.top = `-${boxH}px`;
  } else {
    topBar.style.top = '0';
  }
}

function handleSidebarClick() {
  sidebar.classList.add('show-sidebar');
}

function handleCloseClick() {
  sidebar.classList.remove('show-sidebar');
}

function handleLinkClick() {
  sidebar.classList.remove('show-sidebar');
}

function handleResize() {
  if (window.innerWidth > 800) {
    sidebar.classList.remove('show-sidebar');
  }
}

copy.innerHTML = `<h6>© ${new Date().getFullYear()} All Rights Reserved</h6>`;
