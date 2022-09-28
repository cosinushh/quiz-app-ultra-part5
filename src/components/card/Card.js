import { useState } from "react";
import "./Card.css";

function Card({
  question,
  answer,
  tags,
  bookmarked,
  deleteCard,
  id,
  toggleBookmark,
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section className="card">
      <h2>{question}</h2>
      <button
        onClick={() =>
          setShowAnswer((previousShowAnswer) => !previousShowAnswer)
        }
        className="card__button-answer"
        type="button"
      >
        {showAnswer ? "Hide answer" : "Show answer"}
      </button>
      {showAnswer && (
        <p className="card__answer card__answer--active">{answer}</p>
      )}
      <ul className="card__tag-list">
        {tags.map((tag, index) => (
          <li key={index} className="card__tag-list-item">
            #{tag}
          </li>
        ))}
      </ul>
      <div className="card__button-bookmark">
        <button
          onClick={() => toggleBookmark(id)}
          className={`card__bookmark ${bookmarked && "card__bookmark--active"}`}
          aria-label="bookmark"
          type="button"
        >
          <svg className="card__bookmark-icon" viewBox="0 0 24 24">
            <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
          </svg>
        </button>
      </div>
      {/* DELETE BUTTON */}
      <div className="card__button-delete">
        <button
          onClick={() => {
            console.log(id);
            deleteCard(id);
          }}
          className="card__delete"
          aria-label="delete"
          type="button"
        >
          <svg className="card__delete-icon" viewBox="1 -1 23 23">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Card;
