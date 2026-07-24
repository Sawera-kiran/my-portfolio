import "./Button.css";
import { FaArrowRight } from "react-icons/fa";

function Button({
  text,
  href,
  icon = true,
  target,
  rel,
  type = "button",
  onClick,
}) {

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="btn"
      >
        <span>{text}</span>

        {icon && <FaArrowRight className="btn-icon" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className="btn"
      onClick={onClick}
    >
      <span>{text}</span>

      {icon && <FaArrowRight className="btn-icon" />}
    </button>
  );
}

export default Button;