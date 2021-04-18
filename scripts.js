// Variable sous forme de tableau contenant toutes les sommes du jeu possibles.

var sommes = [0.01, 0.20, 0.50, 1, 5, 10, 20, 50, 100, 250, 500, 1000, 5000, 10000, 15000, 20000, 25000, 50000, 75000, 100000, 250000, 500000];



// Randomisation du tableau des sommes.

function randomiserTableau(inputArray)
{
    inputArray.sort(()=> Math.random() - 0.5);
}
randomiserTableau(sommes);
console.log(sommes);


// Variable sous forme de tableau qui va contenir les sommes des boites déjà ouvertes dans le but de calculer la moyenne des sommes restantes.

var tableauBoitesDejaOuvertes = [];



// Attribution des sommes aux boites.

    var boiteDuJoueur = sommes[0];

    var boite1 = sommes[1];
    var boite2 = sommes[2];
    var boite3 = sommes[3];
    var boite4 = sommes[4];
    var boite5 = sommes[5];
    var boite6 = sommes[6];
    var boite7 = sommes[7];
    var boite8 = sommes[8];
    var boite9 = sommes[9];
    var boite10 = sommes[10];
    var boite11 = sommes[11];
    var boite12 = sommes[12];
    var boite13 = sommes[13];
    var boite14 = sommes[14];
    var boite15 = sommes[15];
    var boite16 = sommes[16];
    var boite17 = sommes[17];
    var boite18 = sommes[18];
    var boite19 = sommes[19];
    var boite20 = sommes[20];
    var boite21 = sommes[21];



// Function qui permet de relancer une partie à la fin du jeu.

function rejouer()
{
    document.location.reload();
}



// Mise en place du jeu au démarrage.

var prenom;

function demarrageJeu()
{
    prenom = document.getElementById("prenom").value;
    var prenom2 = document.getElementById("prenom").value.length;
    if(prenom2 <= 2)
    {
        document.getElementById("prblmPrenom").style.display = "block";
        document.getElementById("prenom").style.borderColor = "red";
        document.getElementById("prblmPrenom").innerHTML = "Tu ne peux pas continuer avec un prénom si court !";
    }
    else if(prenom2 >= 10)
    {
        document.getElementById("prblmPrenom").style.display = "block";
        document.getElementById("prenom").style.borderColor = "red";
        document.getElementById("prblmPrenom").innerHTML = "Tu ne peux pas continuer avec un prénom si long !";
    }
    else
    {
        alert("Salut " + prenom + " ! La partie débute.")
        document.getElementById("commencerPartie").style.display = "none";
        document.getElementById("boiteDuJoueur").style.display = "block";
    }
}



// Fonctions qui gèrent l'ouverture des boîtes en cliquant dessus.

var compteur = 0;
var compteurBoitesOuvertes = 1;
var dejaOuvertB1, dejaOuvertB2, dejaOuvertB3, dejaOuvertB4, dejaOuvertB5, dejaOuvertB6, dejaOuvertB7, dejaOuvertB8, dejaOuvertB9, dejaOuvertB10, dejaOuvertB11, dejaOuvertB12, dejaOuvertB13, dejaOuvertB14, dejaOuvertB15, dejaOuvertB16, dejaOuvertB17, dejaOuvertB18, dejaOuvertB19, dejaOuvertB20, dejaOuvertB21 = false;

function ouvertureBoite1()
{
    document.getElementById("boite1").style.display = "none";
    document.getElementById("boiteRemp1").style.display = "block";
    document.getElementById("para1").innerHTML = "La somme de cette boîte est : " + boite1;
    dejaOuvertB1 = true;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    tableauBoitesDejaOuvertes.push(boite1);
    console.log(tableauBoitesDejaOuvertes);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite2()
{
    document.getElementById("boite2").style.display = "none";
    document.getElementById("boiteRemp2").style.display = "block";
    document.getElementById("para2").innerHTML = "La somme de cette boîte est : " + boite2;
    compteur += 1;
    dejaOuvertB2 = true;
    compteurBoitesOuvertes += 1;
    tableauBoitesDejaOuvertes.push(boite2);
    console.log(tableauBoitesDejaOuvertes);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite3()
{
    document.getElementById("boite3").style.display = "none";
    document.getElementById("boiteRemp3").style.display = "block";
    document.getElementById("para3").innerHTML = "La somme de cette boîte est : " + boite3;
    compteur += 1;
    dejaOuvertB3 = true;
    compteurBoitesOuvertes += 1;
    tableauBoitesDejaOuvertes.push(boite3);
    console.log(tableauBoitesDejaOuvertes);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite4()
{
    document.getElementById("boite4").style.display = "none";
    document.getElementById("boiteRemp4").style.display = "block";
    document.getElementById("para4").innerHTML = "La somme de cette boîte est : " + boite4;
    compteur += 1;
    dejaOuvertB4 = true;
    compteurBoitesOuvertes += 1;
    tableauBoitesDejaOuvertes.push(boite4);
    console.log(tableauBoitesDejaOuvertes);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite5()
{
    document.getElementById("boite5").style.display = "none";
    document.getElementById("boiteRemp5").style.display = "block";
    document.getElementById("para5").innerHTML = "La somme de cette boîte est : " + boite5;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB5 = true;
    tableauBoitesDejaOuvertes.push(boite5);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite6()
{
    document.getElementById("boite6").style.display = "none";
    document.getElementById("boiteRemp6").style.display = "block";
    document.getElementById("para6").innerHTML = "La somme de cette boîte est : " + boite6;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB6 = true;
    tableauBoitesDejaOuvertes.push(boite6);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite7()
{
    document.getElementById("boite7").style.display = "none";
    document.getElementById("boiteRemp7").style.display = "block";
    document.getElementById("para7").innerHTML = "La somme de cette boîte est : " + boite7;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB7 = true;
    tableauBoitesDejaOuvertes.push(boite7);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite8()
{
    document.getElementById("boite8").style.display = "none";
    document.getElementById("boiteRemp8").style.display = "block";
    document.getElementById("para8").innerHTML = "La somme de cette boîte est : " + boite8;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB8 = true;
    tableauBoitesDejaOuvertes.push(boite8);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite9()
{
    document.getElementById("boite9").style.display = "none";
    document.getElementById("boiteRemp9").style.display = "block";
    document.getElementById("para9").innerHTML = "La somme de cette boîte est : " + boite9;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB9 = true;
    tableauBoitesDejaOuvertes.push(boite9);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite10()
{
    document.getElementById("boite10").style.display = "none";
    document.getElementById("boiteRemp10").style.display = "block";
    document.getElementById("para10").innerHTML = "La somme de cette boîte est : " + boite10;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB10 = true;
    tableauBoitesDejaOuvertes.push(boite10);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite11()
{
    document.getElementById("boite11").style.display = "none";
    document.getElementById("boiteRemp11").style.display = "block";
    document.getElementById("para11").innerHTML = "La somme de cette boîte est : " + boite11;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB11 = true;
    tableauBoitesDejaOuvertes.push(boite11);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite12()
{
    document.getElementById("boite12").style.display = "none";
    document.getElementById("boiteRemp12").style.display = "block";
    document.getElementById("para12").innerHTML = "La somme de cette boîte est : " + boite12;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB12 = true;
    tableauBoitesDejaOuvertes.push(boite12);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite13()
{
    document.getElementById("boite13").style.display = "none";
    document.getElementById("boiteRemp13").style.display = "block";
    document.getElementById("para13").innerHTML = "La somme de cette boîte est : " + boite13;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB13 = true;
    tableauBoitesDejaOuvertes.push(boite13);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite14()
{
    document.getElementById("boite14").style.display = "none";
    document.getElementById("boiteRemp14").style.display = "block";
    document.getElementById("para14").innerHTML = "La somme de cette boîte est : " + boite14;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB14 = true;
    tableauBoitesDejaOuvertes.push(boite14);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite15()
{
    document.getElementById("boite15").style.display = "none";
    document.getElementById("boiteRemp15").style.display = "block";
    document.getElementById("para15").innerHTML = "La somme de cette boîte est : " + boite15;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB15 = true;
    tableauBoitesDejaOuvertes.push(boite15);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite16()
{
    document.getElementById("boite16").style.display = "none";
    document.getElementById("boiteRemp16").style.display = "block";
    document.getElementById("para16").innerHTML = "La somme de cette boîte est : " + boite16;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB16 = true;
    tableauBoitesDejaOuvertes.push(boite16);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite17()
{
    document.getElementById("boite17").style.display = "none";
    document.getElementById("boiteRemp17").style.display = "block";
    document.getElementById("para17").innerHTML = "La somme de cette boîte est : " + boite17;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB17 = true;
    tableauBoitesDejaOuvertes.push(boite17);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite18()
{
    document.getElementById("boite18").style.display = "none";
    document.getElementById("boiteRemp18").style.display = "block";
    document.getElementById("para18").innerHTML = "La somme de cette boîte est : " + boite18;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB18 = true;
    tableauBoitesDejaOuvertes.push(boite18);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite19()
{
    document.getElementById("boite19").style.display = "none";
    document.getElementById("boiteRemp19").style.display = "block";
    document.getElementById("para19").innerHTML = "La somme de cette boîte est : " + boite19;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    dejaOuvertB19 = true;
    tableauBoitesDejaOuvertes.push(boite19);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite20()
{
    document.getElementById("boite20").style.display = "none";
    document.getElementById("boiteRemp20").style.display = "block";
    document.getElementById("para20").innerHTML = "La somme de cette boîte est : " + boite20;
    dejaOuvertB20 = true;
    compteur += 1;
    compteurBoitesOuvertes += 1;
    tableauBoitesDejaOuvertes.push(boite20);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}
function ouvertureBoite21()
{
    document.getElementById("boite21").style.display = "none";
    document.getElementById("boiteRemp21").style.display = "block";
    document.getElementById("para21").innerHTML = "La somme de cette boîte est : " + boite21;
    compteur += 1;
    dejaOuvertB21 = true;
    compteurBoitesOuvertes += 1;
    tableauBoitesDejaOuvertes.push(boite21);

    moyenneBoitesEncoreFermees()
    boitesToutesOuvertes()
}



// Function qui s'active que si les 21 boîtes ont été ouvertes.
// Cette fonction est appellée dans toutes les fonctions ouvertureBoite().

function boitesToutesOuvertes()
{
    if(compteur == 21)
    {
        document.getElementById("boiteDuJoueur").style.display = "none";
        document.getElementById("banquier").style.display = "none";
        document.getElementById("victoire").style.display = "block";
        document.getElementById("gagner").innerHTML = "Tu as ouvert toutes les boîtes et tu remportes donc : " + boiteDuJoueur + " euros ! Félicitations " + prenom + " !";
    }
}

function moyenneBoitesEncoreFermees()
{
    for(i = 0; i<tableauBoitesDejaOuvertes.length; i++)
    {
        document.getElementById("moyenneBanquier").innerHTML = "Le banquier vous propose de gagner maintenant : " + moyenne + " euros !";
        moyenne = ((boite1 + boite2 + boite3 + boite4 + boite5 + boite6 + boite7 + boite8 + boite9 + boite10 + boite11 + boite12 + boite13 + boite14 + boite15 +  boite16 + boite17 + boite18 + boite19 + boite20 + boite21) - tableauBoitesDejaOuvertes[i]) / sommes.length - compteurBoitesOuvertes;
        if(compteur % 2 == 0)
        {
            document.getElementById("boiteDuJoueur").style.display = "none";
            document.getElementById("banquier").style.display = "block";
        }
    }
}

var moyenne;


function accepterMoyenne()
{
    document.getElementById("victoire").style.display = "block";
    document.getElementById("boiteDuJoueur").style.display = "none";
    document.getElementById("banquier").style.display = "none";
    document.getElementById("gagner").innerHTML = "Vous venez d'accepter l'offre du banquier et gagner : " + moyenne + " euros !";
}

function refuserMoyenne()
{
    document.getElementById("banquier").style.display = "none";
    document.getElementById("boiteDuJoueur").style.display = "block";
}

function changerBoite()
{
    var changementBoite = document.getElementById("numero").value;
    if(changementBoite == "b1")
    {
        if(dejaOuvertB1 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock1 = boite1;
            boite1 = boiteDuJoueur;
            boiteDuJoueur = boiteStock1;
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b2")
    {
        if(dejaOuvertB2 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock2 = boite2;
            boite2 = boiteDuJoueur;
            console.log(boite2);
            boiteDuJoueur = boiteStock2;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b3")
    {
        if(dejaOuvertB3 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock3 = boite3;
            boite3 = boiteDuJoueur;
            console.log(boite3);
            boiteDuJoueur = boiteStock3;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b4")
    {
        if(dejaOuvertB4 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock4 = boite4;
            boite4 = boiteDuJoueur;
            console.log(boite4);
            boiteDuJoueur = boiteStock4;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b5")
    {
        if(dejaOuvertB5 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock5 = boite5;
            boite5 = boiteDuJoueur;
            console.log(boite5);
            boiteDuJoueur = boiteStock5;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b6")
    {
        if(dejaOuvertB6 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock6 = boite6;
            boite6 = boiteDuJoueur;
            console.log(boite6);
            boiteDuJoueur = boiteStock6;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b7")
    {
        if(dejaOuvertB7 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock7 = boite7;
            boite7 = boiteDuJoueur;
            console.log(boite7);
            boiteDuJoueur = boiteStock7;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b8")
    {
        if(dejaOuvertB8 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock8 = boite8;
            boite8 = boiteDuJoueur;
            console.log(boite8);
            boiteDuJoueur = boiteStock8;
            console.log(boiteDuJouur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b9")
    {
        if(dejaOuvertB9 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock9 = boite9;
            boite9 = boiteDuJoueur;
            console.log(boite9);
            boiteDuJoueur = boiteStock9;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b10")
    {
        if(dejaOuvertB10 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock10 = boite10;
            boite10 = boiteDuJoueur;
            console.log(boite10);
            boiteDuJoueur = boiteStock10;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b11")
    {
        if(dejaOuvertB11 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock11 = boite11;
            boite11 = boiteDuJoueur;
            console.log(boite11);
            boiteDuJoueur = boiteStock11;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b12")
    {
        if(dejaOuvertB12 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock12 = boite12;
            boite12 = boiteDuJoueur;
            console.log(boite12);
            boiteDuJoueur = boiteStock12;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b13")
    {
        if(dejaOuvertB13 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock13 = boite13;
            boite13 = boiteDuJoueur;
            console.log(boite13);
            boiteDuJoueur = boiteStock13;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b14")
    {
        if(dejaOuvertB13 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock14 = boite14;
            boite14 = boiteDuJoueur;
            console.log(boite14);
            boiteDuJoueur = boiteStock14;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b15")
    {
        if(dejaOuvertB15 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock15 = boite15;
            boite15 = boiteDuJoueur;
            console.log(boite15);
            boiteDuJoueur = boiteStock15;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b16")
    {
        if(dejaOuvertB16 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock16 = boite16;
            boite16 = boiteDuJoueur;
            console.log(boite16);
            boiteDuJoueur = boiteStock16;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b17")
    {
        if(dejaOuvertB17 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock17 = boite17;
            boite17 = boiteDuJoueur;
            console.log(boite17);
            boiteDuJoueur = boiteStock17;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b18")
    {
        if(dejaOuvertB18 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock18 = boite18;
            boite18 = boiteDuJoueur;
            console.log(boite18);
            boiteDuJoueur = boiteStock18;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b19")
    {
        if(dejaOuvertB19 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock19 = boite19;
            boite19 = boiteDuJoueur;
            console.log(boite19);
            boiteDuJoueur = boiteStock19;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b20")
    {
        if(dejaOuvertB20 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock20 = boite20;
            boite20 = boiteDuJoueur;
            console.log(boite20);
            boiteDuJoueur = boiteStock20;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }

    else if(changementBoite == "b21")
    {
        if(dejaOuvertB21 == true)
        {
            document.getElementById("numero").style.borderColor = "red";
            document.getElementById("errorBoite").innerHTML = "Cette boîte est déjà ouverte !";
        }
        else
        {
            var boiteStock21 = boite21;
            boite21 = boiteDuJoueur;
            console.log(boite21);
            boiteDuJoueur = boiteStock21;
            console.log(boiteDuJoueur);
            document.getElementById("banquier").style.display = "none";
            document.getElementById("boiteDuJoueur").style.display = "block";
        }
    }
}