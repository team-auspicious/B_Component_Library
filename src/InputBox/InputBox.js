import {
  typography_size_1rem,
  outline_none,
  border_2px_solid,
  border_radius_5px,
} from "@heejeong/foundation/src/typography";

const InputBox = (props) => {
  return (
    <input
      style={{
        border: border_2px_solid,
        borderRadius: border_radius_5px,
        outline: outline_none,
        fontSize: typography_size_1rem,
        padding: "10px",
      }}
      type="text"
      value={props.inputText || ""}
      placeholder={props.placeholder || ""}
      onChange={(event) => props.handleChange(event.target.value)}
      autoFocus
    />
  );
};
export default InputBox;
