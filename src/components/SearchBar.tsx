// SearchBar.tsx
import React, { useState } from "react";

// Ce composant gère la barre de recherche et l'ajout de tâches
// Il définit un type SearchBarProps qui décrit les propriétés du composant
// Il prend en paramètre une fonction onAddTodo, reçue en props qui permet d'ajouter une tâche => Cette fonction sera appelée lors de l'ajout d'une tâche

// Il utilise un state local 'description' pour stocker la valeur de l'input

// Il définit 2 fonctions : handleAddTodo et handleKeyDown
// handleAddTodo permet d'ajouter une tâche à la liste si la description n'est pas vide
// handleKeyDown permet d'ajouter une tâche à la liste lorsqu'on appuie sur la touche "Entrée"

//Il retourne un formulaire avec un input et un bouton
//L'input permet de saisir la description de la tâche (mise à jour du state local 'description' à chaque changement)
//Le bouton permet d'ajouter une tâche à la liste (appel de la fonction handleAddTodo lors du clic) -> déclenche ajout d'une tâche

export type SearchBarProps = {
  onAddTodo: (description: string) => void;
};

export function SearchBar({ onAddTodo }: SearchBarProps) {
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (description.trim() !== "") {
      // Prevent adding empty todos
      onAddTodo(description);
      setDescription(""); // Reset the input field
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="flex">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Ajouter une tâche"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button className="btn btn-primary" onClick={handleAddTodo}>
        +
      </button>
    </div>
  );
}
