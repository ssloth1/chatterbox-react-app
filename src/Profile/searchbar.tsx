import { useState } from "react";

export default function SearchBar({ fetchUsers }: { fetchUsers: (searchText: string) => void }) {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = () => {
    console.log("HIITT");
    fetchUsers(searchText);
  };


  return (
    <div className="search-bar d-flex">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        value={searchText}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}