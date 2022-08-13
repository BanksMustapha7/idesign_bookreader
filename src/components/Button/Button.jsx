import "./Button.css";
const Button = ({ title, font }) => {
  return <button style={{ fontSize: `${font}` }}>{title}</button>;
};

export default Button;
