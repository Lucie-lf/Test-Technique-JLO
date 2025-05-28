# To-Do App – Test Technique Groupe JLO
Ce projet est une application de type to-do list, développée en React et TypeScript avec Tailwind CSS, dans le cadre d’un test technique pour le groupe JLO.

## Maquette & organisation
- Figma [https://www.figma.com/design/UxfV03T5HdBmYbtxW3pQ1T/Test-technique-JLO?t=Aaj4ux7sc1MHG7lO-1]
- Notion [https://www.notion.so/TEST-TECHNIQUE-1f998de146bd80f7befdc9db10e6d06b?pvs=4]

## Fonctionnalités
Page "ToDo" (/) :
- Création de tâche
- Modification de tâche
- Suppression individuelle
- Marquer une tâche comme réalisée
Page "Done" (/done) :
- Renvoyer une tâche dans les tâches à faire
- Suppression de toutes les tâches terminées
- Modification de tâche

Onglet Paramètres (roue crantée) :
4 thèmes visuels disponibles, s'appliquant à l'ensemble de l’interface

#" Navigation
Un bouton dans le header permet de basculer entre les deux pages principales

## Stack Technique
- React + TypeScript
- Tailwind CSS pour le design responsive
- React Router DOM pour la navigation entre pages
- Sonner pour les toast notifs
- Vite comme bundler
- Yarn comme gestionnaire de paquets

## Installation et lancement
Assurez-vous d’avoir Node.js et Yarn installés.

bash
Copier
Modifier
git clone [git@github.com:Lucie-lf/Test-Technique-JLO.git]
yarn dev
Accèdez ensuite à l'application via http://localhost:5173.

## Choix techniques
- Utilisation de React Router pour un routage simple et efficace
- Séparation claire entre tâches en cours et tâches terminées
- Thématisation via Tailwind avec switch dynamique
- Toast notifications avec Sonner
- Responsive design adapté aux écrans mobiles et desktop

## Documentation
- https://awwwards.com/
- https://react.dev/
- https://tailwindcss.com/
- https://ui.shadcn.com/docs/components/sonner
- https://youtube.com/