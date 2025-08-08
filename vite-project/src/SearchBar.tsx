type SearchProps = {
  query: string[];
  setSearchParams: (params: Record<string, string | null>) => void;
};

export default function SearchBar({ query, setSearchParams }: SearchProps) {
  return (
    <div className="filtercontainer">
    <form>
      <label htmlFor="searchByName" className="text-gray-700 font-semibold">Buscar: </label>
      <input
        id="searchByName"
        name="searchByName"
        value={query}
        onChange={(e) => setSearchParams({ title: e.target.value })}

        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
    </div>
  );
}