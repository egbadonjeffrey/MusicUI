import Content from "./Components/Content";
import Downloads from "./Components/Downloads";
import Nav from "./Components/Nav";
import SideNav from "./Components/SideNav";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <div className="left-side">
          <SideNav />
        </div>
        <div className="main-side">
          <Content />
        </div>
        <div className="right-side">
          <Downloads />
        </div>
      </div>
    </>
  );
}

export default App;
