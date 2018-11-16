﻿# CDP-2018

Releases
======================
Release la plus récente : 0.1 - 9 Novembre 2018.   
Changelog : Premier jet, test de release utilisable et fonctionnelle : seule une page HTML présentant un formulaire basique de création de projet est disponible.

Installation
-------------

La release est livrée sous la forme d'une image Docker. Pour la télécharger, il suffit d'executer dans un terminal la commande suivante : 

docker pull pierrinator/cdp2018:0.1   

Vous pouvez remplacer 0.1 par la release souhaitée.

Exécution
-------------

L'execution peut se faire simplement via la commande suivante :

docker run -d -p 80:80  pierrinator/cdp2018:0.1

Vous pouvez remplacer 0.1 par la release souhaitée.

Vous pouvez alors accéder a la page HTML en tapant 0.0.0.0 sur votre navigateur.

Anciennes releases
-------------------

Aucune pour le moment.

Backlog
======================
Echelle de difficulté : 1-5  
Echelle de priorité : Basse / Moyenne / Haute  
Nombre de sprints prévus : 3

| Numéro d'US | Description précise | Priorité | Difficulté | Sprint n° |
|----------|----------|----------|----------|----------|
| 1 | **En tant que** visiteur, **je souhaite** créer un compte développeur à l'aide d'un login simple (username/password) **afin de** gérer mes projets | Moyenne | 4 | 1 |
| 2 | **En tant que** visiteur, **je souhaite** pouvoir me connecter à l'aide des identifiants créés en issue n°1 **afin de** gérer mes projets | Moyenne | 2 | 1 |
| 3 | **En tant que** visiteur, **je souhaite** pouvoir me déconnecter **afin de** garantir ma sécurité | Basse | 1 | 1 |
| 4 | **En tant que** développeur, **je souhaite** pouvoir créer un projet via un formulaire simple (nom de projet/createur) **afin de** pouvoir le gérer | Haute | 3 | 1 |
| 5 | **En tant que** développeur, **je souhaite** pouvoir supprimer un projet en cas d'annulation ou d'abandon | Basse | 3 | 1 |
| 6 | **En tant que** développeur, **je souhaite** pouvoir consulter la liste des projets | Moyenne | 2 | 1 |
| 7 | **En tant que** développeur, **je souhaite** pouvoir inviter des développeurs à un projet **afin qu**'ils puissent intégrer l'équipe de développement | Moyenne | 3 | 3 |
| 8 | **En tant que** développeur, **je souhaite** pouvoir ajouter une issue a mon projet (sous la forme de champs id/description/priorité/difficulté/sprint) **afin de** synthétiser les besoins du projet et d'ajouter des informations sur ceux-ci | Haute | 3 | 2 |
| 9 | **En tant que** développeur, **je souhaite** pouvoir modifier une issue de mon projet **afin de** suivre les demandes du client | Haute | 3 | 2 |
| 10 | **En tant que** développeur, **je souhaite** pouvoir supprimer une issue de mon projet si elle n'est plus conforme aux attentes du client | Basse | 3 | 2 |
| 11 | **En tant que** développeur, **je souhaite** pouvoir accéder au backlog d'un projet afin de consulter la liste des issues | Haute | 2 | 2 |
| 12 | **En tant que** développeur, **je souhaite** pouvoir créer un sprint (numéro de sprint, liste de tâches, date de départ/de fin) à l'intérieur d'un projet **afin d'** organiser le travail de l'équipe de développement en tâches et dans le temps | Basse | 3 | 2 |
| 13 | **En tant que** développeur, **je souhaite** pouvoir consulter la liste des sprints d'un projet | Basse | 2 | 2 |
| 14 | **En tant que** développeur, **je souhaite** pouvoir retirer une tâche d'un sprint si elle n'est plus conforme aux attentes du client ou pour la reporter à un sprint ultérieur | Basse | 2 | 2 |
| 15 | **En tant que** développeur, **je souhaite** pouvoir ajouter une tâche à un sprint **afin de** planifier le travail de l'équipe | Basse | 2 | 2 |
| 16 | **En tant que** développeur, **je souhaite** pouvoir consulter les données d'une tâche (temps évalué en jours-homme, date, nature de la tâche, dépendances éventuelles à d'autres tâches, état de la tache) **afin de** l'effectuer | Basse | 2 | 3 |
| 17 | **En tant que** développeur, **je souhaite** pouvoir modifier les données d'une tâche (temps évalué en jours-homme, date, nature de la tâche, dépendances éventuelles à d'autres tâches, état de la tache) **afin de** les corriger si besoin | Basse | 3 | 3 |
| 18 | **En tant que** développeur, **je souhaite** pouvoir accéder à la liste des tâches d'un sprint | Basse | 2 | 3 |
| 19 | **En tant que** développeur, **je souhaite** pouvoir générer un burn down chart  **afin de** visualiser aisément si le projet respecte le temps imparti | Basse | 3 | 3 |
