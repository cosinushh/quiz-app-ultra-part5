import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

const cards = [
  {
    id: "b5db267b-3275-4a86-a9f4-e7f927d33ed0",
    question: "Question 1",
    answer: "Answer 1",
    tags: ["Tag 1a", "Tag 1b", "Tag 1c"],
  },
  {
    id: "8f76114b-c30c-411d-ad38-77ce69079eef",
    question: "Question 2",
    answer: "Answer 2",
    tags: ["Tag 2a", "Tag 2b", "Tag 2c"],
  },
  {
    id: "8c74c87b-2a68-4aa1-9733-4c6917dfdf88",
    question: "Question 3",
    answer: "Answer 3",
    tags: ["Tag 3a", "Tag 3b", "Tag 3c"],
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {cards.map((card) => (
          <Card
            key={card.id}
            question={card.question}
            answer={card.answer}
            tags={card.tags}
          />
        ))}
      </main>
      <Navigation />
    </div>
  );
}

export default App;
