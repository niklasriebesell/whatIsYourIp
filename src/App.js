import "./App.css";
import Header from "./components/Header";
import IpFetch from "./components/IpFetch";
import Maps from "./components/Maps";

function App() {
  return (
    <div className="App">
      <Header />
      <IpFetch />
      <Maps />
    </div>
  );
}

export default App;
