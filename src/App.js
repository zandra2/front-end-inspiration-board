import "./App.css";
import BoardSelect from "./components/BoardSelect";
import NewBoard from "./components/NewBoard";
import NewCard from "./components/NewCard";
import CardTitle from "./components/CardTitle";
import CardBoard from "./components/CardBoard";
import CardNote from "./components/CardNote";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // TODO:  rename data to boards (a list of all board objects...)
  // TODO:  Save for later - create a setBoards function that will update this list.  That data will come from your backend.
  const [boards, setBoards] = useState([
    {
      board_id: "1",
      owner: "Zandra",
      title: "Test Board 1",
      cards: [
        {
          card_id: "1",
          likes_count: "0",
          message: "Here's my first card",
          board_id: "1",
        },
        {
          card_id: "2",
          likes_count: "0",
          message: "Here's my second card",
          board_id: "1",
        },
      ],
    },
    {
      board_id: "2",
      owner: "Mike",
      title: "Test Board 2",
      cards: [
        {
          card_id: "1",
          likes_count: "0",
          message: "Here's my first card",
          board_id: "2",
        },
        {
          card_id: "2",
          likes_count: "0",
          message: "Here's my second card",
          board_id: "2",
        },
      ],
    },
  ]);

  // TODO: pass setBoard as a prop down to boardSelect.js and fire when the selecct dropdown list changes
  // TODO: board is now a single board object which you can pass down as a prop to the CardBoard.js component
  const [board, setBoard] = useState({
    board_id: "1",
    owner: "Zandra",
    title: "Test Board 1",
    cards: [
      {
        card_id: "1",
        likes_count: "0",
        message: "Here's my first card",
        board_id: "1",
      },
      {
        card_id: "2",
        likes_count: "0",
        message: "Here's my second card",
        board_id: "1",
      },
    ],
  }); // a single board object

  // this runs when react attempts to render this component
  // useEffect(() => {
  //   axios
  //     .get("https://inspiration-board-api.herokuapp.com/")
  //     .then((data) => {
  //       setBoards(data);
  //     })
  //     .catch((err) => {
  //       console.log("opps!", err);
  //     });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Symaviza's Inspiration Board</h1>
      </header>
      <main>
        <BoardSelect boards={boards} /> {/** rename to boardSelect.js ??? */}
        <CardBoard board={board} />
        <NewBoard />
        {/* <form>
          <div className="top-container"> */}
        {/* does board needs a form tag to send http request? */}
        {/* <Board />
            <NewBoard />
            <NewCard />
          </div>
          <CardTitle />
          <div className="bottom-container">
            <CardNote />
          </div> */}
        {/* </form> */}
      </main>
    </div>
  );
}

export default App;
