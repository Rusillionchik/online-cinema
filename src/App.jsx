import "./App.css";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <FilterPanel />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
