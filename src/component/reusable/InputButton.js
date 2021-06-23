const InputButton = ({ title, color, ...otherProps }) => {
  return (
    <div>
      <button className={color} {...otherProps}>
        {title}
      </button>
    </div>
  );
};

export default InputButton;
