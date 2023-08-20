// will come back to make a function to create a div, h1 and p elements
function createHome() {
  // home div, will hold 4 items
  const home = document.createElement('div');
  home.classList.add('homeDiv');

  // first item, will be a (div) holding the (h1) name of the restaurant
  // const homeHeader = document.createElement('div');
  // homeHeader.classList.add('home', 'first');

  // const restaurantName = document.createElement('h1');
  // restaurantName.classList.add('header');
  // restaurantName.innerHTML = 'Seferinos Brazilian Food Place';

  // homeHeader.appendChild(restaurantName);


  // second item, will hold a (div) with an (h1) and a (p) 
  const homeReview = document.createElement('div');
  homeReview.classList.add('home', 'second');

  const restaurantReview = document.createElement('h1');
  restaurantReview.classList.add('header');
  restaurantReview.innerHTML = 'Review:';

  const reviewParagraph = document.createElement('p');
  reviewParagraph.classList.add('paragraph')
  reviewParagraph.innerHTML = 'Absolutely amazing! The place is beautiful and staff are super friendly and the food is delicious. I love that you get a lot of food as well for the price. It’s definitely not like other expensive restaurants and you only get a small amount of food. I am definitely going back. - Obama';

  homeReview.appendChild(restaurantReview);
  homeReview.appendChild(reviewParagraph);


  // third item, will hold a (div) holding an (h1) for the sub header, and two (ul) for days and tiems open
  const homeHours = document.createElement('div');
  homeHours.classList.add('home', 'third');

  const restaurantHours = document.createElement('h1');
  restaurantHours.classList.add('header');
  restaurantHours.innerHTML = 'Hours:';

  let daysOpen = ['Sunday:', 'Monday:', 'Tuesday:', 'Wednesday:', 'Thursday:', 'Friday:', 'Saturday:']
  let timesOpen = ['8am - 9pm', '8am - 9pm', '8am - 9pm', '8am - 9pm', '8am - 9pm', '8am - 9pm', '8am - 9pm']

  const listDays = document.createElement('ul');
  for (var i = 0; i< 7; i++) {
    const day = document.createElement('li');
    day.classList.add('days');
    day.innerHTML = daysOpen[i];
    listDays.appendChild(day);
  }

  const listTimes = document.createElement('ul');
  for (var i = 0; i< 7; i++) {
    const time = document.createElement('li');
    time.classList.add('time');
    time.innerHTML = timesOpen[i];
    listTimes.appendChild(time);
  }

  homeHours.appendChild(restaurantHours);
  homeHours.appendChild(listDays);
  homeHours.appendChild(listTimes);


  // fourth item, will hold a (div) with an (h1) and a (p)
  const homeLocation = document.createElement('div');
  homeLocation.classList.add('home', 'fourth');

  const restaurantLocation = document.createElement('h1');
  restaurantLocation.classList.add('header');
  restaurantLocation.innerHTML = 'Location:';

  const restaurantAddress = document.createElement('p');
  restaurantAddress.classList.add('address');
  restaurantAddress.innerHTML = '742 Evergreen Terrace';

  homeLocation.appendChild(restaurantLocation);
  homeLocation.appendChild(restaurantAddress);

  // add all 4 divs to the home div
  // home.appendChild(homeHeader);
  home.appendChild(homeReview);
  home.appendChild(homeHours);
  home.appendChild(homeLocation);

  return home
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;