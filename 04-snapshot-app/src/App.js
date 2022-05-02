import { ImageList } from "./components/Snapshot/ImageList";
import { Search } from "./components/Snapshot/Search";
import { Card, Span } from "./components/UI/UI";
import "./App.css";

function App() {
  return (
    <Card className="App">
      <Span className="title">SnapShot</Span>
      <Search />
      <ImageList />
    </Card>
  );
}

export default App;
