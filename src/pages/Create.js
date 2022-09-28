import "./Create.css";

function Create({ appendCard }) {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    appendCard(data);
    
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label htmlFor="questionInput">Your question:</label>
      <input
        className="form__input"
        name="questionInput"
        type="text"
        id="questionInput"
      />
      <label htmlFor="answerInput">Your answer:</label>
      <input
        className="form__input"
        name="answerInput"
        type="text"
        id="answerInput"
      />
      <label htmlFor="answerInput">Your tags:</label>
      <input
        className="form__input"
        name="tagInput"
        type="text"
        id="tagInput"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Create;
