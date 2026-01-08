# Présentation Orale : Gestionnaire de Tâches


## 1. Structure HTML 

Le fichier `index.html` définit la structurede la page :

- **Le Header** : Affiche le logo et le titre principal.
- **Le Formulaire** : Permet à l'utilisateur de saisir les informations d'une tâche (Titre, Sous-titre, Message, Email, Date).
- **La Liste de Tâches** : Une section vide au départ (`<div id="taskList">`) que le JavaScript viendra remplir dynamiquement avec un innerHTML.
- **Le Footer** : Le pied de page avec les informations de copyright.



## 2. CSS 

- **Variables CSS** : Utilisation de `:root` pour définir une palette de couleurs cohérente (bleu accentué, gris doux, blanc pur).
- **Mise en page Flexible** :
    - **Flexbox** : Utilisé pour centrer le contenu et aligner les éléments du formulaire.
    - **CSS Grid** : Utilisé pour la liste des tâches (`#taskList`), permettant un affichage en colonnes qui s'adapte automatiquement à la taille de l'écran. 
- **Effets Visuels** : 
    - Ombres douces (`box-shadow`) pour donner de la profondeur aux cartes.
    - Transitions fluides lors du survol des boutons.
    - Style "barré" et opacité réduite pour les tâches terminées.



## 3. JavaScript 
Le fichier `index.js` gère toute l'interactivité :

### Stockage des données
Toutes les tâches sont enregistrées dans un tableau d'objets nommé `tasks`. Chaque tâche possède un identifiant unique généré par `Date.now()`.

### Ajout d'une tâche
Lorsqu'on clique sur "Ajouter la tâche" :
1. Le navigateur empêche le rechargement de la page (`e.preventDefault()`).
2. Les données sont récupérées depuis les champs du formulaire.
3. Un nouvel objet est créé et ajouté au tableau `tasks`.
4. Le formulaire est vidé, et la fonction d'affichage est appelée.

### Affichage Dynamique (`displayTasks`)
C'est la fonction la plus importante. Elle :
1. Vide la liste actuelle dans le HTML.
2. Boucle sur le tableau `tasks`.
3. Crée pour chaque tâche une "Carte" avec ses boutons.
4. L'ajoute visuellement dans la page.

### Actions utilisateur
- **Terminer une tâche** : En cliquant sur la case à cocher, on inverse l'état `completed` (true/false) dans le tableau, puis on rafraîchit l'affichage.
- **Supprimer une tâche** : On filtre le tableau pour retirer l'élément correspondant à l'identifiant, puis on rafraîchit l'affichage.

---

<p>2026 &copy; Nathan Michel</p>
