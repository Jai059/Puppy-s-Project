function toggleMenu() {
  const sidebar = document.querySelector('.sidebar-container');
  sidebar.classList.toggle('show-sidebar');
}
document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);
document
  .querySelector('.close-hamburger')
  .addEventListener('click', toggleMenu);
document.querySelectorAll('.sidebar-links a').forEach((link) => {
  link.addEventListener('click', toggleMenu);
});
