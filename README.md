Nous devons réaliser une application qui reproduit le jeu À Prendre ou à Laisser de TF1 par groupe de 4.

On devait se concentrer sur le code JavaScript avant d'implémenter un design complet et attractif en HTML / CSS.
Le professeur à donc noté plutôt le JavaScript que la partie design.

Toutes les interactions doivent se dérouler depuis des champs HTML dans la page web (pas de prompt).
Les boîtes peuvent être matérialisée sous forme de boutons ou de div, au choix.
Il faut que l'on puisse cliquer dessus pour les sélectionner.


Rappel du déroulement du jeu : 

Il y a 22 boîtes. Dans chaque boîte, des sommes d'argent sont réparties au hasard. Seul le banquier connaît le contenu des boîtes.
Ces sommes sont comprises entre 0,01€ er 500 000€ de cette façon : 0.01€, 0.2€, 0.5€, 1€, 5€, 10€, 20€, 50€, 100€, 250€, 500€, 1 000€, 5 000€, 10 000€,  15 000€, 20 000€, 25 000€, 50 000€, 75 000€, 100 000€, 250 000€ et  500 000€.

Pour commencer la partie, l'utilisateur saisit son pseudonyme. Il lui est attribué une boîte aléatoirement.
L'application se souviendra de son pseudonyme et le banquier l'appellera par ce dernier.
Puis, le candidat ouvre une à une les autres boîtes.

Toutes les deux boîtes ouvertes, le banquier appelle le candidat pour lui proposer soit :
   - Une somme calculée en fonction de la moyenne des sommes restantes ;
   - D'échanger sa boîtes avec la boîte de son choix (non ouverte).
   
La partie se termine :
   - quand le candidat a ouvert toutes les boîtes, il gagne alors le contenu de sa propre boîte ;
   - quand le candidat accepte une offre du banquier.


Pour réaliser ce TP : 

   - Pour assigner une boîte à un montant, on doit utiliser un tableau ;
   
   - Pour mélanger les boîtes, il faut randomiser le tableau ;
   
   - Il faut ensuite attribuer une boîte à votre candidat.
