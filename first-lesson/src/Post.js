
const appStyle ={
  border : "5px solid teal",
  padding: "15px",
  margin: "25px",
}
export default function Post({name,email}) {
  return (
    <div style={appStyle}>
      <h2>{name}</h2>
      <hr/>
      <p>{email}</p>
    </div>
  );
}
