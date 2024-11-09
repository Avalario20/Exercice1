let tauxInteret = 0.03;
const solde = 1000;
let depot = 200;
let retrait = 150;

let nouveauDepot = 500;
let nouveauRetrait = 800;

const historique = [];

depotArgent(solde, depot);
retraitArgent(solde, retrait);
calculInteret(solde, tauxInteret);

depotArgent(solde, nouveauDepot);
retraitArgent(solde, nouveauRetrait);
calculInteret(solde, tauxInteret);

console.table(historique);

function depotArgent(solde, depot){
    solde += depot;

    console.log("Vous avez déposé " +depot+ " euros. Nouveau solde : " +solde+ " euros.");
    historique.push("Dépôt de " +depot+ " euros. Solde : " +solde+ " euros.");
}

function retraitArgent(solde, retrait){
    if (solde >= retrait) {
        solde -= retrait;
        console.log("Vous avez retiré " +retrait+ " euros. Nouveau solde : " +solde+ " euros.");
        historique.push("Retrait de " +retrait+ " euros. Solde : " +solde+ " euros.");
    }else{
        console.log("Solde insuffisant pour effectuer ce retrait.");
        historique.push("Tentative de retrait de " +retrait+ " euros. Solde insuffisant. Solde : " +solde+ " euros.");
    }
}

function calculInteret(solde, tauxInteret){
    solde += solde * tauxInteret;
    console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : " +solde+ " euros.");
    historique.push("Intérêts annuels de 3% ajoutés. Solde : " +solde+ " euros.");
}