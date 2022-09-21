import Card from "../components/card/Card";

function Cards({ cards }) {
  return cards.map((card) => (
    <Card
      key={card.id}
      question={card.question}
      answer={card.answer}
      tags={card.tags}
      bookmarked={card.bookmarked}
    />
  ));
}

export default Cards;
