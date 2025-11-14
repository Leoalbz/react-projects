import { useState } from "react";

type CheckBoxProps = {
  categoriasElegidas: string[];
  setSearchParams: (params: Record<string, string | null>) => void;
};



export default function CheckBox({ categoriasElegidas, setSearchParams }: CheckBoxProps) {
  const categorias = ["electronics", "clothing", "home"];
  const [isOpen, setIsOpen] = useState(false);
  const categoriasDisplay = {
    electronics: "Electrónicos",
    clothing: "Ropa y Accesorios",
    home: "Hogar y Cocina"
  };

  const handleCheckboxChange = (categoria: string) => {
    let newCategorias = [...categoriasElegidas];

    if (newCategorias.includes(categoria)) {
      newCategorias = newCategorias.filter((c) => c !== categoria);
    } else {
      newCategorias.push(categoria);
    }

    const value = newCategorias.length > 0 ? newCategorias.join(",") : null;
    setSearchParams({ categoria: value });
  };

  
  return (
    <div className="relative inline-block text-left">
      {/* Botón para abrir/cerrar el filtro */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-900  text-sm font-medium hover:bg-gray-800 focus:outline-none"
        aria-expanded={isOpen}
      >
        Filtrar
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-black-important ring-1 ring-white ring-opacity-20 z-10 p-4">
          <h4 className="font-semibold mb-2">Categorías</h4>
          <div className="flex flex-col space-y-2">
            {categorias.map(categoria => (
              <label key={categoria} className="inline-flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={categoriasElegidas.includes(categoria)}
                  onChange={() => handleCheckboxChange(categoria)}
                  className="form-checkbox h-5 w-5 text-blue-500 bg-gray-800 border-gray-700"
                />
                <span>{categoriasDisplay[categoria]}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}