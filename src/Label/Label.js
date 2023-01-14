import {
  basic_primary,
  basic_base,
} from "@heejeong/foundation/src/color-semantic";
import {
  typography_size_middle,
  text_align_center,
  border_2px_solid,
  border_radius_20px,
} from "@heejeong/foundation/src/typography";

const Label = () => {
    return (
      <div
        style={{
          textAlign: text_align_center,
          margin: "100px auto",
          width: "130px",
          border: border_2px_solid,
          background: basic_base,
          borderRadius: border_radius_20px,
        }}
      >
        <label
          style={{ color: basic_primary, fontSize: typography_size_middle }}
        >
          회색 라벨
        </label>
      </div>
    );
};
export default Label;
