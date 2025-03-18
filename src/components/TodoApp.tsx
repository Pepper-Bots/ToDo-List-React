// Ce composant est le coeur de l'application
// Il contient la logique principale de l'application
// Il utilise un state local 'todos' pour stocker la liste des tâches (initailisée avec 3 tâches)

// Il définit 3 fonctions : handleAddTodo, handleToggleDone et handleDeleteTodo :
// handleAddTodo créer une nouvelle tâche avec un ID unique (basé sur la date actuelle) + l'ajoute au tableau
// handleToggleDone permet de basculer l'état "done" d'une tâche spécifique en utilisant son ID
// handleDeleteTodo permet de supprimer une tâche de la liste en filtrant par ID

// TodoApp.tsx
import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { TodoItem } from "./TodoItem";
import { TodoItemType } from "./type"; // Import the type

export function TodoApp() {
  const [todos, setTodos] = useState<TodoItemType[]>([
    { id: 1, description: "Acheter des oranges", done: false },
    { id: 2, description: "Courir avec le fraté", done: true },
    { id: 3, description: "Me faire défoncer à LoL", done: true },
  ]);

  const handleAddTodo = (description: string) => {
    const newTodo: TodoItemType = {
      id: Date.now(), // Simple unique ID for now
      description,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Trie les tâches avec sortedTodos pour afficher d'abord les tâches non terminées
  const sortedTodos = [...todos].sort((a, b) =>
    a.done === b.done ? 0 : a.done ? 1 : -1
  );

  return (
    <>
      {/* TodoApp.tsx retourne :
    // 1) le composant SearchBar pour ajouter de nouvelles tâches avec la fonction handleAddTodo passée en props
    // une liste de TodoItem pour afficher les tâches existantes avec les fonctions handleToggleDone et handleDeleteTodo passées en props 
    // 2) Un conteneur qui affiche toutes les tâches triées en utilisant 'map' pour créer un composant 'TodoItem' pour chaque tâche */}

      <SearchBar onAddTodo={handleAddTodo} />

      <div className="my-5 flex-column gap-5 w-full text-left">
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={handleToggleDone}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
    </>
  );
}
