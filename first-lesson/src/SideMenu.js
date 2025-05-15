import TagButton from "./TagButton";
const appStyle = {
  border: "5px solid teal",
  margin: "25px",
};
export default function SideMenu() {
  return (
    <div style={appStyle}>
      <TagButton title="Click">
        <div>
          <span>😊😊😊</span>
        </div>
      </TagButton>
      <TagButton title="Show">
        <div>
          <img style={{width : "100px"}}
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="no img"
          />
        </div>
      </TagButton>
    </div>
  );
}
