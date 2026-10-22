import { useState } from "react";
import Video from "./Video";
import { CirclePlay, Heart } from "lucide-react";
import Description from "./Description.jsx";
import Title from "./Title";
import Sub from "./Sub";

const App = () => {
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [liked3, setLiked3] = useState(false);

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <div
        style={{
          width: "600px",
          height: "200px",
          border: "solid 1px black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Video>
          <CirclePlay size={60} style={{ cursor: "pointer" }} />
        </Video>

        <Description>
          <Title num={"First"} />
          <Sub />
        </Description>

        <Heart
          size={60}
          onClick={() => setLiked1(!liked1)}
          style={{
            marginLeft: "40px",
            cursor: "pointer",
            color: liked1 ? "red" : "black",
            fill: liked1 ? "red" : "none",
          }}
        />
      </div>
      <div
        style={{
          width: "600px",
          height: "200px",
          border: "solid 1px black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Video>
          <CirclePlay size={60} style={{ cursor: "pointer" }} />
        </Video>

        <Description>
          <Title num={"Second"} />
          <Sub />
        </Description>

        <Heart
          size={60}
          onClick={() => setLiked2(!liked2)}
          style={{
            marginLeft: "40px",
            cursor: "pointer",
            color: liked2 ? "red" : "black",
            fill: liked2 ? "red" : "none",
          }}
        />
      </div>
      <div
        style={{
          width: "600px",
          height: "200px",
          border: "solid 1px black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Video>
          <CirclePlay size={60} style={{ cursor: "pointer" }} />
        </Video>

        <Description>
          <Title num={"Third"} />
          <Sub />
        </Description>

        <Heart
          size={60}
          onClick={() => setLiked3(!liked3)}
          style={{
            marginLeft: "40px",
            cursor: "pointer",
            color: liked3 ? "red" : "black",
            fill: liked3 ? "red" : "none",
          }}
        />
      </div>
    </div>
  );
};

export default App;
