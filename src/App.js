import logo from "./DictionaryLogo.png";
import "./App.css";
import SearchEngin from "./SearchEngin";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <SearchEngin />
        </main>
        <footer className="App-footer text-center">
          <small>Coded by Klaudia Wawrzynczyk</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
