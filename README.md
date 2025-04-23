# 📝 Application Todo List avec React

Ce projet est une simple application de gestion de tâches (Todo List) développée dans le cadre d’un exercice pédagogique.  
L’objectif principal est de découvrir ou renforcer l'utilisation de **React** et la gestion d’état via les **hooks**.

---

## 🚀 Lancement du projet

Assurez-vous d'avoir `pnpm` installé, puis :

```bash
pnpm install
pnpm run dev
```

## ⚙️ Fonctionnalités par composant

### 🔍 SearchBar (Barre de recherche)

- Permet de saisir une nouvelle tâche.
- Envoi de la tâche au composant parent lors de la validation.
- Réinitialisation automatique du champ après soumission.

### ✅ TodoItem (Élément de tâche)

- Affiche chaque tâche avec une case à cocher.
- Coche = tâche terminée :
    - Fond de couleur modifié.
    - Texte barré.
    - Checkbox restée cochée.

- Décoche = tâche de nouveau active.
- Possibilité de supprimer la tâche.
- Chaque action remonte au composant parent.

### 📋 TodoApp (Application principale)

- Gère l'état global des tâches via useState.
- Affiche la liste triée :
    - D'abord les tâches à faire.
    - Ensuite les tâches terminées.

- Reçoit les modifications des composants enfants (ajout, suppression, validation).

## ✍️ Remarques pédagogiques

Tous les composants React doivent être créés et gérés manuellement.
L’objectif est de bien comprendre le flux de données entre les composants (du parent vers l’enfant et inversement).

## 📚 Ressources

Ne pas oublier de consulter les supports disponibles sur Microsoft Teams pour revoir les notions abordées en cours.

## 💡 Améliorations possibles (bonus)

- Ajouter un filtre (Tous / À faire / Terminés).
- Sauvegarde des tâches dans le localStorage.
- Ajout de transitions/animations lors de la suppression ou validation.
