let tauxInteret = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 150;

let nouveauDepot = 500;
let nouveauRetrait = 800;

let historique = [];

solde += depot;

console.log("Vous avez déposé 200 euros. Nouveau solde : " +solde+ " euros.");
historique.push("Dépôt de 200 euros. Solde : " +solde+ " euros.");

if (solde >= retrait) {
    solde -= retrait;
    console.log("Vous avez retiré 150 euros. Nouveau solde : " +solde+ " euros.");
    historique.push("Retrait de 150 euros. Solde : " +solde+ " euros.");
}else{
    console.log("Solde insuffisant poureffectuer ce retrait.");
    historique.push("Tentative de retrait de 150 euros. Solde insuffisant. Solde : " +solde+ " euros.");
}

solde += solde * tauxInteret;
console.log("ntérêts annuels de 3% ajoutés.Nouveau solde : " +solde+ " euros.");
historique.push("Intérêts annuels de 3% ajoutés. Solde : " +solde+ " euros.");

solde += nouveauDepot;
console.log("Vous avez déposé 500 euros. Nouveau solde : " +solde+ " euros.");
historique.push("Dépôt de 500 euros. Solde : " +solde+ " euros.");

if (solde >= nouveauRetrait) {
    solde -= nouveauRetrait;
    console.log("Vous avez retiré 800 euros. Nouveau solde : " +solde+ " euros.");
    historique.push("Retrait de 800 euros. Solde : " +solde+ " euros.");
}else{
    console.log("Solde insuffisant poureffectuer ce retrait.");
    historique.push("Tentative de retrait de 800 euros. Solde insuffisant. Solde : " +solde+ " euros.");
}

solde += solde * tauxInteret;
console.log("ntérêts annuels de 3% ajoutés.Nouveau solde : " +solde+ " euros.");
historique.push("Intérêts annuels de 3% ajoutés. Solde : " +solde+ " euros.");

console.log("Historique des transactions : " +historique);