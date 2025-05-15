import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" , justifyContent : "center" }}>
        {/* Posts $ Side Menu Container */}
        <div style={{ display: "flex" , width: "60%" }}>
          {/* Posts Container */}
          <div style={{ width: "70%" }}>
            <Post name="Ahmed" email="Ahmed@gmail.com"/>
            <Post name="Omer" email="Omer@gmail.com" />
            <Post name="Ahmed" email="Ahmed@gmail.com"/>
          </div>
          {/* End Posts Container  */}
          {/* Side Menu Container */}
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
          {/* End Side Menu Container */}
        </div>
        {/* End Posts $ Side Menu Container */}
      </div>
    </div>
  );
}

export default App;
