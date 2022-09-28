import Card from "../components/card/Card";

function Cards({ cards, deleteCard, toggleBookmark}) {
  return cards.map((card) => (
    <Card
      key={card.id}
      question={card.question}
      answer={card.answer}
      tags={card.tags}
      bookmarked={card.bookmarked}
      deleteCard={deleteCard}
      id = {card.id}
      toggleBookmark={toggleBookmark}
    />
  ));
}

export default Cards;
