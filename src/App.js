import "./App.css";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Cards from "./pages/Cards";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";

const cards = [
  {
    id: "b5db267b-3275-4a86-a9f4-e7f927d33ed0",
    question: "Question 1",
    answer: "Answer 1",
    tags: ["Tag 1a", "Tag 1b", "Tag 1c"],
    bookmarked: true,
  },
  {
    id: "8f76114b-c30c-411d-ad38-77ce69079eef",
    question: "Question 2",
    answer: "Answer 2",
    tags: ["Tag 2a", "Tag 2b", "Tag 2c"],
    bookmarked: false,
  },
  {
    id: "8c74c87b-2a68-4aa1-9733-4c6917dfdf88",
    question: "Question 3",
    answer: "Answer 3",
    tags: ["Tag 3a", "Tag 3b", "Tag 3c"],
    bookmarked: true,
  },
];

function App() {
  const [page, setPage] = useState("home");

  function onClickFunction(pageName) {
    setPage(pageName);
    console.log(pageName);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {page === "bookmark" ? (
          <Cards cards={cards.filter((card) => card.bookmarked)} />
        ) : page === "profile" ? (
          <Profile />
        ) : page === "create" ? (
          <Create />
        ) : (
          <Cards cards={cards} />
        )}
      </main>
      <Navigation page={page} onClick={onClickFunction} />
    </div>
  );
}

export default App;
