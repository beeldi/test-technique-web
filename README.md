
# __**Test technique Web**__

## Introduction

Le but de ce test est de créer une application simple. Cette application doit nous permettre d'évaluer l'état de vos connaisances sur React et Javascript. Aucune limite de temps n'est imposé pour réaliser ce test (dans la limite du raisonable). Il n'y a donc aucune raison de se presser. Favorisez la qualité à la quantité.

Vous êtes libre d’utiliser les libraries externes de votre choix si nécessaire. À vous également de choisir l'architecture que vous pensez la plus adaptée. Attendez vous à être questionné sur ces choix.

## Données fournies

- Un projet bootstrappé avec create-react-app et les librairies nécessaires
- Un accès à une base de données Firebase Realtime Database avec les données suivantes :
    - Une table Equipments avec pour chaque équipement :
        - name: Nom de l'équipement,
        - building: Nom du batiment,
        - domain: Domaine technique,
        - niveau: Niveau ou se situe l'équipement,
        - local: Local ou se situe l'équipement,
        - photo: URL de la photo de l'équipement
        - brand: Marque,
        - model: Modèle,
        - serialNumber: Numéro de série
        - quantity: Quantité,
        - status: Dernier statut constaté,
        - notes: Prise de notes,
        - nbFaults: Nombre de défauts sur l'équipement,
    - Une table Checkpoints avec pour chaque point de contrôle :
        - equipmentKey: Clé firebase de l'équipement concerné,
        - name: Nom du point de contrôle,
        - fault: Nom du défaut (optionnel),
        - recommandation: Préconisation (si défaut),
- Deux fichiers .csv contenant les données de ces deux tables

## Consignes

L'application devra comporter au moins deux pages, aucun système d'authentification n'est requis.
L'UI de l'application ne vous est pas imposée, laissez parler votre créativité. Cependant ce n'est pas l'élément principal sur lequel vous serez jugé, privilégiez la qualité du code et la pertinence de vos choix techniques. 

Pour la provenance des données, vous avez la possibiité d'utiliser la base de données Firebase fournie ou de mettre en place un autre système de base de données grâce aux fichiers .csv fournis ou d'utiliser directemment ces fichiers .csv.
### Page 1 - Liste des équipements :

Le but de cette page est :

1. Afficher la liste des équipements triés alphabétiquement par leur nom, la cellule comprendra :	
	- Le nom de l'équipement ;
	- Le domaine de l'équipement ;
	- Le nombre de défauts associés ;
	- La photo de l'équipement.
	
2. Un barre de recherche permettant de filtrer les équipements par leur domaine ou par leur nom ;
3. Pouvoir accéder à la page de détail d'un équipement en cliquant dessus.

### Page 2 - Détail d'un équipement : 

Le but de cette page est :

1. Afficher la photo de l'équipement ;
2. Afficher une section des infos de l'équipement (nom, domaine, etc...) ;
3. Afficher une section des caractéristiques de l'équipement ;
4. Afficher la liste des points de contrôle et défauts associés. Pour chaque point de contrôle, afficher :
	- Le point de contrôle ;
	- Le défaut si il existe ;
	- La préconisation si le défaut existe ;
	- La photo si elle existe.

## Fonctionnalités supplémentaires

Si vous avez le temps et l'envie, vous pouvez développer des fonctionnalités supplémentaires :
    
- Permettre la modification des champs (demander l'autorisation pour écrire dans la base de données)
- Ajouter plus de critères de recherche pour la liste des équipements (marque, niveau, ...)
- Tout autre fonctionnalité qui peut améliorer l'expérience utilisateur

## Pour finir

Bon courage !!!
