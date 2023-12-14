import "./input.scss";

const Input = ({
  className,
  id,
  label,
  type,
  value,
  placeholder,
  disabled,
  required,
  readOnly,
  autoComplete,
  onInputChange,
}) => {
  return (
    <div className={!!className ? `field ${className}--field` : "field"}>
      <label
        htmlFor={`${id}`}
        className={
          !!className ? `field__label label ${className}--field__label` : "field__label label"
        }
      >
        {label}
      </label>
      <input
        id={`${id}`}
        name={`${id}`}
        className={
          !!className ? `field__input input ${className}--field__input` : "field__input input"
        }
        type={type || "text"}
        value={value}
        placeholder={placeholder || ""}
        disabled={!!disabled}
        required={!!required}
        readOnly={!!readOnly}
        autoComplete={autoComplete || "off"}
        onChange={!!onInputChange ? (e) => onInputChange(e.target.value) : null}
      />
    </div>
  );
};

export default Input;
