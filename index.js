
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
    
    
} */
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

