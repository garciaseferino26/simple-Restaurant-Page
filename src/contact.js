function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const locationImg = document.createElement('img');
  locationImg.classList.add('locationImg');
  locationImg.src = '../dist/images/sefasPlace.jpg'

  const locationPhoneNum = document.createElement('p');
  locationPhoneNum.innerHTML = '(281) 777 - 2691';

  contact.appendChild(locationPhoneNum);
  contact.appendChild(locationImg);

  return contact;
}

  
function loadContact() {
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createContact())
}
  
export default loadContact