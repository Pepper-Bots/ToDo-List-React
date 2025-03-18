//Point d'entrée de l'appli

import "./App.css";

// Importe + utilise le 1er composant TodoApp
import { TodoApp } from "./components/TodoApp";

// Premier composant
// Retourne une structure HTML avec :
// Un div principal avec une classe CSS "hero" et "min-h-screen" (classes DaisyUI/Tailwind pour un affichage plein écran)
// Un titre centré "Ma liste de choses à faire"
// Le composant TodoApp qui contient la logique principale de l'application
function App() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center flex-col">
        <h1 className="text-5xl font-bold">Ma liste de choses à faire</h1>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
