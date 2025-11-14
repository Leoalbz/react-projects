import style from "./CardProductStyles.module.css"

type SearchProps = {
  query: string[];
  setSearchParams: (params: Record<string, string | null>) => void;
};

export default function SearchBar({ query, setSearchParams }: SearchProps) {
  return (
    <div className="filtercontainer">
    <form>
      <label htmlFor="searchByName">Buscar: </label>
      <input
        id="searchByName"
        name="searchByName"
        value={query}
        onChange={(e) => setSearchParams({ title: e.target.value })}
        placeholder="Buscá el producto que más te interese"
        className={style.searchBar}
      />
    </form>
    </div>
  );
}