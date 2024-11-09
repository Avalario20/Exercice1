const tauxInteret = 0.03;
let solde = 1000;
const depot = 200;
const retrait = 150;

const nouveauDepot = 500;
const nouveauRetrait = 800;

let historique = [];


solde = depotArgent(solde, depot);
solde = retraitArgent(solde, retrait);
solde = calculInteret(solde, tauxInteret);

solde = depotArgent(solde, nouveauDepot);
solde = retraitArgent(solde, nouveauRetrait);
solde = calculInteret(solde, tauxInteret);

console.table(historique);


function depotArgent(solde, depot) {
    solde = solde + depot;
    console.log("Vous avez déposé " + depot + " euros. Nouveau solde : " + solde + " euros.");
    historique.push("Dépôt de " + depot + " euros. Solde : " + solde + " euros.");
    return solde;
}

function retraitArgent(solde, retrait) {
    if (solde >= retrait) {
        solde = solde - retrait;
        console.log("Vous avez retiré " + retrait + " euros. Nouveau solde : " + solde + " euros.");
        historique.push("Retrait de " + retrait + " euros. Solde : " + solde + " euros.");
    } else {
        console.log("Solde insuffisant pour effectuer ce retrait.");
        historique.push("Tentative de retrait de " + retrait + " euros. Solde insuffisant. Solde : " + solde + " euros.");
    }
    return solde;
}

function calculInteret(solde, tauxInteret) {
    solde += solde * tauxInteret;
    console.log("Intérêts annuels de 3% ajoutés. Nouveau solde : " + solde + " euros.");
    historique.push("Intérêts annuels de 3% ajoutés. Solde : " + solde + " euros.");
    return solde;
}
