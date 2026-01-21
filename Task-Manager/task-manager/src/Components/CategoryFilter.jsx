function CategoryFilter({ selected, onChange }) {
  const categories = ["All", "Work", "Personal", "Study"];

  return (
    <div className="category-filter">
      {categories.map(cat => (
        <button
          key={cat}
          className={selected === cat ? "active" : ""}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
