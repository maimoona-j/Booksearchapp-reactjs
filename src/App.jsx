import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Footer/>
    </div>
  );
}

export default App;
