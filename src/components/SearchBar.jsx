function SearchBar({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option>All</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Study</option>
        <option>Other</option>
      </select>
    </div>
  );
}

export default SearchBar;