# La Maison Jungle

Ce projet est une page simple pour montrer les utilisations de React. Il a été créé à partir du code de base du cours React OpenClassrooms disponible à l'adresse : [OpenClassrooms - Débutez avec React](https://openclassrooms.com/fr/courses/7008001-debutez-avec-react).

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm install`

### `npm start`

Ouvrez http://localhost:3000 pour la voir dans votre navigateur.

## Technologies utilisées

### React

Ce projet utilise React pour créer une interface utilisateur interactive et réactive. Les composants React sont utilisés pour construire les différentes parties de l'application, permettant une grande modularité lors du développement. Les composants servent aussi à réutiliser le code créé au maximum et à éviter les redondances.

### Redux

Redux est intégré dans ce projet pour gérer l'état global de l'application. Il permet de facilement gérer et synchroniser l'état entre différents composants de manière prévisible et scalable.

### LocalStorage

Toutes les données (la liste des plantes et des articles dan le panier) sont stockées dans le `LocalStorage`, permettant de les garder en rechargeant la page ou en la fermant puis la rouvrant.

## Fonctionnalités Ajoutées

### 1. Interface Utilisateur

Barre de Navigation: L'utilisation des composants `NavLink` et `Route` de `react-router-dom` permet d'afficher les différentes sections sans avoir à changer de page et permet de les interconnecter plus facilement.

Il y a 3 sections principales: "Magasin", "Gestion des plantes" et "A propos"

### 2. Magasin

Dans la section "Magasin", il y a une liste comprenant tous les articles en vente ainsi qu'un panier qui recense les articles sélectionnés ainsi quer leurs quantités.

#### Panier

Les fonctionnalités du panier, implémentées grâce à `Redux` sont les suivantes:

- Voir le Panier : Affichage dynamique du contenu du panier avec la possibilité de supprimer des articles.
- Vider le Panier

#### Liste des articles

La liste des articles est composée d'une barrde filtrage des catégories et la liste des plantes à la vente.

- Catégories: utilise de composant `Select` de `react-select`
- Liste des plantes: liste de plus petits composants montrant la plante et des informations dessus ainsi qu'un bouton 'info' qui ouvre une modale contenant une description de la plante et un bouton 'ajouter au panier' qui utilise `Redux` pour envoyer l'information au panier.
  
### 3. Gestion des Plantes

Ajouter une Plante : Un formulaire permettant d'ajouter une nouvelle plante à la liste.
Modifier une Plante : Une interface modale permettant de modifier les détails des plantes existantes.
Réinitialiser la Liste: remet la liste des plantes dans son état initial afin de pouvoir démontrer facilement les fonctionnalités.

Ces trois fonctionnalités sont basées sur l'utilisation de `Redux` afin de se synchroniser avec la liste de plantes dans la partie "magasin" du projet.
