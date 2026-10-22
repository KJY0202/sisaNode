const Text = ({ text, size = "medium", weight = "normal", color = "normal" }) => {
  const css = {
    size: { small: "13px", medium: "14px", large: "20px" },
    weight: { normal: 500, bold: "bold" },
    color: { normal: "#52525b", warn: "#ef4444" },
  };

  return (
    <span
      style={{
        fontSize: css.size[size] ?? css.size.medium,
        fontWeight: css.weight[weight] ?? css.weight.normal,
        color: css.color[color] ?? css.color.normal,
      }}
    >
      {text}
    </span>
  );
};

export default Text;
