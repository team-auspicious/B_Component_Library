import { primary, second } from "@heejeong/foundation/src/color-semantic";
import {
  outline_none,
  border_radius_5px,
  border_none,
} from "@heejeong/foundation/src/typography";

const Button = (props) => {
  return (
    <button
      style={{
        cursor: "pointer",
        borderRadius: border_radius_5px,
        outline: outline_none,
        backgroundColor: second,
        color: primary,
        border: border_none,
        transition: "100ms ease",
        padding: "10px",
      }}
      type="submit"
      onClick={() => props.handleOnClick()}
    >
      {props.name || "버튼"}
    </button>
  );
};
export default Button;
