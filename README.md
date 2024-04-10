# 🌿 Bonsai App ToDo List

## GALLERY PAGE 🖼️

- [ ] Afficher tous les bonsaïs
  - Au clic, envoyer sur la page d'un Bonsaï avec plus de détails

## PROFIL PAGE 👤

### Dashboard

- [ ] Création de (Bonsaï)
- [ ] Ajouter un nouveau Bonsaï
- [ ] Mettre à jour un Bonsaï
- [ ] Supprimer un Bonsaï
- [X] Afficher tous les bonsaïs de l'utilisateur

- [ ] Modification du (profil)
- [ ] Changer de mot de passe
- [ ] Changer d'adresse e-mail
- [ ] Changer la photo de profil
- [ ] Changer son nom

- [ ] Création d'un (post)
- [ ] Ajouter un nouveau post
- [ ] Voir tous ses posts et les commentaires associés
- [ ] Supprimer un post

- [ ] Commentaires
- [ ] Voir tous ses commentaires
- [ ] Mettre en place une notification si quelqu'un répond

### DEBUG ✍🏻

- [] Fixer, supprimer l'affichage de la bordure au clique sur une card, dans la partie profil-menu.(opéra)
- [] Ajouter une taille et faire une présentation pour la page de profil account.
- [] Ajouter une class pour géré le responsive pour l'affichage de la gallery et des blog.
- [] Ajuster l'affichage du component form-error-info debug responsive.
- [] Ajouter un trunc sur la description d'une image pour éviter le dépassement de la carte, faire l'action dans    CardBonsaiComponent.ts.
- [] Ajouter des paramètre d'entrée pour le composant bonsai-card, lui passer un objet BonsaiData, cette objet BonsaiData pourrat ainsi etre afficher différement BonsaiData Owner par ex ou BonsaiData All (public).
- [] Ajouter une redirection si le user tente de navigué a une url ou un token d'identification est nécessaire le rediriger vers le home ou autre.
- [] Refacto tout les services 1.call api, 2.gestion erreur, 3.display data

------------------ 

### GLOBAL IDEA OF COMPONENTS



## PROFIL BONSAI COMPONENT 


Ne pas faire de redirection pour :
=> l'ajout,
=> la suppresion,
=> la mise à jour

(ajouter un component qui lui vas géré les différentes action sur la même page)


## AJOUT BONSAI 

When user click on 'add' button, display one component wich represent the attempt field for create a new Bonsai


## UPDATE BONSAI 

Quand le user sélectionne le bouton 'update', celui reste sélectionner et permet attend une sélection d'un Bonsai.

Côté technique:
- Au clic du bouton update changé son état initial sur 'active'.
- Active le cursor sur les card qui représente les Bonsai déjà créer par le user.
- Au clic d'un bonsai présent dans liste permetre modifié les infos du Bonsai sélectionner.



## GALLERY 

Cette page vas affiché les 21 premier Bonsai stocker en base de donnée (les plus récents) :
- IMAGES
- TITRE
- DESCRIPTION?
- DATE DE CREATION



## BLOG 

Cette page vas affiché les 21 premier Blog (les plus récents):

