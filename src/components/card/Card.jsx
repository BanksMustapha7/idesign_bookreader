import "./Card.css";
const Card = ({ author, time, title, img }) => {
  return (
    <div className="card">
      <div>
        <h4 className="author">{author}</h4>
        <h4>{time}</h4>
      </div>
      <h3>{title}</h3>
      <img src={img} alt="book-img" />
    </div>
  );
};

export default Card;
