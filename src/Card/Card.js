import {display_flex, direction_column} from '@heejeong/foundation/src/layout'
import {
  primary,
  neutral,
} from "@heejeong/foundation/src/color-semantic";
import {
  fontWeight_bold,
  border_radius_10px,
} from "@heejeong/foundation/src/typography";

const Card = (props) => {
  return (
    <div
      style={{
        padding: "10px",
        display: display_flex,
        flexDirection: direction_column,
        gap: "10px",
        backgroundColor: primary,
        borderRadius: border_radius_10px,
        cursor: "pointer",
      }}
    >
      <div style={{ fontWeight: fontWeight_bold, color: neutral }}>
        {props.title}
      </div>
      {props.children}
    </div>
  );
};
export default Card;
