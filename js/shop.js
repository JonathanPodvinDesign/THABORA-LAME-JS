// fetch("/json/produits.json")
//   .then((response) => response.json())
//   .then((produits) => {
//     const produitId = produits.map((produit) => produit.id);
//     const produitDescription = produits.map((produit) => produit.description);
//     const produitPlaquette = produits.map((produit) => produit.plaquette);
//     const produitMatiere = produits.map((produit) => produit.matiere);
//     const produitImage1 = produits.map((produit) => produit.images1);
//     const produitIPrix = produits.map((produit) => produit.prix);

//     function affichageProduits(produits) {
//       for (let i = 0 ; i < produits.length ; i++){
//         article = produits[i];
//         const ArticleProduit = document.querySelector('.fiches-produits');
//         const articleContainer = document.createElement('div');
//         ArticleProduit.appendChild(articleContainer);
//         const imgProduit = document.createElement('img');
//         imgProduit.src = article.image1;
//         articleContainer.appendChild(imgProduit);
//         const texteDescProduit = document.createElement('p');
//         texteDescProduit.innerText = article.squelette;
//         articleContainer.appendChild(texteDescProduit);
//         const textePlaquetteProduit = document.createElement('p');
//         textePlaquetteProduit.innerText = article.plaquette;
//         articleContainer.appendChild(textePlaquetteProduit);
//         const texteMatiereProduit = document.createElement('p');
//         texteMatiereProduit.innerText = article.matiere;
//         articleContainer.appendChild(texteMatiereProduit);
//         const textePrixProduit = document.createElement('p');
//         textePrixProduit.innerText = article.prix + "€";
//         articleContainer.appendChild(textePrixProduit);
//       }
//     };
//     affichageProduits(produits);
//   });
