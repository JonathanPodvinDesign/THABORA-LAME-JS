////////////////////////////////////////
//                 JSON               //
////////////////////////////////////////

// const reponseSquelettes = await fetch('/jsons/squellettes.json');
// const squelettes = await reponsePieces.json();
// const reponseGravures = await fetch('/jsons/gravures.json');
// const gravures = await reponseGravures.json();
// const reponsePlaquettes = await fetch('/jsons/plaquettes.json');
// const plaquettes = await reponsePieces.json();
// const reponseVis = await fetch('/jsons/vis.json');
// const vis = await reponseVis.json();

////////////////////////////////////////
//             SELECTEURS             //
////////////////////////////////////////

// Lame
let lame = document.querySelectorAll(".lame");
const lameBrillanteRound = document.querySelector('.lamebrillanteround');
const lameBrillanteTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--lamebrillante');
const lameBrosseeRound = document.querySelector('.lamebrosseeround');
const lameBrosseeTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--lamebrossee');
const lameNoireRound = document.querySelector('.lamenoireround');
const lameNoireTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--lamenoire');
// Plaquettes
const formeCentraleRound = document.querySelector('.formecentraleround');
const formeCentraleTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--formecentrale');
const formeAjoureeRound = document.querySelector('.formeajoureeround');
const formeAjoureeTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--formeajouree');
const formePleineRound = document.querySelector('.formepleineround');
const formePleineTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--formepleine');
const formeBlankRound = document.querySelector('.formeblankround');
const formeBlankTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--formeblank');
// Matieres
const plaquetteBoisRound = document.querySelector('.plaquetteboisround');
const plaquetteBoisTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--bois');
const plaquetteCarboneRound = document.querySelector('.plaquettecarboneround');
const plaquetteCarboneTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--carbone');
const plaquetteResineRound = document.querySelector('.plaquetteresineround');
const plaquetteResineTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--resine');
const plaquetteAcierRound = document.querySelector('.plaquetteacierround');
const plaquetteAcierTitle = document.querySelector('.main__fabriquer__selection__section__raw__title--acier');
const sousMenu = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu');
const sousMenuListBois = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listbois');
const sousMenuBois = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu--bois');
const sousMenuListBoisClair = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listbois--clair');
const sousMenuListBoisFonce = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listbois--fonce');
const sousMenuListResine = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listresine');
const sousMenuResine = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu--resine');
const sousMenuListG10Noir = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listresine--g10noir');
const sousMenuListG10Kaki = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listresine--g10kaki');
const menuAcier = document.querySelector('.main__fabriquer__selection__section__raw__acier');
const sousMenuListAcier = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listacier');
const sousMenuAcier = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu--acier');
const sousMenuListAcierBrillant = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listacier--brillant');
const sousMenuListAcierDore = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listacier--dore');
const sousMenuListAcierRose = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listacier--rose');
const sousMenuListAcierBleu = document.querySelector('.main__fabriquer__selection__section__raw__sousmenu__listacier--bleu');
const gravureLoupTitle = document.querySelector('.main__fabriquer__gravure__section__container__raw__title--loupgravure');
// Menu Switch
const faceAvantBtn = document.querySelector('#frontBtn');
const faceArriereBtn = document.querySelector('#backBtn');
const gravureBlankAvant = document.querySelector('.main__fabriquer__gravure__section--blank');
const gravureBlankArriere = document.querySelector('.main__fabriquer__gravure__section--blankfacearriere');
const gravureLameAvantSection = document.querySelector('.main__fabriquer__gravure__section--gravureslame');
const gravureLameAvantTitre = document.querySelector('.main__fabriquer__gravure__titles__titregravurelameavant');
const gravureLameArriereSection = document.querySelector('.main__fabriquer__gravure__section--gravureslamearriere');
const gravureLameArriereTitre = document.querySelector('.main__fabriquer__gravure__titles__titregravurelamearriere');
const gravureMancheAvantSection = document.querySelector('.main__fabriquer__gravure__section--gravuresplaquette');
const gravureMancheArriereSection = document.querySelector('.main__fabriquer__gravure__section--gravuresmanchearriere');
const textLameArriere = document.querySelector(".main__fabriquer__couteau__arriere__text");
const couteauFace = document.querySelector('.main__fabriquer__couteau');
const couteauArriere = document.querySelector('.main__fabriquer__couteau__arriere');
// Gravures
const inputTextGravure = document.querySelector(".main__fabriquer__couteau__arriere__text");
const gravureLoupRound = document.querySelector('.loup__rounded');
const gravureTracteurTitle = document.querySelector('.main__fabriquer__gravure__section__container__raw__title--tracteurgravure');
const gravureTracteurRound = document.querySelector('.tracteur__rounded');
const gravureMontagnesTitle = document.querySelector('.main__fabriquer__gravure__section__container__raw__title--montagnesgravure');
const gravureMontagnesRound = document.querySelector('.montagnes__rounded');
const textVerdanaRound = document.querySelector('.verdana__rounded');
const textVerdanaTitle = document.querySelector('.main__fabriquer__gravure__section__container__raw__title--verdana');
const textTimesNewRomanRound = document.querySelector('.timesnewroman__rounded');
const textTimesNewRomanTitle = document.querySelector('.main__fabriquer__gravure__section__container__raw__title--timesnewroman');
const textSegoeRound = document.querySelector('.segoe__rounded');
const textSegoeTitle = document.querySelector('.main__fabriquer__gravure__section__container__raw__title--segoe');
// Panier
const addToCart = document.querySelector('#addToCart');
// Images Couteau
const lameImage = document.querySelector('.main__fabriquer__couteau__lame');
const lameImageArriere = document.querySelector('.main__fabriquer__couteau__lame--arriere');
const mancheImage = document.querySelector('.main__fabriquer__couteau__manche');
const matiereImage = document.querySelector('.main__fabriquer__couteau__plaquette');
const matiereImageArriere = document.querySelector('.main__fabriquer__couteau__plaquette--arriere');
const visImage = document.querySelector('.main__fabriquer__couteau__vis');
const visImageArriere = document.querySelector('.main__fabriquer__couteau__vis--arriere');
const gravureImage = document.querySelector('.main__fabriquer__couteau__gravure');
// SELECTEURS LIEN IMAGE
//PATH IMG
const pathImgProduits = "/img/produits/fabriquer/";
const laserClair = "KN";
const laserFonce = "KB";
const formatPng = ".png";
const gravureSans ="GBLANK01"
//BLANK
const lameBlank = pathImgProduits + 'LAMEBLANK.png';
const mancheBlank = pathImgProduits + 'MANCHEBLANK.png';
const matiereBlank = pathImgProduits + 'MATIEREBLANK.png';
const gravureBlankPath = pathImgProduits + gravureSans + laserFonce + formatPng;
const visBlank = pathImgProduits + 'VISBLANK.png';
//LAMES
const lameFinitionBrillante = pathImgProduits + 'KB.png';
const lameFinitionBrillanteArriere = pathImgProduits + 'KBA.png';
const lameFinitionTitaneGris = pathImgProduits + 'KG.png';
const lameFinitionTitaneGrisArriere = pathImgProduits + 'KGA.png';
const lameFinitionTitaneNoir = pathImgProduits + 'KN.png';
const lameFinitionTitaneNoirArriere = pathImgProduits + 'KNA.png';
//VIS
const visClair = pathImgProduits + 'VC.png';
const visClairArriere = pathImgProduits + 'VCA.png';
const visFonce = pathImgProduits + 'VF.png';
const visFonceArriere = pathImgProduits + 'VFA.png';
//MANCHES
const manchePlaquetteCentrale = pathImgProduits + 'PC.png';
const manchePlaquetteAjouree = pathImgProduits + 'PA.png';
const manchePlaquettePleine = pathImgProduits + 'PP.png';
//PLAQUETTES CENTRALES
const plaquetteCentraleBoisClair = pathImgProduits + 'PCB01.png';
const plaquetteCentraleBoisClairArriere = pathImgProduits + 'PCB01A.png';
const plaquetteCentraleBoisFonce = pathImgProduits + 'PCB02.png';
const plaquetteCentraleBoisFonceArriere = pathImgProduits + 'PCB02A.png';
const plaquetteCentraleCarbone = pathImgProduits + 'PCC01.png';
const plaquetteCentraleCarboneArriere = pathImgProduits + 'PCC01A.png';
const plaquetteCentraleResineG10Noir = pathImgProduits + 'PCR01.png';
const plaquetteCentraleResineG10NoirArriere = pathImgProduits + 'PCR01A.png';
const plaquetteCentraleResineG10Kaki = pathImgProduits + 'PCR02.png';
const plaquetteCentraleResineG10KakiArriere = pathImgProduits + 'PCR02A.png';
const plaquetteCentraleAcierBrillant = pathImgProduits + 'PCM01.png';
const plaquetteCentraleAcierBrillantArriere = pathImgProduits + 'PCM01A.png';
const plaquetteCentraleAcierDore = pathImgProduits + 'PCM02.png';
const plaquetteCentraleAcierDoreArriere = pathImgProduits + 'PCM02A.png';
const plaquetteCentraleAcierRose = pathImgProduits + 'PCM03.png';
const plaquetteCentraleAcierRoseArriere = pathImgProduits + 'PCM03A.png';
const plaquetteCentraleAcierBleu = pathImgProduits + 'PCM04.png';
const plaquetteCentraleAcierBleuArriere = pathImgProduits + 'PCM04A.png';
//PLAQUETTES AJOUREES
const plaquetteAjoureeBoisClair = pathImgProduits + 'PAB01.png';
const plaquetteAjoureeBoisClairArriere = pathImgProduits + 'PAB01A.png';
const plaquetteAjoureeBoisFonce = pathImgProduits + 'PAB02.png';
const plaquetteAjoureeBoisFonceArriere = pathImgProduits + 'PAB02A.png';
const plaquetteAjoureeCarbone = pathImgProduits + 'PAC01.png';
const plaquetteAjoureeCarboneArriere = pathImgProduits + 'PAC01A.png';
const plaquetteAjoureeResineG10Noir = pathImgProduits + 'PAR01.png';
const plaquetteAjoureeResineG10NoirArriere = pathImgProduits + 'PAR01A.png';
const plaquetteAjoureeResineG10Kaki = pathImgProduits + 'PAR02.png';
const plaquetteAjoureeResineG10KakiArriere = pathImgProduits + 'PAR02A.png';
const plaquetteAjoureeAcierBrillant = pathImgProduits + 'PAM01.png';
const plaquetteAjoureeAcierBrillantArriere = pathImgProduits + 'PAM01A.png';
const plaquetteAjoureeAcierDore = pathImgProduits + 'PAM02.png';
const plaquetteAjoureeAcierDoreArriere = pathImgProduits + 'PAM02A.png';
const plaquetteAjoureeAcierRose = pathImgProduits + 'PAM03.png';
const plaquetteAjoureeAcierRoseArriere = pathImgProduits + 'PAM03A.png';
const plaquetteAjoureeBleu = pathImgProduits + 'PAM04.png';
const plaquetteAjoureeBleuArriere = pathImgProduits + 'PAM04A.png';
//PLAQUETTES PLEINES
const plaquettePleineBoisClair = pathImgProduits + 'PPB01.png';
const plaquettePleineBoisClairArriere = pathImgProduits + 'PPB01A.png';
const plaquettePleineBoisFonce = pathImgProduits + 'PPB02.png';
const plaquettePleineBoisFonceArriere = pathImgProduits + 'PPB02A.png';
const plaquettePleineCarbone = pathImgProduits + 'PPC01.png'
const plaquettePleineCarboneArriere = pathImgProduits + 'PPC01A.png'
const plaquettePleineResineG10Noir = pathImgProduits + 'PPR01.png';
const plaquettePleineResineG10NoirArriere = pathImgProduits + 'PPR01A.png';
const plaquettePleineResineG10Kaki = pathImgProduits + 'PPR02.png';
const plaquettePleineResineG10KakiArriere = pathImgProduits + 'PPR02A.png';
const plaquettePleineAcierBrillant = pathImgProduits + 'PPM01.png';
const plaquettePleineAcierBrillantArriere = pathImgProduits + 'PPM01A.png';
const plaquettePleineAcierDore = pathImgProduits + 'PPM02.png';
const plaquettePleineAcierDoreArriere = pathImgProduits + 'PPM02A.png';
const plaquettePleineAcierRose = pathImgProduits + 'PPM03.png';
const plaquettePleineAcierRoseArriere = pathImgProduits + 'PPM03A.png';
const plaquettePleineBleu = pathImgProduits + 'PPM04.png';
const plaquettePleineBleuArriere = pathImgProduits + 'PPM04A.png';
//GRAVURES
const gravureLoup = "LOUPG01";
const gravureTracteur = "TRACTEURG01";
const gravureMontagnes = "MONTAGNESG01";
const gravureLoupLF = pathImgProduits + gravureLoup + laserFonce + formatPng;
const gravureLoupLC = pathImgProduits + gravureLoup + laserClair + formatPng;
const gravureTracteurLF = pathImgProduits + gravureTracteur + laserFonce + formatPng;
const gravureTracteurLC = pathImgProduits + gravureTracteur + laserClair + formatPng;
const gravureMontagnesLF = pathImgProduits + gravureMontagnes + laserFonce + formatPng;
const gravureMontagnesLC = pathImgProduits + gravureMontagnes + laserClair + formatPng;

////////////////////////////////////////
//              ECOUTEURS             //
////////////////////////////////////////

//LAMES
lameBrillanteTitle.addEventListener("click", () =>{
    clickLameBrillanteMenu();
});
lameBrosseeTitle.addEventListener("click", () =>{
    clickLameTitaneGrisMenu();
});
lameNoireTitle.addEventListener("click", () =>{
    clickLameTitaneNoirMenu();
});
//PLAQUETTES INTERCHANGEABLES
formeCentraleTitle.addEventListener("click", () =>{
    clickFormeCentraleMenu();
});
formeAjoureeTitle.addEventListener("click", () =>{
    clickFormeAjoureeMenu();
});
formePleineTitle.addEventListener("click", () =>{
    clickFormePleineMenu();
});
formeBlankTitle.addEventListener("click", () =>{
    clickFormeBlankMenu();
});
//MATIERES
plaquetteBoisTitle.addEventListener("click", () =>{
    clickBoisMenu();
});
sousMenuListBoisClair.addEventListener("click", () =>{
    clickBoisClairMenu();
});
sousMenuListBoisFonce.addEventListener("click", () =>{
    clickBoisFonceMenu();
});
plaquetteCarboneTitle.addEventListener("click", () =>{
    clickCarboneMenu();
});
plaquetteResineTitle.addEventListener("click", () =>{
    clickResineMenu();
});
sousMenuListG10Noir.addEventListener("click", () =>{
    clickResineG10NoirMenu();
});
sousMenuListG10Kaki.addEventListener("click", () =>{
    clickResineG10KakiMenu();
});
plaquetteAcierTitle.addEventListener("click", () =>{
    clickAcierMenu();
});
sousMenuListAcierBrillant.addEventListener("click", () =>{
    clickAcierBrillantMenu();
});
sousMenuListAcierDore.addEventListener("click", () =>{
    clickAcierDoreMenu();
});
sousMenuListAcierRose.addEventListener("click", () =>{
    clickAcierRoseMenu();
});
sousMenuListAcierBleu.addEventListener("click", () =>{
    clickAcierBleuMenu();
});
//GRAVURES LOUP
gravureLoupTitle.addEventListener("click", () =>{
    clickGravureLoupMenu();
});
//GRAVURES TRACTEUR
gravureTracteurTitle.addEventListener("click", () =>{
    clickGravureTracteurMenu();
});
//GRAVURES MONTAGNES
gravureMontagnesTitle.addEventListener("click", () =>{
    clickGravureMontagnesMenu();
});
// TEXT VERDANA
textVerdanaTitle.addEventListener("click", () =>{
    clickTextVerdanaMenu();
});
// TEXT TIMES NEW ROMAN
textTimesNewRomanTitle.addEventListener("click", () =>{
    clickTextTimesNewRomanMenu();
});
// TEXT SEGOE
textSegoeTitle.addEventListener("click", () =>{
    clickTextSegoeMenu();
});
//CLICK BTN FACE AVANT
faceAvantBtn.addEventListener("click", () =>{
    clickFaceAvant();
});
//CLICK BTN FACE ARRIERE
faceArriereBtn.addEventListener("click", () =>{
    clickFaceArriere();
});
//CLICK BTN PANIER
addToCart.addEventListener("click", () =>{
    console.log(couteauPersonnalise.afficheNomCouteau());
    console.log(couteauPersonnalise.gravure.afficheNomGravure());
    console.log(texteInputGravureLameVerso);
    console.log(typeOfFont);
});

////////////////////////////////////////
//              CLASSES               //
////////////////////////////////////////

class gravure {
    constructor(cheminGravure, nom, laser, formatImg){
        this.cheminGravure = cheminGravure;
        this.nom = nom;
        this.laser = laser;
        this.formatImg = formatImg;
    }
    afficheNomGravure(){
        return this.nom
    }
}
class piece {
    constructor(nom, type, chemin) {
        this.nom = nom;
        this.type = type;
        this.chemin = chemin;
    }
}
class couteau {
    constructor(lame, manche, matiere, gravure, vis, lameArriere, matiereArriere) {
        this.lame = lame;
        this.manche = manche;
        this.matiere = matiere;
        this.gravure = gravure;
        this.vis = vis;
        this.lameArriere = lameArriere;
        this.matiereArriere = matiereArriere;
    }
    afficheNomCouteau(){
        return this.lame.nom + " | " + this.manche.nom + " | " + this.matiere.nom 
    }
}

////////////////////////////////////////
//              OBJETS               //
///////////////////////////////////////

//NEW PIECE
let pieceLameBrillante = new piece('KB','SQUELETTE', lameFinitionBrillante);
let pieceLameBrillanteArriere = new piece('KB','SQUELETTE', lameFinitionBrillanteArriere);
let pieceLameTitaneGris = new piece('KG','SQUELETTE', lameFinitionTitaneGris);
let pieceLameTitaneNoir = new piece('KN','SQUELETTE', lameFinitionTitaneNoir);

let piecePlaquetteCentrale = new piece('PC','Plaquette Centrale', manchePlaquetteCentrale);
let piecePlaquetteAjouree = new piece('PA','Plaquette Ajourée', manchePlaquetteAjouree);
let piecePlaquettePleine = new piece('PP','Plaquette Pleine', manchePlaquettePleine);

let pieceMatiereBoisClairPC = new piece('B01','PCM', plaquetteCentraleBoisClair);
let pieceMatiereBoisFoncePC = new piece('B02','PCM', plaquetteCentraleBoisFonce);
let pieceMatiereCarbonePC = new piece('C01','PCM', plaquetteCentraleCarbone);
let pieceMatiereG10NoirPC = new piece('R01','PCM', plaquetteCentraleResineG10Noir);
let pieceMatiereG10KakiPC = new piece('R02','PCM', plaquetteCentraleResineG10Kaki);
let pieceMatiereAcierBrillantPC = new piece('M01','PCM', plaquetteCentraleAcierBrillant);
let pieceMatiereAcierDorePC = new piece('M02','PCM', plaquetteCentraleAcierDore);
let pieceMatiereAcierRosePC = new piece('M03','PCM', plaquetteCentraleAcierRose);
let pieceMatiereAcierBleuPC = new piece('M04','PCM', plaquetteCentraleAcierBleu);

let pieceMatiereBoisClairPA = new piece('B01','PAM', plaquetteAjoureeBoisClair);
let pieceMatiereBoisFoncePA = new piece('B02','PAM', plaquetteAjoureeBoisFonce);
let pieceMatiereCarbonePA = new piece('C01','PAM', plaquetteAjoureeCarbone);
let pieceMatiereG10NoirPA = new piece('R01','PAM', plaquetteAjoureeResineG10Noir);
let pieceMatiereG10KakiPA = new piece('R02','PAM', plaquetteAjoureeResineG10Kaki);

let pieceMatiereBoisClairPP = new piece('B01','PPM', plaquettePleineBoisClair);
let pieceMatiereBoisFoncePP = new piece('B02','PPM', plaquettePleineBoisFonce);
let pieceMatiereCarbonePP = new piece('C01','PPM', plaquettePleineCarbone);
let pieceMatiereG10NoirPP = new piece('R01','PPM', plaquettePleineResineG10Noir);
let pieceMatiereG10KakiPP = new piece('R02','PPM', plaquettePleineResineG10Kaki);

let pieceVisClair = new piece('VC','VIS', visClair);
let pieceVisFonce = new piece('VF','VIS', visFonce);

let pieceLameBlank = new piece ('LAMEBLANK', '', lameBlank);
let pieceMancheBlank = new piece ('MANCHEBLANK', '', mancheBlank);
let pieceMatiereBlank = new piece ('MATIEREBLANK', '', matiereBlank);
let gravureBlank = new gravure (pathImgProduits, gravureSans, laserFonce, formatPng);
let pieceVisBlank = new piece ('VISBLANK', '', visBlank);

// NEW GRAVURE
let gravureLoupG01 = new gravure(pathImgProduits, gravureLoup, laserFonce, formatPng);
let gravureTracteurG01 = new gravure(pathImgProduits, gravureTracteur, laserFonce, formatPng);
let gravureMontagnesG01 = new gravure(pathImgProduits, gravureMontagnes, laserFonce, formatPng);

//NEW COUTEAU
let couteauPersonnalise = new couteau(pieceLameBrillante, pieceMancheBlank, pieceMatiereBlank, gravureBlank, pieceVisClair);

//CHANGEMENT DU COUTEAU
function afficheCouteau(event){
    lameImage.src = couteauPersonnalise.lame.chemin;
    mancheImage.src = couteauPersonnalise.manche.chemin;
    matiereImage.src = couteauPersonnalise.matiere.chemin;
    gravureImage.src = couteauPersonnalise.gravure.cheminGravure + couteauPersonnalise.gravure.nom + couteauPersonnalise.gravure.laser + couteauPersonnalise.gravure.formatImg;
    visImage.src = couteauPersonnalise.vis.chemin;
}

////////////////////////////////////////
//              TABLEAU               //
////////////////////////////////////////

let Squelettes = [];

let Plaquettes = [];

let Matieres = [];

let Vis = [];

////////////////////////////////////////
//             FONCTIONS              //
////////////////////////////////////////

function selectGravureLaserClair(e){
    couteauPersonnalise.gravure.laser = laserClair;
}

function selectGravureLaserFonce(e){
    couteauPersonnalise.gravure.laser = laserFonce;
}

function selectPlaquetteCentrale(e) {
    formeCentraleRound.style.backgroundColor = 'white';
    formeAjoureeRound.style.backgroundColor = 'transparent';
    formePleineRound.style.backgroundColor = 'transparent';
    formeBlankRound.style.backgroundColor = 'transparent';
    formeCentraleTitle.style.opacity = '1';
    formeAjoureeTitle.style.opacity = '0.5';
    formePleineTitle.style.opacity = '0.5';
    formeBlankTitle.style.opacity = '0.5';
}

function selectPlaquetteAjouree(e) {
    formeCentraleRound.style.backgroundColor = 'transparent';
    formeAjoureeRound.style.backgroundColor = 'white';
    formePleineRound.style.backgroundColor = 'transparent';
    formeBlankRound.style.backgroundColor = 'transparent';
    formeCentraleTitle.style.opacity = '0.5';
    formeAjoureeTitle.style.opacity = '1';
    formePleineTitle.style.opacity = '0.5';
    formeBlankTitle.style.opacity = '0.5';
}

function selectPlaquettePleine(e) {
    formeCentraleRound.style.backgroundColor = 'transparent';
    formeAjoureeRound.style.backgroundColor = 'transparent';
    formePleineRound.style.backgroundColor = 'white';
    formeBlankRound.style.backgroundColor = 'transparent';
    formeCentraleTitle.style.opacity = '0.5';
    formeAjoureeTitle.style.opacity = '0.5';
    formePleineTitle.style.opacity = '1';
    formeBlankTitle.style.opacity = '0.5';
}

function selectPlaquetteBlank(e) {
    formeCentraleRound.style.backgroundColor = 'transparent';
    formeAjoureeRound.style.backgroundColor = 'transparent';
    formePleineRound.style.backgroundColor = 'transparent';
    formeBlankRound.style.backgroundColor = 'white';
    formeCentraleTitle.style.opacity = '0.5';
    formeAjoureeTitle.style.opacity = '0.5';
    formePleineTitle.style.opacity = '0.5';
    formeBlankTitle.style.opacity = '1';
    plaquetteBoisRound.style.backgroundColor = 'transparent';
    plaquetteCarboneRound.style.backgroundColor = 'transparent';
    plaquetteResineRound.style.backgroundColor = 'transparent';
    plaquetteAcierRound.style.backgroundColor = 'transparent';
    sousMenuBois.style.display = 'none';
    sousMenuResine.style.display = 'none';
    sousMenuAcier.style.display = 'none';
    sousMenuListResine.style.top = "0px";
    sousMenuListAcier.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '0.5';
    plaquetteCarboneTitle.style.opacity = '0.5';
    plaquetteResineTitle.style.opacity = '0.5';
    menuAcier.style.display = "none";
    plaquetteAcierTitle.style.opacity = '0.5';
    sousMenuListBoisClair.style.opacity = '0.5';
    sousMenuListBoisFonce.style.opacity = '0.5';
    sousMenuListBois.style.top = "0px";
}

function selectFaceAvant (e) {
    faceAvantBtn.style.backgroundColor = "#3e5153";
    faceArriereBtn.style.backgroundColor = "transparent";
}

function selectFaceArriere (e) {
    faceAvantBtn.style.backgroundColor = "transparent";
    faceArriereBtn.style.backgroundColor = "#3e5153";
}

// FONCTIONS CLICK
//LAME BRILLANTE
function clickLameBrillanteMenu(e){
    selectGravureLaserFonce();
    lameBrillanteRound.style.backgroundColor = 'white';
    lameBrosseeRound.style.backgroundColor = 'transparent';
    lameNoireRound.style.backgroundColor = 'transparent';
    lameBrillanteTitle.style.opacity = '1';
    lameBrosseeTitle.style.opacity = '0.5';
    lameNoireTitle.style.opacity = '0.5';
    inputTextGravure.style.color = "#1A1A1A";
    inputTextGravure.classList.add('inputlaserfonce');
    inputTextGravure.classList.remove('inputlaserclair');
    couteauPersonnalise.lame = pieceLameBrillante;
    lameImageArriere.src = lameFinitionBrillanteArriere;
    visImageArriere.src = visClairArriere;
    couteauPersonnalise.vis = pieceVisClair;
    afficheCouteau();
    console.log('JE CLIQUE SUR FINITION BRILLANTE');
};
//LAME TITANE GRIS
function clickLameTitaneGrisMenu(e){
    selectGravureLaserFonce();
    lameBrillanteRound.style.backgroundColor = 'transparent';
    lameBrosseeRound.style.backgroundColor = 'white';
    lameNoireRound.style.backgroundColor = 'transparent';
    lameBrillanteTitle.style.opacity = '0.5';
    lameBrosseeTitle.style.opacity = '1';
    lameNoireTitle.style.opacity = '0.5';
    inputTextGravure.style.color = "#1A1A1A";
    inputTextGravure.classList.add('inputlaserfonce');
    inputTextGravure.classList.remove('inputlaserclair');
    couteauPersonnalise.lame = pieceLameTitaneGris;
    couteauPersonnalise.vis = pieceVisClair;
    lameImageArriere.src = lameFinitionTitaneGrisArriere;
    visImageArriere.src = visClairArriere;
    afficheCouteau();
};
//LAME TITANE NOIR
function clickLameTitaneNoirMenu(e){
    selectGravureLaserClair();
    lameBrillanteRound.style.backgroundColor = 'transparent';
    lameBrosseeRound.style.backgroundColor = 'transparent';
    lameNoireRound.style.backgroundColor = 'white';
    lameBrillanteTitle.style.opacity = '0.5';
    lameBrosseeTitle.style.opacity = '0.5';
    lameNoireTitle.style.opacity = '1';
    inputTextGravure.style.color = "#dbdbdb";
    inputTextGravure.classList.add('inputlaserclair');
    inputTextGravure.classList.remove('inputlaserfonce');
    couteauPersonnalise.lame = pieceLameTitaneNoir;
    couteauPersonnalise.vis = pieceVisFonce;
    lameImageArriere.src = lameFinitionTitaneNoirArriere;
    visImageArriere.src = visFonceArriere;
    afficheCouteau();
    console.log('JE CLIQUE SUR FINITION NOIR');
};
//PLAQUETTE CENTRALE
function clickFormeCentraleMenu(e){
    selectPlaquetteCentrale();
    menuAcier.style.display = "flex";
    couteauPersonnalise.manche = piecePlaquetteCentrale;
    console.log('JE CLIQUE SUR PLAQUETTE CENTRALE');
    if (couteauPersonnalise.matiere === pieceMatiereBlank){
        clickBoisMenu();
        console.log('Je clique sur le menu bois si pieceMatiereBlank');
        } else if (couteauPersonnalise.matiere.nom === "B01") {
            clickBoisMenu();
            console.log('Je clique sur le menu bois clair si une matiere bois clair à été selectionné');
        } else if (couteauPersonnalise.matiere.nom === "B02") {
        clickBoisFonceMenu();
            console.log('Je clique sur le menu bois foncé si une matiere bois foncé à été selectionné');
        } else if (couteauPersonnalise.matiere.nom === "C01") {
            console.log('Je clique sur le menu carbone si une matiere carbone à été selectionné');
        clickCarboneMenu();
        } else if (couteauPersonnalise.matiere.nom === "R01") {
            console.log('Je clique sur le menu G10 Noir si une matiere G10 Noir à été selectionné');
        clickResineG10NoirMenu();
        }   else if (couteauPersonnalise.matiere.nom === "R02") {
            console.log('Je clique sur le menu G10 Kaki si une matiere G10 Kaki à été selectionné');
        clickResineG10KakiMenu();
        }   else { (couteauPersonnalise.matiere.nom === "M02" || "M02" || "M03" | "M04") 
            console.log("Je clique sur le forme ajourée et j'affiche le menu bois");
        clickBoisMenu();
        }
    };
//PLAQUETTE AJOUREE
function clickFormeAjoureeMenu(e){
    selectPlaquetteAjouree();
    menuAcier.style.display = "none";
    couteauPersonnalise.manche = piecePlaquetteAjouree;
    console.log('JE CLIQUE SUR PLAQUETTE AJOUREE');
    if (couteauPersonnalise.matiere === pieceMatiereBlank){
        clickBoisMenu();
        console.log('Je clique sur le menu bois si pieceMatiereBlank');
        } else if (couteauPersonnalise.matiere.nom === "B01") {
            clickBoisClairMenu();
            console.log('Je clique sur le menu bois clair si une matiere bois clair à été selectionné');
        } else if (couteauPersonnalise.matiere.nom === "B02") {
        clickBoisFonceMenu();
            console.log('Je clique sur le menu bois foncé si une matiere bois foncé à été selectionné');
        } else if (couteauPersonnalise.matiere.nom === "C01") {
            console.log('Je clique sur le menu carbone si une matiere carbone à été selectionné');
        clickCarboneMenu();
        } else if (couteauPersonnalise.matiere.nom === "R01") {
            console.log('Je clique sur le menu G10 Noir si une matiere G10 Noir à été selectionné');
        clickResineG10NoirMenu();
        }   else if (couteauPersonnalise.matiere.nom === "R02") {
            console.log('Je clique sur le menu G10 Kaki si une matiere G10 Kaki à été selectionné');
        clickResineG10KakiMenu();
        }   else {(couteauPersonnalise.matiere.nom === "M02" || "M02" || "M03" | "M04") 
            console.log("Je clique sur le forme ajourée et j'affiche le menu bois");
        clickBoisMenu();
        }
    };
//PLAQUETTE PLEINE
function clickFormePleineMenu(e){
    selectPlaquettePleine();
    menuAcier.style.display = "none";
    couteauPersonnalise.manche = piecePlaquettePleine;
    console.log('JE CLIQUE SUR PLAQUETTE AJOUREE');
    if (couteauPersonnalise.matiere === pieceMatiereBlank){
        clickBoisMenu();
        console.log('Je clique sur le menu bois si pieceMatiereBlank');
        } else if (couteauPersonnalise.matiere.nom === "B01") {
            clickBoisClairMenu();
            console.log("Je clique sur le forme pleine et j'affiche le menu bois clair");
        } else if (couteauPersonnalise.matiere.nom === "B02") {
        clickBoisFonceMenu();
            console.log("Je clique sur le forme pleine et j'affiche le menu bois fonce");
        } else if (couteauPersonnalise.matiere.nom === "C01") {
            console.log("Je clique sur le forme pleine et j'affiche le menu carbone");
        clickCarboneMenu();
        } else if (couteauPersonnalise.matiere.nom === "R01") {
            console.log("Je clique sur le forme pleine et j'affiche le menu G10 noir");
        clickResineG10NoirMenu();
        }   else if (couteauPersonnalise.matiere.nom === "R02") {
            console.log("Je clique sur le forme pleine et j'affiche le menu G10 kaki");
        clickResineG10KakiMenu();
        }   else {(couteauPersonnalise.matiere.nom === "M02" || "M02" || "M03" | "M04") 
            console.log("Je clique sur le forme pleine et j'affiche le menu bois");
        clickBoisMenu();
        }
    };
//SANS PLAQUETTE
function clickFormeBlankMenu(e){
    selectPlaquetteBlank();
    couteauPersonnalise.manche = pieceMancheBlank;
    console.log('JE CLIQUE SUR PLAQUETTE BLANK');
    couteauPersonnalise.matiere = pieceMatiereBlank;
    matiereImageArriere.src = matiereBlank;
    afficheCouteau();
    };
//BOIS
function clickBoisMenu(e){
    plaquetteBoisRound.style.backgroundColor = 'white';
    plaquetteCarboneRound.style.backgroundColor = 'transparent';
    plaquetteResineRound.style.backgroundColor = 'transparent';
    plaquetteAcierRound.style.backgroundColor = 'transparent';
    sousMenuBois.style.display = 'block';
    sousMenuResine.style.display = 'none';
    sousMenuAcier.style.display = 'none';
    sousMenuListResine.style.top = "0px";
    sousMenuListAcier.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '1';
    plaquetteCarboneTitle.style.opacity = '0.5';
    plaquetteResineTitle.style.opacity = '0.5';
    plaquetteAcierTitle.style.opacity = '0.5';
    sousMenuListBoisClair.style.opacity = '1';
    sousMenuListBoisFonce.style.opacity = '0.5';
    sousMenuListBois.style.top = "0px";
    if (couteauPersonnalise.manche == piecePlaquetteCentrale){
        couteauPersonnalise.matiere = pieceMatiereBoisClairPC;
        matiereImageArriere.src = plaquetteCentraleBoisClairArriere;
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree){
            couteauPersonnalise.matiere = pieceMatiereBoisClairPA;
            matiereImageArriere.src = plaquetteAjoureeBoisClairArriere;
        } else if (couteauPersonnalise.manche == piecePlaquettePleine){
            couteauPersonnalise.matiere = pieceMatiereBoisClairPP;
            matiereImageArriere.src = plaquettePleineBoisClairArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereBoisClairPC;
            couteauPersonnalise.manche = piecePlaquetteCentrale;
            matiereImageArriere.src = plaquetteCentraleBoisClairArriere;
            selectPlaquetteCentrale();
        }
    afficheCouteau();
    console.log('JE CLIQUE SUR LE MENU BOIS');
};
//BOIS CLAIR
function clickBoisClairMenu(e){
    sousMenuListBois.style.top = "0px";
    sousMenuListBoisClair.style.opacity = '1';
    sousMenuListBoisFonce.style.opacity = '0.5';
    if (couteauPersonnalise.manche === piecePlaquetteCentrale){
        couteauPersonnalise.matiere = pieceMatiereBoisClairPC;
        matiereImageArriere.src = plaquetteCentraleBoisClairArriere;
        } else if (couteauPersonnalise.manche === piecePlaquetteAjouree){
            couteauPersonnalise.matiere = pieceMatiereBoisClairPA;
            matiereImageArriere.src = plaquetteAjoureeBoisClairArriere;
        } else if (couteauPersonnalise.manche === piecePlaquettePleine){
            couteauPersonnalise.matiere = pieceMatiereBoisClairPP;
            matiereImageArriere.src = plaquettePleineBoisClairArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereBoisClairPC;
            matiereImageArriere.src = plaquetteCentraleBoisClairArriere;
        }
            afficheCouteau();
            console.log('JE CLIQUE SUR LE MENU BOIS CLAIR'); 
};

//BOIS FONCE
function clickBoisFonceMenu(e){
    sousMenuListBois.style.top = "-28px";
    sousMenuListBoisClair.style.opacity = '0.5';
    sousMenuListBoisFonce.style.opacity = '1';
    if (couteauPersonnalise.manche == piecePlaquetteCentrale) {
        couteauPersonnalise.matiere = pieceMatiereBoisFoncePC;
        matiereImageArriere.src = plaquetteCentraleBoisFonceArriere;
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree) {
            couteauPersonnalise.matiere = pieceMatiereBoisFoncePA;
            matiereImageArriere.src = plaquetteAjoureeBoisFonceArriere;
        } else if (couteauPersonnalise.manche == piecePlaquettePleine) {
            couteauPersonnalise.matiere = pieceMatiereBoisFoncePP;
            matiereImageArriere.src = plaquettePleineBoisFonceArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereBoisClairPC;
        }
        afficheCouteau();
        console.log('JE CLIQUE SUR LE MENU BOIS FONCE');
};
//CARBONE
function clickCarboneMenu(e){
    plaquetteBoisRound.style.backgroundColor = 'transparent';
    plaquetteCarboneRound.style.backgroundColor = 'white';
    plaquetteResineRound.style.backgroundColor = 'transparent';
    plaquetteAcierRound.style.backgroundColor = 'transparent';
    sousMenuBois.style.display = 'none';
    sousMenuResine.style.display = 'none';
    sousMenuAcier.style.display = 'none';
    sousMenuListBois.style.top = "0px";
    sousMenuListResine.style.top = "0px";
    sousMenuListAcier.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '0.5';
    plaquetteCarboneTitle.style.opacity = '1';
    plaquetteResineTitle.style.opacity = '0.5';
    plaquetteAcierTitle.style.opacity = '0.5';
    if (couteauPersonnalise.manche == piecePlaquetteCentrale) {
        couteauPersonnalise.matiere = pieceMatiereCarbonePC;
        matiereImageArriere.src = plaquetteCentraleCarboneArriere;
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree) {
            couteauPersonnalise.matiere = pieceMatiereCarbonePA;
            matiereImageArriere.src = plaquetteAjoureeCarboneArriere;
        } else if (couteauPersonnalise.manche == piecePlaquettePleine) {
            couteauPersonnalise.matiere = pieceMatiereCarbonePP;
            matiereImageArriere.src = plaquettePleineCarboneArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereCarbonePC;
            matiereImageArriere.src = plaquetteCentraleCarboneArriere;
            selectPlaquetteCentrale();
        } 
        afficheCouteau();
        console.log('JE CLIQUE SUR LE MENU CARBONE');  
};
//RESINE
function clickResineMenu(e){
    plaquetteBoisRound.style.backgroundColor = 'transparent';
    plaquetteCarboneRound.style.backgroundColor = 'transparent';
    plaquetteResineRound.style.backgroundColor = 'white';
    plaquetteAcierRound.style.backgroundColor = 'transparent';
    sousMenuBois.style.display = 'none';
    sousMenuResine.style.display = 'block';
    sousMenuAcier.style.display = 'none';
    sousMenuListBois.style.top = "0px";
    sousMenuListAcier.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '0.5';
    plaquetteCarboneTitle.style.opacity = '0.5';
    plaquetteResineTitle.style.opacity = '1';
    plaquetteAcierTitle.style.opacity = '0.5';
    sousMenuListG10Noir.style.opacity = '1';
    sousMenuListG10Kaki.style.opacity = '0.5';
    sousMenuListResine.style.top = "0px";
    if (couteauPersonnalise.manche == piecePlaquetteCentrale){
        couteauPersonnalise.matiere = pieceMatiereG10NoirPC;
        matiereImageArriere.src = plaquetteCentraleResineG10NoirArriere;
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree){
            couteauPersonnalise.matiere = pieceMatiereG10NoirPA;
            matiereImageArriere.src = plaquetteAjoureeResineG10NoirArriere;
        } else if (couteauPersonnalise.manche == piecePlaquettePleine){
            couteauPersonnalise.matiere = pieceMatiereG10NoirPP;
            matiereImageArriere.src = plaquettePleineResineG10NoirArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereG10NoirPC;
            matiereImageArriere.src = plaquetteCentraleResineG10NoirArriere;
            selectPlaquetteCentrale();
        }
        afficheCouteau();
        console.log('JE CLIQUE SUR LE MENU RESINE');  
};
//RESINE G10 NOIR
function clickResineG10NoirMenu(e){
    sousMenuListResine.style.top = "0px";
    plaquetteBoisRound.style.backgroundColor = 'transparent';
    plaquetteCarboneRound.style.backgroundColor = 'transparent';
    plaquetteResineRound.style.backgroundColor = 'white';
    plaquetteAcierRound.style.backgroundColor = 'transparent';
    sousMenuBois.style.display = 'none';
    sousMenuResine.style.display = 'block';
    sousMenuAcier.style.display = 'none';
    sousMenuListBois.style.top = "0px";
    sousMenuListAcier.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '0.5';
    plaquetteCarboneTitle.style.opacity = '0.5';
    plaquetteResineTitle.style.opacity = '1';
    plaquetteAcierTitle.style.opacity = '0.5';
    sousMenuListG10Noir.style.opacity = '1';
    sousMenuListG10Kaki.style.opacity = '0.5';
    if (couteauPersonnalise.manche == piecePlaquetteCentrale){
        couteauPersonnalise.matiere = pieceMatiereG10NoirPC;
        matiereImageArriere.src = plaquetteCentraleResineG10NoirArriere;
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree){
            couteauPersonnalise.matiere = pieceMatiereG10NoirPA;
            matiereImageArriere.src = plaquetteAjoureeResineG10NoirArriere;
        } else if (couteauPersonnalise.manche == piecePlaquettePleine){
            couteauPersonnalise.matiere = pieceMatiereG10NoirPP;
            matiereImageArriere.src = plaquettePleineResineG10NoirArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereG10NoirPC;
        }
            afficheCouteau();
            console.log('JE CLIQUE SUR LE MENU RESINE G10 NOIR');  
};
//RESINE G10 KAKI
function clickResineG10KakiMenu(e){
    sousMenuListResine.style.top = "-28px";
    plaquetteBoisRound.style.backgroundColor = 'transparent';
    plaquetteCarboneRound.style.backgroundColor = 'transparent';
    plaquetteResineRound.style.backgroundColor = 'white';
    plaquetteAcierRound.style.backgroundColor = 'transparent';
    sousMenuBois.style.display = 'none';
    sousMenuResine.style.display = 'block';
    sousMenuAcier.style.display = 'none';
    sousMenuListBois.style.top = "0px";
    sousMenuListAcier.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '0.5';
    plaquetteCarboneTitle.style.opacity = '0.5';
    plaquetteResineTitle.style.opacity = '1';
    plaquetteAcierTitle.style.opacity = '0.5';
    sousMenuListG10Noir.style.opacity = '0.5';
    sousMenuListG10Kaki.style.opacity = '1';
    console.log('JE CLIQUE SUR LE MENU RESINE G10 KAKI'); 
    if (couteauPersonnalise.manche == piecePlaquetteCentrale) {
        couteauPersonnalise.matiere = pieceMatiereG10KakiPC;
        matiereImageArriere.src = plaquetteCentraleResineG10KakiArriere;
        console.log('Si plaque Centrale = Kaki PC');
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree) {
            couteauPersonnalise.matiere = pieceMatiereG10KakiPA;
            matiereImageArriere.src = plaquetteAjoureeResineG10KakiArriere;
            console.log('Si plaque Ajourée = Kaki PA');
        } else { (couteauPersonnalise.manche == piecePlaquettePleine) 
            couteauPersonnalise.matiere = pieceMatiereG10KakiPP;
            matiereImageArriere.src = plaquettePleineResineG10KakiArriere;
            console.log('Si plaque Pleine = Kaki PP');
        }
            afficheCouteau();
};
//ACIER
function clickAcierMenu(e){
    plaquetteBoisRound.style.backgroundColor = 'transparent';
    plaquetteCarboneRound.style.backgroundColor = 'transparent';
    plaquetteResineRound.style.backgroundColor = 'transparent';
    plaquetteAcierRound.style.backgroundColor = 'white';
    sousMenuBois.style.display = 'none';
    sousMenuResine.style.display = 'none';
    sousMenuAcier.style.display = 'block';
    sousMenuListBois.style.top = "0px";
    sousMenuListAcier.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '0.5';
    plaquetteCarboneTitle.style.opacity = '0.5';
    plaquetteResineTitle.style.opacity = '0.5';
    plaquetteAcierTitle.style.opacity = '1';
    sousMenuListAcierBrillant.style.opacity = '1';
    sousMenuListAcierDore.style.opacity = '0.5';
    sousMenuListAcierRose.style.opacity = '0.5';
    sousMenuListAcierBleu.style.opacity = '0.5';
    sousMenuListAcier.style.top = "0px";
    if (couteauPersonnalise.manche == piecePlaquetteCentrale){
        couteauPersonnalise.matiere = pieceMatiereAcierBrillantPC;
        matiereImageArriere.src = plaquetteCentraleAcierBrillantArriere;
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree){
            couteauPersonnalise.matiere = pieceMatiereAcierBrillantPC;
            matiereImageArriere.src = plaquetteCentraleAcierBrillantArriere;
        } else if (couteauPersonnalise.manche == piecePlaquettePleine){
            couteauPersonnalise.matiere = pieceMatiereAcierBrillantPC;
            matiereImageArriere.src = plaquetteCentraleAcierBrillantArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereAcierBrillantPC;
            matiereImageArriere.src = plaquetteCentraleAcierBrillantArriere;
            selectPlaquetteCentrale();
        }
            afficheCouteau();
            console.log('JE CLIQUE SUR LE MENU ACIER');  
};
//ACIER BRILLANTE
function clickAcierBrillantMenu(e){
    sousMenuListAcier.style.top = "0px";
    plaquetteBoisRound.style.backgroundColor = 'transparent';
    plaquetteCarboneRound.style.backgroundColor = 'transparent';
    plaquetteResineRound.style.backgroundColor = 'transparent';
    plaquetteAcierRound.style.backgroundColor = 'white';
    sousMenuBois.style.display = 'none';
    sousMenuResine.style.display = 'none';
    sousMenuAcier.style.display = 'block';
    sousMenuListBois.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '0.5';
    plaquetteCarboneTitle.style.opacity = '0.5';
    plaquetteResineTitle.style.opacity = '0.5';
    plaquetteAcierTitle.style.opacity = '1';
    sousMenuListAcierBrillant.style.opacity = '1';
    sousMenuListAcierDore.style.opacity = '0.5';
    sousMenuListAcierRose.style.opacity = '0.5';
    sousMenuListAcierBleu.style.opacity = '0.5';
    if (couteauPersonnalise.manche == piecePlaquetteCentrale) {
        couteauPersonnalise.matiere = pieceMatiereAcierBrillantPC;
        matiereImageArriere.src = plaquetteCentraleAcierBrillantArriere;
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree) {
            couteauPersonnalise.matiere = pieceMatiereAcierBrillantPC;
            matiereImageArriere.src = plaquetteCentraleAcierBrillantArriere;
        } else if (couteauPersonnalise.manche == piecePlaquettePleine) {
            couteauPersonnalise.matiere = pieceMatiereAcierBrillantPC;
            matiereImageArriere.src = plaquetteCentraleAcierBrillantArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereAcierBrillantPC;
            matiereImageArriere.src = plaquetteCentraleAcierBrillantArriere;
        }
            afficheCouteau();
            console.log('JE CLIQUE SUR LE MENU ACIER BRILLANT'); 
};
//ACIER DORE
function clickAcierDoreMenu(e){
    sousMenuListAcier.style.top = "-28px";
    plaquetteBoisRound.style.backgroundColor = 'transparent';
    plaquetteCarboneRound.style.backgroundColor = 'transparent';
    plaquetteResineRound.style.backgroundColor = 'transparent';
    plaquetteAcierRound.style.backgroundColor = 'white';
    sousMenuBois.style.display = 'none';
    sousMenuResine.style.display = 'none';
    sousMenuAcier.style.display = 'block';
    sousMenuListBois.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '0.5';
    plaquetteCarboneTitle.style.opacity = '0.5';
    plaquetteResineTitle.style.opacity = '0.5';
    plaquetteAcierTitle.style.opacity = '1';
    sousMenuListAcierBrillant.style.opacity = '0.5';
    sousMenuListAcierDore.style.opacity = '1';
    sousMenuListAcierRose.style.opacity = '0.5';
    sousMenuListAcierBleu.style.opacity = '0.5';
    if (couteauPersonnalise.manche == piecePlaquetteCentrale){
        couteauPersonnalise.matiere = pieceMatiereAcierDorePC;
        matiereImageArriere.src = plaquetteCentraleAcierDoreArriere;
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree){
            couteauPersonnalise.matiere = pieceMatiereAcierDorePC;
            matiereImageArriere.src = plaquetteCentraleAcierDoreArriere;
        } else if (couteauPersonnalise.manche == piecePlaquettePleine){
            couteauPersonnalise.matiere = pieceMatiereAcierDorePC;
            matiereImageArriere.src = plaquetteCentraleAcierDoreArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereAcierDorePC;
            matiereImageArriere.src = plaquetteCentraleAcierDoreArriere;
        }
            afficheCouteau();
            console.log('JE CLIQUE SUR LE MENU ACIER DORE'); 
};
//ACIER DORE
function clickAcierRoseMenu(e){
    sousMenuListAcier.style.top = "-58px";
    plaquetteBoisRound.style.backgroundColor = 'transparent';
    plaquetteCarboneRound.style.backgroundColor = 'transparent';
    plaquetteResineRound.style.backgroundColor = 'transparent';
    plaquetteAcierRound.style.backgroundColor = 'white';
    sousMenuBois.style.display = 'none';
    sousMenuResine.style.display = 'none';
    sousMenuAcier.style.display = 'block';
    sousMenuListBois.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '0.5';
    plaquetteCarboneTitle.style.opacity = '0.5';
    plaquetteResineTitle.style.opacity = '0.5';
    plaquetteAcierTitle.style.opacity = '1';
    sousMenuListAcierBrillant.style.opacity = '0.5';
    sousMenuListAcierDore.style.opacity = '0.5';
    sousMenuListAcierRose.style.opacity = '1';
    sousMenuListAcierBleu.style.opacity = '0.5';
    if (couteauPersonnalise.manche == piecePlaquetteCentrale){
        couteauPersonnalise.matiere = pieceMatiereAcierRosePC;
        matiereImageArriere.src = plaquetteCentraleAcierRoseArriere;
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree){
            couteauPersonnalise.matiere = pieceMatiereAcierRosePC;
            matiereImageArriere.src = plaquetteCentraleAcierRoseArriere;
        } else if (couteauPersonnalise.manche == piecePlaquettePleine){
            couteauPersonnalise.matiere = pieceMatiereAcierRosePC;
            matiereImageArriere.src = plaquetteCentraleAcierRoseArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereAcierRosePC;
            matiereImageArriere.src = plaquetteCentraleAcierRoseArriere;
        }
            afficheCouteau();
            console.log('JE CLIQUE SUR LE MENU ACIER ROSE'); 
};
//ACIER BLEU
function clickAcierBleuMenu(e){
    sousMenuListAcier.style.top = "-88px";
    plaquetteBoisRound.style.backgroundColor = 'transparent';
    plaquetteCarboneRound.style.backgroundColor = 'transparent';
    plaquetteResineRound.style.backgroundColor = 'transparent';
    plaquetteAcierRound.style.backgroundColor = 'white';
    sousMenuBois.style.display = 'none';
    sousMenuResine.style.display = 'none';
    sousMenuAcier.style.display = 'block';
    sousMenuListBois.style.top = "0px";
    plaquetteBoisTitle.style.opacity = '0.5';
    plaquetteCarboneTitle.style.opacity = '0.5';
    plaquetteResineTitle.style.opacity = '0.5';
    plaquetteAcierTitle.style.opacity = '1';
    sousMenuListAcierBrillant.style.opacity = '0.5';
    sousMenuListAcierDore.style.opacity = '0.5';
    sousMenuListAcierRose.style.opacity = '0.5';
    sousMenuListAcierBleu.style.opacity = '1';
    if (couteauPersonnalise.manche == piecePlaquetteCentrale) {
        couteauPersonnalise.matiere = pieceMatiereAcierBleuPC;
        matiereImageArriere.src = plaquetteCentraleAcierBleuArriere;
        } else if (couteauPersonnalise.manche == piecePlaquetteAjouree) {
            couteauPersonnalise.matiere = pieceMatiereAcierBleuPC;
            matiereImageArriere.src = plaquetteCentraleAcierBleuArriere;
        } else if (couteauPersonnalise.manche == piecePlaquettePleine) {
            couteauPersonnalise.matiere = pieceMatiereAcierBleuPC;
            matiereImageArriere.src = plaquetteCentraleAcierBleuArriere;
        } else { (couteauPersonnalise.manche != piecePlaquetteCentrale || piecePlaquetteAjouree || piecePlaquettePleine)
            couteauPersonnalise.matiere = pieceMatiereAcierBleuPC;
            matiereImageArriere.src = plaquetteCentraleAcierBleuArriere;
        }
            afficheCouteau();
            console.log('JE CLIQUE SUR LE MENU ACIER BLEU'); 
};
//LOUP
function clickGravureLoupMenu(e){
    clickFaceAvant();
    gravureLoupRound.style.backgroundColor = 'white';
    gravureTracteurRound.style.backgroundColor = 'transparent';
    gravureMontagnesRound.style.backgroundColor = 'transparent';
    gravureLoupTitle.style.opacity = '1';
    gravureTracteurTitle.style.opacity = '0.5';
    gravureMontagnesTitle.style.opacity = '0.5';
    if (couteauPersonnalise.lame.nom == "KB") {
        couteauPersonnalise.gravure = gravureLoupG01;
        console.log("Je clique sur Loup Gravure et j'affiche le loup en LF");
        } else if (couteauPersonnalise.lame.nom == "KG") {
            couteauPersonnalise.gravure = gravureLoupG01;
            console.log("Je clique sur Loup Gravure et j'affiche le loup en LF");
        } else { (couteauPersonnalise.lame.nom == "KN") 
            couteauPersonnalise.gravure = gravureLoupG01;
            gravureLoupG01.laser = laserClair;
            console.log("Je clique sur Loup Gravure et j'affiche le loup en LC");
        }
            afficheCouteau();
};

//TRACTEUR
function clickGravureTracteurMenu(e){
    clickFaceAvant();
    gravureLoupRound.style.backgroundColor = 'transparent';
    gravureTracteurRound.style.backgroundColor = 'white';
    gravureMontagnesRound.style.backgroundColor = 'transparent';
    gravureLoupTitle.style.opacity = '0.5';
    gravureTracteurTitle.style.opacity = '1';
    gravureMontagnesTitle.style.opacity = '0.5';
    if (couteauPersonnalise.lame.nom == "KB") {
        couteauPersonnalise.gravure = gravureTracteurG01;
        gravureTracteurG01.laser = laserFonce;
        console.log("Je clique sur Tracteur Gravure et j'affiche le Tracteur en LF");
        } else if (couteauPersonnalise.lame.nom == "KG") {
            couteauPersonnalise.gravure = gravureTracteurG01;
            gravureTracteurG01.laser = laserFonce; 
            console.log("Je clique sur Tracteur Gravure et j'affiche le Tracteur en LF");
        } else { (couteauPersonnalise.lame.nom == "KN") 
            couteauPersonnalise.gravure = gravureTracteurG01;
            gravureTracteurG01.laser = laserClair;
            console.log("Je clique sur Tracteur Gravure et j'affiche le Tracteur en LC");
        }
            afficheCouteau();
};
//MONTAGNES
function clickGravureMontagnesMenu(e){
    clickFaceAvant();
    gravureLoupRound.style.backgroundColor = 'transparent';
    gravureTracteurRound.style.backgroundColor = 'transparent';
    gravureMontagnesRound.style.backgroundColor = 'white';
    gravureLoupTitle.style.opacity = '0.5';
    gravureTracteurTitle.style.opacity = '0.5';
    gravureMontagnesTitle.style.opacity = '1';
    if (couteauPersonnalise.lame.nom == "KB") {
        couteauPersonnalise.gravure = gravureMontagnesG01;
        gravureMontagnesG01.laser = laserFonce;
        console.log("Je clique sur Montagnes Gravure et j'affiche le Montagnes en LF");
        } else if (couteauPersonnalise.lame.nom == "KG") {
            couteauPersonnalise.gravure = gravureMontagnesG01;
            gravureMontagnesG01.laser = laserFonce;
            console.log("Je clique sur Montagnes Gravure et j'affiche le Montagnes en LF");
        } else { (couteauPersonnalise.lame.nom == "KN") 
            couteauPersonnalise.gravure = gravureMontagnesG01;
            gravureMontagnesG01.laser = laserClair;
            console.log("Je clique sur Montagnes Gravure et j'affiche le Montagnes en LC");
        }
            afficheCouteau();
};
// TYPE OF FONT
let typeOfFont = "";
// Verdana
function clickTextVerdanaMenu(e){
    clickFaceArriere();
    typeOfFont = "Verdana";
    addToCart;
    inputTextGravure.maxLenght = '18';
    textVerdanaRound.style.backgroundColor = 'white';
    textVerdanaTitle.style.opacity = '1';
    textTimesNewRomanRound.style.backgroundColor = 'transparent';
    textTimesNewRomanTitle.style.opacity = '0.5';
    textSegoeRound.style.backgroundColor = 'transparent';
    textSegoeTitle.style.opacity = '0.5';
    textLameArriere.style.fontFamily = 'verdanaregular';
    inputTextGravure.style.fontSize  = '14px';
    console.log('Je clique sur Verdana');
};
// Times New Roman
function clickTextTimesNewRomanMenu(e){
    clickFaceArriere();
    typeOfFont = "Times New Roman";
    addToCart;
    inputTextGravure.style.fontSize  = '17px';
    inputTextGravure.maxLenght = '17';
    textVerdanaRound.style.backgroundColor = 'transparent';
    textVerdanaTitle.style.opacity = '0.5';
    textTimesNewRomanRound.style.backgroundColor = 'white';
    textTimesNewRomanTitle.style.opacity = '1';
    textSegoeRound.style.backgroundColor = 'transparent';
    textSegoeTitle.style.opacity = '0.5';
    textLameArriere.style.fontFamily = 'times_new_romanregular';
    console.log("Je clique sur Times New Roman");
};
// Segoe
function clickTextSegoeMenu(e){
    clickFaceArriere();
    typeOfFont = "Segoe";
    addToCart;
    inputTextGravure.style.fontSize  = '14px';
    inputTextGravure.maxLenght = '16';
    textVerdanaRound.style.backgroundColor = 'transparent';
    textVerdanaTitle.style.opacity = '0.5';
    textTimesNewRomanRound.style.backgroundColor = 'transparent';
    textTimesNewRomanTitle.style.opacity = '0.5';
    textSegoeRound.style.backgroundColor = 'white';
    textSegoeTitle.style.opacity = '1';
    textLameArriere.style.fontFamily = 'segoe_printregular';
    console.log("Je clique sur Segoe");
};
// FACE AVANT
function clickFaceAvant(e) {
    selectFaceAvant();
    console.log('Je clique sur Face Avant');
    gravureLameAvantSection.style.opacity = '1';
    gravureLameAvantTitre.style.opacity = "1";
    gravureLameArriereSection.style.opacity = '0.2';
    gravureLameArriereTitre.style.opacity = "0.2";
    couteauFace.style.opacity = "1";
    couteauArriere.style.opacity = "0";
}
// FACE ARRIERE
function clickFaceArriere(e) {
    selectFaceArriere();
    console.log('Je clique sur Face Arriere');
    gravureLameAvantSection.style.opacity = '0.2';
    gravureLameAvantTitre.style.opacity = "0.2";
    gravureLameArriereSection.style.opacity = '1';
    gravureLameArriereTitre.style.opacity = "1";
    couteauFace.style.opacity = "0";
    couteauArriere.style.opacity = "1";
}

////////////////////////////////////////////////////
//             RECUPERER LES VALEURS              //
////////////////////////////////////////////////////

// TEXTE GRAVURE A CREER
var texteInputGravureLameVerso = "";

document.getElementById("texte_a_graver").addEventListener("keyup", function() {
    texteInputGravureLameVerso = this.value;
    addToCart;
});

var texteGravure = texteInputGravureLameVerso;


