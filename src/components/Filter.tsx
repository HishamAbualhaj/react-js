function Filter() {
  return (
    <div className="products__filter">
      <div className="products__filter-input">
        <select id="category" title="Category">
          <option value="SMARTWATCHES">SMARTWATCHES</option>
          <option value="CELLPHONES">CELLPHONES</option>
          <option value="COMPUTERS and LAPTOPS">COMPUTERS &amp; LAPTOPS</option>
          <option value="ACCESSORIES">ACCESSORIES</option>
        </select>
      </div>

      <div className="products__filter-button filter" onClick={}>
        Filter
      </div>
      <div className="products__filter-button showAll" onClick={}>
        Show All
      </div>
    </div>
  );
}
export default Filter;
