import "./App.css";
import Board from "./components/Board";
import NewBoard from "./components/NewBoard";
import NewCard from "./components/NewCard";
import CardTitle from "./components/CardTitle";
// import CardBoard from "./components/CardBoard";
import CardNote from "./components/CardNote";
import { useState } from "react";

// const [{"board_id":167,"owner":"Ada L.","title":"Pick-me-up Quotes"},{"board_id":168,"owner":"adfa","title":"fadf"},{"board_id":169,"owner":"fdafdffadfa","title":"fafdaf"},{"board_id":170,"owner":"sfbs","title":"bgbsfbsbs"},{"board_id":171,"owner":"sbfdf","title":"bgsbgs"},{"board_id":172,"owner":"ynhdt","title":"fbsbfbg"},{"board_id":173,"owner":"nhtdh","title":"thtd"},{"board_id":174,"owner":"mary tian","title":"test"}]

// board {"title": "title",
//       "ownerName": "text",
//       cardList: [
//         "cardID": 1,
//         message: "text"
//         numofLikes: "num"]

function App() {
  // setting states for board's title
  const [title, setTitle] = useState(null);
  // setting states for board's author
  const [owner, setOwner] = useState(null);

  // add movie even handler
  const addTitle = (title) => {
    setTitle(title);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Symaviza's Inspiration Board</h1>
      </header>
      <main>
        <form>
          <div className="top-container">
            {/* does board needs a form tag to send http request? */}
            <Board />
            <NewBoard />
            <NewCard />
          </div>
          <CardTitle />
          <div className="bottom-container">
            <CardNote />
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
