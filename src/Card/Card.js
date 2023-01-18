import React from "react";
import {
  base_color,
  neutral_color,
  primary_color,
  testing_color,
  second_color,
} from "@heejeong/foundation/src/color-semantic";
import {
  text_align_center,
  font_size_middle,
  font_size_large,
} from "@heejeong/foundation/src/typography";
import {
  display_flex,
  direction_column,
} from "@heejeong/foundation/src/layout";

const Card = ({ idx1, status, handleCreateCard, children }) => {
    const statusBgColor = (status) => {
      if (status === "todo") {
        return neutral_color;
      }
      if (status === "working") {
        return primary_color;
      }
      if (status === "test") {
        return testing_color;
      }
      if (status === "done") {
        return second_color;
      }
    };

  return (
    <div
      style={{
        flexGrow: "1",
        alignSelf: "flex-start",
        borderRadius: "25px",
        minHeight: "200px",
        minWidth: "280px",
        margin: "1rem",
      }}
      data-card-category={status}
    >
      <div
        style={{
          textAlign: text_align_center,
          margin: "10px",
          padding: "10px",
          color: "white",
          fontSize: font_size_middle,
          fontWeight: "bold",
          borderRadius: "10px",
          backgroundColor: statusBgColor(status) || "white",
        }}
      >
        {status.toUpperCase()}
      </div>
      <div
        style={{
          borderRadius: "25px",
          minHeight: "100px",
          margin: "10px",
          backgroundColor: base_color,
          boxShadow: "3px 3px 5px rgba(102, 136, 199, 0.1)",
          minHeight: "30px !important",
          margin: "10px",
          textAlign: text_align_center,
          fontSize: font_size_large,
        }}
        onClick={() => handleCreateCard(idx1)}
      >
        +
      </div>
      <section
        style={{
          display: display_flex,
          flexDirection: direction_column,
          justifyContent: "center",
          paddingBottom: "200px",
        }}
      >
        {children}
      </section>
    </div>
  );
};
export default Card;
