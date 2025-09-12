
/*let StatutMarital = "celibate";

    function toggleStatusMarital(){
        if (StatutMarital == "celibate"){
            StatutMarital = "married";
        }
        else{
            StatutMarital = "celibate";
        }



    }
    console.log(StatutMarital);
    toggleStatusMarital();
    console.log(StatutMarital);
    
    
} 
const STATUT_MARITAL = {
    CELIBATAIRE: "celibate",
    MARIE: "married"
};

let personne = {
    nom: "Toto",
    prenom: "...",
    age: 30,
    ville: "Paris",
    statusMarital: STATUT_MARITAL.MARIE,

    toggleStatusMarital: function () {
        if (this.statusMarital == STATUT_MARITAL.MARIE) {
            this.statusMarital = STATUT_MARITAL.CELIBATAIRE;
        } else {
            this.statusMarital = STATUT_MARITAL.MARIE;
        }
    }
};

console.log(personne.statusMarital);
personne.toggleStatusMarital();
console.log(personne.statusMarital);

console.log("----------------------------------------------------------") */



let utilisateur = {
    nom: "Nathan",
    prenom: "Michel",
    age: 20,
    ville: "Paris",
    estMarie: false,
    estEtudiant: false,






    
}
let anneeNaissance = 2025 - utilisateur.age
let joursVécus = utilisateur * 365
age++ 
if(utilisateur.age > 18 ){
    console.log("tu es majeur")
}else {
    console.log("tu es mineur");
}
if(utilisateur.age === 30 ){
    console.log("tu as 30 ans")
}else {
    console.log("tu as moins de 30 ans");
}
if(utilisateur.estEtudiant == false ){
    console.log("tu n'es pas étudiant")
}else {
    console.log("tu es étudiant");
}




console.log(typeof utilisateur.nom);
console.log(typeof utilisateur.prenom);
console.log(typeof utilisateur.age);
console.log(typeof utilisateur.ville);
console.log(typeof utilisateur.estMarie);
console.log(typeof utilisateur.estEtudiant);
console.log(anneeNaissance);





