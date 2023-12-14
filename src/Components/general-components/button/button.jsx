import "./button.scss";

const Button = ({ className, type, disabled, autoFocus, onButtonClick, content }) => {
  const handleClick = () => {
    if (!onButtonClick) return;
    onButtonClick();
  };

  return (
    <button
      className={`button ${className || ""}`}
      type={type || "button"}
      disabled={!!disabled}
      autoFocus={!!autoFocus}
      onClick={handleClick}
    >
      {content || "button"}
    </button>
  );
};

export default Button;
