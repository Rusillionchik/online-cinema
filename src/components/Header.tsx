import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">🎬 КиноТеатр</div>
      <input type="text" className="search" placeholder="Поиск фильмов..." />
    </header>
  );
}

export default Header;
