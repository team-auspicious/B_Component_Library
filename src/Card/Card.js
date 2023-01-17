const Card = (props) => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        cursor: "pointer"
      }}
      >
    <div style={{fontWeight: 'bold'}}>{ props.title }</div>
      {props.children}
    </div>
  );
};
export default Card;
