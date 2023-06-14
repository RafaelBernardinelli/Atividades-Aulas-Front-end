const Box = ({ fontColor, children }) => {
  return (
    <div
      style={{
        color: fontColor,
        padding: "30px",
        backgroundColor: "#dddd",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {children}
    </div>
  );
};

export default Box;
