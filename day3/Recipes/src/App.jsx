import data from "./data";
import Section from "./Section";

const App = () => {
  return (
    <main className="recipe-page">
      <div className="recipe-grid">
        {data.map((x) => (
          <Section data={x} />
        ))}
      </div>
    </main>
  );
};

export default App;
