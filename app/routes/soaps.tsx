import { Link } from "@remix-run/react";

export default function Soaps() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Módulo de Jabones</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/soaps/calculator" className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Calculadora</h2>
          <p className="text-brown-700">Calcula cantidades de aceites y sosa</p>
        </Link>
        <Link to="/soaps/recipes" className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Recetario</h2>
          <p className="text-brown-700">Guarda y organiza tus recetas</p>
        </Link>
        <Link to="/soaps/inventory" className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Inventario</h2>
          <p className="text-brown-700">Gestiona tus materiales</p>
        </Link>
      </div>
    </div>
  );
}
