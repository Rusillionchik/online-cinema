import "../styles/FilterPanel.css";

function FilterPanel() {
  return (
    <div className="filters">
      <input
        type="text"
        className="search-input"
        placeholder="Поиск фильмов..."
      />

      <select className="sort-select">
        <option value="title">Сортировать по названию</option>
        <option value="year">Сортировать по году</option>
      </select>

      <select className="year-filter">
        <option value="all">Все годы</option>
        <option value="2020">2020</option>
        <option value="2014">2014</option>
        <option value="2010">2010</option>
        <option value="2008">2008</option>
      </select>
    </div>
  );
}

export default FilterPanel;
