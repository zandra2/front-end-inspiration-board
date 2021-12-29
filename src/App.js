import "./App.css";
import Board from "./components/Board";
import NewBoard from "./components/NewBoard";
import NewCard from "./components/NewCard";
import CardTitle from "./components/CardTitle";
// import CardBoard from "./components/CardBoard";
import CardNote from "./components/CardNote";
import { useState, useEffect } from "react";


// const boardData = [{ board_id: "", owner: "", title: "" }];

// const cardData = {
//   card: [{ board_id: "", card_id: "", likesCount: "", message: "" }],
// };


function App() {
  // setting states for board's title
  const [title, setTitle] = useState("Title");
  // setting states for board's author
  const [owner, setOwner] = useState(`Owner's Name`);
  // setting states for main board
  // const [board, setBoard] = useState(handleAddTitle(handleAddTitle()));
  const [board, setBoard] = useState([]);
  const [cardInfo, setCardInfo] = useState([{cardId: 1, message: 'Good Job', likesCount:2}]);
  

  
  const [likesCount, setLikesCount] = useState(0);
  
    useEffect(() =>{
    },[likesCount])
  

  //set default object to be empty
  // const setDefaultBoardState = () => {
  //   return {
  //     board_id: "",
  //     title: "",
  //     owner: "",
  //   };
  // };

  //set default object to be empty
  // const setDefaultBoardState = () => {
  //   return boardData;
  // };

  // performs validation of the field data entered by the user fields is an object with id, title, and owner keys.
  // trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string
  const validateBoardInput = (fields) => {
    const result = {};
    result.board_id = fields.board_id;
    result.title = fields.title.trim();
    result.owner = fields.owner.trim();

    if (result.title.length === 0 || result.owner.length === 0) {
      return null;
    }

    return result;
  };

  // add movie even handler
  const addTitle = (title) => {
    setTitle(title);
  };

  // add owner's name
  const addOwner = (owner) => {
    setTitle(owner);
  };

  //add title to board list
  const addBoard = (title, owner) => {
    setBoard(board);
  };

  // create a callbackfunc to update state when title is ready
  const handleAddTitle = (title) => {
    setTitle(title);
  };

  // create a callbackfunc to update state when name is ready
  const handleAddOwner = (owner) => {
    setOwner(owner);
  };

  // create a callbackfunc to update state when board is ready?
  const handleAddBoard = (title, owner) => {
    setOwner(board);
  };



  function deleteCard (id) {
    setCardInfo(cardInfo.filter(card => card.cardId !== id));
  }

  
  const cards = cardInfo.map((card, i) => {
    return (<CardNote 
    key={i}
    cardId={card.cardId}
    message={card.message}
    likesCount={card.likesCount}
    deleteCard={deleteCard}
    />)
  });


  return (
    <div className="App">
      <header className="App-header">
        <h1>Symaviza's Inspiration Board</h1>
      </header>
      <main>
          <div className="top-container">
            {/* does board needs a form tag to send http request? */}
            <Board />
            <NewBoard onAddTitle={handleAddTitle} onAddOwner={handleAddOwner} />
            <NewCard />
          </div>
          <CardTitle />
          <div className="bottom-container">
            {cards} 
          </div>
      </main>
    </div>
  );
}

export default App;
