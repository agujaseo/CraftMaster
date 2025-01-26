import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-beige-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-brown-800 mb-6">CraftMaster</h1>
        <p className="text-brown-700 mb-8 text-lg">
          Tu asistente para la fabricación de velas y jabones artesanales
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/candles"
            className="bg-beige-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-brown-800 mb-4">Velas</h2>
            <p className="text-brown-700">Calculadoras, recetas y gestión de inventario para velas</p>
          </Link>
          <Link
            to="/soaps"
            className="bg-green-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-brown-800 mb-4">Jabones</h2>
            <p className="text-brown-700">Herramientas para la fabricación de jabones artesanales</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
