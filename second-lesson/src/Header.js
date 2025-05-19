const appStyle ={
   backgroundColor: "teal",
   color : "white",
   display : "flex",
   justifyContent : "center",
   alignItems : "center",
   boxShadow: "0px 5px 13px black"
}
export default function Header() {
  return (
    <div style={appStyle}>
      <h1>Learn Academy</h1>
    </div>
  );
}
