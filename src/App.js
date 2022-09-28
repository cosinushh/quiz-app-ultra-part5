import "./App.css";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Cards from "./pages/Cards";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

/* const initialCards = [
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
]; */

function App() {
  const [page, setPage] = useState("home");
  const [cards, setCards] = useState([]);

  async function getQuestions() {
    const result = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await result.json();
    const newQuestions = data.results.map((singleQuestion) => {
      return {
        id: Math.random().toString(36).substring(2),
        question: singleQuestion.question,
        tags: [singleQuestion.category],
        answer: singleQuestion.correct_answer,
        bookmarked: false,
      };
    });
    console.log(newQuestions);
    setCards(newQuestions);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  /* PAGE NAVIGATION */
  function changePageState(pageName) {
    setPage(pageName);
  }

  /* APPEND CARD */
  function appendCard(data) {
    const newCards = [
      ...cards,
      {
        id: Math.random().toString(36).substring(2),
        question: data.questionInput,
        answer: data.answerInput,
        tags: [data.tagInput],
        bookmarked: false,
      },
    ];
    setCards(newCards);
    setPage("home");
  }

  /* DELETE CARD */
  function deleteCard(cardId) {
    const newCards = cards.filter((card) => {
      return cardId !== card.id;
    });
    setCards(newCards);
  }

  /* TOGGLE BOOKMARK */

  function toggleBookmark(cardId) {
    const newCards = cards.map((card) => {
      return {
        ...card,
        bookmarked: cardId === card.id ? !card.bookmarked : card.bookmarked,
      };
    });
    setCards(newCards);
  }

  /* MAIN */
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Routes>
          <Route
            path="/"
            end
            element={
              <Cards
                cards={cards}
                deleteCard={deleteCard}
                toggleBookmark={toggleBookmark}
              />
            }
          />
          <Route
            path="/bookmarks"
            element={
              <Cards
                cards={cards.filter((card) => card.bookmarked)}
                deleteCard={deleteCard}
                toggleBookmark={toggleBookmark}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create appendCard={appendCard} />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>

        {/* {page === "bookmark" ? (
          <Cards
            cards={cards.filter((card) => card.bookmarked)}
            deleteCard={deleteCard}
            toggleBookmark={toggleBookmark}
          />
        ) : page === "profile" ? (
          <Profile />
        ) : page === "create" ? (
          <Create appendCard={appendCard} />
        ) : (
          <Cards
            cards={cards}
            deleteCard={deleteCard}
            toggleBookmark={toggleBookmark}
          />
        )} */}
      </main>
      <Navigation page={page} changePageState={changePageState} />
    </div>
  );
}

export default App;
