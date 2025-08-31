import "./App.css";

function App() {
  return (
    <div>
      <Text display="Hello React" />
    </div>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;
