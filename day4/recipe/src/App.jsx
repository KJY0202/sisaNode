import { DUMMY_DATA } from "./data.js";
import Card from "./Card.jsx";

function App() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
      }}
    >
      {DUMMY_DATA.map((data) => (
        <Card
          key={data.id}
          image={data.image}
          name={data.name}
          difficulty={data.difficulty}
          rating={data.rating}
          reviewCount={data.reviewCount}
        />
      ))}
    </section>
  );
}

export default App;
