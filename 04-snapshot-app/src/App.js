import { useContext } from "react";
import { ImageList } from "./components/Snapshot/ImageList";
import { Search } from "./components/Snapshot/Search";
import { Card, Span } from "./components/UI/UI";
import { SnapshotContext } from "./components/context/snapshot-context";

import "./App.css";

function App() {
  const { images } = useContext(SnapshotContext);

  return (
    <Card className="App">
      <Span className="title">SnapShot</Span>
      <Search />
      <ImageList images={images} />
    </Card>
  );
}

export default App;
