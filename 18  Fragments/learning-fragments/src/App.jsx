import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import "./styles/style.css";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <center>
        {" "}
        <input
          type="text"
          style={{ border: "5px solid black" }}
          placeholder="enter text here"
          onChange={(event) => console.log(event.target.value)}
        />
      </center>
      <div>Healthy food</div>
      <FoodItems />
    </Container>
  );
}

export default App;
