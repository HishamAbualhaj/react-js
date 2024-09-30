import { useState } from "react";

interface FilterProps {
  onFilter: (category: string) => void;
  onShowAll: () => void;
}

const Filter = ({ onFilter, onShowAll }: FilterProps) => {
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    onFilter(category);
  };

  return (
    <div className="products__filter">
      <div className="products__filter-input">
        <select
          id="category"
          title="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="SMARTWATCHES">SMARTWATCHES</option>
          <option value="CELLPHONES">CELLPHONES</option>
          <option value="COMPUTERS and LAPTOPS">COMPUTERS &amp; LAPTOPS</option>
          <option value="ACCESSORIES">ACCESSORIES</option>
        </select>
      </div>

      <div className="products__filter-button filter" onClick={handleFilter}>
        Filter
      </div>
      <div className="products__filter-button showAll" onClick={onShowAll}>
        Show All
      </div>
    </div>
  );
};

export default Filter;
