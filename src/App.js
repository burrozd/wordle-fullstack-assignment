import "./App.css";
import Board from "./components/board";
import Nav from "./components/nav";
import Input from "./components/input";
/* import Output from "./components/Output"; */

function App() {
  return (
    <div className="App">
      {/* <nav>
        <h1>Burak's Wordle</h1>
      </nav> */}
      <Nav />
      <Input />
      <Board />
      {/* <Output /> */}
    </div>
  );
}

export default App;
