fetch("/json/produits.json")
  .then((response) => response.json())
  .then((produits) => {
    // Récuperation de l'id du produit
    const produitId = produits.map((produit) => produit.id);
    // Récuperation de la description du produit
    const produitDescription = produits.map((produit) => produit.description);
    // Récuperation de la description de la plaquette du produit
    const produitPlaquette = produits.map((produit) => produit.plaquette);
    // Récuperation de la description de la matière du produit
    const produitMatiere = produits.map((produit) => produit.matiere);
    // Récuperation de l'image principale du produit
    const produitImage1 = produits.map((produit) => produit.images1);
    // Récuperation du prix du produit
    const produitIPrix = produits.map((produit) => produit.prix);

    function affichageProduits(produits) {
      for (let i = 0 ; i < produits.length ; i++){
        article = produits[i];
        const ArticleProduit = document.querySelector('.fiches-produits');
        const articleContainer = document.createElement('div');
        ArticleProduit.appendChild(articleContainer);
        const imgProduit = document.createElement('img');
        imgProduit.src = article.image1;
        articleContainer.appendChild(imgProduit);
        const texteDescProduit = document.createElement('p');
        texteDescProduit.innerText = article.squelette;
        articleContainer.appendChild(texteDescProduit);
        const textePlaquetteProduit = document.createElement('p');
        textePlaquetteProduit.innerText = article.plaquette;
        articleContainer.appendChild(textePlaquetteProduit);
        const texteMatiereProduit = document.createElement('p');
        texteMatiereProduit.innerText = article.matiere;
        articleContainer.appendChild(texteMatiereProduit);
        const textePrixProduit = document.createElement('p');
        textePrixProduit.innerText = article.prix + "€";
        articleContainer.appendChild(textePrixProduit);
      }
    };
    affichageProduits(produits);
  });
