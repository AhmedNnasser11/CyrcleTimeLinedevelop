import "./App.css";
import CyrcleTimeLine from "./CyrcleTimeLine";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}>
      <CyrcleTimeLine
        relativeContainerClasss="test"
        arrayData={["A", "B", "C"]}
        avatarComponent={({ item }: { item: string }) => (
          <div style={{ backgroundColor: "red" }}>{item}</div>
        )}
        innerCyrcleClasss="testTow"
      />
    </div>
  );
}

export default App;
