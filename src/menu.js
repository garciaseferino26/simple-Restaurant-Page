function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    menuItem(
      'PICANHA',
      'Prime Part of the Top Sirloin',
      'Our signature steak, picanha represents the art and science of churrasco cooking. Lightly seasoned with rock salt and sliced thin, it is tender with a robust flavor. There would be no churrasco without picanha.'
  ));
  menu.appendChild(
    menuItem(
      'FILLET MIGNON',
      'Beef Tenderloin',
      'You have never tasted filet prepared like this before. Our gaucho chefs expertly grill the tenderloin on skewers and skillfully carve the perfect bite every time.'
    )
  );
  menu.appendChild(
    menuItem(
      'BEEF ANCHO',
      'Bone-in Ribeye',
      'Arguably one of the most popular cuts in the world, the ancho requires a unique cooking technique to bring out its intense profile. We grill over direct heat to break down the marbling and deliver an unforgettable texture and distinct flavor.'
    )
  );
  menu.appendChild(
    menuItem(
      'MEDALHOES COM BACON',
      'Bacon-Wrapped Steak',
      'Steak is lightly seasoned with rock salt and then wrapped in our hardwood-smoked, honey-cured bacon.'
    )
  );
  menu.appendChild(
    menuItem(
      'FRALDINHA',
      'Bottom Sirloin',
      'Fraldinha is one of the most distinctive and flavorful cuts of meat from Southern Brazil due to its strong marbling characteristics. Our gaucho chefs carve against the grain to ensure the cut remains as tender and flavorful as possible.'
    )
  );
  menu.appendChild(
    menuItem(
      'COSTELA',
      'Beef Ribs',
      'These succulent ribs are first rubbed slightly with rock salt, which creates a seasoned crust. The costela is then grilled for several hours to bring forward its natural flavors.'
    )
  );
  menu.appendChild(
    menuItem(
      'ALCATRA',
      'Top Sirloin',
      'Alcatra is one of the largest, most traditional cuts of Brazilian churrasco, with rich and robust flavor.'
    )
  );
  menu.appendChild(
    menuItem(
      'WAGYU ANCHO',
      'Ribeye',
      'Available as an enhancement to the Full Churrasco Experience, 24oz. premium graded, aged for 21 days.'
    )
  );
  return menu;
}

function menuItem(name, translation, description) {
  // each menu option will be a (div) that will hold three (p) for a description, and an (img) to show a image of the food
  const item = document.createElement('div');
  item.classList.add('menuOptions');

  const itemName = document.createElement('p');
  itemName.classList.add('itemName');
  itemName.innerHTML = name;

  const itemTranslation = document.createElement('p');
  itemTranslation.classList.add('itemTranslation');
  itemTranslation.innerHTML = translation;

  const itemDescription = document.createElement('p');
  itemDescription.classList.add('itemDescription');
  itemDescription.innerHTML = description;

  const itemImage = document.createElement('img');
  itemImage.classList.add('itemImage');
  var currentFileName = name.toLowerCase().replace(/\s+/g,"_") + '.jpg';
  itemImage.src = '../dist/images/' + currentFileName;

  item.appendChild(itemImage);
  item.appendChild(itemName);
  item.appendChild(itemTranslation);
  item.appendChild(itemDescription);

  return item;
}
  
function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
