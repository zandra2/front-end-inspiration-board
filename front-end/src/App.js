import "./App.css";
import Board from "./components/Board";
import NewBoard from "./components/NewBoard";
import NewCard from "./components/NewCard";
import CardTitle from "./components/CardTitle";
import CardBoard from "./components/CardBoard";
// import CardNote from "./components/CardNote";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Symaviza's Inspiration Board</h1>
      </header>
      <main>
        <form>
          <Board />
          <NewBoard />
          <NewCard />
          <CardTitle />
          <CardBoard />
          {/* <CardNote /> */}
        </form>
      </main>
    </div>
  );
}

export default App;
