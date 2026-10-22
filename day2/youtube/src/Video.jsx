const Video = ({ children }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "150px",
        border: "solid 1px black",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Video;
