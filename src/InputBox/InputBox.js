const InputBox = (props) => {
  return (
      <input
          style={{
            border: "2px solid #0079bf",
            borderRadius: "5px",
            outline: "none",
            fontSize: "1rem",
            padding: "10px"
          }}
        type="text"
        value={props.inputText || ''}
        placeholder={props.placeholder || ''}
        onChange={(event) => props.handleChange(event.target.value)}
        autoFocus
      />
    
  );
};
export default InputBox;
