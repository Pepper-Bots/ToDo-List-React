// Ce composant représente 1 tâche individuelle dans la liste

// Il exporte le composant TodoItem
// Il importe le type TodoItemType depuis type.ts
// Il utilise le type TodoItemProps pour typer les props du composant
// Il utilise les props todo, onToggleDone et onDeleteTodo pour afficher et gérer les tâches
// Il exporte le composant TodoItem
// Il importe le type TodoItemType depuis type.ts
// Il utilise le type TodoItemProps pour typer les props du composant
// Il utilise les props todo, onToggleDone et onDeleteTodo pour afficher et gérer les tâches
// Il exporte le composant TodoItem
// Il importe le type TodoItemType depuis type.ts
// Il utilise le type TodoItemProps pour typer les props du composant

// TodoItem.tsx
import React from "react";
import { TodoItemType } from "./type"; // Import the type

// Il définit un type TodoItemProps qui décrit les propriétés du composant

type TodoItemProps = {
  // Il contient -> L'objet todo de type TodoItemType,
  //-> 2 fonctions callback onToggleDone et onDeleteTodo
  todo: TodoItemType;
  onToggleDone: (id: number) => void;
  onDeleteTodo: (id: number) => void;
};

export function TodoItem({ todo, onToggleDone, onDeleteTodo }: TodoItemProps) {
  return (
    // Il retourne un div avec :

    <div
      className={`w-full m-5 rounded-box p-3 flex ${
        // La classe CSS du div change en fonction de l'état de la tâche (terminée ou non)
        todo.done ? "bg-green-600" : "bg-yellow-400"
      }`}
    >
      <span className="pr-8">
        <input
          // 1 - Une checkbox (case à cocher) pour marquer la tâche comme terminée (onChange appelle la fonction onToggleDone)
          type="checkbox"
          className="checkbox"
          checked={todo.done}
          onChange={() => onToggleDone(todo.id)}
        />
      </span>
      {/* // 2 - Une description de la tâche (avec une classe CSS "line-through" (ligne barrée) si la tâche est terminée) */}
      <span className={`flex-grow ${todo.done ? "line-through" : ""}`}>
        {todo.description}
      </span>
      <div>
        <button
          className="btn btn-error btn-outline btn-xs"
          // 3 - Un bouton "X" pour supprimer la tâche (onClick appelle la fonction onDeleteTodo)
          onClick={() => onDeleteTodo(todo.id)}
        >
          X
        </button>
      </div>
    </div>
  );
}
