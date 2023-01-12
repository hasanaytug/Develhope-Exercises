import logo from "./logo.svg";
import "./App.css";

function App() {
  // Excercise 1 JSX 1
  const hello = "Hello, World";

  // Excercise 2 JSX 2
  const helloName = (name) => <h1>Hello {name}</h1>;

  //// Excercise 3 JSX 5
  const sumTwo = (a, b) => <h2>{a + b}</h2>;
  return (
    <div className="App">
      {/* // Excercise 1 */}
      <h1>{hello}</h1>
      {/* // Excercise 2 */}
      {helloName("Hasan")}
      {/* // Excercise 3 */}
      {sumTwo(2, 5)}
    </div>
  );
}

export default App;
