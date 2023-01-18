import React from "react";
import {
  base_color
} from "@heejeong/foundation/src/color-semantic";
import {
  font_size_middle,
  font_size_large,
} from "@heejeong/foundation/src/typography";
import { float_right } from "@heejeong/foundation/src/layout";

const CardContents = ({ contents, handleChange, handleDeleteCard }) => {
  return (
    <div
      style={{
        borderRadius: "25px",
        minHeight: "100px",
        margin: "10px",
        backgroundColor: base_color,
        boxShadow: "3px 3px 5px rgba(102, 136, 199, 0.1)",
      }}
    >
      <div
        style={{
          float: float_right,
          paddingRight: "1vw",
          fontSize: font_size_middle,
        }}
        onClick={handleDeleteCard}
      >
        x
      </div>
      <textarea
        rows="3"
        cols="1"
        name="title"
        style={{
          fontSize: font_size_large,
          padding: "1rem",
          width: "100%",
          backgroundColor: "transparent",
          border: "none",
          resize: "none",
          outline: "none"
        }}
        onChange={handleChange}
        autoComplete="false"
        value={contents}
      />
    </div>
  );
};

export default CardContents;