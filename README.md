# Interrogation Angular

Une fois votre devoir terminer, envoyer le moi par mail à l'adresse : ange.picard@pm.me.

**PENSEZ BIEN A SUPRRIMER LE DOSSIER .git ET node_modules**

> Pas la peine de faire de CSS, uniquement l'aspect fonctionnel sera pris en compte.

## Informations

Nom:   Follet
Prenom:  Théodore

## Question ouvertes

Merci de répondre avec vos mots, même s'ils sont inexactes, je veux voir que vous avez compris, pas que vous savez faire un copier-coller.

### Qu'est qu'Angular et quel est son intérêt ?

```
Angular est un framework javascript (js) sont intérêt est de développer rapidement des applications web (web app), généralement une application avec une seul page (ce qui simplifie l'expérience utilisateur).
```

### Qu'est-ce-qu'un composant

```
Un composant est une sorte de module que l'on peut appeler (intégrer) dans notre application via un appel à celui-ci, via un appel par balise comme en HTML ex : <monComponent></monComponent>.
On peut aussi lui donner des informations en entrée, ex : <monComponent [varTitle]="varYouWantToTransfer"></monComponent>
```

### Comment est découper un composant dans Angular ?

```
Dans Angular nous avons dans un premier temps les lignes qui servent à l'import des dépendances.
Import { componentToImport } from 'SourcesOfTheComponent)
Dans un second temps le sélectionneur (qui permettra d'appeler notre composant) ainsi que la définition de la représentation graphique de celui-ci (HTML/CSS).

Enfin pour terminer nous avons là class qui est/sera lié à ce composant, avec des définitions de variables, de fonctions, ainsi qu'un constructeur.
```

### Pourquoi vaut-il mieux faire de petit composant ?

```
Ceux-ci sont plus simples à maintenir (à améliorer), ils ne sont pas trop spécifiques donc peuvent être appelés dans plusieurs situations.
La visibilité est plus simple et donc le développement de ceux-ci est donc plus simple/agréable.
```

### A quoi sert un service ?

```
Le but d'un service est d'être injecté dans des composants et celui-ci sert à centraliser certaines méthodes, certaines variables pour ensuite être appelé/utiliser.
```

### Qu'est-ce-qu'un observable, et quel est son intérêt ?

```
Un observable permet à un composant de s'y abonner et donc de recevoir les mises à jour automatiquement (de manière async).
Par exemple une liste de nombre qui serait afficher sur une page sera automatiquement misé à jour dans tous les composants qui l'inject (l'appel) lorsque nous ajoutera un element dans la liste.
```

## Exercice 1

- Créer un nouveau projet Angular
- Dans le AppComponent
    - Ajouter un input
    - Ajouter un span
    - Faire en sorte que quand l'utilisateur entre du contenu dans l'input, il soit également écrit dans le span. On voit la même chose dans le span et dans l'input.
    - Ajouter un bouton permettant de vider le contenu de l'input et du span
- Créer un composant ListComponent
    - L'ajouter dans le template du AppComponent
    - Afficher la liste qui suit dans ListComponent
        - ['Jean', 'Jacques', 'Martin']
- Ajouter un bouton "CACHER" dans le AppComponent
    - A chaque click, cacher ou afficher ListComponent

## Exercice 2

Cette partie de l'interrogation porte sur le projet PokeAdopt.

Pour l'instant l'application n'affiche que la première page de la liste de pokemon l'API.

- Ajouter un bouton précédent et suivant en haut de la liste
- Quand on clique sur précédent ou suivant, afficher la page précédente ou suivante de l'API
- Bonus: Griser le bouton précédent s'il n'y a pas de page précédente
- Bonus: Afficher le numéro de page entre les deux boutons (Page 1 / XXX)