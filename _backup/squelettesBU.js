fetch("/json/squelettes.json")
  .then((response) => response.json())
  .then((data) => {
    // Récuperation famille des matières
    const squeletteId = data.map((squelette) => squelette.id);
    const squeletteImageAvant = data.map((squelette) => squelette.imageavant);
    const squeletteImageArriere = data.map(
      (squelette) => squelette.imagearriere
    );

    function menuSquelette(data) {
      for (let i = 0; i < squeletteId.length; i++) {
        const getTitre = data[i].nom;
        console.log(getTitre);
        const liMenu = document.createElement("li");
        liMenu.innerText = getTitre;
        console.log("Creation du li");
        squelettesListe.appendChild(liMenu);
      }
    }
    menuSquelette(data);
  });

fetch("/json/plaquettes.json")
  .then((response) => response.json())
  .then((data) => {
    // Récuperation famille des matières
    const squeletteId = data.map((squelette) => squelette.id);

    function menuSquelette(data) {
      for (let i = 0; i < squeletteId.length; i++) {
        const getTitre = data[i].nom;
        console.log(getTitre);
        const liMenu = document.createElement("li");
        liMenu.innerText = getTitre;
        console.log("Creation du li");
        squelettesListe.appendChild(liMenu);
      }
    }
    menuSquelette(data);
  });
