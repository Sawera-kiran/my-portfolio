import "./Button.css";

function Button({ text, onClick, className, type = "button" }) {
  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;