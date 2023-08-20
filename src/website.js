import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const restName = document.createElement('h1');
  restName.classList.add('restName');
  restName.innerHTML = 'Sefas Brazilian Food Place';

  header.appendChild(restName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('navButton');
  homeButton.innerHTML = 'Home';
  homeButton.addEventListener('click', function(e) {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('navButton');
  menuButton.innerHTML = 'Menu';
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement('button');
  contactButton.classList.add('navButton');
  contactButton.innerHTML = 'Contact';
  contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.navButton');
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Sefas Stuff`;

  footer.appendChild(copyright);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.navButton'));
  loadHome();
}

export default initializeWebsite;