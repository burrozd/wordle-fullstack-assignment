import "./App.css";
import Board from "./components/board";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      {/* <nav>
        <h1>Burak's Wordle</h1>
      </nav> */}
      <Nav />
      <Board />
    </div>
  );
}

export default App;
