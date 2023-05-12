const items = [
    {
        id: 1,
        nom: "Menu Classic",
        img: "Menu 5E.jpg",
        prix: 5,
        description: "Burger, Salade, Tomate, Cornichon"
    },
    {
        id: 2,
        nom: "Menu Bacon",
        img: "Menu 6E.jpg",
        prix: 6,
        description: "Burger, Fromage, Bacon, Salade, Tomate"
    },
    {
        id: 3,
        nom: "Menu Big",
        img: "Menu 8E.jpg",
        prix: 8,
        description: "Double Burger, Fromage, Cornichon, Salade"
    },
    {
        id: 4,
        nom: "Menu Chicken",
        img: "Menu 7E.jpg",
        prix: 7,
        description: "Poulet Frit, Tomate, Salade, Mayonnaise"
    },
];

const list = document.querySelector('.cards-list');

function afficheitem(doc) {
    let carte = document.createElement('div');
    carte.setAttribute('id', doc.id);
    carte.classList.add('card');
    carte.innerHTML = '<div class="card_image"><img src="' + doc.img + '"/></div><div class="card_title title-white"><div><p>' + doc.nom + '</p><p>' + doc.prix + ' E</p></div> </div> </div>';

    // Ajout de l'événement de clic à l'image
    carte.querySelector('img').addEventListener("click", function() {
        alert(doc.description);
    });

    list.appendChild(carte);
}

items.map(item => afficheitem(item));

function vide(){
    list.innerHTML=""
    }
    

function afficherMenuPlusCher() {   
    const menuPlusCher = items.reduce((acc, item) => {
      return item.prix > acc.prix ? item : acc;
    });
  
    const menuElement = document.getElementById("menu");
    menuElement.innerHTML = '<div class="card">' +
      '<div class="card_image"><img src="' + menuPlusCher.img + '"/></div>' +
      '<div class="card_title title-white">' +
      '<div>' +
      '<p>' + menuPlusCher.nom + '</p>' +
      '<p>' + menuPlusCher.prix + ' E</p>' +
      '</div>' +
      '</div>' +
      '</div>';
  
    const img = document.createElement("img");
    img.src = menuPlusCher.img;
    img.addEventListener("click", function() {
      alert(menuPlusCher.description);
    });
    imageElement.appendChild(img);
  }

  function afficherMenuMoinsCher() {
    const menuMoinsCher = items.reduce((acc, item) => {
      return item.prix < acc.prix ? item : acc;
    });
  
    const menuElement = document.getElementById("menu");
    menuElement.innerHTML = '<div class="card">' +
      '<div class="card_image"><img src="' + menuMoinsCher.img + '"/></div>' +
      '<div class="card_title title-white">' +
      '<div>' +
      '<p>' + menuMoinsCher.nom + '</p>' +
      '<p>' + menuMoinsCher.prix + ' E</p>' +
      '</div>' +
      '</div>' +
      '</div>';
  
    const img = document.createElement("img");
    img.src = menuMoinsCher.img;
    img.addEventListener("click", function() {
      alert(menuMoinsCher.description);
    });
  }

  function afficherTousLesMenus() {
    const menuElement = document.getElementById("menu");
    menuElement.innerHTML = '';
  
    const imageElement = document.getElementById("image");
    imageElement.innerHTML = '';
  
    items.forEach(item => {
      const carte = document.createElement('div');
      carte.classList.add('card');
      carte.innerHTML = '<div class="card_image"><img src="' + item.img + '"/></div><div class="card_title title-white"><div><p>' + item.nom + '</p><p>' + item.prix + ' E</p></div> </div> </div>';
  
      carte.querySelector('img').addEventListener("click", function() {
        alert(item.description);
      });
  
      menuElement.appendChild(carte);
  
      const img = document.createElement("img");
      img.src = item.img;
      img.addEventListener("click", function() {
        alert(item.description);
      });
    });
  }

  function calculerMoyennePrix() {
    const totalPrix = items.reduce((acc, item) => {
      return acc + item.prix;
    }, 0);
  
    const moyenne = totalPrix / items.length;
  
    const moyenneElement = document.getElementById("moyenne");
    moyenneElement.textContent = "Moyenne des prix : " + moyenne.toFixed(2) + " E";
  }
  
  
  
  

