import "./App.css";
import Box from "./components/Box";
import Card from "./components/Card";
import Input from "./components/Input";
import ShowNumbers from "./components/ShowNumbers";
import ShowName from "./components/showName";

function App() {
  return (
    <div className="App">
      <Box fontColor="#ccc">
        <Card />
        <Card />
        <Card />
      </Box>
      <Box>
        <ShowName />
        <ShowNumbers />
      </Box>

      <Box>
        <Input />
      </Box>
    </div>
  );
}

export default App;
