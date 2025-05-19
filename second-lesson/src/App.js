import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

const showCategories = true;
function App() {
  const posts = [
    { id: 1, name: "Ahmed", email:"Ahmed@gmail.com" },
    { id: 2, name: "Omer", email:"Omer@gmail.com" },
    { id: 3, name: "Ahmed", email:"Ahmed@gmail.com" },
  ];
   const postsList = posts.map((post) => {
    return <Post key={post.id} name={post.name} email={post.email} />;
  });
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Posts $ Side Menu Container */}
        <div style={{ display: "flex", width: "60%" }}>
          {/* Posts Container */}
          <div style={{ width: "70%" }}>
           {postsList}
          </div>
          {/* End Posts Container  */}
          {/* Side Menu Container */}
          <div style={{ width: "30%" }}>
            <AppSideMenu />
          </div>
          {/* End Side Menu Container */}
        </div>
        {/* End Posts $ Side Menu Container */}
      </div>
    </div>
  );
}
function AppSideMenu() {
  if (showCategories === true) {
    return <SideMenu />;
  }
  return null;
}
export default App;
