Tâches
======================

Tâches du sprint 1
-----------------

| Id de la tache | Description | Composant(s) | Ressource(s) | US Correspondante | Dépendance(s) | Etat | Développeur(s) | JH |
|----|------------|---------------|--------|-------|-------------|----|-----|----|
| T1 | Creation d'un fichier de génération Dockerfile et mise a disposition de l'image sur Docker Hub | Dockerfile  |  Dockerfile   |  x   |  x   | DONE | Pierre | 1 |
| T2 | Création d'un fichier de référence pour expliciter la base de données. | tables.md |  tables.md | x | x | TO DO | Pierre | 0.5 |
| T3 | Création de la page d'accueil (et du code js correspondant) comprenant la liste des projets et la possibilité de créer un projet. Ces derniers doivent implementer le code nécéssaire a la création d'un projet via un bouton "Create new project" qui envoie l'utilisateur vers une page de creation de projet. De plus, on doit afficher ici une liste de projets déja enregistrés. | index.html, index.js | src/html/index.html, src/js/index.js | #4 | x | DOING | Badr-eddine | 1.5 |
| T4 | Création de la page du formulaire de création de projet (et du code js correspondant). Ces derniers doivent implementer les champs "Project title" et "Creator's Name" suivi d'un bouton "Create" qui valide  la création du projet.| new_project.html, new_project.js | src/html/new_project.html, src/js/new_project.js  | #4 | x | TO DO | Pierre | 1 |
| T5 | Implémentation du lien avec la base de données lors de la validation de la création d'un projet. | new_project.js | src/js/new_project.js  | #3  | T4 | TO DO | Pierre | 1 |
| T6 | Création de la page du formulaire d'ajout d'une issue (et du code js correspondant) permettant l'ajout d'une issue à un projet suivant les champs décrits en US #8, suivi d'un bouton "Add" qui validera la création de l'issue. Cette dernière devra s'ouvrir sous forme de popup lorsque l'on clique sur le bouton "Add Issue" d'un projet. | new_issue.html, new_issue.js | src/html/new_issue.html, src/js/new_issue.js | #8 | T3  | TO DO | Paul, Pierre | 2 |
| T7 | Implémentation du lien avec la base de données lors de la validation de la création d'un projet. | new_issue.js | src/js/new_issue.js | #8 | T6 | TO DO | Paul | 1 |
| T8 | Création de la page du formulaire de modification d'une issue (et implementation du code js correspondant) permettant la modification d'une issue. On reprend les mêmes champs que lors de l'ajout, mais ils doivent ici être pré remplis avec les éléments déja présents dans la base de données. | edit_issue.html, edit_issue.js | src/html/edit_issue.html, src/js/edit_issue.js |  #9 | x | TO DO | Pierre | 1 |
| T9 | Implémentation de la modification d'une issue à l'aide d'un bouton "Edit". Il envoie vers un formulaire de modification de l'issue en question. | edit_issue.html, edit_issue.js | src/html/edit_issue.html, src/js/edit_issue.js |  #9 | T8 | TO DO | Pierre | 1 |
| T10 | Implémentation du lien avec la base de données lors de la validation de la création d'un projet  | edit_issue.js | src/js/edit_issue.js | #9 | T8, T9 | TO DO | Badr-reddine | 0.5 |