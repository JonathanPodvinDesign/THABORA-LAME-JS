///////////
// ARRAY //
///////////

let tableauSquelettes = [
  {
    id: "KB",
    nom: "Lame Brillante",
    prix: 60,
    categorie: "Squelettes",
    imageavant: "/img/produits/fabriquer/KB.png",
    imagearriere: "/img/produits/fabriquer/KBA.png",
    description: "19 cm",
    gravure: "LF",
    disponibilite: true,
  },
  {
    id: "KG",
    nom: "Lame Titane Gris",
    prix: 60,
    categorie: "Squelettes",
    imageavant: "/img/produits/fabriquer/KG.png",
    imagearriere: "/img/produits/fabriquer/KGA.png",
    description: "19 cm",
    gravure: "LF",
    disponibilite: true,
  },
  {
    id: "KN",
    nom: "Lame Titane Noir",
    prix: 60,
    categorie: "Squelettes",
    imageavant: "/img/produits/fabriquer/KN.png",
    imagearriere: "/img/produits/fabriquer/KNA.png",
    description: "19 cm",
    gravure: "LF",
    disponibilite: true,
  },
];

let tableauPlaquettes = [
  {
    id: "PC",
    nom: "Plaquette Centrale",
    categorie: "Plaquettes",
    image: "/img/produits/fabriquer/MANCHEBLANK.png",
    description: "",
    disponibilite: true,
  },
  {
    id: "PA",
    nom: "Plaquette Ajourée",
    categorie: "Plaquettes",
    image: "/img/produits/fabriquer/MANCHEBLANK.png",
    description: "",
    disponibilite: true,
  },
  {
    id: "PP",
    nom: "Plaquette Pleine",
    categorie: "Plaquettes",
    image: "/img/produits/fabriquer/MANCHEBLANK.png",
    description: "",
    disponibilite: true,
  },
  {
    id: "SP",
    nom: "Sans Plaquette",
    categorie: "Plaquettes",
    image: "/img/produits/fabriquer/MANCHEBLANK.png",
    description: "",
    disponibilite: true,
  },
];
//////////////
// MATIERES //
//////////////
let tableauMatieres = [
  {
    id: "B",
    categorie: "Bois",
    elements: [
      {
        matiere: "Bois",
        id: "01",
        nom: "Bois clair",
        imagePC: "/img/produits/fabriquer/PCB01.png",
        imagePA: "/img/produits/fabriquer/PAB01.png",
        imagePP: "/img/produits/fabriquer/PPB01.png",
      },
      {
        matiere: "Bois",
        id: "02",
        nom: "Bois foncé",
        imagePC: "/img/produits/fabriquer/PCB02.png",
        imagePA: "/img/produits/fabriquer/PAB02.png",
        imagePP: "/img/produits/fabriquer/PPB02.png",
      },
    ],
  },
  {
    id: "C",
    categorie: "Carbone",
    elements: [
      {
        matiere: "Carbone",
        id: "01",
        nom: "Carbone",
        imagePC: "/img/produits/fabriquer/PCC01.png",
        imagePA: "/img/produits/fabriquer/PAC01.png",
        imagePP: "/img/produits/fabriquer/PPC01.png",
      },
    ],
  },
  {
    id: "R",
    categorie: "Résine",
    elements: [
      {
        matiere: "G10",
        id: "01",
        nom: "G10 Noir",
        imagePC: "/img/produits/fabriquer/PCR01.png",
        imagePA: "/img/produits/fabriquer/PAR01.png",
        imagePP: "/img/produits/fabriquer/PPR01.png",
      },
      {
        matiere: "G10",
        id: "02",
        nom: "G10 Kaki",
        imagePC: "/img/produits/fabriquer/PCR02.png",
        imagePA: "/img/produits/fabriquer/PAR02.png",
        imagePP: "/img/produits/fabriquer/PPR02.png",
      },
    ],
  },
  {
    id: "M",
    categorie: "Métaux",
    elements: [
      {
        matiere: "Acier",
        id: "01",
        nom: "Acier Brillant",
        imagePC: "/img/produits/fabriquer/PCM01.png",
        imagePA: "/img/produits/fabriquer/PAM01.png",
        imagePP: "/img/produits/fabriquer/PPM01.png",
      },
      {
        matiere: "Acier",
        id: "02",
        nom: "PVD Doré Jaune",
        imagePC: "/img/produits/fabriquer/PCM02.png",
        imagePA: "/img/produits/fabriquer/PARM2.png",
        imagePP: "/img/produits/fabriquer/PPM02.png",
      },
      {
        matiere: "Acier",
        id: "03",
        nom: "PVD Doré Rose",
        imagePC: "/img/produits/fabriquer/PCM03.png",
        imagePA: "/img/produits/fabriquer/PARM3.png",
        imagePP: "/img/produits/fabriquer/PPM03.png",
      },
      {
        matiere: "Acier",
        id: "04",
        nom: "PVD Anodisé Bleu",
        imagePC: "/img/produits/fabriquer/PCM04.png",
        imagePA: "/img/produits/fabriquer/PARM4.png",
        imagePP: "/img/produits/fabriquer/PPM04.png",
      },
    ],
  },
];

////////////////
// SELECTEURS //
////////////////

const squelettesListe = document.querySelector(".squelettes--liste");
const plaquettesListe = document.querySelector(".plaquettes--liste");
const matieresliste = document.querySelector(".matieres--liste");

///////////////
// FONCTIONS //
///////////////

// AFFICHER LES TITRES DES SQUELETTES
function titreSquelettes() {
  const getTitresSquelettes = tableauSquelettes.map(
    (squelette) => squelette.nom
  );
  for (let i = 0; i < getTitresSquelettes.length; i++) {
    const getTitre = tableauSquelettes[i].nom;
    const liMenu = document.createElement("li");
    liMenu.innerText = getTitre;
    squelettesListe.appendChild(liMenu);
  }
}
titreSquelettes();

// AFFICHER LES TITRES DES PLAQUETTES
function titrePlaquettes() {
  const getTitresPlaquettes = tableauPlaquettes.map(
    (plaquette) => plaquette.nom
  );
  for (let i = 0; i < getTitresPlaquettes.length; i++) {
    const getTitre = tableauPlaquettes[i].nom;
    const liMenu = document.createElement("li");
    liMenu.innerText = getTitre;
    plaquettesListe.appendChild(liMenu);
  }
}
titrePlaquettes();

// AFFICHER LES TITRES DES PLAQUETTES
function titreMatieres() {
  const getTitresMatieres = tableauMatieres.map((matiere) => matiere.categorie);
  for (let i = 0; i < getTitresMatieres.length; i++) {
    const getTitre = tableauMatieres[i].categorie;
    const liMenu = document.createElement("li");
    liMenu.innerText = getTitre;
    matieresliste.appendChild(liMenu);
    const ulmenu = document.createElement("ul");
    liMenu.appendChild(ulmenu);
  }
}
titreMatieres();

// AFFICHER LES SOUS TITRES DES MATIERES
function titreSousMatieres(Matiere) {
  var found = [];
  found = tableauMatieres.find((elem) => elem.categorie === Matiere);
  console.log(found);
  const getTitresMatieres = tableauMatieres.map((matiere) => matiere.elements);
  const sousMenu = [];
  for (let j = 0; j < found.elements.length; j++) {
    sousMenu[j] = found.elements[j].nom;
  }
  return sousMenu;
}

const bois = document.querySelector(".matieres--liste li:first-child");
const selectSousMenuBois = document.querySelector(
  ".matieres--liste li:first-child ul li"
);
bois.addEventListener("click", () => {
  selectSousMenuBois.remove();
  DessineSousMenu("Bois");
});

function DessineSousMenu(Matiere) {
  const matiere = titreSousMatieres(Matiere);
  console.log(matiere);
  for (let i = 0; i < matiere.length; i++) {
    const getSousTitre = matiere[i];
    console.log("test" + getSousTitre);
    const liMenu = document.createElement("li");
    console.log("test1");
    liMenu.innerText = getSousTitre;
    bois.appendChild(liMenu);
  }
}
