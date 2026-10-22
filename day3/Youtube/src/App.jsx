import Info from "./info";
import Thumbnail from "./Thumbnail";

const App = () => {
  return (
    <div>
      <Thumbnail
        bg={
          "radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)"
        }
      ></Thumbnail>
      <Info title={"먼작귀"} desc={"잘모르면 개추"} />

      <Info title={"짱구 극장판"} desc={"어른 제국의 역습"} />
      <Info title={"도라에몽 극장판"} desc={"노비타의 어쩌구"} />
    </div>
  );
};

export default App;
