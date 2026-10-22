const Difficulty = (props) => {
  const { difficulty } = props;
  const normalizedDifficulty = String(difficulty).toLowerCase();
  const obj = {
    easy: { text: "쉬움", color: "green" },
    medium: { text: "보통", color: "blue" },
    normal: { text: "보통", color: "blue" },
    hard: { text: "어려움", color: "red" },
  };
  return (
    <div>
      난이도:{" "}
      <span style={{ color: obj[normalizedDifficulty]?.color }}>
        {obj[normalizedDifficulty]?.text || difficulty}
      </span>
    </div>
  );
};

export default Difficulty;
