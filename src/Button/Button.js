const Button = (props) => {
  return (
    <button
      style={{
        cursor: "pointer",
        borderRadius: "5px",
        outline: "none",
        backgroundColor: "#0079bf",
        color: "#fff",
        border: "none",
        transition: "100ms ease",
        padding: "10px"
      }}
      type="submit"
      onClick={() => props.handleOnClick()}
      >{ props.name || '버튼' }</button>
  );
};
export default Button;
